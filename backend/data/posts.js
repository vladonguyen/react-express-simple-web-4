const express = require("express");
const router = express.Router();

let posts = [
    {
        "id": 1,
        "title": "default title 1",
        "desc": "default description 1"
    },
    {
        "id": 2,
        "title": "default title 2",
        "desc": "default description 2"
    }
]

router.get("/", (req, res, next) => {
    res.json(posts);
    console.log("Read all posts!");
})

module.exports = router;