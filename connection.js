// import MySql package
const mysql = require("mysql");
const util = require("util");

// create object to store connection properties
var connection = mysql.createConnection({
    // set host to localhost
    host: "localhost",
    // set username to root
    user: "root",
    // set password
    password: "a;2>:MIo",
    // set default database
    database: "employee_tracker_db"
});

// establish connection to sql
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

// promisify all instances of connection.query
connection.query = util.promisify(connection.query);

// export connection
module.exports = connection;