var mysql = require("mysql");

// Database credentials
exports.connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Database connection
exports.initDB = (connection) => {
  connection.connect((err) => {
    if (err) throw err;
    console.log("DB Connected!");
  });
};
