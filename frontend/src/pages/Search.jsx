import React, { useState } from "react";
import { searchMedical } from "../services/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Search() {

    const [query, setQuery] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async () => {

        if (!query.trim()) {
            return;
        }

        setLoading(true);
        setError("");
        setResult("");

        try {

            const response = await searchMedical(query);

            setResult(response.response);

        } catch (err) {

            console.error("Search API Error:", err);

            setError(
                err.response?.data?.detail ||
                "Failed to get search results."
            );

        } finally {

            setLoading(false);

        }
    };


    const handleKeyDown = (e) => {

        if (e.key === "Enter" && !e.shiftKey) {

            e.preventDefault();

            handleSearch();

        }

    };


    return (

        <div
            style={{
                padding: "40px",
                maxWidth: "900px",
                margin: "0 auto"
            }}
        >

            <h1>
                Medical Search
            </h1>

            <p>
                Search medical topics and get AI-powered information.
            </p>


            {/* Search Input */}

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "25px"
                }}
            >

                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search a medical topic..."
                    style={{
                        flex: 1,
                        padding: "14px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "16px"
                    }}
                />

                <button
                    onClick={handleSearch}
                    disabled={loading || !query.trim()}
                    style={{
                        padding: "12px 24px",
                        border: "none",
                        borderRadius: "8px",
                        background: "#2563eb",
                        color: "white",
                        fontSize: "16px",
                        cursor: "pointer"
                    }}
                >
                    {loading ? "Searching..." : "Search"}
                </button>

            </div>


            {/* Loading */}

            {loading && (

                <p
                    style={{
                        color: "#666",
                        marginTop: "25px"
                    }}
                >
                    Searching for medical information...
                </p>

            )}


            {/* Error */}

            {error && (

                <p
                    style={{
                        color: "red",
                        marginTop: "20px"
                    }}
                >
                    {error}
                </p>

            )}


            {/* Results */}

            {result && (

                <div
                    style={{
                        marginTop: "30px",
                        padding: "25px",
                        border: "1px solid #ddd",
                        borderRadius: "12px",
                        background: "#f8fafc",
                        lineHeight: "1.7"
                    }}
                >

                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {result}
                    </ReactMarkdown>

                </div>

            )}

        </div>

    );
}

export default Search;