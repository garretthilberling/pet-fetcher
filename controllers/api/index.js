const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const petRoutes = require('./pet-routes');
const commentRoutes = require('./comment-routes');
const replyRoutes = require('./reply-routes');

router.use('/users', userRoutes);
router.use('/pets', petRoutes);
router.use('/comments', commentRoutes);
router.use('/replies', replyRoutes);

module.exports = router;
