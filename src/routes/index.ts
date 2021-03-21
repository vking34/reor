import express from 'express';
import dishRouter from './dish.router';
import orderRouter from './order.router'
// import categoryRouter from './category.router';
// import restaurantRouter from './restaurant.router';

const router = express.Router();

router.use('/dishes', dishRouter)
router.use('/orders', orderRouter)
// router.use('/categories', categoryRouter)
// router.use('/restaurants', restaurantRouter)


export default router;