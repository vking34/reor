import mongoose, { Schema } from 'mongoose';

const RestaurantSchema: Schema = new mongoose.Schema(
    {
        _id: String,
        name: {
            type: String,
            require: true,
            index: 'text'
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        phone_number: String,
        address: String,
        description: String,
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

export default RestaurantSchema;