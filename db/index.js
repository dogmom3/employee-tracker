const {prompt} = require('inquirer');
const db = require('./db/connection');
const {getAllDepts} = require('./controllers/dept');
const {getAllRoles} = require('./controllers/role');
const {getAllEmps} = require('./controllers/emp');


const init = async ()=> {
const {choice} = await prompt([
    {
        type: 'list',
        name: 'toDo',
        message: 'What would you like to do?',
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update employee role"]
      }
    ])

    switch(choice) {
      case 'View Departments':
          const [deptRows] = await getAllDepts();
          console.log('\n')
          console.log(deptRows);
          console.log() 
          init();
          break;

          case 'View Roles':
          const [roleRows] = await getAllRoles();
          console.log('\n')
          console.log(roleRows);
          console.log() 
          init();
          break;

          case 'View Departments':
          const [empRows] = await getAllemps();
          console.log('\n')
          console.log(empRows);
          console.log() 
          init();
          break;
    }
}

    init();
//           type: 'input',
//           name: 'deptName',
//           message: 'What is the name of the department?',
//       },

//       {
//           type: 'input',
//           name: 'roleName',
//           message: 'What is the name of the role?',
//       },

//       {
//         type: 'input',
//         name: 'roleSalary',
//         message: 'What is the salary of the role?',
//     },

//     {
//         type: 'input',
//         name: 'roleDept',
//         message: 'What department does the role belong to?',
//     },

//     {
//         type: 'input',
//         name: 'roleSalary',
//         message: 'What is the salary of the role?',
//     },
// ]