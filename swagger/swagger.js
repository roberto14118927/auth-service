const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Auth API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = (app) => {
  if (process.env.NODE_ENV === 'development') {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }
};
