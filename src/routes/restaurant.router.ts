import express, { Response, Request, Router } from "express";
import RestaurantService from '../services/restaurant.svc';

const router: Router = express.Router();

router.post('', async (req: Request, res: Response) => {
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

    return res.json({
        status: true,
        restaurant
    })
})

export default router;