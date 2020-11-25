
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        // Like the one described here: https://swagger.io/specification/#infoObject
        info: {
            title: 'My MovieIMDB API',
            version: '1.0.0',
            description: 'My MovieIMDB API doc',
        },
        schemes: ['http', 'https']
       
    },
    apis: ['./app/routes/*.js'],
};

const specs = swaggerJsdoc(options);
module.exports = (app) => {
    const swaggerUi = require('swagger-ui-express');
    var options = {
        customSiteTitle: 'My MovieIMDB API',
        customCss: '.swagger-ui .topbar { display: none }'
    };
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, options));
}