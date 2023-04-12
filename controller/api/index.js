const router = require("express").Router();

const profileRoutes = require('./profileRoutes');
const poemRoutes = require('./poemRoutes')

router.use('/profile', profileRoutes)
router.use('/poem', poemRoutes)

module.exports = router