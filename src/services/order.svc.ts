import { OrderModel } from '../models/index';
import shortid from 'shortid';
import sendNotification from './notification.svc';
import DishService from './dish.svc';

interface OrderInstance {
    dish_id: string,
    quantity: number
}

export default class OrderService {

    static async createOrder(order: any) {
        const orders: [OrderInstance] = order.orders;
        let total_bill: number = 0;

        let dishMap = new Map<string, OrderInstance>();
        const dishIds: string[] = orders.map(order => {
            const id: string = order.dish_id;
            dishMap.set(id, order);
            return id
        });
        console.log(dishIds);

        let dishes;
        try {
            dishes = await DishService.findByIds(dishIds);
        }
        catch (e) {
            throw e
        }

        let detailOrders = [];
        for (let i = 0; i < dishes.length; i++) {
            const dish = dishes[i]
            const quantity: number = dishMap.get(dish._id).quantity
            total_bill += dish.price * quantity
            detailOrders.push({
                dish,
                quantity
            })
        }

        order.orders = detailOrders;
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
