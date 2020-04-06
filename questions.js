// questions for promptMainMenu() function
const mainMenuQuestions = 
[
    {
        type: "list",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a new department", "Add a new role", "Add a new employee", "Update employee role", "End program"],
        name: "mainMenuChoice"
    }
];

// questions for promptAddDepartment() function
const addDepartmentQuestions = [{}];

// questions for promptAddRole() function
const addRoleQuestions = [{}];

// questions for promptAddEmployee() function
const addEmployeeQuestions = [{}];

// questions for promptUpdateEmployeeRole() function
const updateEmployeeRoleQuestions = [{}]

module.exports = {
    mainMenuQuestions: mainMenuQuestions,
    addDepartmentQuestions: addDepartmentQuestions,
    addRoleQuestions: addRoleQuestions,
    addEmployeeQuestions: addEmployeeQuestions,
    updateEmployeeRoleQuestions: updateEmployeeRoleQuestions
}