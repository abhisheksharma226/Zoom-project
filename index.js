const express = require("express");
const { Server } = require("http");
const { Socket } = require("socket.io");
const server = require('http').Server(app);
const { v4:uuidv4 } = require("uuid");
const io = require('socketio')(Server);

const app = express();
const PORT = 3000;

app.set("view engine" , "ejs");
app.use(express.static('public'));

app.get("/" , (req , res) => {
    res.redirect(`/${uuidv4()}`);
});

app.get("/:room" , (req ,res) => {
    res.render("room" , { roomId : req.params.room });
})

io.on('connection' , Socket => {
    
})

app.listen(PORT , ()=> {
    console.log(`Server started at ${PORT}`);
})