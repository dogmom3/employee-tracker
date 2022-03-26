const getAllRoles = () => {
    const sqlQuery = 'SELECT * FROM roles';
    return db.query(sqlQuery)
}

const addARole = (name) => {
    const sqlQuery = 'INSERT INTO roles {name} VALUES {?}';
    return db.query(sqlQuery, [name])
}

module.exports = {}