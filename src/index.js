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


bot.on('polling_error', console.log);

bot.onText(/\/start/, (msg) => {
  bot.sendPhoto(msg.chat.id, getRandomGreeting(greetings.greetingsArr));
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'здоров шо треба', {
    'reply_markup': {
      "keyboard": [["шо по блєдінам в моєму регіоні?"], ["дізнатись про втрати русні"], ["більше дохлої русні"]]
    }
  });
});


bot.on('message', async (msg) => {
  let chat_id = msg.from.id
  const statsLatest = await getStatisticsLatest()
  const display = displayStats(statsLatest)

  if (msg.text == 'дізнатись про втрати русні') {
    bot.sendMessage(chat_id, display, { parse_mode: "HTML" })
  }
  if (msg.text == 'більше дохлої русні') {
    bot.sendPhoto(msg.chat.id, 'https://i.pinimg.com/originals/f4/04/e7/f404e72bd17890a0f883c51c7e2e9dc2.jpg')
    bot.sendMessage(msg.chat.id, "більше донатів на зсу - більше дохлої русні! кому донатимо?", {
      "reply_markup": {
        "keyboard": [["повернись живим"], ["восток sos"], ["госпітальєри"], ["фонд притули"], ["офіційний рахунок ЗСУ від нацбанку"]]
      }
    })
  }
})

bot.on('message', async (msg) => {
  let chat_id = msg.from.id
  if (msg.text == 'повернись живим') {
    bot.sendMessage(chat_id, '<a href=\"https://savelife.in.ua/donate/#donate-army-card-once\">ось посилання на донат для фонда "повернись живим"</a>', { parse_mode: "HTML" });
  }
  if (msg.text == 'восток sos') {
    bot.sendMessage(chat_id, '<a href=\"https://vostok-sos.org/en/i-wanna-help/rekvizyty-dlia-hroshovoho-perekazu/\">ось посилання на донат для фонда "восток sos"</a>', { parse_mode: "HTML" });
  }
  if (msg.text == 'госпітальєри') {
    bot.sendMessage(chat_id, '<a href=\"https://www.hospitallers.life/needs-hospitallers\">ось посилання на донат для фонда "госпітальєри"</a>', { parse_mode: "HTML" });
  }
  if (msg.text == 'фонд притули') {
    bot.sendMessage(chat_id, '<a href=\"https://prytulafoundation.org/en/home/support_page/\">ось посилання на донат для фонда Сергія Притули</a>', { parse_mode: "HTML" });
  }
  if (msg.text == 'офіційний рахунок ЗСУ від нацбанку') {
    bot.sendMessage(chat_id, '<a href=\"https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi\">ось посилання на офіційний рахунок ЗСУ від нацбанку</a>', { parse_mode: "HTML" });
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
})