const mysql = require('mysql2');

const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'employee_tracker'
});

const connection = connect.promise()

module.exports = connection;