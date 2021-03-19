import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import api from './routes/index';

require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();
export const server = http.createServer(app);

// middlewares
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());


// routes
app.use('/api/v1', api)


// start server
server.listen(port, () => {
    console.log('Server listening at port %d', port);
});