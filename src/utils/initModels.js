const Users = require("../models/user.models");
const Roles = require("../models/roles.model");

const initModels = () => {

    //? Users <- Roles
    Roles.hasMany(Users);
    Users.belongsTo(Roles);

}

module.exports = initModels;