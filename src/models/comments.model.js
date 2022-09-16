const {DataTypes} = require("sequelize");
const db = require("../utils/database");
const Users = require('./user.models');
const Posts = require('./post.model')

const Comments = db.define("comments", {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false,
        },
        postId: {
            allowNull: false,
            type: DataTypes.UUID,
        },
        userId: {
            allowNull: false,
            type: DataTypes.UUID,
        },
        text: {
            allowNull: false,
            type: DataTypes.STRING(255)
        }
    },
    {
        timestamps: false
    }
);

module.exports = Comments;