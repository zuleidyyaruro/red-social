const router = require('express').Router()
const passport = require('passport')
const {roleAdminMiddleware} = require('../middleware/role.middleware')

require('../middleware/auth.middleware')(passport)

const userServices = require('./users.http')


router.route('/') //* /api/v1/users/
    .get(userServices.getAll)

router.route('/me')
    .put(passport.authenticate('jwt', {session: false}), userServices.editMyUser)
    .get(passport.authenticate('jwt', {session: false}), userServices.getMyUser)
    .delete(passport.authenticate('jwt', {session: false}), userServices.removeMyUser)

router.route('/:id')
    .get(userServices.getById)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware, userServices.remove)
    .put(passport.authenticate('jwt', {session: false}), roleAdminMiddleware, userServices.edit)

router.route('/:id/role')
    .get(userServices.getUserRole)

exports.router = router