const sql = require("./db.js");

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
const addDepartmentQuestions = 
[
    {
        type: "input",
        message: "Enter the name of the new department",
        name: "departmentName"
    }
];

// START generateAddRoleQuestions
function generateAddRoleQuestions (departments){
    
    return new Promise(function(resolve, reject){

        sql.selectDepartment()
        .then(function(departments){
            
            const addRoleQuestions = [];

            addRoleQuestions.push(
                {
                    type: "input",
                    message: "Enter the name of the new role",
                    name: "title"
                }
            );

            addRoleQuestions.push(
                {
                    type: "input",
                    message: "Enter the salary of the role",
                    name: "salary"
                }
            );

            const departmentNames = [];
            const departmentIds = [];

            for (let i = 0; i < departments.length; i++) {
                
                const dept = departments[i];
                departmentNames.push(dept.name);
                departmentIds.push(dept.id);

            }

            addRoleQuestions.push(
                {
                    type: "list",
                    message: "Select which department the role is associated with",
                    choices: departmentNames,
                    filter: function(val){
                        return departmentIds[departmentNames.indexOf(val)];
                    },
                    name: "department_id"
                }
            );

            resolve(addRoleQuestions);

        });
        
    });

}

// END generateAddRoleQuestions

// questions for promptAddEmployee() function
const addEmployeeQuestions = [{}];

// questions for promptUpdateEmployeeRole() function
const updateEmployeeRoleQuestions = [{}]

module.exports = {
    mainMenuQuestions: mainMenuQuestions,
    addDepartmentQuestions: addDepartmentQuestions,
    addEmployeeQuestions: addEmployeeQuestions,
    updateEmployeeRoleQuestions: updateEmployeeRoleQuestions,
    generateAddRoleQuestions: generateAddRoleQuestions
}