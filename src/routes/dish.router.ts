import express, { Response, Request, Router } from "express";
import DishService from '../services/dish.svc';
import { checkSchema } from 'express-validator/check';
import { DishCreationSchema } from '../constants/validation-schemas/dish';
import validate from '../utils/validator';

const router: Router = express.Router();
// const dishService = new DishService();

// Get dishes
router.get('', async (_req: Request, res: Response) => {
    let dishes = await DishService.findAllDishes()

    return res.json({
        dishes
    });
})


// create user
router.post('', validate(checkSchema(DishCreationSchema)), async (req: Request, res: Response) => {
    let dishReq = req.body;
    // console.log(dishReq);

    let dish
    try {
        dish = await DishService.createDish(dishReq)
    }
    catch (e) {
        let statusCode: number = e.code === 11000 ? 400 : 500;
        return res.status(statusCode).json({
            status: false,
            message: "Can not create dish",
            error: [{ msg: e.message }],
        })
    }

    return res.json({
        status: true,
        dish,
    })
})

export default router;