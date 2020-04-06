// import inquirer prompts
const prompt = require("./prompt.js");
const command = require("./command.js");

let run = true;

// START init function - no args - loops until use ends program
async function init(){

    // print title screen
    console.log(getTitleAscii());

    // START loop
    while (run) {
        
        // call promise and prompt main menu
        await prompt.mainMenu()
        // START main menu promise callback
        .then(function(result){
            console.log(result.mainMenuChoice);
            // START switch choose next action based on main menu choice
            switch (result.mainMenuChoice){

                case "View all departments":
                   command.viewDepartments();
                break;

                case "View all roles":
                    command.viewRoles();
                break;

                case "View all employees":
                    command.viewEmployees();
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
                    command.disconnectSql();
                break;

            }
            // END switch choose next action based on main menu choice

        });
        // END main menu promise callback

    }
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

// start program
init();

