import mongoose, { Schema } from 'mongoose';
// import CategorySchema from './category.schema';

const DishSchema: Schema = new mongoose.Schema(
    {
        _id: String,
        name: {
            type: String,
            require: true,
            index: 'text',
            unique: true
        },
        categories: [{ type: String }],
        price: {
            type: Number,
            require: true,
            min: 0
        },
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)


export default DishSchema;