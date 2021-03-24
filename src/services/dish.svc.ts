import { DishModel } from '../models/index'
import shortid from 'shortid';

class DishService {

    static async findAllDishes() {
        let dishes = await DishModel.find();
        return dishes;
    }

    static async createDish(dish: any) {
        dish._id = shortid()

        try {
            await DishModel.create(dish)
        }
        catch (e) {
            // if (e.code === 11000)
            //     throw new Error('The dish exists!')
            throw e
        }

        return dish
    }

    static async findByIds(ids: string[]) {
        try {
            const dishes = await DishModel.find({ _id: { $in: ids } });
            console.log(dishes);
            return dishes;
        }
        catch (e) {
            throw e
        }
    }
}

export default DishService;
