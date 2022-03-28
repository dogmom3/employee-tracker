const db = require('./db/connection')
const inquirer = require('inquirer');

//view all data fron employees
const viewEmployees = () => {
    const sqlQuery = 'SELECT * FROM employees';
    return db.query(sqlQuery)
}

//inserting answers into the database
const addEmployee = async () => {
    await inquirer.prompt(
        {
            type: 'input',
            name: 'empFirstName',
            message: 'What is the first name of the employee?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('You must enter a first name for this employee.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'empLastName',
            message: 'What is the last name of the employee?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('You must enter a last name for this employee.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'empRole',
            message: 'What is the role of the employee?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('You must enter a role for this employee.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'empManager',
            message: 'Who is the manager for the employee?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('You must enter a manager for this employee.');
                    return false;
                }
            }
        },
    )
        .then((answer) => {
            firstName = answer.empFirstName
            lastName = answer.empLastName
            role = answer.empRole
            manager = answer.empManager
            const sqlQuery = `INSERT INTO employees {first_name, last_name, role_id, manager_id} VALUES ("${firstName}","${lastName}","${role}","${manager}")`;
            db.query(sqlQuery)
        })
}

//updating employee role
const updateEmployeeRole = async () => {
    await inquirer.prompt(
        {
            type: 'list',
            name: 'employee',
            choices: [''],
            message: 'Select an employee to update.'
        },
        {
            type: 'list',
            name: 'updateEmployee',
            choices: [''],
            message: 'Select a role for the employee.',
        }
    )
}

//exporting the employee data
module.exports = {
    viewEmployees: viewEmployees,
    addEmployee: addEmployee,
    updateEmployeeRole: updateEmployeeRole
}