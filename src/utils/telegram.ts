import TelegramBot from 'node-telegram-bot-api';

console.log('bot token:', process.env.TELEGRAM_BOT_TOKEN);

let bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true })

// bot.on('message', msg => {
//     console.log(msg);
// })

export const configBot = (token: string) => {
    bot = new TelegramBot(token, { polling: true });
}

export default async (chatId: string | number, text: string) => {
    try {
        await bot.sendMessage(chatId, text);
        // console.log(msg);
    }
    catch (e) {
        console.log('error:', e);
    }
}