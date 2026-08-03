class ProfileManager:

    def __init__(self):
        self.user_profiles = {}

    def update(self, session_id: str, text: str):

        if session_id not in self.user_profiles:
            self.user_profiles[session_id] = []

        self.user_profiles[session_id].append(text)

    def get_profile(self, session_id: str):

        if session_id not in self.user_profiles:
            return ""

        return "\n".join(self.user_profiles[session_id])


profile_manager = ProfileManager()