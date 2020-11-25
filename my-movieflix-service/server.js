const chalk = require('chalk');
const swaggerdoc = require('./swaggerDoc');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./app/middleware/error-handler')
const moviesRoutes = require('./app/routes/movies.routes')

const app = express();
const port = 9001

swaggerdoc(app)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("My Movie flix service API")
})
app.use(errorHandler);
app.use(moviesRoutes);

app.listen(port, () => {
    console.log(chalk.black.bgCyan.bold("My Movie flix service API is listening on port " + port));
});


