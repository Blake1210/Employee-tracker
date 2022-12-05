const db = require("../db/connection");
const cTable = require('console.table');
const inquirer = require("inquirer");

const startInquirer = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "toDo",
            message: "What would yo like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role", "Update an employee role",
                "Update an employee's manager",
                "View employees by manager",
                "View employees by department",
                "Remove a department",
                "Remove a role",
                "Remove an employee",
                "Exit"
            ]
        }
    ])
}