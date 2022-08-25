// require('dotenv').config()

// const TelegramBot = require('node-telegram-bot-api');
// const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
// const bot = new TelegramBot(TOKEN, { polling: true });

const display = (statsLatest) => {
  const stats = statsLatest.stats
  const inc = statsLatest.increase
  console.log(inc)
  const statsDisplay =
    `<b>станом на ${statsLatest.date}
(${statsLatest.day}-й день війни) 
втрати русні становлять: </b> \n
🐷 особового складу: ${stats.personnel_units} <i>(+${inc.personnel_units})</i>
🚜 танків: ${stats.tanks} <i>(+${inc.tanks})</i>
💫 ББМ: ${stats.armoured_fighting_vehicles} <i>(+${inc.armoured_fighting_vehicles})</i>
💥 арт. систем: ${stats.artillery_systems} <i>(+${inc.artillery_systems})</i>
📣 РСЗВ: ${stats.mlrs} <i>(+${inc.mlrs})</i>
💨 засобів ППО: ${stats.aa_warfare_systems} <i>(+${inc.aa_warfare_systems})</i>
✈️ літаків: ${stats.planes} (<i>+${inc.planes}</i>)
🚁 гелікоптерів: ${stats.helicopters} <i>(+${inc.helicopters})</i>
⛽️ автотехніки та автоцистерн: ${stats.vehicles_fuel_tanks} <i>(+${inc.vehicles_fuel_tanks})</i>
🛳 кораблів/катерів: ${stats.warships_cutters} <i>(+${inc.warships_cutters})</i>
🛩 БПЛА: ${stats.cruise_missiles} <i>(+${inc.cruise_missiles})</i>
🛰 спец. техніки: ${stats.uav_systems} <i>(+${inc.uav_systems})</i>
💥 установок ОТРК/ТРК: ${stats.special_military_equip} <i>(+${inc.special_military_equip})</i>
🚀 крилатих ракет: ${stats.atgm_srbm_systems} <i>(+${inc.atgm_srbm_systems})</i>
    `
  return statsDisplay
}

module.exports = {
  display
}