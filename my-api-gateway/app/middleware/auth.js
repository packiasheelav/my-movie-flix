const jwt = require('jsonwebtoken')
const config = require('../../config')
const userjson = require('../../users.json');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, config.env.secret)
        const user = userjson.filter(d => d.id === decoded.id);
        console.log('user', user);
        if (user.length === 0) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}
module.exports = auth