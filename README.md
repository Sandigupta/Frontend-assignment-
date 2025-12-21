# Code Copilot

A lightweight, AI-assisted code generation tool that converts natural language prompts into code snippets. Developed using React and Express, the application features a modern user interface with dark mode, syntax highlighting, and persistent history management.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge\&logo=react\&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18.2-000000?style=for-the-badge\&logo=express\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)

<img width="1920" height="868" alt="Image" src="https://github.com/user-attachments/assets/402a76a1-903d-49dd-a43b-f2d1c790ea09" />
<img width="1920" height="868" alt="Image" src="https://github.com/user-attachments/assets/7824829c-1842-48fc-96e5-1ded11cd9e9d" />


## History Button on Navbar when display size of mobile: 
<img width="685" height="96" alt="Image" src="https://github.com/user-attachments/assets/8d940eda-5cb5-4c20-bfd7-f132f09d3817" />


## History panel on clicking Navbar Button:
<img width="688" height="1219" alt="Image" src="https://github.com/user-attachments/assets/4d19f39d-7b20-45ab-8a07-d91424170150" />


---

## Overview

Mini Code Copilot is a demonstration of full-stack development skills featuring a mock AI system capable of generating code based on user prompts. Users can provide a natural language description and select their preferred programming language to receive a formatted code snippet.

### Key Highlights

* Complete full-stack implementation (React frontend + Express backend)
* Intelligent mock AI engine using keyword-based code generation
* Modern, production-ready UI with dark mode
* Persistent localStorage-based history with search, filters, and favorites
* Clean architecture with reusable, modular components

---

## Features

### Core Functionality

#### Prompt Input System

* Natural language support
* Real-time character counter (up to 500 characters)
* Multi-line input with automatic expansion
* Validation and clear error feedback

#### AI Code Generation

* Simulated AI with realistic loading states
* Keyword detection (loops, functions, classes, etc.)
* Supports six languages: JavaScript, Python, TypeScript, Java, C++, and C

#### Code Output Display

* Syntax highlighting (VS2015 theme)
* Line numbers
* One-click copy functionality

### Advanced Features

#### Language Selector

* Dropdown menu
* Persistent language preference
* Language badges

#### History Management Panel

* Automatic saving of all generated snippets
* Full-text search
* Language-based filtering
* Favorite marking
* Individual deletion
* Timestamps
* Persistent storage

#### Theme Toggle

* Light and dark mode
* Smooth transitions
* Preference stored in localStorage

#### Responsive Design

* Desktop split layout
* Tablet optimized
* Mobile-friendly vertical layout
* Touch-optimized controls

### UI/UX Enhancements

* Skeleton loaders
* Friendly error messages
* Smooth animations
* Accessibility (semantic HTML, ARIA labels)
* Minimalistic and consistent styling

---

## Architecture

### System Design

```
┌─────────────────────────────────────────────────────────┐
│                      CLIENT (React)                       │
│  ┌───────────────────────────────────────────────────┐    │
│  │                   App Component                   │    │
│  │  ┌─────────────┐  ┌──────────────┐  ┌──────────┐  │    │
│  │  │  Prompt     │  │    Code      │  │ History  │  │    │
│  │  │   Input     │  │   Output     │  │  Panel   │  │    │
│  │  └─────────────┘  └──────────────┘  └──────────┘  │    │
│  └───────────────────────────────────────────────────┘    │
│                             │                             │
│                    ┌────────▼────────┐                    │
│                    │  Axios Client   │                    │
└────────────────────┼──────────────────────────────────────┘
                     │
              HTTP POST /api/generate
                     │
┌────────────────────▼──────────────────────────────────────┐
│                   SERVER (Express.js)                     │
│  ┌───────────────────────────────────────────────────┐    │
│  │              /api/generate Endpoint               │    │
│  │  ┌─────────────────────────────────────────────┐  │    │
│  │  │      Mock AI Processing Engine              │  │    │
│  │  │  • Keyword detection                        │  │    │
│  │  │  • Language templates                       │  │    │
│  │  │  • Simulated delay                          │  │    │
│  │  └─────────────────────────────────────────────┘  │    │
│  └───────────────────────────────────────────────────┘    │
└───────────────────────────────────────────────────────────┘
```

### Data Flow

