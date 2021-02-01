const { App } = require('@slack/bolt');
const config = require('./config.json')

const app = new App({
    token: config.slack_token,
    appToken: config.app_token,
    socketMode: true,
    ignoreSelf: false,
});

(async () => {
    await app.start()
    console.log('⚡️ Server ready!')
    console.log(Date.now()) 
})()

app.event('message', async ({ message, say }) => {

    //await console.log(`message caught: ${message.text}`);
    if (message.channel === config.send_channel && 
        parseInt(message.text) && 
        message.ts < (Date.now() / 1000 - 1) && 
        message.user != config.ignore_uid) 

    {
        console.log("AYY NUMBER CAUGHT")
        await say(`${parseInt(message.text) + 1}`);
    } /*else console.log(`Message caught: ${message.text} in: ${message.channel}\n  from: ${message.user} new: ${message.ts >= (Date.now() / 1000 - 1)} \n time: ${Date.now() / 1000} msgts: ${message.ts + 1}`)*/

});
