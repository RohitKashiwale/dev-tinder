const express = require("express");

const app = express();


app.get("/user", (req, res)=>{
    res.send({firstName: "Rohit", lastName:"Kashiwale"});
})

app.post("/user", (req, res)=>{
    res.send("Save data to a database");
})

app.delete("/user", (req, res)=>{
    res.send("user deleted successfully");
})

app.listen(3000, ()=>{
    console.log("The server is running on a port 3000");
});