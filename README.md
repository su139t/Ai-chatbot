# 🤖 AI Chatbot - Real-Time Gemini AI Assistant

A modern real-time AI chatbot built using **React**, **Node.js**, **Socket.IO**, and the **Google Gemini API**. The application enables users to chat with Google's Gemini model through a clean, responsive interface with instant messaging powered by WebSockets.

---

# ✨ Features

* 🤖 AI-powered conversations using **Google Gemini**
* ⚡ Real-time messaging with **Socket.IO**
* 💬 Instant chatbot responses
* 🧠 Conversation history support
* 🎨 Clean and responsive chat interface
* 📱 Mobile-friendly design
* ⌨️ Send messages using **Enter** or the **Send** button
* 🕒 Timestamp for every message
* 🔄 Auto-scroll to the latest message

---

# 🛠 Tech Stack

| Technology        | Purpose                 |
| ----------------- | ----------------------- |
| React 19          | Frontend                |
| Vite              | Build Tool              |
| Tailwind CSS      | UI Styling              |
| Node.js           | Runtime                 |
| Express.js        | Backend Server          |
| Socket.IO         | Real-Time Communication |
| Google Gemini API | AI Response Generation  |
| dotenv            | Environment Variables   |

---

# 📂 Project Structure

```text
Ai-chatbot/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── src/
│       ├── app.js
│       └── service/
│           └── ai.service.js
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 🚀 Features Overview

## 💬 Real-Time Chat

Unlike traditional HTTP-based chat applications, this project uses **Socket.IO** to establish a persistent connection between the client and server.

This enables:

* Instant message delivery
* Low-latency communication
* Continuous conversation without repeated HTTP requests

---

## 🤖 Gemini AI Integration

User messages are sent to the backend, where they are forwarded to the **Google Gemini (`gemini-2.0-flash`)** model.

The AI generates context-aware responses using the stored conversation history, making replies more natural and relevant.

---

## 🧠 Chat History

The backend maintains conversation history during the session, allowing the AI to understand previous messages and provide contextual responses.

---

## 🎨 Modern User Interface

The frontend includes:

* User and bot chat bubbles
* Message timestamps
* Responsive layout
* Automatic scrolling to the latest message
* Clean and minimal design

---

# 🔄 Application Workflow

```text
User Message
      │
      ▼
React Frontend
      │
(Socket.IO)
      │
      ▼
Node.js + Express Server
      │
      ▼
Google Gemini API
      │
      ▼
AI Response
      │
(Socket.IO)
      │
      ▼
Frontend Chat Window
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/su139t/Ai-chatbot.git
```

---

## Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Start the backend server:

```bash
node server.js
```

The backend runs on:

```text
http://localhost:3000
```

---

## Frontend Setup

Open a new terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser:

```text
http://localhost:5173
```

---

# 📦 Dependencies

### Frontend

* React
* Vite
* Tailwind CSS
* Socket.IO Client

### Backend

* Express
* Socket.IO
* Google GenAI SDK
* dotenv

---

# 📸 Screenshots

### 🏠 Chat Interface

> Add screenshot here

---

### 💬 AI Conversation

> Add screenshot here

---

### 📱 Responsive View

> Add screenshot here

---

# 🔐 Environment Variables

Create a `.env` file inside the **backend** directory:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Obtain your API key from **Google AI Studio**.

---

# 💻 Available Scripts

### Frontend

Run development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

### Backend

Start the server:

```bash
node server.js
```

---

# 🚀 Future Improvements

* 🔐 User authentication
* 💾 Persistent chat history (MongoDB)
* 🌙 Dark mode
* 📎 File upload support
* 🎤 Voice input and speech-to-text
* 🔊 Text-to-speech responses
* 🖼️ Image generation support
* 📄 Markdown rendering
* 🤖 Streaming AI responses
* 📱 Progressive Web App (PWA)
* 🌍 Multi-language support
* 📚 Multiple chat sessions

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes:

```bash
git commit -m "Add New Feature"
```

4. Push your branch:

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request.

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

---

# 👨‍💻 Author

**Sumit Birla**

GitHub: https://github.com/su139t

---

# 📄 License

This project is licensed under the MIT License.

---

## ❤️ Built with React, Node.js, Socket.IO & Google Gemini AI
