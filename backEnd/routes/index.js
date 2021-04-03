const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const con = require('../database/con');

router.get('/', (req, res, next) => {
    console.log('working');
    res.send('working with nodemon');
});

router.post("/api/company/register", (req, res, next) => {
    const companyName = req.body.companyName;
    const email = req.body.email;
    const Duplicate = `SELECT * FROM company WHERE email= ? `;
    con.query(Duplicate, [email], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            return res.status(403).json({ message: 'Email already in use!' });
        }
        else {
            const phone = req.body.phone;
            const password = req.body.password;
            const hashPassword = crypto.createHash('sha1').update(password).digest('hex');
            const sqlInsert = `INSERT INTO company (name, email, phone, password) VALUES (?, ?, ?, ?);`;
            con.query(sqlInsert, [companyName, email, phone, hashPassword], (err, result) => {
                if (err) throw err;
                if (result.affectedRows > 0) {
                    req.session.email = email;
                    res.status(200).json({
                        "company": {
                            'id': result.insertId,
                            'name':companyName,
                            'email':email
                        },
                        "message": "Registration Done. Please Login",
                    });
                }
                else {
                    res.json({ 'message': 'error in registration' });
                }
            });
        }
    });
});

router.post("/api/company/login", (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const hashPassword = crypto.createHash('sha1').update(password).digest('hex');
    const sqlSelect = `SELECT * FROM company WHERE email= ? and password=?`;
    con.query(sqlSelect, [email, hashPassword], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            req.session.email = email;
            res.send('successfully login');
        }
        else {
            res.send('Incorrect Email or Password');
        }
    });
    // res.send('working with nodemon');
});

router.post("/api/employee/add", (req, res, next) => {
    const empName = req.body.empName;
    const age = req.body.age;
    const salary = req.body.salary;
    const phone = req.body.phone;
    const company_id = req.body.company_id;
    const sqlInsert1 = `INSERT INTO employee (name, age, salary, phonenumber, company_id) VALUES (?, ?, ?, ?, ?);`;
    con.query(sqlInsert1, [empName, age, salary, phone, company_id], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.send('Employee added successfully Done');
        }
        else {
            res.send('error in adding employee');
        }
    });
});

router.get("/api/employee/listall", (req, res, next) => {
    const company_id = req.query.company_id;
    const sqlSelect2 = `SELECT * FROM employee WHERE company_id= ?`;
    con.query(sqlSelect2, [company_id], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result);
        }
        else {
            res.send('error in fetching employee list');
        }
    });
});

router.get("/api/company/logout", (req, res, next) => {
    if (req.session.email) {
        req.session.destroy();
    }
    res.send('successfully logout');
})

module.exports = router;
