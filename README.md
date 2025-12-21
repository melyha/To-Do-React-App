# TaskFlow Pro - Interactive React Todo App
  
This project started with Assignment 2 (Static React Components) and was enhanced into a fully interactive React application for Assignment 3 (Create and Deploy a Web Application).

This project was created by running: `npm create vite@latest todo_app -- --template react`

To get set up:
- Run `npm install`
- Run `npm run dev`, and visit the url it gives you

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/)

## Project Overview

**Problem:** We want to rebuild a basic version of Trello todo application using React that helps users manage their daily tasks efficiently.

**Solution:** A responsive React app with real-time functionality, API integration, and persistent storage.

## Assignment Progression

### Assignment 2 Foundation (Static Components)
Started with static React components:
- `Header` component with title and message props
- `TodoList` component displaying static todo data
- `Card` component for displaying content with image
- `Footer` component with contact information

### Assignment 3 Enhancement (Interactive App)
Enhanced to full interactive functionality:
- **Interactive Features:** Add, toggle, delete todos
-  **API Integration:** JSONPlaceholder API for data fetching
- **State Management:** useState and useEffect hooks
- **Material-UI Components:** Interactive accordion with feedback
- **Persistent Storage:** localStorage for data persistence


## Components
jsx<Header 
  title="Welcome to my app: TaskFlow Pro" 
  message="Thanks for visiting my app." 
/>

<TodoList 
  todos={todos}
  onToggle={handleToggleCompleted}
  onDelete={handleDeleteTodo}
  onRemoveCompleted={removeCompletedTodos}
/>

<Card 
  title="Productivity Boost" 
  subtitle="Daily Organization Tips" 
  content="Stay organized and boost your productivity..." 
  image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b..." 
/>

<MyAccordion /> // Interactive Material-UI component

<Footer message="Contact me at contact@melxcreative.com">

## Data Models
**TODO Object:**
javascript{
  id: 1,              // Unique identifier
  text: "Task text",  // Task description
  completed: false    // Completion status
}


## Technologies Used

- **React 19.2.0** - Frontend framework
- **Material-UI 7.3.6** - UI component library
- **JSONPlaceholder API** - Fake REST API for testing
- **Vite** - Build tool and development server
- **CSS3** - Custom styling and animations

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Live Demo