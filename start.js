// import queries package
const sql = require("./db.js");
// import inquirer prompts
const prompt = require("./prompt.js");

let run = true;


/*------------ START INQUIRER FUNCTIONS ------------------*/

// START init function - no args - loops until use ends program
function init(){

    // print title screen
    console.log(getTitleAscii());

    // START loop
    //while (run) {
        
        // call promise and prompt main menu
        prompt.mainMenu()
        // START main menu promise callback
        .then(function(result){
            console.log(result.mainMenuChoice);
            // START switch choose next action based on main menu choice
            switch (result.mainMenuChoice){

                case "View all departments":
                    console.log("Selected View all departments");
                break;

                case "View all roles":
                    console.log("Selected View all roles");
                break;

                case "View all employees":
                    console.log("Selected View all employees");
                break;

                case "Add a new department":
                    console.log("Selected Add a new department");
                break;

                case "Add a new role":
                    console.log("Selected Add a new role");
                break;

                case "Add a new employee":
                    console.log("Selected Add a new employee");
                break;

                case "Update employee role":
                    console.log("Selected Update employee role");
                break;

                case "End program":
                    // set run to false
                    run = false;
                    // disconnect from sql
                    sql.connection.end();
                break;

            }
            // END switch choose next action based on main menu choice

        });
        // END main menu promise callback

    //}
    // END loop

}
// END init function

// START getTitleAscii function - returns EMPLOYEE MANAGER ASCII art
function getTitleAscii() {  
    const strTitleAscii = 
    `
     ______                 _                         __  __                                   
    |  ____|               | |                       |  \\/  |                                  
    | |__   _ __ ___  _ __ | | ___  _   _  ___  ___  | \\  / | __ _ _ __   __ _  __ _  ___ _ __ 
    |  __| | _  _  |  _  \\ |/ _    | | | |/ _ \\/ _ \\ | |\\/| |/ _  |  _   / _  |/ _  |/ _ \\ '__|
    | |____| | | | | | |_) | | (_) | |_| |  __/  __/ | |  | | (_| | | | | (_| | (_| |  __/ |   
    |______|_| |_| |_| .__/|_|\\___/ \\__, |\\___|\\___| |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|   
                     | |             __/ |                                      __/ |          
                     |_|            |___/                                      |___/           `
    return strTitleAscii;
}
// END getTitleAscii function


/*------------- START FETCH SQL FUNCTIONS ----------------*/

//////// START VIEW FUNCTIONS /////////

// START viewDepartments function - no args
function viewDepartments(){
    
    // get promise to call sql
    const selectDepartmentsPromise = sql.selectDepartment();

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
    const selectRolesPromise = sql.selectRole();

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
    const selectEmployeePromise = sql.selectEmployee();

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
    const addDepartmentPromise = sql.insertDepartment(newDepartment);
            
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

// start program
init();

