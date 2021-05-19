var mysql = require("mysql");

// Buat koneksi ke database

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejsrestapi",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql connected");
});

module.exports = conn;
