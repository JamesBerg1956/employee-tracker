// import queries package
const Sql = require("./queries.js");
const inquirer = require("inquirer");

// create instance of Sql class
const sql = new Sql();

// connect to employee_tracker_db database
sql.connectToDb();

/*-------------- START QUESTION OBJECT ARRAYS -----------------*/

// questions for promptMainMenu() function
const arrObjMainMenuQuestions = 
[
    {
        type: "list",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a new department", "Add a new role", "Add a new employee", "Update employee role"],
        name: "mainMenuChoice"
    }
];

// questions for promptAddDepartment() function
const arrObjAddDepartmentQuestions = [{}];

// questions for promptAddRole() function
const arrObjAddRoleQuestions = [{}];

// questions for promptAddEmployee() function
const arrObjAddEmployeeQuestions = [{}];

// questions for promptUpdateEmployeeRole() function
const arrObjUpdateEmployeeRoleQuestions = [{}]

/*-------------- END QUESTION OBJECT ARRAYS -------------------*/


/*------------ START INQUIRER FUNCTIONS ------------------*/

promptMainMenu();

// START promptMainMenu function - prompt for commands
function promptMainMenu(){

    console.log(getTitleAscii());

}
// END promptMainMenu function

// START promptAddDepartment function - prompt for department data
function promptAddDepartment(){

}
// END promptAddDepartment function

// START promptAddRole function - prompt for role data
function promptAddRole(){

}
// END promptAddRole

// START promptAddEmployee function - prompt for employee data
function promptAddEmployee(){

}
// END promptAddEmployee function

// START promptUpdateEmployeeRole function - prompt for update data
function promptUpdateEmployeeRole(){

}
// END promptUpdateEmployeeRole function

// START getTitleAscii function - returns EMPLOYEE MANAGER ASCII art
function getTitleAscii() {
    
    const strTitleAscii = 
    `
     ______                 _                         __  __                                   
    |  ____|               | |                       |  \/  |                                  
    | |__   _ __ ___  _ __ | | ___  _   _  ___  ___  | \  / | __ _ _ __   __ _  __ _  ___ _ __ 
    |  __| | _  _  |  _  \ |/ _    | | | |/ _ \/ _ \ | |\/| |/ _  |  _   / _  |/ _  |/ _ \ '__|
    | |____| | | | | | |_) | | (_) | |_| |  __/  __/ | |  | | (_| | | | | (_| | (_| |  __/ |   
    |______|_| |_| |_| .__/|_|\___/ \__, |\___|\___| |_|  |_|\__,_|_| |_|\__,_|\__, |\___|_|   
                     | |             __/ |                                      __/ |          
                     |_|            |___/                                      |___/           `

    return strTitleAscii;

}
// END getTitleAscii function

/*------------ END INQUIRER FUNCTIONS ------------------*/


/*------------- START FETCH SQL FUNCTIONS ----------------*/

//////// START VIEW FUNCTIONS /////////

// START viewDepartments function - no args
function viewDepartments(){
    
    // get promise to call sql
    var selectDepartmentsPromise = sql.selectDepartment();

    // call promise
    selectDepartmentsPromise

    // START promise callback
    .then(function(result){

        // print sql result to console as a table
        console.table(result);

    });
    // END promise callback

}
// END viewDepartments function


// START viewRoles function - no args
function viewRoles(){

    // get promise to call sql
    var selectRolesPromise = sql.selectRole();

    // call promise
    selectRolesPromise

    // START promise callback
    .then(function(result){

        // print sql result to console as a table
        console.table(result);

    });
    // END promise callback

}
// END viewRoles function

// START viewEmployees function - no args
function viewEmployees(){

    // get promise to call sql
    var selectEmployeePromise = sql.selectEmployee();

    // call promise
    selectEmployeePromise

    // START promise callback
    .then(function(result){

        // print sql result to console as a table
        console.table(result);

    });
    // END promise callback

}
// END viewEmployees function

//////// END VIEW FUNCTIONS /////////

/////// START ADD FUNCTIONS ///////////

// START addDepartment function - [{name:string}]
function addDepartment(newDepartment){
    
    // get promise to call sql
    var addDepartmentPromise = sql.insertDepartment(newDepartment);
            
    // call promise
    addDepartmentPromise
    // START promise callback
    .then(function(result){
        
        // print result from promise - 1 department inserted
        console.log(result);

        // print updated table to console
        viewDepartments();

    });
    // END promise callback
    
}
// END addDepartment function

// START addRole function - [{title:string,salary:int,department_id: number}]
function addRole(newRole){

    // get promise to call sql
    const addRolePromise = sql.insertRole(newRole);

    //call promise
    addRolePromise
    // START promise callback
    .then(function (result){

        // print result from promise - 1 role inserted
        console.log(result);

        // print updated table to console
        viewRoles();

    });
    // END promise callback

}
// END addRole function

// START addEmployee function - [{first_name:string,last_name:string,role_id:int,manager_id:int}]
function addEmployee(newEmployee){

    // get promise to call sql
    const addEmployeePromise = sql.insertEmployee(newEmployee);

    // call promise
    addEmployeePromise
    // START promise callback
    .then(function (result){

        // print result from promise - 1 role inserted
        console.log(result);

        // print updated table to console
        viewEmployees();

    });
    // END promise callback

}
// END addEmployee function

/////// END ADD FUNCTIONS ///////////

////// START UPDATE FUNCTIONS ////////

// START updateEmployeeRole function - [{role_id: int}, {id: int}]
function updateEmployeeRole(RoleIdId){

    // get promise to call sql
    const setEmployeeRolePromise = sql.setEmployeeRole();

    // call promise
    setEmployeeRolePromise
    // START promise callback
    .then(function (result){

        // print result from promise - 1 employee updated
        console.log(result);

        // print updated table to console
        viewEmployees();

    });
    // END promise callback

}
// END updateEmployeeRole function

////// END UPDATE FUNCTIONS ////////

/*------------- END FETCH SQL FUNCTIONS ----------------*/

