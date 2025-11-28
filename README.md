# Mini Code Copilot

A lightweight, AI-powered code generation tool designed to assist developers by generating code snippets from natural language prompts. This project features a modern, responsive React frontend and a mock Node.js backend to simulate AI responses.

## 🚀 Features

### Core Functionality
- **Prompt Input**: Natural language input for code generation requests.
- **Code Generation**: Simulates AI code generation with a loading state.
- **Syntax Highlighting**: Beautifully formatted code output using `react-syntax-highlighter`.
- **Language Support**: Supports JavaScript, Python, Java, C, C++, and TypeScript.
- **Mock Backend**: A Node.js/Express server that simulates AI processing with realistic delays and templates.

### UI/UX Enhancements
- **Responsive Design**: Optimized for both desktop (split view) and mobile (stacked view) devices.
- **Theme Toggle**: Switch between Light and Dark modes for comfortable viewing.
- **History Panel**:
  - Automatically saves generated prompts and code to local storage.
  - **Search & Filter**: Search through history by prompt or language, and filter by "Favorites".
  - **Favorites**: Mark frequently used snippets as favorites.
  - **Delete**: Remove individual history items.
- **Copy to Clipboard**: Easily copy generated code to your clipboard.
- **Clean Aesthetics**: Minimalist interface built with Tailwind CSS, featuring smooth transitions and a polished look.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Code Display**: [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
- **HTTP Client**: [Axios](https://axios-http.com/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Middleware**: [CORS](https://github.com/expressjs/cors)

## 📂 Project Structure

```
frontend/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # UI Components (PromptInput, CodeOutput, etc.)
│   │   ├── App.jsx         # Main Application Logic
│   │   └── main.jsx        # Entry Point
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node.js Backend
│   ├── index.js            # Server Entry Point & Mock Logic
│   └── package.json
└── README.md
```

## ⚡ Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher) installed on your machine.

### 1. Clone the Repository
```bash
git clone <repository-url>
cd frontend
```

### 2. Setup Backend
Navigate to the server directory, install dependencies, and start the server.

```bash
cd server
npm install
npm start
```
The backend will start running at `http://localhost:3001`.

### 3. Setup Frontend
Open a new terminal, navigate to the client directory, install dependencies, and start the development server.

```bash
cd client
npm install
npm run dev
```
The frontend will be available at `http://localhost:5173`.

> **Note**: Ensure the backend is running before trying to generate code.

## 🔌 API Documentation

The backend provides a single endpoint to simulate code generation.

### `POST /api/generate`

**Request Body:**
```json
{
  "prompt": "Write a function to reverse a string",
  "language": "python"
}
```

**Response:**
```json
{
  "code": "# Python solution for: Write a function to reverse a string\n\ndef solution():\n    print(\"Hello from Code Copilot!\")\n    # TODO: Implement logic here\n\nif __name__ == \"__main__\":\n    solution()",
  "language": "python",
  "timestamp": 1716451200000
}
```

## 🧠 Design Decisions

- **Separation of Concerns**: The project is strictly divided into `client` and `server` directories to mimic a real-world full-stack application structure.
- **Mocking Strategy**: Instead of integrating a paid AI API (like OpenAI) for this assignment, a robust mock system was implemented. It uses templates and simple keyword matching (e.g., detecting "loop") to provide dynamic-feeling responses without external dependencies.
- **State Management**: React's `useState` and `useEffect` are used for local state management. `localStorage` is leveraged to persist user history and theme preferences, ensuring a seamless experience across reloads.
- **Styling**: Tailwind CSS was chosen for its utility-first approach, allowing for rapid UI development and easy implementation of dark mode and responsive layouts.

## 🚀 Future Improvements

If I had more time, I would implement the following:

1.  **Real AI Integration**: Connect the backend to the OpenAI API or Anthropic API to generate actual working code based on prompts.
2.  **User Authentication**: Add login/signup functionality (e.g., using Firebase or Auth0) to sync history across devices.
3.  **Code Execution**: Integrate a sandboxed environment (like Piston API) to run the generated code directly in the browser.
4.  **Advanced History Management**: Add folders or tags to organize saved snippets better.
5.  **Unit & Integration Tests**: Add testing with Jest and React Testing Library to ensure reliability.

## 📄 License

This project is licensed under the ISC License.
