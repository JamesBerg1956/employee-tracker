// import queries package
const Sql = require("./queries.js");

// create instance of Sql class
const sql = new Sql();

// connect to employee_tracker_db database
sql.connectToDb();