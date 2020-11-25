const express = require('express')
const router = new express.Router()

//findAll
/**
 * @swagger
 * /api/movies/all:
 *    get:
 *      description: Fetch all movies from netflix 
 *      tags:
 *          - movie(s)
 *      produces:
 *          - application/json
 *      responses:
 *            200:
 *              description: An array of movies results
 */
router.get('/api/imdb/movies/all', async (req, res) => {
    //example
    const movies = {
        "movies": [{
            "title": "Mad Max",
            "categories": ["action"]
        }, {
            "title": "Willow",
            "categories": ["action","fantasy"]
        }]
    }
    //HERE convert netflix json structure to  internal json structure
    res.send(movies);
});


module.exports = router
