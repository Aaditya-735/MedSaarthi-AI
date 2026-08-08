function FeatureCard({ icon, title, description }) {
    return (
        <div
            style={{
                background: "white",
                borderRadius: "15px",
                padding: "30px",
                textAlign: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                transition: ".3s",
            }}
        >
            <div
                style={{
                    fontSize: "55px",
                    marginBottom: "20px",
                }}
            >
                {icon}
            </div>

            <h2>{title}</h2>

            <p
                style={{
                    marginTop: "15px",
                    color: "#64748B",
                    lineHeight: "28px",
                }}
            >
                {description}
            </p>
        </div>
    );
}

export default FeatureCard;