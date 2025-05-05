require('dotenv').config();

module.exports = {
  AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL,
  USER_SERVICE_URL: process.env.USER_SERVICE_URL,
  JOB_SERVICE_URL: process.env.JOB_SERVICE_URL,
  APPLICATION_SERVICE_URL: process.env.APPLICATION_SERVICE_URL,
  PORT: process.env.PORT || 8000
};
