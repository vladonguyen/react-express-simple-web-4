const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type", "Authorization");
    next();
});

app.use(bodyParser.json());

const posts = require("./data/posts.js");
app.use("/posts", posts);

app.listen(3000, ()=> console.log("Server listens on port 3000! Started successfully!"));