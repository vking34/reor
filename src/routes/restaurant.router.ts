import express, { Response, Request, Router } from "express";
import RestaurantService from '../services/restaurant.svc';
import validate from '../utils/validator';
import { checkSchema } from 'express-validator';
import { RestaurantCreationSchema } from '../constants/validations/restaurant.schema';


const router: Router = express.Router();

router.post('', validate(checkSchema(RestaurantCreationSchema)), async (req: Request, res: Response) => {
    let restaurantReq = req.body;

    let restaurant
    try {
        restaurant = await RestaurantService.createRestaurant(restaurantReq)
    }
    catch (e) {
        return res.status(500).json({
            status: false,
            message: "Can not create restaurant",
            error: e.message
        })
    }

    return res.json({
        status: true,
        restaurant
    })
})

router.put('/:id', async (req: Request, res: Response) => {
    const restaurantId = req.params.id;
    let update = req.body;

    let restaurant
    try {
        restaurant = await RestaurantService.update(restaurantId, update);
    }
    catch (e) {
        return res.status(500).json({
            status: false,
            message: 'Can not update restaurant',
            error: e.message
        })
    }

    if (!restaurant)
        return res.status(400).json({
            status: false,
            message: 'Restaurant not found'
        })

    return res.json({
        status: true,
        restaurant
    })
})

export default router;