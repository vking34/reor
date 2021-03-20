import { DishModel } from "../models"
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
            throw e
        }

        return dish
    }
}

export default DishService;

// export const findAllDishes = async () => {
//     let dishes = await DishModel.find();
//     return dishes; 
// }