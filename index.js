const inquirer = require('inquirer');
const db = require('./db/connection');
const { viewDepts, addDept, deleteDept } = require('./controllers/dept');
const { viewRoles, addRole, deleteRole } = require('./controllers/role');
const { viewEmployees, addEmployee, updateEmployeeRole, deleteEmployee } = require('./controllers/emp');

//initial question to prompt an action from the user
const init = async () => {
    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update employee role", "delete a department", "delete a role", "delete an employee", "done"]
        }
    ])

    // switch for each selected choice
    switch (choice) {
        case 'view all departments':
            let [deptRows] = await viewDepts();
            console.table(deptRows);
            init();
            break;

        case 'view all roles':
            let [roleRows] = await viewRoles();
            console.table(roleRows);
            init();
            break;

        case 'view all employees':
            let [empRows] = await viewEmployees();
            console.table(empRows);
            init();
            break;

        case 'add a department':
            await addDept();
            console.log('Department added successfully.');
            init();
            break;

        case 'add a role':
            await addRole();
            console.log('Role added successfully.');
            init();
            break;

        case 'add an employee':
            await addEmployee();
            console.log('Employee added successfully.');
            init();
            break;

        case 'update employee role':
            await updateEmployeeRole();
            console.log('The employees role has been updated.');
            init();
            break;

        case 'delete a department':
            await deleteDept();
            console.log('The department has been deleted.');
            init();
            break;

        case 'delete a role':
            await deleteRole();
            console.log('The role has been deleted.');
            init();
            break;

        case 'delete an employee':
            await deleteEmployee();
            console.log('The employee has been deleted.');
            init();
            break;

        case 'done':
            console.log('Done')
            break;
    }
}
init();