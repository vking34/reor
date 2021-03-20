import mongoose from 'mongoose';
import DishSchema from './dish.schema';
import CategorySchema from './category.schema';
import RestaurantSchema from './restaurant.schema'


export const CategoryModel = mongoose.model('categories', CategorySchema)
export const DishModel = mongoose.model('dishes', DishSchema)
export const RestaurantModel = mongoose.model('restaurants', RestaurantSchema)

