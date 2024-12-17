
const { post } = require("../routes/posts");
let posts = require("../stored_data/posts");

const { v4: createId } = require("uuid")

function getAll() {
    return posts
}

function getSinglePost(id) {
    const postIndex = posts.findIndex(post => post.id == id);
    const singlePost = posts[postIndex];
    return singlePost
}

function createPost(postBody) {
    const newId = createId();
    const newPost = {
        "id": newId, ...postBody
    }
    posts.push(newPost);
    return newPost
}

function editPost(postBody) {
    const id = postBody.id;
    const postIndex = posts.findIndex(post => post.id == id);
    posts[postIndex].title = postBody.title;
    posts[postIndex].desc = postBody.desc;
    return postBody
}

function deletePost(id){
    const postIndex = posts.findIndex(post=> post.id == id);
    const newPosts = posts.filter(post => post.id != id);
    posts = newPosts;
    return `Post with id ${id} deleted!`
}

exports.getAll = getAll;
exports.getSinglePost = getSinglePost;
exports.createPost = createPost;
exports.editPost = editPost;
exports.deletePost = deletePost;