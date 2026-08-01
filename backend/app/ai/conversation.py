from collections import defaultdict

class ConversationManager:

    def __init__(self):
        self.history = defaultdict(list)

    def add_message(self, session_id: str, role: str, message: str):
        self.history[session_id].append({
            "role": role,
            "message": message
        })

        # Keep only last 10 messages
        self.history[session_id] = self.history[session_id][-10:]

    def get_context(self, session_id: str) -> str:
        chats = self.history.get(session_id, [])

        if not chats:
            return ""

        context = ""

        for chat in chats:
            context += f"{chat['role']}: {chat['message']}\n"

        return context

    def clear(self, session_id: str):
        self.history.pop(session_id, None)


conversation_manager = ConversationManager()