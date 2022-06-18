const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user')

//login handle

router.get('/login',userCtrl.renderLogin)

router.get('/register',userCtrl.renderSignup)

router.post('/register',userCtrl.createUser)

router.post('/login',userCtrl.login)

router.get('/logout',userCtrl.logout)

//logout

module.exports  = router;