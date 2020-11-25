const express = require('express')
const router = new express.Router()
const requestApiAdapter = require('./requestApiAdapter')
const auth = require('../middleware/auth')

//myflixsuggestionservice's server url
const BASE_URL = 'http://localhost:9001'
const api = requestApiAdapter(BASE_URL)

//findAll
/**
 * @swagger
 * /api/movies/all:
 *    get:
 *      description: Fetch all movies from movie myflix service\n.The request will be routed to My movie flix microservices.
 *      tags:
 *          - movie(s)
 *      produces:
 *          - application/json
 *      responses:
 *            200:
 *              description: An array of movies results
 */
router.get('/api/movies/all', auth, async (req, res) => {
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


//findBytitle
/**
 * @swagger
 * /api/movie/title:
 *    get:
 *      description: Fetch movies by title word from movie myflix service\n.The request will be routed to My movie flix microservices.
 *      tags:
 *          - movie(s)
 *      produces:
 *          - application/json
 *      responses:
 *            200:
 *              description: An array of movies results
 */
/*
Example POST payload:
{"title":"king"}
*/
router.post('/api/movies/title', auth, async (req, res) => {
    api.post(req.path, req.body).then(response => {
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

//findBygenres
/**
 * @swagger
 * /api/movies/genres:
 *    post:
 *      description: Fetch movies by genre from movie myflix service\n.The request will be routed to My movie flix microservices.
 *      tags:
 *          - movie(s)
 *      produces:
 *          - application/json
 *      responses:
 *            200:
 *              description: An array of movies results by specific genres
 */

/*
Example POST payload:
{"genres" :["action", "horror","drama"] }
*/
router.post('/api/movies/genres', auth, async (req, res) => {
    api.post(req.path, req.body).then(response => {
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


//findBygenre
/**
 * @swagger
 * /api/movies/{genre}[?limit]:
 *    get:
 *      description: Fetch movies by genre from moviemyflix service\n.The request will be routed to My movie flix microservices.
 *      tags:
 *          - movie(s)
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: limit
 *            description: Number of entries to fetch. Default all
 *            required: false
 *            type: string  
 *      responses:
 *            200:
 *              description: An array of movies results by specific genre
 */
router.get('/api/movies/:genre', auth, async (req, res) => {
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
