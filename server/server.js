const books = require('./modules/books')

const express = require('express');  //M explained that b/c it's in the node_modules, we don't need require('./ 

const app = express();  //what do you tnink this express() thing is, IT'S A FUNCTION, RIGHT!
const port = 5000; //M explains port #'s and use a non reserved port number, M: I'm gonna suggest 5000

app.use( express.static( 'server/public') );

app.get( '/games', (req, res) => {
    console.log("getting some games");
    let gameList = ["Sick Game", "Good Game", "Bad Game"];
    res.send(gameList);
});

app.get('/books', (req, res) => {
    console.log("getting some books");
    res.send(books);
});

app.get('/datetime', (req, res) => {
    let rightNow = new Date();
    nowString = rightNow.toLocaleDateString() + " " + rightNow.toLocaleTimeString();
    res.send("Right now it is: " + nowString);
});

app.listen(port, () => {
    console.log("We are listening on port:", port);
});

//at the end M reviews, re explains each line in the file. 