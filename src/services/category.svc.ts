import { CategoryModel } from '../models/index';
import shortid from 'shortid';


class CategoryService {

    static async createCategory(name: string) {
        let category = {
            _id: shortid(),
            name,
        }

        try {
            await CategoryModel.create(category)
        }
        catch (e) {
            throw e
        }

        return category;
    }
}

export default CategoryService;