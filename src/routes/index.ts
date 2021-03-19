import express from 'express';
import dishHandler from './dishes/dish.router';

const router = express.Router();


router.use('/dishes', dishHandler);


export default router;