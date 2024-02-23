const TelegramBot = require("node-telegram-bot-api");
const { telegramKey } = require("../configs");

const bot = new TelegramBot(telegramKey, { polling: true });

module.exports = bot;
