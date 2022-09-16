const router = require('express').Router();
const passport = require('passport')
const postsServices = require('./posts.http');

router.route('/')
    .get(postsServices.getAll)
    .post(passport.authenticate('jwt', {session: false}), postsServices.create)


module.exports = {
    router
}