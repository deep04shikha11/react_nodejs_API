const mysql = require("mysql");
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'emp-test',
});

con.connect((err) => {
    if (err) throw err;
    console.log('DataBase Connected');
})

module.exports = con;