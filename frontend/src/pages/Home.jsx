import { Link } from "react-router-dom";

import {
    FaRobot,
    FaFileMedical,
    FaSearch,
    FaHeartbeat,
} from "react-icons/fa";

import FeatureCard from "../components/FeatureCard";

function Home() {
    return (
        <>
            {/* Hero */}

            <section
                style={{
                    padding: "100px 8%",
                    background:
                        "linear-gradient(135deg,#2563EB,#38BDF8)",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <h1
                    style={{
                        fontSize: "55px",
                        fontWeight: "700",
                    }}
                >
                    AI Powered Healthcare Assistant
                </h1>

                <p
                    style={{
                        marginTop: "25px",
                        fontSize: "20px",
                        maxWidth: "850px",
                        marginInline: "auto",
                        lineHeight: "35px",
                    }}
                >
                    Upload medical reports, chat with AI,
                    search medical information, and receive
                    intelligent health guidance powered by Gemini AI.
                </p>

                <div
                    style={{
                        marginTop: "50px",
                        display: "flex",
                        justifyContent: "center",
                        gap: "25px",
                    }}
                >
                    <Link to="/report">
                        <button
                            style={{
                                padding: "18px 35px",
                                border: "none",
                                borderRadius: "12px",
                                background: "white",
                                color: "#2563EB",
                                fontWeight: "bold",
                                fontSize: "17px",
                            }}
                        >
                            Analyze Report
                        </button>
                    </Link>

                    <Link to="/chat">
                        <button
                            style={{
                                padding: "18px 35px",
                                borderRadius: "12px",
                                background: "transparent",
                                border: "2px solid white",
                                color: "white",
                                fontSize: "17px",
                            }}
                        >
                            Start AI Chat
                        </button>
                    </Link>
                </div>
            </section>

            {/* Statistics */}

        <section
                style={{
                    padding: "60px 8%",
                    background: "#ffffff"
                }}
            >
            
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                        gap: "30px",
                        textAlign: "center"
                    }}
                >
                
                    <div>
                        <h1
                            style={{
                                fontSize: "45px",
                                color: "#2563EB"
                            }}
                        >
                            AI
                        </h1>
                        
                        <p>Powered by Google Gemini</p>
                    </div>
                        
                    <div>
                        
                        <h1
                            style={{
                                fontSize: "45px",
                                color: "#22C55E"
                            }}
                        >
                            4
                        </h1>
                        
                        <p>Healthcare Modules</p>
                        
                    </div>
                        
                    <div>
                        
                        <h1
                            style={{
                                fontSize: "45px",
                                color: "#EF4444"
                            }}
                        >
                            24×7
                        </h1>
                        
                        <p>AI Assistant</p>
                        
                    </div>
                        
                    <div>
                        
                        <h1
                            style={{
                                fontSize: "45px",
                                color: "#F59E0B"
                            }}
                        >
                            Fast
                        </h1>
                        
                        <p>Medical Analysis</p>
                        
                    </div>
                        
                </div>
                        
            </section>

            {/* Features */}

            <section
                style={{
                    padding: "80px 8%",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        marginBottom: "60px",
                    }}
                >
                    Core Features
                </h1>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit,minmax(260px,1fr))",
                        gap: "30px",
                        
                    }}
                >
                    <FeatureCard
                        icon={<FaFileMedical color="#2563EB" />}
                        title="Medical Report Analysis"
                        description="Upload laboratory reports and receive AI-generated summaries and explanations."
                        
                    />

                    <FeatureCard
                        icon={<FaRobot color="#22C55E" />}
                        title="AI Health Assistant"
                        description="Have natural conversations with an AI assistant that remembers context."
                    />

                    <FeatureCard
                        icon={<FaSearch color="#F97316" />}
                        title="Medical Search"
                        description="Ask medical questions and receive evidence-based AI explanations."
                    />

                    <FeatureCard
                        icon={<FaHeartbeat color="#EF4444" />}
                        title="Emergency Detection"
                        description="Detect emergency symptoms and receive urgent medical guidance."
                    />
                </div>
            </section>

            {/* How MedSaarthi Works */}

            <section
                style={{
                    padding: "90px 8%"
                }}
            >
            
            <h1
            style={{
            textAlign:"center",
            marginBottom:"70px"
            }}
            >
            How MedSaarthi Works
            </h1>

            <div
            style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
            gap:"30px"
            }}
            >
            
            <div>

            <h2>① Upload</h2>

            <p>
            Upload your laboratory report or
            medical image.
            </p>

            </div>

            <div>

            <h2>② AI Analysis</h2>

            <p>

            Gemini AI analyzes the report
            and explains the findings.

            </p>

            </div>

            <div>

            <h2>③ Ask Questions</h2>

            <p>

            Continue chatting naturally with
            AI regarding your report.

            </p>

            </div>

            <div>

            <h2>④ Stay Informed</h2>

            <p>

            Receive evidence-based
            medical information and
            emergency alerts.

            </p>

            </div>

            </div>

            </section>

             {/* Technology Stack */}


            <section
            style={{
            padding:"80px 8%",
            background:"#ffffff"
            }}
            >
            
            <h1
            style={{
            textAlign:"center",
            marginBottom:"60px"
            }}
            >
            Technology Stack
            </h1>

            <div
            style={{
            display:"flex",
            justifyContent:"center",
            flexWrap:"wrap",
            gap:"20px"
            }}
            >
            
            <button>React
            Frontend Framework</button>

            <button>FastAPI
            Backend API</button>

            <button>Python
            Language</button>

            <button>Gemini
            AI Model</button>

            <button>OCR
            Text Extraction</button>

            <button>Google AI Studio</button>

            </div>

            </section>

            {/* CTA Section */}

            <section
            style={{
            padding:"100px 8%",
            textAlign:"center",
            background:"#2563EB",
            color:"white"
            }}
            >
            
            <h1>

            Ready to Try MedSaarthi?

            </h1>

            <p
            style={{
            marginTop:"20px"
            }}
            >
            
            Upload a report or chat with AI
            to experience intelligent healthcare assistance.

            </p>

            <div
            style={{
            marginTop:"40px"
            }}
            >
            
            <Link to="/report">

                <button className="cta-btn">
                    Start Using MedSaarthi
                </button>

            </Link>

            </div>

            </section>
        </>
    );
}

export default Home;