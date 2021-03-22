import bot from './telegram';

export default async () => {
    try {
        const msg = await bot.sendMessage('@order_forwarder_bot', 'test bot1')
        console.log(msg);

    }
    catch (e) {
        console.log('error:', e);

    }
}