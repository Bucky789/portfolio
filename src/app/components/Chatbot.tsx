"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "bot";
  content: string;
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Hi! I’m a chatbot trained on Manthan’s background. Ask me about his skills, projects, or experience.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!messagesRef.current) return;
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: data.answer ?? "Something went wrong.",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Error connecting to chatbot backend.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass rounded-3xl border border-white/20 bg-black/40 text-white p-4 w-full max-w-md flex flex-col lg:h-[520px] max-h-[520px]">
      {/* Header */}
      <div className="text-sm font-semibold mb-3 text-white shrink-0">
        Chatbot
      </div>

      {/* Messages */}
      <div
        ref={messagesRef}
        className="flex-1 overflow-y-auto space-y-3 mb-4 text-sm chat-scroll"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`rounded-xl px-3 py-2 max-w-[90%] ${
              msg.role === "user"
                ? "ml-auto bg-[#00ADB5] text-black"
                : "bg-white/10 text-white"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="rounded-xl px-3 py-2 max-w-[90%] bg-white/10 text-white flex items-center gap-2">
            <span className="animate-pulse">Thinking</span>
            <span className="flex gap-1">
              <span className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:300ms]" />
            </span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2 shrink-0">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask the chatbot…"
          disabled={loading}
          className="flex-1 rounded-full px-3 py-2 text-sm bg-black/40 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none disabled:opacity-50"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="rounded-full bg-white px-4 text-sm font-semibold text-black hover:bg-gray-200 transition disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
