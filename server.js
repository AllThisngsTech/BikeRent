/* eslint-disable no-undef */
const http = require('http');
const app = require('./app');
/**
 * Get port from environment and store in Express.
 */
const port = process.env.port || 3000;
const server = http.createServer(app);
server.listen(port);