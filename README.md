# 🍉 Ask Watermelon

## 📖 Overview

Ask Watermelon is a Retrieval-Augmented Generation (RAG) platform designed to provide intelligent, context-aware conversations powered by Large Language Models (LLMs).

The application allows authenticated users to upload and manage documents, create chat sessions, and interact with AI models that can retrieve and use information from the uploaded knowledge base to generate more accurate and relevant responses.

Inspired by modern conversational AI platforms, Ask Watermelon combines a clean user experience with a scalable frontend architecture built using React, TypeScript, and Tailwind CSS.

### Key Goals

- 🤖 Provide a simple and intuitive AI chat experience
- 📚 Enable document-based knowledge retrieval through RAG
- 💬 Maintain persistent chat conversations
- 📄 Allow users to manage their personal document library
- 🔐 Secure access through authentication
- 📱 Deliver a responsive experience for both desktop and mobile devices

The project follows a component-based architecture focused on maintainability, scalability, and ease of development, making it suitable for both demonstrations and production-oriented environments.

## ✨ Features

* Login → Authentication
* Chat → AI Chat Interface + Chat Management + RAG
* Documents → Document Management/Embedding
* Mobile/Desktop → Responsive User Experience

### 🔐 Authentication

- Secure user authentication
- Session persistence through access tokens
- Protected access to application resources

### 💬 AI Chat Interface

- Real-time conversational experience
- Chat interface inspired by modern AI assistants
- Automatic conversation history loading
- Persistent chat sessions
- Support for multiple conversations
- Markdown rendering for AI-generated responses

### 🍉 Retrieval-Augmented Generation (RAG)

- Context-aware responses
- Document-grounded answers
- Enhanced response accuracy using uploaded knowledge sources
- Conversation context preservation

### 📚 Chat Management

- Create new chat sessions
- View recent conversations
- Switch between conversations
- Delete existing chats
- Automatic chat title generation based on the first user message

### 📄 Document Management

- Upload new documents
- View uploaded documents
- Delete existing documents
- Personal knowledge base management

### 📱 Responsive User Experience

- Desktop-optimized layout
- Mobile-friendly interface
- Collapsible sidebar navigation on mobile devices
- Consistent experience across screen sizes

### 🎨 Modern User Interface

- Clean and minimal design
- Component-based architecture
- Consistent design system
- Custom branding and visual identity
- Watermelon-themed UI elements and backgrounds

## 📱 Responsive Design

Ask Watermelon was designed to provide a consistent experience across different devices and screen sizes.

The interface automatically adapts its layout to ensure usability and readability on both desktop and mobile environments.

### 🖥️ Desktop Experience

On larger screens, the application uses a split-layout approach:

- Persistent navigation sidebar
- Full chat history visibility
- Dedicated document management area
- Optimized use of horizontal space

### 📱 Mobile Experience

On mobile devices, the interface adjusts to maximize available screen space:

- Collapsible sidebar navigation
- Touch-friendly interactions
- Optimized chat layout
- Responsive forms and document management screens

### 🎯 Responsive Pages

The following pages are fully responsive:

| Page | Desktop | Mobile |
|--------|----------|----------|
| Login | ✅ | ✅ |
| Chat | ✅ | ✅ |
| Documents | ✅ | ✅ |

The application uses Tailwind CSS responsive utilities to provide a seamless experience across smartphones, tablets, laptops, and desktop monitors.

## ⚙️ Tech Stack

Ask Watermelon was built using modern frontend technologies focused on performance, maintainability, and developer experience.

### Core Technologies

| Technology | Purpose |
|------------|----------|
| React 19 | User Interface development |
| TypeScript | Static typing and code safety |
| Vite | Development server and build tool |
| React Router | Client-side routing |
| Axios | HTTP client for API communication |
| Tailwind CSS | Utility-first styling framework |
| CVA (Class Variance Authority) | Component variant management |
| React Markdown | Markdown rendering for AI responses |

### Development Tools

| Tool | Purpose |
|--------|----------|
| ESLint | Code quality and linting |
| Babel | JavaScript transpilation |
| SVGR | SVG components integration |
| TypeScript ESLint | TypeScript linting support |

### Design Principles

- 🧩 Component-based architecture
- 🎨 Reusable design system
- 🔒 Type-safe development
- 📱 Mobile-first responsive design
- ⚡ Fast development and build experience
- 🚀 Production-ready frontend structure

## 🏗️ Architecture

The project follows a modular and component-driven architecture designed to keep responsibilities separated and facilitate future scalability.

### Architectural Layers

```text
Pages
 ├── Core Components
 │
Hooks
 │
Services
 │
API
```

### Pages

Pages represent complete application screens and orchestrate business flows.

Examples:

- Login Page
- Chat Page
- Documents Page

### Core Components

Core components are specialized UI components that encapsulate application-specific behaviors.

Examples:

- ChatMessages
- ChatSidebar
- ChatRecent
- ChatText
- ChatBackgroundMesh

### Shared Components

Reusable UI building blocks used throughout the application.

Examples:

- Button
- ButtonIcon
- Card
- Container
- InputText
- Text
- Icon

### Hooks

Custom hooks centralize business logic and state management.

Examples:

- useLogin
- useChat
- useDocuments

Responsibilities:

- State management
- Data fetching
- API orchestration
- User session handling

### Services

Service modules are responsible for communicating with backend APIs.

Examples:

- login.ts
- chat.ts
- documents.ts

Responsibilities:

- HTTP requests
- Request payload formatting
- Response handling

### API Layer

Axios is configured through a centralized API client.

Responsibilities:

- Base URL configuration
- Authentication token injection
- Request interceptors
- Response interceptors

### Assets

Static resources used by the application.

Examples:

- SVG icons
- Logos
- Background illustrations

### Styling Strategy

The application uses:

- Tailwind CSS for styling
- CVA (Class Variance Authority) for component variants
- Centralized design tokens
- Custom theme colors

This approach ensures visual consistency and simplifies component customization across the application.

## 🚀 Getting Started

Follow the steps below to set up and run the project locally.

### 📋 Prerequisites

Before starting, make sure the following tools are installed:

- Node.js 20+
- pnpm 10+
- Git

Verify your installation:

```bash
node -v
pnpm -v
git --version
```

---

### 📦 Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd ask-watermelon-front
```

Install dependencies:

```bash
pnpm install
```

---

### 🔐 Environment Variables

Create a `.env` file in the project root:

```bash
touch .env
```

Add the required environment variables:

```env
VITE_API_URL=http://localhost:3333
```

| Variable | Description |
|-----------|-------------|
| VITE_API_URL | Backend API base URL |

---

### ▶️ Running the Project

Start the development server:

```bash
pnpm dev
```

The application will be available at:

```text
http://localhost:5173
```

---

### 🏭 Production Build

Generate a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

---

### 🧹 Linting

Run ESLint:

```bash
pnpm lint
```

This command verifies code quality and checks for common issues.