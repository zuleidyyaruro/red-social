const postsControllers = require("./posts.controllers");


const getAll = (req, res) => {
    postsControllers.getAllPosts()
        .then(response => {
            res.status(200).json({
                status: "success",
                response
            })
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const create = (req, res) => {

    const userId = req.user.id;
    const data = req.body;

    postsControllers.createPost(data, userId)
        .then(response => {
            res.status(201).json({
                status: "success",
                response
            })
        })
        .catch(err => {
            res.status(400).json({status: 400, message: err.message})
        })
}

module.exports = {
    getAll,
    create
}