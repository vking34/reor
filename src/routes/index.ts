import express from 'express';
import dishRouter from './dish.router';
import categoryRouter from './category.router';
import restaurantRouter from './restaurant.router';

const router = express.Router();

router.use('/categories', categoryRouter)
router.use('/dishes', dishRouter)
router.use('/restaurants', restaurantRouter)

export default router;