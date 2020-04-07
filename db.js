var connection = require("./connection.js");

// create Sql class, whose functions will perform all sql operations
class Sql {
    constructor(connection){
        this.connection = connection;
    }
}

// START selectDepartment function - no args
Sql.prototype.selectDepartment = function(){ 

    //return query object
    return this.connection.query("SELECT id, name FROM department");

}
// END selectDepartment function

// START selectRole function - no args
Sql.prototype.selectRole = function(){

    //return query object
    return this.connection.query("SELECT title, salary, department.name as department FROM role INNER JOIN department ON role.department_id = department.id");

}
// END selectRole function

// START selectEmployee function - no args
Sql.prototype.selectEmployee = function(){

    //return query object
    return this.connection.query("SELECT emp.first_name, emp.last_name, rl.title as 'role', CONCAT(mng.first_name, ' ', mng.last_name) as 'Manager' FROM employee as emp INNER JOIN role as rl ON emp.role_id = rl.id INNER JOIN employee as mng ON emp.manager_id = mng.id");
  
}
// END selectEmployee function

// START insertDepartment function - [{name:string}]
Sql.prototype.insertDepartment = function(department){
     
    //create query object
    return this.connection.query("INSERT INTO department SET ?", department);

};
// END insertDepartment function

// START insertRole function - [{title:string,salary:int,department_id: number}]
Sql.prototype.insertRole = function(role){

    //create query object
    return this.connection.query("INSERT INTO role SET ?", role);

}
// END insertRole function

// START insertEmployee function - [{first_name:string,last_name:string,role_id:int,manager_id:int}]
Sql.prototype.insertEmployee = function(employee){
    
    //create query object
    this.connection.query("INSERT INTO employee SET ?", employee);

}
// END insertEmployee function

// START setEmployeeRole function - [{role_id: int}, {id: int}]
Sql.prototype.setEmployeeRole = function(RoleIdId){

    // create query object
    this.connection.query("UPDATE employee SET ? WHERE ?", RoleIdId);

}
// END setEmployeeRole function

// export Sql class
module.exports = new Sql(connection);