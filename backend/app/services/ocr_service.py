import io

import fitz  # PyMuPDF
from PIL import Image


class OCRService:

    async def extract_text(
        self,
        file_bytes: bytes,
        extension: str
    ):

        extension = extension.lower()

        if extension == "pdf":
            return self._extract_pdf(file_bytes)

        if extension in ["png", "jpg", "jpeg"]:
            return self._extract_image(file_bytes)

        raise Exception("Unsupported file type.")

    def _extract_pdf(self, file_bytes: bytes):

        document = fitz.open(stream=file_bytes, filetype="pdf")

        text = ""

        for page in document:
            text += page.get_text()

        document.close()

        return text.strip()

    def _extract_image(self, file_bytes: bytes):

        image = Image.open(io.BytesIO(file_bytes))

        return "[IMAGE RECEIVED]"