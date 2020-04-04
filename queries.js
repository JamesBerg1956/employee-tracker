// import MySql package
const mysql = require("mysql");

// create object to store connection properties
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

// create mysql connection object
const connection = mysql.createConnection(conn);

// create Sql class, whose functions will perform all sql operations
class Sql {
    constructor(){
    
    }
}

// START connectToDb function - connect to employee_tracker_db
Sql.prototype.connectToDb = function(){
    connection.connect(function (err){
        if(err) throw err;
        console.log("connected as id " + connection.threadId);
    });
};
// END connectToDb function

// START insertDepartment function - insert new row to department table
Sql.prototype.insertDepartment = function(deptartment){
    
    // notify console that insert is occurring
    console.log("Inserting a new department... \n");

    //create query object
    var query = connection.query(

        // define parameterized query
        "INSERT INTO department SET ?", department,

        // callback function for query
        function(err, res){
            // if query errors, throw the error
            if (err) throw err;
            // if query is successfull, notify to console
            console.log(res.affectedRows + "department inserted. \n");
        }

    );

    // notify to console the query used
    console.log(query.sql);

};
// END insertDepartment function

// START insertRole function - insert new row to role table
Sql.prototype.insertRole = function(role){
    // notify console that insert is occurring
    console.log("Inserting a new role... \n");

    //create query object
    var query = connection.query(

        // define parameterized query
        "INSERT INTO role SET ?", role,
        
        // callback function for query
        function(err, res){
            // if query errors, throw the error
            if (err) throw err;
            // if query is successfull, notify to console
            console.log(res.affectedRows + "role inserted. \n");
        }

    );

    // notify to console the query used
    console.log(query.sql);

}
// END insertRole function

// START insertEmployee function - insert new row to employees table

// END insertEmployee function

// START selectDepartment function - view all rows in department table

// END selectDepartment function

// START selectRole function - view all rows in role table

// END selectRole function

// START selectEmployee function - view all employees and related information

// END selectEmployee function

// START setEmployeeRole function - updates role property of a given row in employee table

// END setEmployeeRole function

// export Sql class
module.exports = Sql;