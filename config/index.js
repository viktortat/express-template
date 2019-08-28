/*
  Purpose:
    - This is where we will store configurations that change by environment
    - Example: Log level, db connection strings, etc
*/

const config = {
  app: {
    port: 8080,
  },
  logger: {
    logLevel: 'info',
  },
};

module.exports = config;