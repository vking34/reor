import { Schema } from 'express-validator/check';

export const DishCreationSchema: Schema = {
    name: {
        notEmpty: true,
        isLength: {
            options: { min: 2, max: 300 },
            errorMessage: 'The length of dish name must be greater than 2'
        },
        errorMessage: 'Dish name must be not empty.'
    },
    price: {
        isFloat: {
            options: {
                min: 0,
                lt: 1000000.0
            }
        },
        errorMessage: 'Price must be greater or equal to 0 and less than 1000000'
    },
    categories: {
        isArray: {
            options: { min: 1 },
        },
        errorMessage: 'The dish must have at least one category.'
    }
}