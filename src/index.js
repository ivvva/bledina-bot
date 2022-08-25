require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });
const greetings = require('./greetings')
const displayStats = require('./services/statisticsLatest').display
const getStatisticsLatest = require('./api/vtratyApi').getStatisticsLatest

function getRandomGreeting(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

//const greeting = getRandomGreeting(greetings.greetingsArr)

bot.on("polling_error", console.log);

bot.onText(/\/start/, (msg) => {
  bot.sendPhoto(msg.chat.id, getRandomGreeting(greetings.greetingsArr));
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "здоров шо треба", {
    "reply_markup": {
      "keyboard": [["шо по блєдінам в моєму регіоні?"], ["дізнатись про втрати русні"], ["більше дохлої русні"]]
    }
  });
});


bot.on('message', async (msg) => {
  let chat_id = msg.from.id
  const statsLatest = await getStatisticsLatest()
  const display = displayStats(statsLatest)

  if (msg.text == 'дізнатись про втрати русні') {
    bot.sendMessage(chat_id, display, {parse_mode : "HTML"})
  }
})

bot.on('message', async (message) => {
  let chat_id = message.from.id

  if (message.text == 'Слава Україні' || message.text == 'слава Україні' || message.text == 'Slava Ukraini') {
    bot.sendMessage(chat_id, 'Героям слава!')
  }
  else if (message.text == 'Слава нації' || message.text == 'слава нації' || message.text == 'Slava natsii') {
    bot.sendMessage(chat_id, 'Смерть ворогам!')
  }
  else if (message.text == 'Русні' || message.text == 'русні' || message.text == 'rusni') {
    bot.sendMessage(chat_id, 'Пєзда')
  }
  // else if (message.text == 'дізнатись про втрати русні') {
  //   const statsLatest = await getStatisticsLatest()
  //   const display = displayStats(statsLatest)
  // }
})