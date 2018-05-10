const db = require('../mysqlConnection');

const findStudentById = function(sid) {
    const sql = `SELECT *
                 FROM Student
                 WHERE sid = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [sid], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const findStudentsByKeyword = function(keyword) {
    const sql = `SELECT *
                 FROM Student
                 WHERE CONCAT(' ', sname, ' ', university, ' ', degree, ' ', major, ' ', skill, ' ', resume, ' ')
                    LIKE ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [keyword], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const findCompanyById = function(cid) {
    const sql = `SELECT *
                 FROM Company
                 WHERE cid = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [cid], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const findCompaniesByKeyword = function(keyword) {
    const sql = `SELECT *
                 FROM Company
                 WHERE CONCAT(' ', cname, ' ', clocation, ' ', industry, ' ')
                    LIKE ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [keyword], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const findJobById = function(jid) {
    const sql = `SELECT jid, cid, cname, jlocation, title, salary, academicbar, majorbar, posttime, \`desc\`
                 FROM Job NATURAL JOIN Company
                 WHERE jid = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [jid], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const findJobsByKeyword = function(keyword) {
    const sql = `SELECT jid, title, jlocation, cname, salary, posttime
                 FROM Job NATURAL JOIN Company
                 WHERE CONCAT(' ', cname, ' ', title, ' ', jlocation, ' ', \`desc\`, ' ')
                    LIKE ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [keyword], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const updateStudentProfile = function(sid, sname, university, degree, major, gpa, skill) {
    const sql = `UPDATE Student
                 SET sname = ?, university = ?, degree = ?, major = ?, gpa = ?, skill = ?
                 WHERE sid = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [sname, university, degree, major, gpa, skill, sid], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });   
}

const updateCompanyProfile = function(cid, cname, clocation, industry) {
    const sql = `UPDATE Company
                 SET cname = ?, clocation = ?, industry = ?
                 WHERE cid = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [cname, clocation, industry, cid], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });   
}

const getResumeById = function(sid) {
    const sql = `SELECT resume
                 FROM Student
                 WHERE sid = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [sid], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const updateResumeById = function(sid, resume) {
    const sql = `UPDATE Student
                 SET resume = ?
                 WHERE sid = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [resume, sid], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const checkApplicant = function(sid, cid) {
    const sql = `SELECT COUNT(*) AS cnt
                 FROM Application NATURAL JOIN Job
                 WHERE sid = ? AND cid = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [sid, cid], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}


module.exports = {
    findStudentById,
    findStudentsByKeyword,
    findCompanyById,
    findCompaniesByKeyword,
    findJobById,
    findJobsByKeyword,
    updateStudentProfile,
    updateCompanyProfile,
    getResumeById,
    updateResumeById,
    checkApplicant,
};