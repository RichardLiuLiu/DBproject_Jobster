const express = require('express');
const router = express.Router();

const jobService = require('../services/jobService');

// get job notifications from companies.
router.get('/job-notifications/:sid', (req, res) => {
    const sid = req.params.sid;
    jobService.getJobNotifications(sid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// get job forwards from friends.
router.get('/job-forwards/:sid', (req, res) => {
    const sid = req.params.sid;
    jobService.getJobForwards(sid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// apply for a job
router.post('/applications', (req, res) => {
    const jid = req.body.jid;
    const sid = req.body.sid;
    jobService.applyForJob(jid, sid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// post a new job
router.post('/jobs', (req, res) => {    
    const cid = req.body.cid;
    const jlocation = req.body.jlocation;
    const title = req.body.title;
    const salary = req.body.salary;
    const academicbar = req.body.academicbar;
    const majorbar = req.body.majorbar;
    const desc = req.body.desc;
    jobService.postJob(cid, jlocation, title, salary, academicbar, majorbar, desc).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// get all jobs posted by a company
router.get('/jobs-of-company/:cid', (req, res) => {
    const cid = req.params.cid;
    jobService.getJobListByCompany(cid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// get all applications of a job
router.get('/applications-of-job/:jid', (req, res) => {
    const jid = req.params.jid;
    jobService.getApplicationListByJob(jid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});


// get all applications by a student
router.get('/applications-of-student/:sid', (req, res) => {
    const sid = req.params.sid;
    jobService.getApplicationListByStudent(sid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// get an application detail
router.get('/applications/:jid/:sid', (req, res) => {
    const jid = req.params.jid;
    const sid = req.params.sid;
    jobService.getApplication(jid, sid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// make a decision for a application
router.patch('/applications', (req, res) => {
    const jid = req.body.jid;
    const sid = req.body.sid;
    const status = req.body.status;
    jobService.handleApplicationByCompany(jid, sid, status).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// forward a job
router.post('/job-forwards', (req, res) => {
    const jid = req.body.jid;
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    jobService.forwardJob(jid, sender, receiver).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// update the status of a forward
router.patch('/job-forwards', (req, res) => {
    const jid = req.body.jid;
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const jftime = req.body.jftime;
    jobService.updateForwardStatus(jid, sender, receiver, jftime).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// update the status of a notification
router.patch('/job-notifications', (req, res) => {
    const jid = req.body.jid;
    const sid = req.body.sid;
    const jntime = req.body.jntime;
    jobService.updateNotificationStatus(jid, sid, jntime).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// update a job infomation
router.patch('/jobs', (req, res) => {
    const jid = req.body.jid;
    const jlocation = req.body.jlocation;
    const title = req.body.title;
    const salary = req.body.salary;
    const academicbar = req.body.academicbar;
    const majorbar = req.body.majorbar;
    const desc = req.body.desc;
    jobService.updateJobInfo(jid, jlocation, title, salary, academicbar, majorbar, desc).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// push job notifications by filtering
router.post('/job-notifications', (req, res) => {
    const jid = req.body.jid;
    const university = '%' + req.body.university + '%';
    const degree = req.body.degree;
    const major = '%' + req.body.major + '%';
    const gpa = req.body.gpa;
    const skill = '%' + req.body.skill + '%';
    const keyword = '%' + req.body.keyword + '%';
    jobService.sendJobNotification(jid, university, degree, major, gpa, skill, keyword).then(
        result => res.json(result),
        error => res.status(400).send(error));
});


module.exports = router;