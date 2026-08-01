class SafetyManager:

    HIGH_RISK_KEYWORDS = [
        "heart attack",
        "stroke",
        "chest pain",
        "difficulty breathing",
        "suicide",
        "overdose",
        "unconscious",
        "seizure",
        "poison",
    ]

    def is_high_risk(self, text: str) -> bool:
        text = text.lower()
        return any(word in text for word in self.HIGH_RISK_KEYWORDS)


safety_manager = SafetyManager()