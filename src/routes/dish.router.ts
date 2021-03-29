import express, { Response, Request, Router } from "express";
import DishService from '../services/dish.svc';
import { checkSchema } from 'express-validator';
import { DishCreationSchema, DishUpdateSchema } from '../constants/validation-schemas/dish';
import validate from '../utils/validator';
import handleError from '../utils/error_handler';

const router: Router = express.Router();
// const dishService = new DishService();

// Get dishes
router.get('', async (req: Request, res: Response) => {
    const category: string = req.query.category as string;
    console.log('category:', category);
    
    let dishes;

    try {
        if (category) {
            dishes = await DishService.findByCategory(category);
        }
        else {
            dishes = await DishService.findAll()
        }
    }
    catch (_e) {
        dishes = []
    }

    return res.json({
        dishes
    });
})

// create dish
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

// update dish
router.put('/:id', validate(checkSchema(DishUpdateSchema)), async (req: Request, res: Response) => {
    const dishId: string = req.params.id;
    let update = req.body;

    let dish
    try {
        dish = await DishService.update(dishId, update);
    }
    catch (e) {
        return handleError(res, e, 'Can not update dish.')
    }

    return res.json({
        status: true,
        dish
    })
})

// Get dishes by category
router.get('/categories/:category', async (req: Request, res: Response) => {
    const category: string = req.params.category;

    let dishes;
    try {
        dishes = await DishService.findByCategory(category);
    }
    catch (e) {
        dishes = []
    }

    return res.json({ dishes });
})

export default router;