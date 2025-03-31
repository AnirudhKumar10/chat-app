import React, { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { useNavigate } from "react-router-dom";

const SOCKET_SERVER_URL = "http://localhost:4000";

const Chat: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const newSocket: Socket = io(SOCKET_SERVER_URL, { auth: { token } });

    newSocket.on("message", (data: { user: string; text: string }) => {
      setMessages((prev) => [...prev, data]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [token, navigate]);

  const sendMessage = () => {
    if (message.trim() && socket) {
      socket.emit("message", message);
      setMessage("");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Chat Container */}
      <div className="m-auto w-full max-w-lg rounded-lg bg-white shadow-lg flex flex-col h-[80vh]">
        {/* Header */}
        <div className="p-4 bg-blue-600 text-white font-semibold text-lg rounded-t-lg">
          Chat
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "sent" ? "justify-end" : "justify-start"}`}>
              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  msg.sender === "sent"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t flex items-center bg-gray-100">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-lg outline-none"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={sendMessage}
            className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
