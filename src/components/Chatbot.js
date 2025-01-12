import React, { useState } from 'react';
import Groq from "groq-sdk"; 
import './Chatbot.css';



const groq = new Groq({
      apiKey: "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",
    dangerouslyAllowBrowser: true, // We use this too allow constant rendering even after using Groq 
});

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    setError(null); 
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    const aboutMe = `{
      role: "system", 
      content: "I am Dhruv Dawar, an 18-year-old student studying BTech in Computer Science at Delhi Technological University. I have proficiency in Python, C, C++, JavaScript, React, MongoDB, Express, Node, Flutter, and Dart. I enjoy exploring various fields in technology, such as blockchain, machine learning, and web development. I am involved in different projects, ranging from legal aid applications to hospital management systems. I am also working on web3 solutions and open-source projects. My main goal is to learn continuously and apply my skills to solve real-world problems. Prompt for LLM: Limit responses to the information provided about Dhruv Dawar, including his educational background, technical skills, and projects. Avoid any unnecessary praise or information not mentioned here."
    }`;

    try {
      // Use Groq SDK to send the message
      const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile", 
        messages: [
          { role: "system", content: aboutMe },
          ...messages,
          userMessage,
        ],
        max_tokens: 100, 
      });

      console.log(response.choices)
      const botMessage = response.choices[0].message;
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (err) {
      console.error("Error:", err.message);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbox">
      <div className="chatbox-header">
        <h2>About Me</h2>
      </div>

      <div className="chatbox-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chatbox-message ${msg.role === "user" ? "user-message" : "bot-message"}`}
          >
            <p>{msg.content}</p>
          </div>
        ))}
        {error && (
          <div className="chatbox-error">
            <p>{error}</p>
          </div>
        )}
      </div>

      <form className="chatbox-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message"
          disabled={loading}
        />
        <button type="submit" disabled={loading || !input}>
          {loading ? "Loading..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Chatbox;
