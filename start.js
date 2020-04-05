// import queries package
const Sql = require("./queries.js");
const inquirer = require("inquirer");

// create instance of Sql class
const sql = new Sql();

// connect to employee_tracker_db database
sql.connectToDb();

/*-------------- START QUESTION OBJECT ARRAYS -----------------*/

// questions for promptMainMenu() function
let arrObjMainMenuQuestions = [{}];

// questions for promptAddDepartment() function
let arrObjAddDepartmentQuestions = [{}];

// questions for promptAddRole() function
let arrObjAddRoleQuestions = [{}];

// questions for promptAddEmployee() function
let arrObjAddEmployeeQuestions = [{}];

// questions for promptUpdateEmployeeRole() function
let arrObjUpdateEmployeeRoleQuestions = [{}]

/*-------------- END QUESTION OBJECT ARRAYS -------------------*/


/*------------ START INQUIRER FUNCTIONS ------------------*/

// START promptMainMenu function - prompt for commands
async function promptMainMenu(){

}
// END promptMainMenu function

// START promptAddDepartment function - prompt for department data
async function promptAddDepartment(){

}
// END promptAddDepartment function

// START promptAddRole function - prompt for role data
async function promptAddRole(){

}
// END promptAddRole

// START promptAddEmployee function - prompt for employee data
async function promptAddEmployee(){

}
// END promptAddEmployee function

// START promptUpdateEmployeeRole function - prompt for update data
async function promptUpdateEmployeeRole(){

}
// END promptUpdateEmployeeRole function

// START getTitleAscii function - returns EMPLOYEE MANAGER ASCII art
function getTitleAscii() {
    
}
// END getTitleAscii function

/*------------ END INQUIRER FUNCTIONS ------------------*/


/*------------- START FETCH SQL FUNCTIONS ----------------*/

//////// START VIEW FUNCTIONS /////////

// START viewDepartments function - calls sql and renders department data
function viewDepartments(){
    // call sql and get department data
    sql.selectDepartment();
}
// END viewDepartments function


// START viewRoles function - calls sql and renders role data
function viewRoles(){
    sql.selectRole();
}
// END viewRoles function

// START viewEmployees function - calls sql and renders employee data
function viewEmployees(){

}
// END viewEmployees function

//////// END VIEW FUNCTIONS /////////

/////// START ADD FUNCTIONS ///////////

// START addDepartment function - calls sql and calls viewDepartments()
function addDepartment(newDepartment){

}
// END addDepartment function

// START addRole function - calls sql and calls viewRoles()
function addRole(newRole){

}
// END addRole function

// START addEmployee function - calls sql and calls viewEmployees()
function addEmployee(newEmployee){

}
// END addEmployee function

/////// END ADD FUNCTIONS ///////////

////// START UPDATE FUNCTIONS ////////

// START updateEmployeeRole function - calls sql and calls viewEmployees()
function updateEmployeeRole(newRole, employee_id){


}
// END updateEmployeeRole function

////// END UPDATE FUNCTIONS ////////

/*------------- END FETCH SQL FUNCTIONS ----------------*/

