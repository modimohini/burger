var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: your port_num,
  user: "your_ID",
  password: "your_PWD",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;