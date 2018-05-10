const db = require('../mysqlConnection');

const greet = function(msg) {
    return new Promise((resolve, reject) => {
        resolve('Hello World! ' + msg);
    });
}

const getFriends = function(sid) {
    const sql = `SELECT Student.sid, sname, university, degree, major, skill
                 FROM Friend JOIN Student ON Friend.fid = Student.sid
                 WHERE Friend.sid = ?`;
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

const addFriend = function(sender, receiver) {
    const sql = `INSERT INTO Friend
                 VALUES (?, ?), (?, ?)`;
    return new Promise((resolve, reject) => {
        db.query(sql, [sender, receiver, receiver, sender], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const getInvitations = function(sid) {
    const sql = `SELECT sd, sname, university, istatus
                 FROM Invitation i JOIN Student s ON i.sd = s.sid
                 WHERE rcv = ?`;
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

const sendInvitation = function(sender, receiver) {
    const sql = `INSERT INTO Invitation
                 VALUES (?, ?, NOW(), 'awaiting')`;
    return new Promise((resolve, reject) => {
        db.query(sql, [sender, receiver], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const handleInvitation = function(sender, receiver, status) {
    const sql = `UPDATE Invitation
                 SET istatus = ?
                 WHERE sd = ? AND rcv = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [status, sender, receiver], (err, res) => {
            if (err) {
                reject(err);
            } else {
                if (status === "accepted") {
                    addFriend(sender, receiver).then(
                        result => resolve(result),
                        error => reject(error));
                } else {
                    resolve(res);
                }
            }
        });
    });
}

const getFollowings = function(sid) {
    const sql = `SELECT cid, cname, clocation, industry
                 FROM Following NATURAL JOIN Company
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

const addFollowing = function(sid, cid) {
    const sql = `INSERT INTO Following
                 VALUES (?, ?)`;
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

const deleteFollowing = function(sid, cid) {
    const sql = `DELETE FROM Following
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

const getMessages = function(sender, receiver) {
    const sql = `SELECT sid, fid, content, mtime, mstatus, sname
                 FROM Message NATURAL JOIN Student
                 WHERE (sid = ? AND fid = ?) OR (fid = ? AND sid = ?)
                 ORDER BY mtime DESC`;
    return new Promise((resolve, reject) => {
        db.query(sql, [sender, receiver, sender, receiver], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const sendMessages = function(sender, receiver, content) {
    const sql = `INSERT INTO Message
                 VALUES (?, ?, NOW(), ?, 'unread')`;
    return new Promise((resolve, reject) => {
        db.query(sql, [sender, receiver, content], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const updateMessageStatus = function(sender, receiver, mtime) {
    const sql = `UPDATE Message
                 SET mstatus = 'read'
                 WHERE sid = ? AND fid = ? AND mtime = ?`;
    return new Promise((resolve, reject) => {
        db.query(sql, [sender, receiver, mtime], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

const getNewMessages = function(receiver) {
    const sql = `SELECT sid, content, mtime, mstatus, sname
                 FROM Message NATURAL JOIN Student
                 WHERE fid = ? AND mstatus = 'unread'
                 ORDER BY mtime DESC`;
    return new Promise((resolve, reject) => {
        db.query(sql, [receiver], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}


module.exports = {
    greet,
    getFriends,
    getInvitations,
    sendInvitation,
    handleInvitation,
    getFollowings,
    addFollowing,
    deleteFollowing,
    getMessages,
    sendMessages,
    updateMessageStatus,
    getNewMessages,
};