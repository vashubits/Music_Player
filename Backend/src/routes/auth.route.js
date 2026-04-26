const express = require('express')  
const router = express.Router()
const authController = require('../controller/auth.controller')



router.post('/register', authController.userRegister)
router.post('/login',authController.userLogin)
router.get('/verify',authController.tokenVerify)

module.exports = router