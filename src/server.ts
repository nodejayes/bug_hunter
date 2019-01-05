import {createServer}   from 'acts';
import {TokenGenerator} from './utils/token.generator';

const ADDRESS = 'localhost';
const PORT = 8084;
const ALLOWED_FILE_EXTENSIONS = [
  'webpage',
  '.woff', '.woff2', '.ico', '.ttf', '.svg', '.eot',
];

export class ApplicationServer {
  constructor(path: string,
              private server = createServer(path, {
                server: {
                  address: ADDRESS,
                  port: PORT,
                  webroot: 'public',
                  allowedExtensions: ALLOWED_FILE_EXTENSIONS
                }
              }, []),
              private tokenGenerator = new TokenGenerator()) {
  }

  async start() {
    this.server.setAuthentication(this.authenticate.bind(this));
    await this.server.start(() => {
      console.info(`Server is running at ${ADDRESS}:${PORT}`);
    });
  }

  async stop() {
    await this.server.shutdownInstances();
  }

  private async authenticate(req, res, next) {
    // only protect api Route
    if (!req.originalUrl.startsWith('/api')) {
      next();
      return;
    }

    const TOKEN = req.headers.bughuntertoken;
    // Request a Login are allowed for everyone
    if (!TOKEN && req.originalUrl.startsWith('/api/login/request')) {
      next();
      return;
    } else if (TOKEN) {
      req.tokenInfo = this.tokenGenerator.verify(TOKEN);
      req.hasRight = (right: string): boolean => {
        if (!req.tokenInfo || !req.tokenInfo.user.Group || req.tokenInfo.user.Group.Rights.length < 1) {
          return false;
        }
        return !!req.tokenInfo.user.Group.Rights.filter(r => r.Title === right)[0];
      };
      req.isGroup = (groupId: number): boolean => {
        return req.tokenInfo && req.tokenInfo.user && req.tokenInfo.user.Group ? req.tokenInfo.user.Group.Id === groupId : false;
      };
      next();
      return;
    }
    res.statusCode = 403;
    res.end('');
  }
}
