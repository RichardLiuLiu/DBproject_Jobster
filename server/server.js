const express = require('express');
const app = express();

const path = require('path');
const http = require('http');

const bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
})); 

const auth = require('./routes/auth');
const connection = require('./routes/connection');
const info = require('./routes/info');
const job = require('./routes/job');

app.use('/s/api/v1', auth);
app.use('/s/api/v1', connection);
app.use('/s/api/v1', info);
app.use('/s/api/v1', job);

app.use('/c/api/v1', auth);
app.use('/c/api/v1', connection);
app.use('/c/api/v1', info);
app.use('/c/api/v1', job);

app.use('/s', express.static(path.join(__dirname, '../public')));
app.use('/c', express.static(path.join(__dirname, '../public_employer')));

const server = http.createServer(app);
server.listen(3000);
server.on('listening', onListening);

function onListening() {
    console.log('App listening on port 3000!') 
}

app.use('/s', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});
app.use('/c', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../public_employer') });
});

app.use('/', (req, res) => {
    res.redirect('/s');
});
