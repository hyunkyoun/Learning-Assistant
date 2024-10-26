/**
 * These are the authentication routes of the program.
 */

const express = require('express');
const router = express.Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    res.json({ message: "Login Successful", token: "your-token" })
})

router.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    res.json({ message: "Registration Successful", token: "your-token" })
})

module.exports = router;