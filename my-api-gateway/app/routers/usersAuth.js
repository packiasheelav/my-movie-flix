const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
//const salt = bcrypt.genSaltSync(10);
const config = require('../../config')
const userjson = require('../../users.json');


/**
 * @swagger
 * /api/login:
 *    post:
 *      description: login to application
 *      tags:
 *          - user
 *      parameters:
 *          - name: useremail
 *            description: user email
 *          - name: password
 *            description: user password
 */

router.post('/api/login', async (req, res) => {
    try {
        console.log(req.body.useremail)
        console.log(req.body.password)
        useremail = req.body.useremail;
        password = req.body.password;
        const user = userjson.filter(d => d.useremail === useremail);
        console.log('user', user);
        if (user.length == 0) {
            throw new Error('Unable to login')
        }
        const isMatch = await bcrypt.compare(password, user[0].password)
        if (!isMatch) {
            throw new Error('Unable to login')
        }
        time = '365d';
        const token = jwt.sign({ id: user[0].id.toString() }, config.env.secret, { expiresIn: time });
        res.send({ "message": "login successful", token })
    } catch (e) {
        res.status(400).send({"error": "Unable to login"})
    }
})

module.exports = router