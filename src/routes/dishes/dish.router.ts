import express, { Response, Request, Router } from "express";

const router: Router = express.Router();

router.post('', (req: Request, res: Response) => {
    console.log(req.body);
    
    res.json({
        status: true
    })
})

export default router;