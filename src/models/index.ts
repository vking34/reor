import mongoose from 'mongoose';
import DishSchema from './dish.schema';
import OrderSchema from './order.schema';
import RestaurantSchema from './restaurant.schema';

export const DishModel = mongoose.model('dishes', DishSchema)
export const OrderModel = mongoose.model('orders', OrderSchema)
export const RestaurantModel = mongoose.model('restaurants', RestaurantSchema)