// require("dotenv").config();
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// const getGeminiResponse = async (message) => {
//   try {
//     const model = genAI.getGenerativeModel({
//       model: "gemini-2.0-flash",
//     });

//     const result = await model.generateContent({
//       contents: [
//         {
//           role: "user",
//           parts: [{ text: message }],
//         },
//       ],
//     });

//     return result.response.text();
//   } catch (error) {
//     console.error("Gemini Error FULL:", error);
//     return `Error: ${error.message}`;
//   }
// };

// module.exports = { getGeminiResponse };
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
  model: "gemini-2.0-flash",
  temperature: 0.7,
});

export default model;