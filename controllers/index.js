const router = require('express').Router();

const profileRoutes = require('./profile-routes');
const poemRoutes = require('./poem-routes');

router.use('/poem', poemRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
