import { RestaurantModel } from '../models/index';
import sendEmail from '../utils/ses';

const DEFAULT_EMAIL: string = 'lzzvkingzzl@gmail.com'

export default async (order) => {
    let result
    try {
        result = await RestaurantModel.find();
    }
    catch (e) {
        console.log('error:', e);
        return;
    }

    const restaurant = result[0];
    const subject: string = 'Order from ' + order.phone_number;
    const body: string = order.phone_number

    sendEmail(DEFAULT_EMAIL, restaurant.email, subject, body);
}