
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        // Like the one described here: https://swagger.io/specification/#infoObject
        
        info: {
            title: 'My API Gateway ',
            version: '1.0.0',
            description: 'My API Gateway  is an  API Gateway. Its entry point to the microservices.\n The API Gateway can route requests,transform protocols,aggregate data and implement shared logic.\n This API gateway take care of authentication.\n\n'
            ,
        },
        schemes: ['http', 'https']
       
    },
    apis: ['./app/routers/*.js'],
};

const specs = swaggerJsdoc(options);
module.exports = (app) => {
    const swaggerUi = require('swagger-ui-express');
    var options = {
        customSiteTitle: 'My API Gateway',
        customCss: '.swagger-ui .topbar { display: none }'
    };
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, options));
}