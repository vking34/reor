import mongoose, { Schema } from 'mongoose';
import { FlexibleDishSchema } from './dish.schema';


const OrderSchema: Schema = new mongoose.Schema(
    {
        _id: String,
        orders: [
            {
                dish: FlexibleDishSchema,
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