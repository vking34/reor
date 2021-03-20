import shortid from 'shortid';
import { RestaurantModel } from '../models/index';

class RestaurantClass {

    static async createRestaurant(restaurant: any) {

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