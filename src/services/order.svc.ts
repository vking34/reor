import { OrderModel } from '../models/index';
import shortid from 'shortid';
import sendNotification from './email.svc';


export default class OrderService {

    static async createOrder(order) {
        const { orders } = order;
        let total_bill = 0;

        for (let i = 0; i < orders.length; i++) {
            total_bill += orders[i].dish.price * orders[i].quantity
        }

        order.total_bill = total_bill
        order._id = shortid()

        try {
            await OrderModel.create(order)
        }
        catch (e) {
            throw e
        }

        sendNotification(order);

        return order
    }
}
