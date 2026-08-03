class SafetyManager:

    def __init__(self):
        self.high_risk_keywords = [

            # Heart
            "chest pain",
            "heart attack",
            "cardiac arrest",

            # Breathing
            "can't breathe",
            "cannot breathe",
            "difficulty breathing",
            "shortness of breath",

            # Stroke
            "stroke",
            "face drooping",
            "slurred speech",
            "cannot move arm",

            # Bleeding
            "heavy bleeding",
            "severe bleeding",
            "blood won't stop",

            # Consciousness
            "unconscious",
            "passed out",
            "not waking up",

            # Suicide
            "suicide",
            "kill myself",
            "end my life",
            "want to die",
            "self harm",

            # Poisoning
            "poison",
            "overdose",

            # Seizure
            "seizure",
            "convulsion"
        ]

    def is_high_risk(self, text: str) -> bool:

        text = text.lower()

        return any(keyword in text for keyword in self.high_risk_keywords)


safety_manager = SafetyManager()