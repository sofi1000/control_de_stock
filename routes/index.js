const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes')
const itemRoutes = require ('./itemRoutes')

router.use('/user', userRoutes);
router.use('/item', itemRoutes);

module.exports = router;