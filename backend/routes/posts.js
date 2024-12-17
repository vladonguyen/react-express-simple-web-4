const express = require("express");
const { getAll, createPost, editPost, getSinglePost, deletePost } = require("../actions/postActions");

const router = express.Router();




router.get("/", (req, res, next)=>{
    const posts = getAll();
    res.json(posts);
    next();
});

router.get("/:id", (req,res,next)=>{
    const id = req.params.id;
    const singlePost = getSinglePost(id);
    res.json(singlePost);
    next();
})

router.post("/create", (req,res,next)=>{
    
    const postBody = req.body;
    const newPost = createPost(postBody);
    
    res.json(newPost);
    next();
});

router.patch("/:id/edit", (req,res,next)=>{
    const postBody = req.body;
    editPost(postBody);
    res.json(postBody);
    next();
});

router.delete("/:id/delete", (req,res,next)=>{
    const id = req.params.id;
    const deleteMessage = deletePost(id);
    res.json(deleteMessage);
    next();
})

module.exports = router;