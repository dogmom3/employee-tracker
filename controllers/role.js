const db = require('../db/connection')
const inquirer = require('inquirer');

//view all roles
const viewRoles = () => {
    const sqlQuery = 'SELECT * FROM role';
    return db.query(sqlQuery)
}

//inserting answers into database
const addRole = async () => {
    await inquirer.prompt(
        {
            type: 'input',
            name: 'roleName',
            message: 'What is the name of the role?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('You must enter a name for this role.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the salary of the role?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('You must enter a salary for this role.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'roleDept',
            message: 'What department does the role belong to?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('You must enter a department for this role.');
                    return false;
                }
            }
        }
    )
        .then((answer) => {
            name = answer.roleName
            salary = answer.roleSalary
            dept = answer.roleDept
            const sqlQuery = `INSERT INTO roles (name, salary, department_id) VALUES ("${name}","${salary}","${dept}")`;
            db.query(sqlQuery)
        })
}

//exporting the role data
module.exports = {
    viewRoles: viewRoles,
    addRole: addRole,
}