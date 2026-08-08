import React from "react";
import "../styles/about.css";

function About() {
    return (
        <div className="about-page">

            {/* Hero */}
            <section className="about-hero">
                <h1>About MedSaarthi AI</h1>

                <p>
                    An AI-powered healthcare assistant designed to help users
                    understand medical information, analyze reports, and get
                    intelligent health guidance.
                </p>
            </section>

            {/* About Project */}
            <section className="about-section">

                <h2>What is MedSaarthi AI?</h2>

                <p>
                    MedSaarthi AI is an AI-powered healthcare assistance
                    platform that combines artificial intelligence with
                    healthcare information and medical report analysis.
                </p>

                <p>
                    Users can upload medical reports, ask health-related
                    questions, search for medical information, and receive
                    AI-generated explanations in an easy-to-understand format.
                </p>

            </section>

            {/* Features */}
            <section className="about-section">

                <h2>What Can MedSaarthi Do?</h2>

                <div className="about-features">

                    <div className="about-feature-card">
                        <h3>Medical Report Analysis</h3>
                        <p>
                            Upload medical reports and receive AI-generated
                            summaries and explanations of important findings.
                        </p>
                    </div>

                    <div className="about-feature-card">
                        <h3>AI Health Assistant</h3>
                        <p>
                            Ask health-related questions and interact with
                            MedSaarthi through a conversational AI assistant.
                        </p>
                    </div>

                    <div className="about-feature-card">
                        <h3>Medical Search</h3>
                        <p>
                            Search medical topics and receive AI-powered
                            explanations of healthcare information.
                        </p>
                    </div>

                    <div className="about-feature-card">
                        <h3>Emergency Guidance</h3>
                        <p>
                            The platform is designed to identify potentially
                            urgent situations and provide appropriate guidance.
                        </p>
                    </div>

                </div>

            </section>

            {/* Technology */}
            <section className="about-section">

                <h2>Technology Behind MedSaarthi</h2>

                <div className="about-tech">

                    <span>React</span>
                    <span>FastAPI</span>
                    <span>Python</span>
                    <span>Google Gemini</span>
                    <span>OCR</span>

                </div>

            </section>

            {/* Disclaimer */}
            <section className="about-disclaimer">

                <h2>Medical Disclaimer</h2>

                <p>
                    MedSaarthi AI provides educational and informational
                    healthcare assistance. It is not a replacement for
                    professional medical advice, diagnosis, or treatment.
                </p>

                <p>
                    Users should consult a qualified healthcare professional
                    for medical decisions and emergencies.
                </p>

            </section>

        </div>
    );
}

export default About;