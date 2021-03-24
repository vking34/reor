import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

// // load env vars
try {
    dotenv.config({ path: './.env' })
    dotenv.config({ path: './.secure.env' })
}
catch (e) {
    console.log('No loading env vars', e);
}


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


// server
const port = process.env.PORT || 3000;
const app = express();
export const server = http.createServer(app);


// middlewares
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());


// routes
import api from './routes/index';
app.use('/api/v1', api)


// start server
server.listen(port, () => {
    console.log('Server listening at port %d', port);
});