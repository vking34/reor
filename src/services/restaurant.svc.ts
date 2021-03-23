import shortid from 'shortid';
import { Restaurant } from '../constants/interfaces/restaurant';
import { RestaurantModel } from '../models/index';

class RestaurantService {

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

    static async update(_id: string, update: any) {
        let result;
        try {
            result = await RestaurantModel.findById(_id);
            if (!result) throw new Error('Restaurant not found');
        }
        catch (e) {
            throw e;
        }

        const restaurant = { ...result._doc, ...update }
        try {
            await RestaurantModel.updateOne({ _id }, update);
        }
        catch (e) {
            throw e;
        }

        return restaurant
    }
}

export default RestaurantService;