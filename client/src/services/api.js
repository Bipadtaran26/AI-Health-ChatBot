import axios from "axios";

export const sendMessage = async (message) => {
  try {
    const res = await axios.post("http://localhost:5000/api/chat", {
      message,
    });

    return res.data.reply;
  } catch (error) {
    return "Server error. Please try again.";
  }
};