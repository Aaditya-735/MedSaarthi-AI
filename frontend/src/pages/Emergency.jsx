import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { checkEmergency } from "../services/api";


function Emergency() {

    const [symptoms, setSymptoms] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const handleCheck = async () => {

        if (!symptoms.trim()) {
            setError("Please describe your symptoms.");
            return;
        }

        try {

            setLoading(true);
            setError("");
            setResult(null);

            const response = await checkEmergency(symptoms);

            setResult(response);

        } catch (err) {

            console.error("Emergency API Error:", err);

            setError(
                err.response?.data?.detail ||
                "Failed to analyze the symptoms."
            );

        } finally {

            setLoading(false);

        }
    };


    return (

        <div
            style={{
                maxWidth: "900px",
                margin: "50px auto",
                padding: "0 20px"
            }}
        >

            <h1>Emergency Health Guidance</h1>

            <p>
                Describe your symptoms to receive immediate AI-powered
                guidance.
            </p>


            <div
                style={{
                    marginTop: "30px",
                    padding: "25px",
                    background: "white",
                    borderRadius: "15px",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
                }}
            >

                <h2>Describe Your Symptoms</h2>

                <textarea
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    placeholder="Example: I have severe chest pain and difficulty breathing..."
                    rows="6"
                    style={{
                        width: "100%",
                        marginTop: "15px",
                        padding: "15px",
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        resize: "vertical"
                    }}
                />


                <button
                    onClick={handleCheck}
                    disabled={loading}
                    style={{
                        marginTop: "20px",
                        padding: "14px 30px",
                        border: "none",
                        borderRadius: "10px",
                        background: "#dc2626",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "600",
                        cursor: "pointer"
                    }}
                >
                    {loading
                        ? "Analyzing..."
                        : "Check Symptoms"}
                </button>


                {error && (
                    <p
                        style={{
                            color: "#dc2626",
                            marginTop: "15px"
                        }}
                    >
                        {error}
                    </p>
                )}

            </div>


            {result && (

                <div
                    style={{
                        marginTop: "30px",
                        padding: "30px",
                        background: "white",
                        borderRadius: "15px",
                        boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
                    }}
                >

                    {result.high_risk && (
                        <div
                            style={{
                                padding: "15px",
                                marginBottom: "20px",
                                background: "#fee2e2",
                                border: "1px solid #ef4444",
                                borderRadius: "10px",
                                color: "#991b1b",
                                fontWeight: "600"
                            }}
                        >
                            Potentially serious symptoms detected.
                            Seek immediate professional medical care.
                        </div>
                    )}


                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                    >
                        {result.response}
                    </ReactMarkdown>

                </div>

            )}

        </div>
    );
}


export default Emergency;