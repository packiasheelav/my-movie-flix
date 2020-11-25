const express = require('express')
const router = new express.Router()
const movielists = require('./movielists')

//findAll
/**
 * @swagger
 * /api/movies/all:
 *    get:
 *      description: Fetch all movies 
 *      tags:
 *          - movie(s)
 *      produces:
 *          - application/json
 *      responses:
 *            200:
 *              description: An array of movies results
 */
router.get('/api/movies/all', async (req, res) => {
    res.send(movielists.movies);
});


//findBytitle
/**
 * @swagger
 * /api/movie/title:
 *    get:
 *      description: Fetch movies by title word
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
router.post('/api/movies/title', async (req, res) => {
    const title = req.body.title || "";
    console.log("body", title)
    var result = movielists.movies.filter((item) => {
        return item.title.toLowerCase().search(title.toLowerCase()) !== -1
    });
    console.log(result);
    res.send(result);
});

//findBygenres
/**
 * @swagger
 * /api/movies/genres:
 *    post:
 *      description: Fetch movies by genre. 
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
router.post('/api/movies/genres', async (req, res) => {
    const genres = req.body.genres || [];
    console.log("body", genres)
    var result = movielists.movies.filter((item) => {
        return item.categories.some(v => genres.indexOf(v) !== -1)
    });
    console.log(result);
    res.send(result);
});


//findBygenre
/**
 * @swagger
 * /api/movies/{genre}[?limit]:
 *    get:
 *      description: Fetch movies by genre
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
router.get('/api/movies/:genre', async (req, res) => {
    const limit = parseInt(req.query.limit) || 100
    const genre = req.params.genre || ''
    let listofmovies = movielists.movies.filter(function (item) {
        return item.categories.includes(genre)
    })
    if (listofmovies.length > limit) {
        listofmovies = listofmovies.slice(0, limit)
    }
    res.send(listofmovies);
});


module.exports = router
