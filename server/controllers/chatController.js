const { getResponse } = require("../utils/symptomChecker");

const handleChat = (req, res) => {
  const { message } = req.body;

  const reply = getResponse(message);

  res.json({
    reply,
    source: "Offline AI ⚙️",
  });
};

module.exports = { handleChat };

// const { getResponse } = require("../utils/symptomChecker");
// const { getGeminiResponse } = require("../utils/gemini");

// const handleChat = async (req, res) => {
//   const { message } = req.body;

//   if (!message) {
//     return res.status(400).json({ reply: "Message is required" });
//   }

//   const reply = await getGeminiResponse(message);

//   res.json({
//     reply,
//     source: "Google Gemini 🤖",
//   });
// };

// module.exports = { handleChat };