const express = require('express');

//create router
const router = express.Router();

//expoters to home_contoller
const homeController = require('../controllers/home_contoller');

console.log('Router Loaded.');

// /access to home_controller
router.get('/', homeController.home);

module.exports = router;