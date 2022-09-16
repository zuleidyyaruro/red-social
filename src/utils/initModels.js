const Users = require("../models/user.models");
const Roles = require("../models/roles.model");
const Posts = require("../models/post.model");
const Comments = require("../models/comments.model");

const initModels = () => {

    //? Users <- Roles
    Roles.hasMany(Users);
    Users.belongsTo(Roles);

    //? Posts <- Users
    Users.hasMany(Posts);
    Posts.belongsTo(Users);

    //? Posts <- Users
    Users.hasMany(Comments);
    Comments.belongsTo(Users);

    //? Posts <- comments
    Posts.hasMany(Comments);
    Comments.belongsTo(Posts);

}

module.exports = initModels;