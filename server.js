import "./config/env.js";
import validateEnv from "./config/validate.js";
validateEnv();
import express from 'express';
import config from './config/config.js';

const app = express();

const NODE_ENV = config.env;
const PORT = config.port;
const CLIENT_URL = config.clientUrl;
console.log(`Running in ${NODE_ENV} mode`);
console.log(`Client URL: ${CLIENT_URL}`);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});