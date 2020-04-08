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

// START generateAddRoleQuestions function
function generateAddRoleQuestions(){
    
    // START generateAddRoleQuestions() promise
    return new Promise(function(resolve, reject){

        // get all departments and send data to .then callback
        sql.selectDepartment()
        // START sql.selectDepartment().then
        .then(function(departments){
            
            // declare employe array to store questions
            const addRoleQuestions = [];

            // push question to array asking for name of the new role
            addRoleQuestions.push(
                {
                    type: "input",
                    message: "Enter the name of the new role",
                    name: "title"
                }
            );

            // push question to array asking for salary of the new role
            addRoleQuestions.push(
                {
                    type: "input",
                    message: "Enter the salary of the role",
                    name: "salary"
                }
            );

            // declare empty arrays to store department name and id info
            const departmentNames = [];
            const departmentIds = [];

            // START loop through departments object array
            for (let i = 0; i < departments.length; i++) {
                
                // declare variable for current department
                const dept = departments[i];
                // push current dept name to respective array
                departmentNames.push(dept.name);
                // push current dept id to respective array
                departmentIds.push(dept.id);

            }
            // END loop through departments object array

            // push question to array asking which department the role is associated with
            addRoleQuestions.push(
                {
                    type: "list",
                    message: "Select which department the role is associated with",
                    choices: departmentNames,
                    // actual values returned will be the department id
                    filter: function(val){
                        return departmentIds[departmentNames.indexOf(val)];
                    },
                    name: "department_id"
                }
            );

            // resolve and return role questions to generateAddRoleQuestions().then
            resolve(addRoleQuestions);

        });
        // START sql.selectDepartment().then
        
    });
    // START generateAddRoleQuestions() promise

}
// END generateAddRoleQuestion function

// START generateAddEmployeeQuestions
    function generateAddEmployeeQuestions(employees){

        // START generateAddEmployeeQuestions promise
        return new Promise(function(resolve, reject){

            // get all roles and send data set to .then callback
            sql.selectRole()
            // START sql.selectRole().then
            .then(function(roles){
                
                // declare array to store questions
                const addEmployeeQuestions = [];

                // add question to array asking for first name of the new employee
                addEmployeeQuestions.push(
                    {
                        type: "input",
                        message: "Enter the first name of the new employee",
                        name: "first_name"
                    }
                );

                // add question to array asking for last nanme of the new employee
                addEmployeeQuestions.push(
                    {
                        type: "input",
                        message: "Enter the last name of the new employee",
                        name: "last_name"
                    }
                );

                // declare empty arrays to store role titles and ids
                const roleTitles = [];
                const roleIds = [];

                // START loop through roles object array
                for (let i = 0; i < roles.length; i++) {
                
                    // declare var to store current role
                    const role = roles[i];
                    // push current role title to respective array
                    roleTitles.push(role.title);
                    // push current role title to respective array
                    roleIds.push(role.id);
    
                }
                // END loop through roles object array

                // push questions to array asking which role the employee is associated with
                addEmployeeQuestions.push(
                    {
                        type: "list",
                        message: "Select which role the employee is associated with",
                        choices: roleTitles,
                        // actual values returned will be role_id
                        filter: function(val){
                            return roleIds[roleTitles.indexOf(val)];
                        },
                        name: "role_id"
                    }
                );

                // declare empty arrays to store employee names and ids
                const employeeNames = [];
                const employeeIds = [];

                // START loop through employees object array
                for (let i = 0; i < employees.length; i++) {
                    
                    // declare var to store current employee
                    const employee = employees[i];
                    // push current employee name to respective array
                    employeeNames.push(employee.name);
                    // push current employee id to respective array
                    employeeIds.push(employee.id);

                }
                // END loop through employees object array

                // push question to array asking who the manager of the employe is
                addEmployeeQuestions.push(
                    {
                        type: "list",
                        message: "Select the manager of the new employee",
                        choices: employeeNames,
                        // actual value returned is id
                        filter: function(val){
                            return employeeIds[employeeNames.indexOf(val)];
                        },
                        name: "manager_id"
                    }
                );

                // resolve and return questions to generateAddEmployeeQuestions.then
                resolve(addEmployeeQuestions);

            });
            // END sql.selectRole().then

        });
        // END generateAddEmployeeQuestions promise

    }
// END generateAddEmployeeQuestions


// START generateUpdateEmployeeRoleQuestions
function generateUpdateEmployeeRoleQuestions(employees){

    // START generateUpdateEmployeeRoleQuestions promise
    return new Promise(function(resolve, reject){

        // declare empty array to store questions
        const updateEmployeeRoleQuestions = [];

        // get all roles from sql
        sql.selectRole()
        // START sql.selectRole().then
        .then(function(roles){

            // create blank arrays to store titles and ids
            const roleTitles = [];
            const roleIds = [];

            // START loop through roles object array
            for (let i = 0; i < roles.length; i++) {
            
                // declare var for current role
                const role = roles[i];
                // push current role title to respective array
                roleTitles.push(role.title);
                // push current role id to respective array
                roleIds.push(role.id);

            }
            // END loop through roles object array

            // START push question that asks which role to update too
            updateEmployeeRoleQuestions.push(
                {
                    type: "list",
                    message: "Select which role the employee should be update to",
                    choices: roleTitles,
                    // actual values returned is id
                    filter: function(val){
                        return roleIds[roleTitles.indexOf(val)];
                    },
                    name: "role_id"
                }
            );
            // END push question that asks which role to update too

            // declare empty arrays to store employee names and ids
            const employeeNames = [];
            const employeeIds = [];

            // START loop through employees array
            for (let i = 0; i < employees.length; i++) {
                
                // declare var to store current employee
                const employee = employees[i];
                // push current employee name to respective array
                employeeNames.push(employee.name);
                // push current employee id to respective array
                employeeIds.push(employee.id);

            }
            // END loop through employees array

            // push question to array asking which employe should be update
            updateEmployeeRoleQuestions.push(
                {
                    type: "list",
                    message: "Select which employee whose role you would like to update",
                    choices: employeeNames,
                    // actual value returned is id
                    filter: function(val){
                        return employeeIds[employeeNames.indexOf(val)];
                    },
                    name: "id"
                }
            );

            // resolve and send questions to generateUpdateEmployeeRoleQuestions.then
            resolve(updateEmployeeRoleQuestions);

        });
        // END sql.selectRole().then

    });
    // END generateUpdateEmployeeRoleQuestions promise

}
// END generateUpdateEmployeeRoleQuestions

// export objects and functions
module.exports = {
    mainMenuQuestions: mainMenuQuestions,
    addDepartmentQuestions: addDepartmentQuestions,
    generateAddEmployeeQuestions: generateAddEmployeeQuestions,
    generateUpdateEmployeeRoleQuestions: generateUpdateEmployeeRoleQuestions,
    generateAddRoleQuestions: generateAddRoleQuestions
}