const fs = require('fs');
const express = require('express');
const http = require('http');
const app = express();
module.exports = app;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Backend API");
});

app.post('/user', (req, res) => {
    const {username, name, password, favouriteFruit, favouriteMovie, favouriteNumber} = req.body;
    const accounts = fs.readFileSync('./storage/account.json', 'utf-8');
    const data = JSON.parse(accounts);

    if (!data[username]) {
        data[username] = { name, password, favouriteFruit, favouriteMovie, favouriteNumber };
        fs.writeFileSync('./storage/account.json', JSON.stringify(data, null, 2), 'utf-8');
        res.send("Account Created");
    } else {
        res.send("Account Already Exists");
    }
});

app.delete('/user', (req, res) => {
    const username = req.query.username;
    const accounts = fs.readFileSync('./storage/account.json', 'utf-8');
    const data = JSON.parse(accounts);

    if (data[username]) {
        delete data[username];
        fs.writeFileSync('./storage/account.json', JSON.stringify(data, null, 2), 'utf-8');
        res.send("Account Deleted");
    } else {
        res.send("Account Does Not Exist");
    }
});

app.put('/user', (req, res) => {
    const username = req.query.username;
    const accounts = fs.readFileSync('./storage/account.json', 'utf-8');
    const {name, password, favouriteFruit, favouriteMovie, favouriteNumber} = req.body;
    const data = JSON.parse(accounts);

    if (data[username]) {
        data[username] = { name, password, favouriteFruit, favouriteMovie, favouriteNumber };
        fs.writeFileSync('./storage/account.json', JSON.stringify(data, null, 2), 'utf-8');
        res.send("Account Updated");
    } else {
        res.send("Account Does NOT Exist");
    }
});

http.createServer(app).listen(9999, () => {
    console.log("Application listening on PORT 9999");
});
if (require.main === module) {
    http.createServer(app).listen(9999, () => {
        console.log("Application listening on PORT 9999");
    });
}