/* eslint-disable @typescript-eslint/comma-dangle */
// import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
// import { createConnection } from 'typeorm';
import db from './database/connection'
import logging from './config/logging';
import config from './config/config';
import apiRoutes from './route/api';

const NAMESPACE = 'Server';
const app = express();

// const ormConfig = require('./config/ormConfig');

// Logging request
app.use(logger('dev'));

/** Parse the request */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})
// use middleware
app.use(cors());
app.use(helmet());

/** Routes */
app.use('/api/v1', apiRoutes);

/** Error Handling */
app.use((req, res) => {
  const error = new Error('Not Found');
  return res.status(405).json({message: error.message});
});

/** Create the server */
app.listen(config.server.port, () => {
  logging.info(
    NAMESPACE,
    `Server running on ${config.server.hostname}:${config.server.port}`
  );
});
export default app;