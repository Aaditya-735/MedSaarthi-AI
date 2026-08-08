import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export const analyzeReport = async (file) => {

    const formData = new FormData();

    formData.append("session_id", "frontend-session");
    formData.append("file", file);

    const response = await API.post(
        "/report/analyze",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};