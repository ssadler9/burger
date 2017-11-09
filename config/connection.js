// require mysql  
// create a connection the the database burgers_db
var mysql = require("mysql");

var connection;
  if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
      connection = mysql.createConnection({
      port: 3306,
      host: "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "hzxzwkwngkjscmie",
      password: "fhbhxob8621mtthr",
      database: "jyotb5k4zx65jp4m"
    });
  };

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// exports connection
module.exports = connection;