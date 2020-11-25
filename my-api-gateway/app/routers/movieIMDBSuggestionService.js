const express = require('express')
const router = new express.Router()
const requestApiAdapter = require('./requestApiAdapter')
const auth = require('../middleware/auth')

//imdbsuggestionservice's server url
const BASE_URL = 'http://imdb.com/'
const api = requestApiAdapter(BASE_URL)

//findAll
/**
 * @swagger
 * /api/imdb/movies/all:
 *    get:
 *      description: Fetch all movies from imdb\n.The request will be routed to My movie imdb microservices.
 *      tags:
 *          - movie(s)
 *      produces:
 *          - application/json
 *      responses:
 *            200:
 *              description: An array of movies results
 */
router.get('/api/imdb/movies/all',auth,async (req, res) => {
    api.get(req.path).then(response => {
        //convert imdb json to internal json format
        //res.send("convertedJson")
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
