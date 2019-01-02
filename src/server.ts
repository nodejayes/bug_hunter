import {createServer} from 'acts';

const ADDRESS = 'localhost';
const PORT = 8084;

export class ApplicationServer {
  constructor(path: string, private server = createServer(path, {
    server: {
      address: ADDRESS,
      port: PORT,
      webroot: 'public'
    }
  }, [])) {
  }

  async start() {
    await this.server.start(() => {
      console.info(`Server is running at ${ADDRESS}:${PORT}`);
    });
  }

  async stop() {
    await this.server.shutdownInstances();
  }
}
