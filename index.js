const inquirer = require('inquirer');
const db = require('./db/connection');
const consoleTable = require('console.table');
const {viewDepts, addDept} = require('./controllers/dept');
const {viewRoles, addRole} = require('./controllers/role');
const {viewEmployees, addEmployee, updateEmployeeRole} = require('./controllers/emp');

//initial question to prompt an action from the user
const init = async ()=> {
const {choice} = await inquirer.prompt([
    {
        type: 'list',
        name: 'toDo',
        message: 'What would you like to do?',
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update employee role", "done"]
      }
    ])

// switch for each selected choice
    switch(choice) {
      case 'view all departments':
          const [deptRows] = await viewDepts();
          console.log('\n')
          console.table(deptRows);
          init();
          break;

          case 'view all roles':
          const [roleRows] = await viewRoles();
          console.log('\n')
          console.table(roleRows);
          init();
          break;

          case 'view all employees':
          const [empRows] = await viewEmployees();
          console.log('\n')
          console.table(empRows);
          init();
          break;

          case 'add a department':
          const [deptRows] = await addDept();
          console.log('\n')
          console.table(deptRows);
          init();
          break;

          case 'add a role':
          const [roleRows] = await addRole();
          console.log('\n')
          console.table(roleRows);
          init();
          break;

          case 'add an employee':
          const [empRows] = await addEmployee();
          console.log('\n')
          console.table(empRows);
          init();
          break;

          case 'update employee role':
          const [empRows] = await updateEmployeeRole();
          console.log('\n')
          console.table(empRows);
          init();

          case 'done':
          console.log('Done')
          break;
    }
}
    init();




