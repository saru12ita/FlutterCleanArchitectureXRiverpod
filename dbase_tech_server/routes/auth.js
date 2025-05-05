const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth');

router.post('/login', (req, res) => {
    return res.status(201).json({'name': 'saru', 'age': 22});
});

router.post('/register', authController.register);

router.post('/forgot-passwprd',(req, res)=>{});

router.post('/verify-otp',(req, res)=>{});

router.post('/reset-password',(req, res)=>{});



module.exports = router;