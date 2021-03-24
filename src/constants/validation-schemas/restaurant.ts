import { Schema } from 'express-validator';

export const RestaurantCreationSchema: Schema = {
    name: {
        notEmpty: true,
        isLength: {
            options: { min: 2, max: 300 },
            errorMessage: 'The length of restaurant name must be greater than 2'
        },
        errorMessage: 'Restaurant name must be not empty.'
    },
    email: {
        isEmail: true,
        errorMessage: 'Invalid email.'
    },
    phone_number: {
        matches: {
            options: /^[0-9]*$/,
            errorMessage: 'Invalid phone number.'
        }
    },
    address: {
        notEmpty: true,
        errorMessage: 'Address is missing!'
    }
}