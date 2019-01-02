import {ApplicationServer} from './server'
import {join}              from 'path';
import {initStore}     from './models';

const SERVER = new ApplicationServer(join(__dirname, 'server_files'));

initStore(true);

SERVER.start()
  .then()
  .catch(err => {
    console.error(err);
    process.exit(-1);
  });
