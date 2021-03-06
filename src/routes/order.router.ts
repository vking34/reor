import express, { Response, Request, Router } from 'express';
import OrderService from '../services/order.svc';
import validate from '../utils/validator'
import { checkSchema } from 'express-validator';
import { OrderCreationSchema } from '../constants/validation-schemas/order';


const router: Router = express.Router();

router.post('', validate(checkSchema(OrderCreationSchema)), async (req: Request, res: Response) => {
    const orderReq = req.body;

    try {
        let bill = await OrderService.createOrder(orderReq)
        return res.json({
            status: true,
            bill,
        })
    }
    catch (e) {
        return res.status(500).json({
            status: false,
            message: 'Can not order!',
            error: e.message
        })
    }

})

export default router;