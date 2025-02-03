const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const itemController = require('../controllers/itemController');

router.post('/users/register', usersController.register);
router.post('/users/login', usersController.login);

router.get('/item', itemController.getItems);
router.post('/item', itemController.createItem);
router.put('/item/:id', itemController.updateItem);
router.delete('/item/:id', itemController.deleteItem);

module.exports = router;
