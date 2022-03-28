const viewRoles = () => {
    const sqlQuery = 'SELECT * FROM roles';
    return db.query(sqlQuery)
}

const addRoleName = (roleName) => {
    const sqlQuery = 'INSERT INTO roles {name} VALUES {?}';
    return db.query(sqlQuery, [roleName])
}

const addRoleSalary = (roleSalary) => {
    const sqlQuery = 'INSERT INTO roles {salary} VALUES {?}';
    return db.query(sqlQuery, [roleSalary])
}

const addRoleDept = (roleDept) => {
    const sqlQuery = 'INSERT INTO roles {department} VALUES {?}';
    return db.query(sqlQuery, [roleDept])
}

//exporting the role data
module.exports = {
    viewRoles: viewRoles,
    addRoleName: addRoleName,
    addRoleSalary:  addRoleSalary,
    addRoleDept: addRoleDept
}