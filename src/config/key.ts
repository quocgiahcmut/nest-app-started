require('dotenv').config();

export default {
  mongoUri: process.env.DB_CONNECTION_STRING,
};
