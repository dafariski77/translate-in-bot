const http = require("http");
const bot = require("./libs/bot");
const { port } = require("./configs");
const translator = require("./utils/translator");

const server = http.createServer();

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    "Welcome to TranslateIN bot, type your text and we can help you translate to English"
  );
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text;

  if (msg.text.startsWith("/start")) {
    return;
  }

  try {
    const result = await translator(message);

    bot.sendMessage(chatId, result);
  } catch (error) {
    console.log(error);

    bot.sendMessage(chatId, "Something error!");
  }
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
