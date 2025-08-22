import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

function App() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Format time like 10:45 PM
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Send message to backend
  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = {id: Date.now(), sender: "user", text: input, time: getCurrentTime() };
    setMessages((prev) => [...prev, newMessage]);

    try {
      socket.emit("ai-message", input );
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Error connecting to backend",
          time: getCurrentTime(),
        },
      ]);
    }

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  useEffect(() => {
    const socketinstance = io("http://localhost:3000");
    setSocket(socketinstance);
    socketinstance.on("ai-response", (data) => {
      const botMessage = {
        id: Date.now()+1,
        sender: "bot",
        text: data,
        time: getCurrentTime(),
      };
      setMessages((prev) => [...prev, botMessage]);
    });
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Header */}
      <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <h1 className="text-xl font-semibold text-gray-800">🤖 ChatBot</h1>
        <span className="text-sm text-gray-500">Powered by AI</span>
      </header>

      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div>
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl shadow-md ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
              <p className="text-xs text-gray-500 mt-1 px-2">{msg.time}</p>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input field */}
      <div className="p-4 bg-white border-t flex items-center space-x-3">
        <input
          type="text"
          className="flex-1 p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={sendMessage}
          className="px-5 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
