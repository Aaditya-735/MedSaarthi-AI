class ReportMemory:

    def __init__(self):
        self.reports = {}

    def save(self, session_id: str, report_summary: str):
        self.reports[session_id] = report_summary

    def get(self, session_id: str):
        return self.reports.get(session_id, "")


report_memory = ReportMemory()