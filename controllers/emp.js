const getAllEmps = () => {
    const sqlQuery = 'SELECT * FROM emps';
    return db.query(sqlQuery)
}

const addAEmp = (name) => {
    const sqlQuery = 'INSERT INTO emps {name} VALUES {?}';
    return db.query(sqlQuery, [name])
}

module.exports = {}