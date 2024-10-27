/**
 * These are the authentication routes of the program.
 */


const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

const { jwt_secret } = require('../config.json')

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials ' });
        }

        const token = jwet.sign({ userId: user._id }, jwt_secret, {expiresIn: '1h'});
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
});

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword })
        await user.save();
        res.status(201).json({ message: 'User registered' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
})

module.exports = router;