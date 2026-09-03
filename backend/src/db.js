const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
});

pool
  .getConnection()
  .then((connection) => {
    console.log(`MySQL connected — ${process.env.DB_NAME}@${process.env.DB_HOST}:${process.env.DB_PORT || 3306}`);
    connection.release();
  })
  .catch((error) => {
    console.error("MySQL connection failed:", error.message);
  });

module.exports = pool;
