require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  telegramKey: process.env.TELEGRAM_API_KEY,
};
