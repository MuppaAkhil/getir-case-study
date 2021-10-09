import mongoose from "mongoose";
import { config } from "../config";
import {log} from '../utils/logger';

const options = {
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Create the database connection
mongoose
  .connect(config.MONGODBURI, options)
  .then(() => {
    log.info('Mongoose connection done');
  })
  .catch((e) => {
    log.info(`Mongoose connection error: ${e.message}`);
  });

/* CONNECTION EVENTS
   When successfully connected
*/
mongoose.connection.on('connected', () => {
    log.info('Mongoose default connection open');
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
    log.error(`Mongoose default connection error: ${err}`);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
    log.info('Mongoose default connection disconnected');
});

