import React, { useState } from "react";
import "../styles/report.css";
import UploadBox from "../components/report/UploadBox";
import { analyzeReport } from "../services/api";
import AnalysisCard from "../components/report/AnalysisCard";


function Report(){
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState("");
  const handleAnalyze = async () => {

    if (!selectedFile) {
        setError("Please select a file first.");
        return;
    }

    try {

        setLoading(true);
        setError("");

        const result = await analyzeReport(selectedFile);

        setAnalysis(result);

    }
    catch (err) {

            console.error("API Error:", err);

    if (err.response) {
        console.log("Status:", err.response.status);
        console.log("Data:", err.response.data);
    }

    setError(err.response?.data?.detail || "Failed to analyze report.");

    }
    finally {

        setLoading(false);

    }

};
    return (
      <div className="report-page">

        <h1>Medical Report Analysis</h1>

        <p>
          Upload your medical report and receive an AI-powered explanation.
        </p>

        {/* Upload Section */}
        <div className="upload-section">

          <UploadBox
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
        />
        

          <button
        className="analyze-btn"
        onClick={handleAnalyze}
        disabled={loading}
        >

        {loading ? "Analyzing..." : "Analyze Report"}
        </button>
        {
        error &&
        <p className="error">

        {error}

        </p>

        }

        </div>

        {/* Loading */}

        {loading && (
          <h3>Analyzing Report...</h3>
        )}

        

        {/* AI Result */}

        {
        analysis &&

        <AnalysisCard
            analysis={analysis}
        />

        }

      </div>
    );

}

export default Report;