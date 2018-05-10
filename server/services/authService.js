const jwt = require('jsonwebtoken');

const db = require('../mysqlConnection');

const studentLogin = function(sid, password) {
    const sql = `SELECT COUNT(*) AS cnt
                 FROM Student
                 WHERE sid = ? AND password = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [sid, password], (err, res) => {
            if (err) {
                reject(err);
            } else {
                const count = res[0]['cnt'];               
                if (count !== 1) {
                    resolve({
                        error: "Invalid User ID or Password!"
                    });
                } else {
                    // Create a token string
                    const payload = {
                        sub: sid
                    };           
                    const token = jwt.sign(payload, "I am secret!");
                    resolve({
                        token: token,
                        sid: sid
                    });
                }
            }
        });
    });
}

const companyLogin = function(cid, password) {
    const sql = `SELECT COUNT(*) AS cnt
                 FROM Company
                 WHERE cid = ? AND password = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [cid, password], (err, res) => {
            if (err) {
                reject(err);
            } else {
                const count = res[0]['cnt'];                
                if (count !== 1) {
                    resolve({
                        error: "Invalid User ID or Password!"
                    });
                } else {
                    // Create a token string
                    const payload = {
                        sub: cid
                    };           
                    const token = jwt.sign(payload, "I am secret!");
                    resolve({
                        token: token,
                        cid: cid
                    });
                }
            }
        });
    });
}


const generateSid = function() {
    const sql = `SELECT COUNT(sid) AS len
                 FROM Student`;
    return new Promise((resolve, reject) => {
        db.query(sql, (err, res) => {
            if (err) {
                reject(err);
            }
            const len = res[0]['len'] + 1;
            if (len < 10) {
                resolve('s000' + len);
            } else if (len < 100) {
                resolve('s00' + len);
            } else if (len < 1000) {
                resolve('s0' + len);
            } else if (len < 10000) {
                resolve('s' + len);
            } else {
                reject("over flow!");
            }
        });
    });
}

const addStudent = function(sname, password) { 
    const sql = `INSERT INTO Student (sid, sname, password)
                 VALUES (?, ?, ?)`;
    return new Promise((resolve, reject) => {
        generateSid().then(sid => {
            console.log(sid);
            db.query(sql, [sid, sname, password], (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({sid: sid});
                }
            });
        });       
    });
}

const generateCid = function() {
    const sql = `SELECT COUNT(cid) AS len
                 FROM Company`;
    return new Promise((resolve, reject) => {
        db.query(sql, (err, res) => {
            if (err) {
                reject(err);
            }
            const len = res[0]['len'] + 1;
            if (len < 10) {
                resolve('c000' + len);
            } else if (len < 100) {
                resolve('c00' + len);
            } else if (len < 1000) {
                resolve('c0' + len);
            } else if (len < 10000) {
                resolve('c' + len);
            } else {
                reject("over flow!");
            }
        });
    });
}

const addCompany = function(cname, password) { 
    const sql = `INSERT INTO Company (cid, cname, password)
                 VALUES (?, ?, ?)`;
    return new Promise((resolve, reject) => {
        generateCid().then(cid => {
            console.log(cid);
            db.query(sql, [cid, cname, password], (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({cid: cid});
                }
            });
        });       
    });
}

module.exports = {
    addStudent,
    addCompany,
    studentLogin,
    companyLogin,
};