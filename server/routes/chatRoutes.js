const express = require('express');
const router = express.Router();
const { handleChat } = require('../controllers/chatController');

router.post('/', handleChat);

module.exports = router;
// import model from "./gemini.js";
// import { healthPrompt } from "./prompt.js";

// export async function askHealthBot(userMessage) {
//   const prompt = await healthPrompt.invoke({
//     input: userMessage,
//   });

//   const response = await model.invoke(prompt);

//   return response.content;
// }