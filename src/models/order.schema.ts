import mongoose, { Schema } from 'mongoose';
import DishSchema from './dish.schema';


const OrderSchema: Schema = new mongoose.Schema(
    {
        _id: String,
        orders: [
            {
                dish: DishSchema,
                quantity: Number,
            }
        ],
        total_bill: Number,
        customer_name: String,
        phone_number: String
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)


export default OrderSchema;