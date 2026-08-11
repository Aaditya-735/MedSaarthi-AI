# MedSaarthi AI

MedSaarthi AI is an AI-powered healthcare assistant that helps users understand medical information, analyze medical reports, ask health-related questions, search medical topics, and receive emergency health guidance.

## Live Demo

Frontend:
https://medsaarthi-ai-frontend.onrender.com

Backend:
https://medsaarthi-ai-backend.onrender.com

## Features

- Medical Report Analysis
  - Upload a medical report
  - AI analyzes the report
  - Generates an easy-to-understand summary

- AI Health Assistant
  - Ask health-related questions
  - Receive AI-powered explanations

- Medical Search
  - Search for medical topics
  - Get AI-generated medical information

- Emergency Health Guidance
  - Describe symptoms
  - Detect potentially serious symptoms
  - Provides immediate safety guidance

## Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- Axios
- CSS

### Backend
- Python
- FastAPI
- Uvicorn
- Pydantic

### AI
- Google Gemini API

### Deployment
- Render
- GitHub

## Architecture

```text
User
  |
  v
React + Vite Frontend
  |
  | HTTP / REST API
  v
FastAPI Backend
  |
  +---- Report Analysis
  |
  +---- AI Chat
  |
  +---- Medical Search
  |
  +---- Emergency Guidance
  |
  v
Google Gemini API