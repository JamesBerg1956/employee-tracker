const questions = require("./questions.js")
const inquirer = require("inquirer");

// START promptMainMenu function - prompt for commands
function mainMenu(){

    // START promise to perform async operations
    const promise = new Promise(function(resolve, reject){

        // call inquirer and prompt with main menu questions
        inquirer.prompt(questions.mainMenuQuestions)

        // START main menu prompt callback
        .then(function(mainMenuChoice){

            // save user choice in promise resolve object
            resolve(mainMenuChoice);
            
        });
        // END main menu prompt callback

    });
    // END promise to perform async operations

    // return promise
    return promise;

}
// END promptMainMenu function

// START promptAddDepartment function - prompt for department data
function addDepartment(){

}
// END promptAddDepartment function

// START promptAddRole function - prompt for role data
function addRole(){

}
// END promptAddRole

// START promptAddEmployee function - prompt for employee data
function addEmployee(){

}
// END promptAddEmployee function

// START promptUpdateEmployeeRole function - prompt for update data
function updateEmployeeRole(){

}
// END promptUpdateEmployeeRole function

module.exports = {
    mainMenu: mainMenu,
    addDepartment: addDepartment,
    addRole: addRole,
    addEmployee: addEmployee,
    updateEmployeeRole: updateEmployeeRole
}