const chalk = require('chalk');
const swaggerdoc = require('./swaggerDoc');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./app/routers/router')

const app = express();
const port = 8888

swaggerdoc(app)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("My API Gateway")
})

app.use(router)
app.listen(port, () => {
    console.log(chalk.black.bgYellow.bold("MY API GATEWAY is Starting.."));
    console.log(chalk.black.bgYellow.bold("MY API GATEWAY is listening on port " + port));
});


