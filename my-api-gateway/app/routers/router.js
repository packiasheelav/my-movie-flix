const express = require('express');
const router = express.Router()
const movieMyFlixRouter = require('./movieMyFlixSuggestionService')
const movieNetFlixRouter = require('./movieNetflixSuggestionService')
const movieIMDBRouter = require('./movieIMDBSuggestionService')
const usersAuthRouter = require('./usersAuth')

router.use(movieMyFlixRouter)
router.use(movieNetFlixRouter)
router.use(movieIMDBRouter)
router.use(usersAuthRouter)

module.exports = router