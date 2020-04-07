const questions = require("./questions.js")
const inquirer = require("inquirer");

// START promptMainMenu function - prompt for commands
function mainMenu(){

    // START promise to perform async operations
    return new Promise(function(resolve, reject){

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

}
// END promptMainMenu function

// START promptAddDepartment function - prompt for department data
function promptAddDepartment(){

    // START promise to perform async operations
    return new Promise(function(resolve, reject){
        
        // call inquirer and prompt with main menu questions
        inquirer.prompt(questions.addDepartmentQuestions)

        // START main menu prompt callback
        .then(function(departmentName){
            resolve(departmentName);
        });
        // END main menu prompt callback

    });
    // END promise to perform async operations

}
// END promptAddDepartment function

// START promptAddRole function - prompt for role data
function promptAddRole(){

    return new Promise(function(resolve, reject){

        questions.generateAddRoleQuestions()
        .then(async function(addRoleQuestions){

            inquirer.prompt(addRoleQuestions)
            .then(function(addRoleAnswers){
                resolve(addRoleAnswers);
            });

        });

    });

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

module.exports = {
    mainMenu: mainMenu,
    promptAddDepartment: promptAddDepartment,
    promptAddRole: promptAddRole,
    promptAddEmployee: promptAddEmployee,
    promptUpdateEmployeeRole: promptUpdateEmployeeRole
}