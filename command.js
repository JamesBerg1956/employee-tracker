// import queries package
const sql = require("./db.js");
const cTable = require("console.table");

// START disconnectSql function - no args
function disconnectSql(){
    sql.connection.end();
}
// END disconnectSql function - no args

// START viewDepartments function - no args
function viewDepartments(){

    // call sql
    sql.selectDepartment()
    // START promise callback
    .then(function(result){

        // print sql result to console as a table
        console.log("\n\nViewing all departments ...\n");
        console.table(result);

    });
    // END promise callback

}
// END viewDepartments function

// START viewRoles function - no args
function viewRoles(){

    // call promise
    sql.selectRole()
    // START promise callback
    .then(function(result){

        // print sql result to console as a table
        console.log("\n\nViewing all roles ...\n");
        console.table(result);

    });
    // END promise callback

}
// END viewRoles function

// START viewEmployees function - no args
function viewEmployees(){

    // call promise
    sql.selectEmployee()
    // START promise callback
    .then(function(result){

        // print sql result to console as a table
        console.log("\n\nViewing all employees ...\n");
        console.table(result);

    });
    // END promise callback

}
// END viewEmployees function

// START addDepartment function - [{name:string}]
function addDepartment(newDepartment){
    
    // call promise
    sql.insertDepartment(newDepartment)
    // START promise callback
    .then(function(result){
        
        // print result from promise - 1 department inserted
        console.log("\n\n1 department inserted ...\n");

        // print updated table to console
        viewDepartments();

    });
    // END promise callback
    
}
// END addDepartment function

// START addRole function - [{title:string,salary:int,department_id: number}]
function addRole(newRole){

    //call promise
    sql.insertRole(newRole)
    // START promise callback
    .then(function (result){

        // print result from promise - 1 role inserted
        console.log("\n\n1 role inserted ...\n");

        // print updated table to console
        viewRoles();

    });
    // END promise callback

}
// END addRole function

// START addEmployee function - [{first_name:string,last_name:string,role_id:int,manager_id:int}]
function addEmployee(newEmployee){

    // call promise
    sql.insertEmployee(newEmployee)
    // START promise callback
    .then(function (result){

        // print result from promise - 1 employee inserted
        console.log("\n\n1 employee inserted ...\n");

        // print updated table to console
        viewEmployees();

    });
    // END promise callback

}
// END addEmployee function

// START updateEmployeeRole function - [{role_id: int}, {id: int}]
function updateEmployeeRole(RoleIdId){

    // call promise
    sql.setEmployeeRole()
    // START promise callback
    .then(function (result){

        // print result from promise - 1 employee updated
        console.log("\n\n1 employee updated ...\n");

        // print updated table to console
        viewEmployees();

    });
    // END promise callback

}
// END updateEmployeeRole function

module.exports = {
    disconnectSql: disconnectSql,
    viewDepartments: viewDepartments,
    viewRoles: viewRoles,
    viewEmployees: viewEmployees,
    addDepartment: addDepartment,
    addRole: addRole,
    addEmployee: addEmployee,
    updateEmployeeRole: updateEmployeeRole
}
