import express, { Response, Request, Router } from "express";
import RestaurantService from '../services/restaurant.svc';

const router: Router = express.Router();

router.post('', async (req: Request, res: Response) => {
    let restaurantReq = req.body
    console.log(restaurantReq);

    let restaurant
    try {
        restaurant = await RestaurantService.createRestaurant(restaurantReq)
    }
    catch (e){
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

export default router;