import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import api from './routes/index';
import mongoose, { ConnectOptions } from 'mongoose';

require('dotenv').config();

// server
const port = process.env.PORT || 3000;
const app = express();
export const server = http.createServer(app);


// DB
const mongoOpts: ConnectOptions = {
    autoIndex: process.env.MONGODB_AUTO_INDEX === 'true' ? true : false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.MONGODB_URI, mongoOpts)
mongoose.Promise = global.Promise;
mongoose.connection.once('open', () => {
    console.log('Connected to mongoDB!');
});


// middlewares
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());


// routes
app.use('/api/v1', api)


require('./utils/telegram')
import sendMsg from './utils/tele.ex';
sendMsg()

// start server
server.listen(port, () => {
    console.log('Server listening at port %d', port);
});