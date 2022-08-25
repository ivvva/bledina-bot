require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });
const greetings = require('./greetings')

function getRandomGreeting(arr){
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}
// console.log(greetings.greetingsArr)
const greeting = getRandomGreeting(greetings.greetingsArr)


bot.onText(/\/start/, (msg) => {
  bot.sendPhoto(msg.chat.id, getRandomGreeting(greetings.greetingsArr));
});

bot.on('message', (message) => {
  let chat_id = message.from.id

  // if (msg.text.toString().toLowerCase().includes('Слава Україні')) {
  //   bot.sendMessage(chat_id, 'Героям слава!')
  // }

  if (message.text == 'Слава Україні' || message.text == 'слава Україні' || message.text == 'Slava Ukraini') {
    bot.sendMessage(chat_id, 'Героям слава!')
  }
  else if (message.text == 'Слава нації' || message.text == 'слава нації' || message.text == 'Slava natsii') {
    bot.sendMessage(chat_id, 'Смерть ворогам!')
  }
  else if (message.text == 'Русні' || message.text == 'русні' || message.text == 'rusni') {
    bot.sendMessage(chat_id, 'Пєзда')
  }
  console.log(message)
})