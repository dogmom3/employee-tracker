const inquirer = require('inquirer');
const db = require('./db/connection');
const viewDepts  = require('./controllers/dept');
const viewRoles = require('./controllers/role');
const viewEmployees = require('./controllers/emp');

//initial question to prompt an action from the user
const toDo = [
    {
        type: 'list',
        name: 'toDo',
        message: 'What would you like to do?',
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update employee role"]
    }
]

//if user chooses to view departments


//if user chooses to view roles


//if user chooses to view employees


//if user chooses to add dept 
const deptPrompt = [
    {
        type: 'input',
        name: 'deptName',
        message: 'What is the name of the department?',
    }
]

//if user chooses to add role
const rolePrompt = [
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
    },
]

//if user chooses to add an employee 
const employeePrompt = [
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
]

//if user chooses to update the employee role
const updateEmployeeRole = [
    {
        type: 'input',
        name: 'updateEmployee',
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
]

//function to begin series of questions
function init() {
    inquirer
      .prompt(toDo)
    //   .then((answers) => {
        // employees.push(new Manager(answers.managerName, answers.employeeID, answers.emailAddress, answers.officeNumber))
        // console.log('answers', employees)
        // askEmployeeType();
    //   })
      .catch((error) => {
        console.log(error)
      })
  };

  //function call
init();



// const init = async ()=> {
// const {choice} = await prompt([
//     {
//         type: 'list',
//         name: 'toDo',
//         message: 'What would you like to do?',
//         choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update employee role"]
//       }
//     ])

//     switch(choice) {
//       case 'View Departments':
//           //async call to return all departments from db
//           const [deptRows] = await getAllDepts();
//           console.log('\n')
//           console.table(deptRows);
//           console.log()
//           // ask user main menu questions
//           init();
//           break;

//           case 'View Roles':
//           const [roleRows] = await getAllRoles();
//           console.log('\n')
//           console.table(roleRows);
//           console.log()
//           init();
//           break;

//           case 'View Departments':
//           const [empRows] = await getAllemps();
//           console.log('\n')
//           console.table(empRows);
//           console.log()
//           init();
//           break;
//     }
// }

//     init();