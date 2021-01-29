const { App } = require('@slack/bolt');
const config = require('./config.json')

const app = new App({
    token: config.slack_token,
    appToken: config.app_token,
    socketMode: true,
});

(async () => {
    await app.start()
    console.log('⚡️ Server ready!')
    
})()

app.message(async ({ message, say }) => {

    //await say(`Hello, <@${message.user}>! I am Undefined, Devnol's personal selfbot, Nice to meet you! (j/k I'm a load of specifically polarised capacitors. Neither do I know nor do I care who you are :) )`);

    await console.log(`message caught: ${message.text}`);

});
