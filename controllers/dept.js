const db = require('../db/connection')
const inquirer = require('inquirer');

//view all the data from departments
const viewDepts = () => {
    const sqlQuery = 'SELECT * FROM department';
    return db.query(sqlQuery)
}

//adding a department into the database
const addDept = async () => {
    await inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'What is the name of the department?'
        }
    ])
        .then((answer) => {
            const sqlQuery = 'INSERT INTO department (name) VALUES (?)';
             db.query(sqlQuery, answer.deptName)
        })
}

//exporting the department data
module.exports = {
    viewDepts: viewDepts,
    addDept: addDept
}