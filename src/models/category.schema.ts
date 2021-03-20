import mongoose, {Schema} from 'mongoose';


const CategorySchema: Schema = new mongoose.Schema(
    {
        _id: String,
        name: {
            type: String,
            require: true,
            index: 'text',
        }
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)


export default CategorySchema;