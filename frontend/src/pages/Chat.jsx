import React, { useState } from "react";
import { sendChatMessage } from "../services/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../styles/chat.css";

function Chat() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSend = async () => {
        if (!message.trim()) {
            return;
        }

        const userMessage = message;

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: userMessage
            }
        ]);

        setMessage("");
        setLoading(true);
        setError("");

        try {
            const result = await sendChatMessage(userMessage);

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: result.response
                }
            ]);
        } catch (err) {
            console.error("Chat API Error:", err);

            setError(
                err.response?.data?.detail ||
                "Failed to get AI response."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="chat-page">

            <h1 className="chat-title">
                AI Health Assistant
            </h1>

            <p className="chat-description">
                Ask questions about your health and get AI-powered
                assistance.
            </p>

            {/* Chat Messages */}

            <div className="chat-messages">

                {messages.length === 0 && (
                    <p className="chat-empty">
                        Start a conversation with MedSaarthi AI
                    </p>
                )}

                {messages.map((msg, index) => (

                    <div
                        key={index}
                        className={`message-row ${
                            msg.role === "user"
                                ? "user-row"
                                : "assistant-row"
                        }`}
                    >

                        <div
                            className={`message-bubble ${
                                msg.role === "user"
                                    ? "user-bubble"
                                    : "assistant-bubble"
                            }`}
                        >

                            {msg.role === "assistant" ? (
                                <div className="chat-message-content">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {msg.content}
                                    </ReactMarkdown>
                                </div>
                            ) : (
                                msg.content
                            )}

                        </div>

                    </div>

                ))}

                {loading && (
                    <div className="chat-loading">
                        MedSaarthi AI is thinking...
                    </div>
                )}

            </div>

            {/* Error */}

            {error && (
                <p className="chat-error">
                    {error}
                </p>
            )}

            {/* Input */}

            <div className="chat-input-container">

                <textarea
                    className="chat-textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask a health-related question..."
                    rows="3"
                />

                <button
                    className="chat-send-button"
                    onClick={handleSend}
                    disabled={loading || !message.trim()}
                >
                    Send
                </button>

            </div>

        </div>
    );
}

export default Chat;