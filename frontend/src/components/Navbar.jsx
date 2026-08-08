import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";

function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 8%",
                background: "#ffffff",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                position: "sticky",
                top: 0,
                zIndex: 1000,
            }}
        >
            <Link
                to="/"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#2563EB",
                }}
            >
                <FaHeartbeat size={28} />
                MedSaarthi AI
            </Link>

            <div
                style={{
                    display: "flex",
                    gap: "35px",
                    fontWeight: "500",
                    color: "#334155",
                }}
            >
                <Link to="/">Home</Link>
                <Link to="/report">Report</Link>
                <Link to="/chat">AI Chat</Link>
                <Link to="/search">Search</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}

export default Navbar;