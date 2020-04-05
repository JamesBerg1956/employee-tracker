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
    
    // connect to employee_tracker database
    connection.connect(function (err){

        // if sql errors, throw the error
        if(err) throw err;

        // notify console that connection is established
        console.log("connected as id " + connection.threadId);

    });

};
// END connectToDb function

// START insertDepartment function - insert new row to department table
Sql.prototype.insertDepartment = function(department){
     
    // START promise to perform async operations
    var promise = new Promise(function(resolve, reject){

        // notify console that insert is occurring
        console.log("Inserting a new department... \n");

        //create query object
        var query = connection.query(

        // define parameterized query
        "INSERT INTO department SET ?", department,

        // START callback function for query
        function(err, res){

            // if query errors, throw the error
            if (err) throw err;

            // if query is successfull, notify to console
            resolve(res.affectedRows + " department inserted. \n");

        });
        // END callback function for query

    });
    // END promise to perform async operations

    // return promise to perform async operations
    return promise;

};
// END insertDepartment function

// START insertRole function - insert new row to role table
Sql.prototype.insertRole = function(role){

    // START promise to perform async operations
    var promise = new Promise(function(resolve, reject){

        // notify console that insert is occurring
        console.log("Inserting a new role... \n");

        //create query object
        var query = connection.query(

        // define parameterized query
        "INSERT INTO role SET ?", role,
        
        // START callback function for query
        function(err, res){

            // if query errors, throw the error
            if (err) throw err;

            // if query is successfull, notify to console
            resolve(res.affectedRows + " role inserted. \n");

        });
        // END callback function for query

    });
    // END promise to perform async operations

    // return promise to perform async operations
    return promise;

}
// END insertRole function

// START insertEmployee function - insert new row to employees table
Sql.prototype.insertEmployee = function(employee){
    
    // START promise to perform async operations
    var promise = new Promise(function(resolve, reject){

        // notify console that insert is occurring
        console.log("Inserting a new employee... \n");

        //create query object
        var query = connection.query(

        // define parameterized query
        "INSERT INTO employee SET ?", employee,
        
        // START callback function for query
        function(err, res){

            // if query errors, throw the error
            if (err) throw err;

            // if query is successfull, notify to console
            resolve(res.affectedRows + " employee inserted.\n");

        });
        // END callback function for query

    });
    // END promise to perform async operations

    // return promise to perform async operations
    return promise;

}
// END insertEmployee function

// START setEmployeeRole function - updates role property of a given row in employee table
// TODO: promisify
Sql.prototype.setEmployeeRole = function(updatedEmployee){

    // notify console that select is occurring
    console.log("Updating employee... \n");

    // create query object
    var query = connection.query(

    // define query ?  ? = [{role_id: x}, {id: y}]
    "UPDATE employee SET ? WHERE ?", updatedEmployee,

    // query callback function
    function(err, res){

        // if sql errors, throw error
        if(err) throw err;

        // notify terminal that update was a success
        console.log(res.affectedRows + " employees updated.\n")

    });

}
// END setEmployeeRole function


// START selectDepartment function - view all rows in department table
Sql.prototype.selectDepartment = function(){

    // notify console that select is occurring
    console.log("Selecting all departments... \n");

    //create query object
    var query = connection.query(
      
    // define query
    "SELECT name FROM department", 
    
    // callback function for query
    function(err, res){
        // if query errors, throw the error
        if (err) throw err;
        console.table(res);
    });

}
// END selectDepartment function

// START selectRole function - view all rows in role table
Sql.prototype.selectRole = function(){

    // notify console that select is occurring
    console.log("Selecting all roles... \n");

    //create query object
    var query = connection.query(
      
    // define query
    "SELECT title, salary, department.name as department FROM role INNER JOIN department ON role.department_id = department.id", 
    
    // callback function for query
    function(err, res){
        // if query errors, throw the error
        if (err) throw err;

        // display table
        console.table(res);
    });

}
// END selectRole function

// START selectEmployee function - view all employees and related information
Sql.prototype.selectEmployee = function(){

    // notify console that select is occurring
    console.log("Selecting all employees... \n");

    //create query object
    var query = connection.query(
      
    // define query
    "SELECT emp.first_name, emp.last_name, rl.title as 'role', CONCAT(mng.first_name, ' ', mng.last_name) as 'Manager' FROM employee as emp INNER JOIN role as rl ON emp.role_id = rl.id INNER JOIN employee as mng ON emp.manager_id = mng.id", 
    
    // callback function for query
    function(err, res){
        // if query errors, throw the error
        if (err) throw err;

        // display table
        console.table(res);
    });
    
}
// END selectEmployee function

// export Sql class
module.exports = Sql;