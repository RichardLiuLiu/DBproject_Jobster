const db = require('../mysqlConnection');

const getJobNotifications = function(sid) {
    const sql = `SELECT cid, cname, jid, title, jlocation, posttime, jnstatus, jntime
                 FROM JobNotification NATURAL JOIN Company NATURAL JOIN Job
                 WHERE sid = ?
                 ORDER BY jntime DESC`;
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

const getJobForwards = function(sid) {
    const sql = `SELECT cid, cname, jid, title, jlocation, posttime, jfstatus, s.sid, s.sname, jftime
                 FROM (JobForward jf JOIN Student s ON jf.sid = s.sid) NATURAL JOIN Company NATURAL JOIN Job
                 WHERE jf.fid = ?
                 ORDER BY jftime DESC`;
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

const updateNotificationStatus = function(jid, sid, jntime) {
    const sql = `UPDATE JobNotification
                 SET jnstatus = 'read'
                 WHERE jid = ? AND sid = ? AND jntime = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [jid, sid, jntime], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const updateForwardStatus = function(jid, sender, receiver, jftime) {
    const sql = `UPDATE JobForward
                 SET jfstatus = 'read'
                 WHERE jid = ? AND sid = ? AND fid = ? AND jftime = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [jid, sender, receiver, jftime], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const findJobById = function(jid) {
    const sql = `SELECT *
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
    const sql = `SELECT *
                 FROM Job NATURAL JOIN Company
                 WHERE CONCAT(' ', cname, ' ', title, ' ', desc, ' ', industry, ' ')
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

const applyForJob = function(jid, sid) {
    const sql = `INSERT INTO Application
                 VALUES (?, ?, NOW(), 'undecided')`;
    return new Promise((resolve, reject) => {
        db.query(sql, [jid, sid], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const generateJid = function() {
    const sql = `SELECT COUNT(jid) AS len
                 FROM Job`;
    return new Promise((resolve, reject) => {
        db.query(sql, (err, res) => {
            if (err) {
                reject(err);
            }
            const len = res[0]['len'] + 1;
            if (len < 10) {
                resolve('j000' + len);
            } else if (len < 100) {
                resolve('j00' + len);
            } else if (len < 1000) {
                resolve('j0' + len);
            } else if (len < 10000) {
                resolve('j' + len);
            } else {
                reject("over flow!");
            }
        });
    });
}

const postJob = function(cid, jlocation, title, salary, academicbar, majorbar, desc) {
    const sql = `INSERT INTO Job
                 VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), ?)`;
    return new Promise((resolve, reject) => {
        generateJid().then(jid => {
            console.log(jid);
            db.query(sql, [jid, cid, jlocation, title, salary, academicbar, majorbar, desc], (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({jid: jid});
                }
            });
        });
    });
}

const getJobListByCompany = function(cid) {
    const sql = `SELECT * 
                 FROM Job
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

const getApplicationListByJob = function(jid) {
    const sql = `SELECT * 
                 FROM Application NATURAL JOIN Student
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

const handleApplicationByCompany = function(jid, sid, status) {
    console.log(jid);
    console.log(sid);
    console.log(status);
    const sql = `UPDATE Application
                 SET appstatus = ?
                 WHERE jid = ? AND sid = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [status, jid, sid], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const getApplicationListByStudent = function(sid) {
    const sql = `SELECT sid, jid, title, jlocation, cname, apptime, appstatus
                 FROM Application NATURAL JOIN Job NATURAL JOIN Company
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

const forwardJob = function(jid, sender, receiver) {
    const sql = `INSERT INTO JobForward
                 VALUES (?, ?, ?, NOW(), 'unread')`;
    return new Promise((resolve, reject) => {
        db.query(sql, [jid, sender, receiver], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const getApplication = function(jid, sid) {
    const sql = `SELECT sname, cname, title, appstatus, apptime
                 FROM Application NATURAL JOIN Student NATURAL JOIN Job NATURAL JOIN Company
                 WHERE jid = ? AND sid = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [jid, sid], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const updateJobInfo = function(jid, jlocation, title, salary, academicbar, majorbar, desc) {
    console.log(jid);
    const sql = `Update Job
                 SET jlocation = ?, title = ?, salary = ?, academicbar = ?, majorbar = ?, \`desc\` = ?
                 WHERE jid = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [jlocation, title, salary, academicbar, majorbar, desc, jid], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

// Todo: send job notifications

const sendJobNotification = function(jid, university, degree, major, gpa, skill, keyword) {
    const sql = `INSERT INTO JobNotification (jid, sid, jntime, jnstatus)
                 SELECT ?, sid, NOW(), 'unread'
                 FROM Student
                 WHERE university LIKE ? AND ? LIKE CONCAT('%',degree,'%') AND major LIKE ? AND gpa >= ? AND skill LIKE ? AND resume LIKE ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [jid, university, degree, major, gpa, skill, keyword], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}


module.exports = {
    getJobNotifications,
    getJobForwards,
    updateNotificationStatus,
    updateForwardStatus,
    findJobById,
    findJobsByKeyword,
    applyForJob,
    postJob,
    getApplicationListByJob,
    getApplicationListByStudent,
    getJobListByCompany,
    handleApplicationByCompany,
    forwardJob,
    getApplication,
    updateJobInfo,
    sendJobNotification,
};