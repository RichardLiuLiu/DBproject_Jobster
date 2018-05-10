const express = require('express');
const router = express.Router();

const authService = require('../services/authService');

// student login
router.post('/student-login', (req, res) => {
    const sid = req.body.sid;
    const password = req.body.password;
    authService.studentLogin(sid, password).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// sign up a student
router.post('/student-signup', (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    authService.addStudent(name, password).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// company login
router.post('/company-login', (req, res) => {
    const cid = req.body.cid;
    const password = req.body.password;
    authService.companyLogin(cid, password).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// sign up a company
router.post('/company-signup', (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    authService.addCompany(name, password).then(
        result => res.json(result),
        error => res.status(400).send(error));
});


module.exports = router;