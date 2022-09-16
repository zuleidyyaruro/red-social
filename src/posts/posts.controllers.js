const Posts = require("../models/post.model");
const uuid = require('uuid');

// GET (Obtener todas las publicaciones de los usuarios)
const getAllPosts = async () => {
    return await Posts.findAll();
};

// POST (Crear publicaciones)
const createPost = async (data, userId) => {
    const {description, likes} = data;
    const newPost = await Posts.create({
        id: uuid.v4(),
        userId,
        description,
        likes
    })

    return newPost
}

module.exports = {
    getAllPosts,
    createPost
}
