"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I assist you today?", sender: "ai" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "I see! Let's work on that together.",
          sender: "ai",
        },
      ]);
    }, 800);

    setInput("");
  };

  return (
    <div className="bg-card-light dark:bg-card-dark rounded-xl p-6 shadow-lg flex flex-col h-[500px] w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
        AI Health Assistant
      </h2>

      {/* Chat history */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-3 pb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[80%] p-3 rounded-xl shadow-sm transition-all duration-300 ${
              msg.sender === "user"
                ? "self-end bg-primary/20 text-foreground-light dark:text-foreground-dark"
                : "self-start bg-gray-200 dark:bg-gray-700 text-foreground-light dark:text-foreground-dark"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 text-foreground-light dark:text-foreground-dark"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-primary text-black px-4 py-2 rounded-xl hover:bg-opacity-90 transition-all duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
}
