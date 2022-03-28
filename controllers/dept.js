const viewDepts = () => {
    const sqlQuery = 'SELECT * FROM depts';
    return db.query(sqlQuery)
}

const addDept = (name) => {
    const sqlQuery = 'INSERT INTO depts {name} VALUES {?}';
    return db.query(sqlQuery, [name])
}

//exporting the department data
module.exports = {
    viewDepts: viewDepts,
    addDept: addDept
}