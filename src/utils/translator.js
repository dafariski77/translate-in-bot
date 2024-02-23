const translate = require("../libs/googleTranslate");

const translator = async (text) => {
  try {
    const result = await translate(text, { to: "en" });

    return result.text;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = translator;
