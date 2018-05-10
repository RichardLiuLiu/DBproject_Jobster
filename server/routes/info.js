const express = require('express');
const router = express.Router();

const infoService = require('../services/infoService');

// find a student by sid
router.get('/students/:sid', (req, res) => {
    const sid = req.params.sid;
    infoService.findStudentById(sid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// find students by keywords
router.post('/students/keywords', (req, res) => {
    const keyword = '% ' + req.body.keyword + ' %';
    infoService.findStudentsByKeyword(keyword).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// find a company by cid
router.get('/companies/:cid', (req, res) => {
    const cid = req.params.cid;
    infoService.findCompanyById(cid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// find companies by keywords
router.post('/companies/keywords', (req, res) => {
    const keyword = '% ' + req.body.keyword + ' %';
    infoService.findCompaniesByKeyword(keyword).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// find a job by jid
router.get('/jobs/:jid', (req, res) => {
    const jid = req.params.jid;
    infoService.findJobById(jid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// find jobs by keywords
router.post('/jobs/keywords', (req, res) => {
    const keyword = '% ' + req.body.keyword + ' %';
    infoService.findJobsByKeyword(keyword).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// update student profile
router.post('/students', (req, res) => {
    const sid = req.body.sid;
    const sname = req.body.sname;
    const university = req.body.university;
    const degree = req.body.degree;
    const major = req.body.major;
    const gpa = req.body.gpa;
    const skill = req.body.skill;
    infoService.updateStudentProfile(sid, sname, university, degree, major, gpa, skill).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// update company profile
router.post('/companies', (req, res) => {
    const cid = req.body.cid;
    const cname = req.body.cname;
    const clocation = req.body.clocation;
    const industry = req.body.industry;
    infoService.updateCompanyProfile(cid, cname, clocation, industry).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// get student resume by sid
router.get('/resumes/:sid', (req, res) => {
    const sid = req.params.sid;
    infoService.getResumeById(sid).then(
        result => {
            res.send(result[0].resume);
        },
        error => res.status(400).send(error));
});

// update student resume
router.post('/resumes/:sid', (req, res) => {
    const sid = req.params.sid;
    const resume = req.body.resume;
    infoService.updateResumeById(sid, resume).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// check if a student is one of the applicants of a company
router.get('/check-applicant/:sid/:cid', (req, res) => {
    const sid = req.params.sid;
    const cid = req.params.cid;
    infoService.checkApplicant(sid, cid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});



module.exports = router;