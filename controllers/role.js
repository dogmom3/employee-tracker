const db = require('../db/connection')
const inquirer = require('inquirer');

//view all roles
const viewRoles = () => {
    const sqlQuery = 'SELECT * FROM role';
    return db.query(sqlQuery)
}

//inserting answers into database
const addRole = async () => {
   const answer = await inquirer.prompt([
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
            message: 'What department id does the role belong to?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('You must enter a department id for this role.');
                    return false;
                }
            }
        }
    ])
        // .then((answer) => {
            roleTitle = answer.roleName
            roleSalary = answer.roleSalary
            roleDept = answer.roleDept
            const sqlQuery = `INSERT INTO role (title, salary, dept_id) VALUES ("${roleTitle}","${roleSalary}","${roleDept}")`;
            return db.query(sqlQuery)
        // })
}

//exporting the role data
module.exports = {
    viewRoles: viewRoles,
    addRole: addRole,
}