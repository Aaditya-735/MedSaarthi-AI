import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function AnalysisCard({ analysis }) {

    if (!analysis) return null;

    return (

        <div className="analysis-card">

            <h2>AI Analysis Result</h2>

            <div className="analysis-info">

                <strong>File:</strong>

                <span>{analysis.filename}</span>

            </div>

            <div className="analysis-result">

                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {analysis.analysis}
                </ReactMarkdown>

            </div>

        </div>

    );

}

export default AnalysisCard;