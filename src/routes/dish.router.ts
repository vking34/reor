import express, { Response, Request, Router } from "express";
import DishService from '../services/dish.svc';

const router: Router = express.Router();
// const dishService = new DishService();

// Get dishes
router.get('', async (_req: Request, res: Response) => {
    let dishes = await DishService.findAllDishes()

    return res.json(dishes);
})


// create user
router.post('', async (req: Request, res: Response) => {
    let dishReq = req.body;
    console.log(dishReq);

    let dish
    try {
        dish = await DishService.createDish(dishReq)
    }
    catch (e) {
        return res.status(500).json({
            status: false,
            message: "Can not create dish",
            error: e,
        })
    }

    return res.json({
        status: true,
        data: dish,
    })
})

export default router;