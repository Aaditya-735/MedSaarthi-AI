"""
Response Formatter

Formats AI responses before they are returned to the client.
Keeps MedSaarthi AI responses clean and consistent.
"""

import re


class ResponseFormatter:

    def format_chat_response(self, response: str) -> str:
        """
        Clean and normalize AI chat responses.
        """

        if not response:
            return response

        # Remove extra blank lines
        response = re.sub(r"\n{3,}", "\n\n", response)

        # Remove trailing spaces
        response = "\n".join(line.rstrip() for line in response.splitlines())

        # Strip leading/trailing whitespace
        response = response.strip()

        return response


    def format_report_response(self, response: str) -> str:
        return response.strip()


formatter = ResponseFormatter()