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
function generateAddRoleQuestions(){
    
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


// START generateAddEmployeeQuestions
    function generateAddEmployeeQuestions(employees){

        return new Promise(function(resolve, reject){

            sql.selectRole()
            .then(function(roles){
                
                const addEmployeeQuestions = [];

                addEmployeeQuestions.push(
                    {
                        type: "input",
                        message: "Enter the first name of the new employee",
                        name: "first_name"
                    }
                );

                addEmployeeQuestions.push(
                    {
                        type: "input",
                        message: "Enter the last name of the new employee",
                        name: "last_name"
                    }
                );

                const roleTitles = [];
                const roleIds = [];

                for (let i = 0; i < roles.length; i++) {
                
                    const role = roles[i];
                    roleTitles.push(role.title);
                    roleIds.push(role.id);
    
                }

                addEmployeeQuestions.push(
                    {
                        type: "list",
                        message: "Select which role the employee is associated with",
                        choices: roleTitles,
                        filter: function(val){
                            return roleIds[roleTitles.indexOf(val)];
                        },
                        name: "role_id"
                    }
                );

                const employeeNames = [];
                const employeeIds = [];

                for (let i = 0; i < employees.length; i++) {
                    
                    const employee = employees[i];
                    employeeNames.push(employee.name);
                    employeeIds.push(employee.id);

                }

                addEmployeeQuestions.push(
                    {
                        type: "list",
                        message: "Select the manager of the new employee",
                        choices: employeeNames,
                        filter: function(val){
                            return employeeIds[employeeNames.indexOf(val)];
                        },
                        name: "manager_id"
                    }
                );

                resolve(addEmployeeQuestions);

            });

        });

    }
// END generateAddEmployeeQuestions

// questions for promptUpdateEmployeeRole() function
const updateEmployeeRoleQuestions = [{}]

module.exports = {
    mainMenuQuestions: mainMenuQuestions,
    addDepartmentQuestions: addDepartmentQuestions,
    generateAddEmployeeQuestions: generateAddEmployeeQuestions,
    updateEmployeeRoleQuestions: updateEmployeeRoleQuestions,
    generateAddRoleQuestions: generateAddRoleQuestions
}