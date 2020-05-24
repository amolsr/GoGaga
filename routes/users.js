var express = require('express');
const userController = require('../controller/userController')
var router = express.Router();

router.post('/add', userController.addUser);
router.get('/list', userController.getUser);

module.exports = router;