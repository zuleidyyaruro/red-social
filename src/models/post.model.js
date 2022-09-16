const {DataTypes} = require("sequelize");
const db = require("../utils/database");
const Users = require('./user.models')

const Posts = db.define("posts", {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false,
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING,
            field: "description",
        },
        userId: {
            allowNull: false,
            type: DataTypes.UUID,
        },
        likes: {
            allowNull: false,
            type: DataTypes.INTEGER()
        }


    },
    {
        timestamps: false
    }
);

module.exports = Posts;