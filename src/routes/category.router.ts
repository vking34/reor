import express, { Response, Request, Router } from "express";
import CategoryService from "../services/category.svc";

const router: Router = express.Router();


// create category
router.post('', async (req: Request, res: Response) => {
    const categoryName: string = req.body.name;

    let category;
    try {
        category = await CategoryService.createCategory(categoryName);
    }
    catch (e) {
        res.status(500).json({
            status: false,
            message: "Can not create category",
            error: e
        })
    }

    return res.json({
        status: true,
        data: category
    })
})

export default router;