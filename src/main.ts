import * as express from 'express';
import { RegisterRoutes } from './routes/routes';
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../api/dist/swagger.json');

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = 3000;
RegisterRoutes(app);
app.listen(port, () => console.log(`Server started listening to port ${port}`));
