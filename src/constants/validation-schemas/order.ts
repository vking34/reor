import { Schema } from 'express-validator/check';


export const OrderCreationSchema: Schema = {
    'orders.*.dish_id': {
        notEmpty: true,
    },
    'orders.*.quantity': {
        isInt: {
            options: { min: 1, max: 1001 }
        },
        errorMessage: 'Quantity must be greater than 0 and less than 1001'
    },
    customer_name: {
        notEmpty: true,
        isLength: {
            options: { min: 2, max: 300 },
            errorMessage: 'The name has at least 2 characters'
        },
        errorMessage: 'The customer name is required.'
    },
    phone_number: {
        matches: {
            options: /^[0-9]*$/,
            errorMessage: 'Invalid phone number.'
        }
    }
}