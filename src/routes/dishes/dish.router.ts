import express, { Response, Request, Router } from "express";

const router: Router = express.Router();

// Get dishes
router.get('', (req: Request, res: Response) => {
    
})

// create user
router.post('', (req: Request, res: Response) => {
    console.log(req.body);
    
    res.json({
        status: true
    })
})

export default router;