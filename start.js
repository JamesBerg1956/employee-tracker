// import queries package
const Sql = require("./queries.js");

// create instance of Sql class
const sql = new Sql();

// connect to employee_tracker_db database
sql.connectToDb();

sql.insertEmployee({first_name: "test fname", last_name: "test lname", role_id: 1, manager_id: 3});