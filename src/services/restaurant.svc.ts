import shortid from 'shortid';
import { Restaurant } from '../constants/interfaces/restaurant';
import { RestaurantModel } from '../models/index';

class RestaurantClass {

    static async createRestaurant(restaurant: Restaurant) {

        restaurant._id = shortid()

        try {
            await RestaurantModel.create(restaurant)
        }
        catch (e) {
            throw e
        }

        return restaurant
    }
}

export default RestaurantClass;