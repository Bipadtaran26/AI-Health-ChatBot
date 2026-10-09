import React from "react";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <h1 className="text-center text-3xl font-bold p-4 bg-blue-600 text-white">
        AI Health Chatbot
      </h1>
      <Chat />
    </div>
  );
}

export default App;