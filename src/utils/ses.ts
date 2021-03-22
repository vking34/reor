import { SESClient, SendEmailCommand, SESClientConfig } from '@aws-sdk/client-ses';

const REGION = 'ap-southeast-1'
const sesConfig: SESClientConfig = {
    region: REGION
}
const SES = new SESClient(sesConfig)

export default async (sender: string, receiver: string, subject: string, body: string) => {
    let params = {
        Destination: {
            /* required */
            CcAddresses: [
                /* more items */
            ],
            ToAddresses: [receiver],
        },
        Message: {
            /* required */
            Body: {
                /* required */
                Html: {
                    Charset: "UTF-8",
                    Data: body,
                },
                Text: {
                    Charset: "UTF-8",
                    Data: body,
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: subject,
            },
        },
        Source: sender, // SENDER_ADDRESS
        ReplyToAddresses: [
            /* more items */
        ],
    };

    try {
        const data = await SES.send(new SendEmailCommand(params))
        console.log('Success:', data);
    }
    catch (e) {
        console.log('Error', e);
    }
}