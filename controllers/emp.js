const viewEmployees = () => {
    const sqlQuery = 'SELECT * FROM employees';
    return db.query(sqlQuery)
}

const addEmpFirstName = (empFirstName) => {
    const sqlQuery = 'INSERT INTO employees {firstName} VALUES {?}';
    return db.query(sqlQuery, [empFirstName])
}

const addEmpLastName = (empLastName) => {
    const sqlQuery = 'INSERT INTO employees {lastName} VALUES {?}';
    return db.query(sqlQuery, [empLastName])
}

const addEmpRole = (empRole) => {
    const sqlQuery = 'INSERT INTO employees {role} VALUES {?}';
    return db.query(sqlQuery, [empRole])
}

const addEmpManager = (empManager) => {
    const sqlQuery = 'INSERT INTO employees {manager} VALUES {?}';
    return db.query(sqlQuery, [empManager])
}

//exporting the employee data
module.exports = {
    viewEmployees: viewEmployees,
    addEmpFirstName: addEmpFirstName,
    addEmpLastName: addEmpLastName,
    addEmpRole: addEmpRole,
    addEmpManager: addEmpManager
}