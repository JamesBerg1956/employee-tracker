// import MySql package
const mysql = require("mysql");

const conn = {
    // set host to localhost
    host: "localhost",
    // set username to root
    user: "root",
    // set password
    password: "a;2>:MIo",
    // set default database
    database: "employee_tracker_db"
};

const connection = mysql.createConnection(conn);

// create Sql class, whose functions will perform all sql operations
class Sql {
    constructor(){
    
    }
}

// function to connect to sql
Sql.prototype.connectToDb = function(){
    connection.connect(function (err){
        if(err) throw err;
        console.log("connected as id " + connection.threadId);
    });
};

module.exports = Sql;