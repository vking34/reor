import express, { Response, Request, Router } from "express";

const router: Router = express.Router();

router.post('', async (req: Request, res: Response) => {
    let restaurantReq = req.body
    console.log(restaurantReq);



    return res.json({
        status: true,

    })
})

export default router;