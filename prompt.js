const questions = require("./questions.js")
const inquirer = require("inquirer");
const sql = require("./db.js");

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

    // START promptAddRole promise
    return new Promise(function(resolve, reject){

        // get questions for inquirer prompt
        questions.generateAddRoleQuestions()
        // START generateAddRoleQuestions callback function
        .then(async function(addRoleQuestions){

            // START inquirer prompt
            inquirer.prompt(addRoleQuestions)
            .then(function(addRoleAnswers){

                // resolve answers to prompt to promptAddRole .then
                resolve(addRoleAnswers);

            });
            // END inquirer prompt

        });
        // END generateAddRoleQuestions callback function

    });
    // END promptAddRole promise

}
// END promptAddRole

// START promptAddEmployee function - prompt for employee data
function promptAddEmployee(){

    // START promptAddEmployee promise
    return new Promise(function(resolve, reject){

        // get data set of all employees and send to promise .then
        sql.selectEmployee()
        // START sql.selectEmployee .then
        .then(async function(employees){

            // get questions for the inquirer prompt
            questions.generateAddEmployeeQuestions(employees)
            // START generateAddEmployeeQuestions .then
            .then(async function(addEmployeeQuestions){
                
                // inquirer prompt with generated questions
                inquirer.prompt(addEmployeeQuestions)
                // START inquirer prompt .then
                .then(function(addEmployeeAnswers){

                    // resolve answers to prompt and send to promptAddEmployee().then
                    resolve(addEmployeeAnswers);

                });
                // END inquirer prompt .then

            });
            // END generateAddEmployeeQuestions .then

        });
        // END sql.selectEmployee .then

    });
    // END promptAddEmployee promise

}
// END promptAddEmployee function

// START promptUpdateEmployeeRole function - prompt for update data
function promptUpdateEmployeeRole(){

    // START promptUpdateEmployeeRole promise
    return new Promise(function(resolve, reject){

        // get all employees and send the data set to the .then callback
        sql.selectEmployee()
        // START sql.selectEmployee().then
        .then(async function(employees){

            // get questions for inquirer prompt
            questions.generateUpdateEmployeeRoleQuestions(employees)
            // START generateUpdateEmployeeRoleQuestions().then
            .then(async function(updateEmployeeRoleQuestions){

                // inquirer prompt with generated questions
                inquirer.prompt(updateEmployeeRoleQuestions)
                // START inquirer.prompt().then
                .then(function(updateEmployeeRoleAnswers){

                    // resolve and return prompt answers to promptUpdateEmploeeRole().then
                    resolve([{role_id: updateEmployeeRoleAnswers.role_id},{id: updateEmployeeRoleAnswers.id}]);

                });
                // END inquirer.prompt().then

            });
            // END generateUpdateEmployeeRoleQuestions().then

        });
        // END sql.selectEmployee().then

    });
    // END promptUpdateEmployeeRole promise

}
// END promptUpdateEmployeeRole function

module.exports = {
    mainMenu: mainMenu,
    promptAddDepartment: promptAddDepartment,
    promptAddRole: promptAddRole,
    promptAddEmployee: promptAddEmployee,
    promptUpdateEmployeeRole: promptUpdateEmployeeRole
}