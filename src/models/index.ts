import mongoose from 'mongoose';
import DishSchema from './dish.schema';
import OrderSchema from './order.schema';


export const DishModel = mongoose.model('dishes', DishSchema)
export const OrderModel = mongoose.model('orders', OrderSchema)