const express = require("express");

const app = express();

app.use("/home/2",(req, res)=>{
    res.send("Hello from hoooooooooome 2222");
});
app.use("/home",(req, res)=>{
    res.send("Hello from hoooooooooome");
});
app.use("/testing",(req, res)=>{
    res.send("Hello from testing page");
});
app.use("/testing/users",(req, res)=>{
    res.send("Hello from testing users");
});
app.use("/",(req, res)=>{
    res.send("Hello from 3000 bhai");
});

app.listen(3000, ()=>{
    console.log("The server is running on a port 3000");
});