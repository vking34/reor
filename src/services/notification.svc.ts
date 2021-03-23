import { RestaurantModel } from '../models/index';
import sendEmail from '../utils/ses';
import sendTeleMsg from '../utils/telegram';

const DEFAULT_EMAIL: string = process.env.DEFAULT_EMAIL;

const sendNotificationByEmail = (receiver: string, order: any) => {
    const subject: string = 'Order from ' + order.phone_number;
    const body: string = order.phone_number

    sendEmail(DEFAULT_EMAIL, receiver, subject, body);
}

const sendNotificationByTelegram = (chatId: string, order: any) => {
    const msg: string = order.phone_number
    sendTeleMsg(chatId, msg)
}

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
    sendNotificationByEmail(restaurant.email, order);
    sendNotificationByTelegram(restaurant.telegram_chat_id, order);
}