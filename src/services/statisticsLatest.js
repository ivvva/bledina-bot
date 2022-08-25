// require('dotenv').config()

// const TelegramBot = require('node-telegram-bot-api');
// const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// const bot = new TelegramBot(TOKEN, { polling: true });

const display = (statsLatest) => {
  const stats = statsLatest.stats
  const statsDisplay =
    `станом на ${statsLatest.date} 
(${statsLatest.day}-й день війни) 
втрати русні становлять:
особового складу: ${stats.personnel_units} (+)
танків: ${stats.tanks}
ББМ: ${stats.armoured_fighting_vehicles}
арт. систем: ${stats.artillery_systems}
РСЗВ: ${stats.mlrs}
засобів ППО: ${stats.aa_warfare_systems}
літаків: ${stats.planes}
гелікоптерів: ${stats.helicopters}
автотехніки та автоцистерн: ${stats.vehicles_fuel_tanks}
кораблів/катерів: ${stats.warships_cutters}
БПЛА: ${stats.cruise_missiles}
спец. техніки: ${stats.uav_systems}
установок ОТРК/ТРК: ${stats.special_military_equip}
крилатих ракет: ${stats.atgm_srbm_systems}
    `
  return statsDisplay
}

module.exports = {
  display
}