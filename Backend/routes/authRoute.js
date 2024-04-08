const express = require('express');
const router = express(); 
const {veryfyToken} =require('../middlewares/authMiddlewares')
const authController = require('../controllers/authController');
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

router.get('/profile',veryfyToken,authController.getprofile);

router.post('/reset',authController.resetpassword);

router.get('/farget/:id/:token',authController.fargetpassword);

router.post('/:id/:token',authController.changepassword);


module.exports = router; 