```
User Input → Validation → API Request → Backend Processing  
     ↓                                  ↓  
 Loading State                Template-Based Code Generation  
     ↓                                  ↓  
 Display Output ← JSON Response ← Mock AI Output  
     ↓  
 History Saved (localStorage)  
```

### Component Hierarchy

```
Component/
│
├── PromptInput.jsx
├── CodeOutput.jsx
└── HistoryPanel.jsx
```

---

## Tech Stack

### Frontend

| Technology               | Version | Purpose                |
| ------------------------ | ------- | ---------------------- |
| React                    | 18.2.0  | UI framework           |
| Vite                     | 4.4.5   | Dev server and bundler |
| Tailwind CSS             | 3.3.0   | Styling                |
| Axios                    | 1.5.0   | HTTP client            |
| Lucide React             | 0.263.1 | Icons                  |
| React Syntax Highlighter | 15.5.0  | Code display           |

### Backend

| Technology | Version | Purpose              |
| ---------- | ------- | -------------------- |
| Node.js    | 14+     | Runtime              |
| Express.js | 4.18.2  | API framework        |
| CORS       | 2.8.5   | Cross-origin support |


---

## Project Structure

```
frontend/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── eslint.config.js
│
├── server/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## Setup Instructions

### Prerequisites

* Node.js v14+
* npm or yarn
* Modern browser

### 1. Clone Repository

```bash
git clone <repository-url>
cd frontend
```

### 2. Setup Backend
Navigate to the server directory, install dependencies, and start the server.
=======
### 2. Backend Setup

```bash
cd server
npm install
npm start
```

The backend will start running at `http://localhost:3001`.

### 3. Setup Frontend
Open a new terminal, navigate to the client directory, install dependencies, and start the development server.
=======

Expected:

```
Mock AI backend running on http://localhost:3001
```

### 3. Frontend Setup

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
=======

Expected:

```
Local: http://localhost:5173/
```

### 4. Open Application

Visit:

```
http://localhost:5173
```

---

## API Documentation

### Base URL

```
http://localhost:3001
```

### POST /api/generate

Generates code from a prompt and language selection.

#### Request Body

```json
{
  "prompt": "Write a function to reverse a string",
  "language": "python"
}
```

<<<<<<< HEAD
**Response:**
```json
{
  "code": "# Python solution for: Write a function to reverse a string\n\ndef solution():\n    print(\"Hello from Code Copilot!\")\n    # TODO: Implement logic here\n\nif __name__ == \"__main__\":\n    solution()",
=======
#### Successful Response

```json
{
  "code": "...generated code...",
  "language": "python",
  "timestamp": 1716451200000
}
```

##  Design Decisions

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
=======
#### Error Codes

* **400** – Missing required fields
* **500** – Server-side processing error

### Mock AI Logic

| Keywords         | Output              |
| ---------------- | ------------------- |
| loop, for, while | Loop template       |
| function, method | Function template   |
| class, object    | Class template      |
| sort, filter     | List/array template |
| none             | General template    |

---

## Design Decisions

### Separation of Concerns

Frontend and backend are developed separately for scalability and independent deployment.

### Mock Backend

Keyword-based detection simulates AI behavior without requiring external paid APIs.

### State Management

React's `useState` and `useEffect` combined with localStorage enable lightweight persistence.

### Styling

Tailwind CSS used for consistency, efficiency, and responsive design.

### Component Architecture

Each component has a single responsibility and is reusable.

### Error Handling

Clear distinctions between network, server, and validation errors.

### Accessibility

Semantic HTML elements and ARIA attributes implemented throughout.

### LocalStorage Schema

```json
[
  {
    "id": "unique-id",
    "prompt": "example",
    "code": "generated code",
    "language": "python",
    "timestamp": 1716451200000,
    "isFavorite": false
  }
]
```

---

## Future Improvements

### Real AI Integration

Potential integration with OpenAI, Gemini, or Anthropic APIs including streaming responses.

### Authentication & Cloud Sync

User login, cross-device syncing, shared prompts.

### Code Editor Integration

Monaco or CodeMirror for in-app editing.

### Language Expansion

Additional support for Go, Rust, Swift, PHP, etc.

### Prompt Suggestions

Autocomplete, reusable templates, and personalized suggestions.
