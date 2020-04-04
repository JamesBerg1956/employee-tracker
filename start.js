// import queries package
const Sql = require("./queries.js");
const inquirer = require("inquirer");

// create instance of Sql class
const sql = new Sql();

// connect to employee_tracker_db database
sql.connectToDb();

/*-------------- START QUESTION OBJECT ARRAYS -----------------*/

// questions for promptMainMenu() function
const arrObjMainMenuQuestions = [{}];

// questions for promptAddDepartment() function
const arrObjAddDepartmentQuestions = [{}];

// questions for promptAddRole() function
const arrObjAddRoleQuestions = [{}];

// questions for promptAddEmployee() function
const arrObjAddEmployeeQuestions = [{}];

// questions for promptUpdateEmployeeRole() function
const arrObjUpdateEmployeeRoleQuestions = [{}]

/*-------------- END QUESTION OBJECT ARRAYS -------------------*/


/*---------------- START DATA OBJECTS ARRAYS ------------------*/

// object array of current departments
const arrObjDepartments = [{}];

// object array of current roles joined with departments
const arrObjRoles = [{}];

// object array of current employees joined with roles
const arrObjEmployees = [{}];

/*---------------- END DATA ARRAY OBJECTS ARRAYS ---------------------*/


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

}
// END viewDepartments function

// START viewRoles function - calls sql and renders role data
function viewRoles(){

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


/*-------- START CREATE OBJECT ARRAY FUNCTION ----------*/

// START createDepartmentObjectArray function - create and return
function createDepartmentObjectArray(){

}
// END createDepartmentObjectArray function

// START create createRoleObjectArray function - create and return
function createRoleObjectArray(){

}
// END create createRoleObjectArray function

// START createEmployeeObjectArray function - create and return
function createEmployeeObjectArray(){

}
// END createEmployeeObjectArray function

/*-------- END CREATE OBJECT ARRAY FUNCTION ----------*/