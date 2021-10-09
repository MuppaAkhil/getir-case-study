import app from "./app";
import {log} from './utils/logger';

const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || "3000";
const HOST = process.env.HOST || "localhost"; // '0.0.0.0'

export function start() {
  app
    .listen(PORT, HOST, () => {
      process.stdout.write(`Server is listening on ${PORT} (${NODE_ENV})\n`);
      log.info(`Server is listening on ${PORT} (${NODE_ENV})`);
    })
    .on("error", (err) => {
      process.stdout.write(`Error occurred ${err.message}\n`);
      log.fatal(err, `Error occurred ${err.message}`);
      setTimeout(() => process.exit(1), 5000);
    });
}
