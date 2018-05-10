const express = require('express');
const router = express.Router();

const connectionService = require('../services/connectionService');

// HelloWorld API.
router.get('/greetings/:msg', (req, res) => {
    const msg = req.params.msg
    connectionService.greet(msg)
        .then(greeting => res.json(greeting));
});

// get friend list
router.get('/friends/:sid', (req, res) => {
    const sid = req.params.sid;
    connectionService.getFriends(sid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// get invitation list
router.get('/invitations/:sid', (req, res) => {
    const sid = req.params.sid;
    connectionService.getInvitations(sid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// send or handle invitations
router.post('/invitations', (req, res) => {
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const status = req.body.status;
    if (status === "accepted" || status === "declined") {
        connectionService.handleInvitation(sender, receiver, status).then(
            result => res.json(result),
            error => res.status(400).send(error));
    } else {
        connectionService.sendInvitation(sender, receiver).then(
            result => res.json(result),
            error => res.status(400).send(error));
    }
});

// get following list
router.get('/followings/:sid', (req, res) => {
    const sid = req.params.sid;
    connectionService.getFollowings(sid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// add new following
router.post('/followings', (req, res) => {
    const sid = req.body.sid;
    const cid = req.body.cid;
    connectionService.addFollowing(sid, cid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// delete a following
router.patch('/followings', (req, res) => {
    const sid = req.body.sid;
    const cid = req.body.cid;
    connectionService.deleteFollowing(sid, cid).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// get messages between two students
router.get('/messages/:sender/:receiver', (req, res) => {
    const sender = req.params.sender;
    const receiver = req.params.receiver;
    connectionService.getMessages(sender, receiver).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// get new messages
router.get('/new-messages/:receiver', (req, res) => {
    const receiver = req.params.receiver;
    connectionService.getNewMessages(receiver).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// update the status of a message
router.patch('/messages', (req, res) => {
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const mtime = req.body.mtime;
    connectionService.updateMessageStatus(sender, receiver, mtime).then(
        result => res.json(result),
        error => res.status(400).send(error));
});

// send a new message
router.post('/messages', (req, res) => {
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const content = req.body.content;
    connectionService.sendMessages(sender, receiver, content).then(
        result => res.json(result),
        error => res.status(400).send(error));
});



module.exports = router;