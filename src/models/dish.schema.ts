import mongoose, { Schema } from 'mongoose';
// import CategorySchema from './category.schema';

const DishSchema: Schema = new mongoose.Schema(
    {
        _id: String,
        name: {
            type: String,
            require: true,
            unique: true
        },
        categories: [{ type: String }],
        price: {
            type: Number,
            require: true,
            min: 0
        },
        description: {
            type: String,
            require: true,
            default: ''
        },
        pictures: {
            type: [{ type: String }],
            default: []
        },
        options: [{ type: String }]
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

export const FlexibleDishSchema: Schema = new mongoose.Schema(
    {
        _id: String,
        name: {
            type: String,
            require: true,
            index: 'text',
        },
        categories: [{ type: String }],
        price: {
            type: Number,
            require: true,
            min: 0
        },
    }
)


export default DishSchema;