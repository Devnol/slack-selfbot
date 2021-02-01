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
    if (message.channel === config.send_channel) { 
        if (parseInt(message.text)) { //check if message has numbers
            if (message.ts >= ((Date.now() / 1000) - 10)) { //check if message is newer than 2 seconds ago
                if (message.user != config.ignore_uid) //check if message belongsn't to me
                {
                    console.log(`Number caught: ${parseInt(message.text)}`)
                    await say(`${parseInt(message.text) + 1}`); //hippity hoppity the next number is returned
                } else console.log("message is mine")
            } else console.log(`message too old\n time: ${Date.now()/1000} msgts: ${message.ts}`)
        } else console.log("message has no numbers")
    } /*else console.log(`Message caught: ${message.text} in: ${message.channel}\n  from: ${message.user} new: ${message.ts >= (Date.now() / 1000 - 1)} \n time: ${Date.now() / 1000} msgts: ${message.ts + 1}`)*/

});
