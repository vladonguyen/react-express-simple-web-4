const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req, res, next)=> {
    res.setHeader("Access-Contro-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type", "Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
});

const postsRoutes = require("./routes/posts.js");
app.use("/posts", postsRoutes);

app.listen(3000, ()=> console.log("Server started and listens on port 3000!"));