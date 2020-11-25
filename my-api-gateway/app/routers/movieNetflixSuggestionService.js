const express = require('express')
const router = new express.Router()
const requestApiAdapter = require('./requestApiAdapter')
const auth = require('../middleware/auth')

//netflixsuggestionservice's server url
const BASE_URL = 'http://localhost:9002/'
const api = requestApiAdapter(BASE_URL)

//findAll
/**
 * @swagger
 * /api/netflix/movies/all:
 *    get:
 *      description: Fetch all movies from netflix service\n.The request will be routed to My movie netflix mciroservices.
 *      tags:
 *          - movie(s)
 *      produces:
 *          - application/json
 *      responses:
 *            200:
 *              description: An array of movies results
 */
router.get('/api/netflix/movies/all',auth,async (req, res) => {
    api.get(req.path).then(response => {
        res.send(response.data)
    }).catch(function (error) {
        if (error.response) {
            res.send(error.status)
        } else if (error.request) {
            res.send({"error": "Network Error. Server might be down?"})
        } else {
            res.send(error.message)
        }

    });
});

module.exports = router
