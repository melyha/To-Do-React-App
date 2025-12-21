import "./App.css";
import React, { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TodoList } from "./TodoList";
import { Card } from "./card";
import { MyAccordion } from "./MyAccordion";
import reactLogo from "./assets/react.svg";
import { readLocalData, writeLocalData } from "./db.js";

function App() {
  // Define the TODO models with proper initialization
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load data on component mount
  useEffect(() => {
    // Try to load from localStorage first
    const savedTodos = readLocalData("rememberedTodos");
    
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
      setIsLoading(false);
    } else {
      // Load from API if no local data
      getAllTodos((apiTodos) => {
        console.log('Loaded todos from API:', apiTodos);
        setTodos(apiTodos);
        setIsLoading(false);
      });
    }
  }, []);

  // Save to localStorage whenever todos change
  useEffect(() => {
    if (!isLoading && todos.length > 0) {
      writeLocalData("rememberedTodos", todos);
    }
  }, [todos, isLoading]);

  // Set up add new TODO form handler
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const titleField = formData.get("title");
    console.log(`Handling new TODO: ${titleField}`);

    if (!titleField.trim()) return;

    // Make new TODO model
    const newTodo = {
      id: Date.now(),
      text: titleField.trim(),
      completed: false,
    };
    // We need to make a new list, otherwise React will not update
    // Use spread operator to make new list
    const newTodos = [...todos, newTodo];
    // We call the React hook to update the application state
    setTodos(newTodos);

    // Clear the form
    event.target.reset();
  };

  //Add toggle todo functionality
  const handleToggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  //Add delete todo functionality
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const removeCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="app">
      <Header
        title="Welcome to my app: TaskFlow Pro"
        message="Thanks for visiting my app."
      />

      <main className="main-content">
        <section>
          <form id="todo-form" onSubmit={handleFormSubmit}>
            <input
              className="todo-form__input"
              id="todo-input"
              name="title"
              type="text"
              placeholder="Add a new task…"
              autoComplete="off"
              required
            />
            <button className="todo-form__button" type="submit">
              Add
            </button>
          </form>
        </section>

        <TodoList
          todos={todos}
          onToggle={handleToggleCompleted}
          onDelete={handleDeleteTodo}
          onRemoveCompleted={removeCompletedTodos}
        />

        <section>
          <h3>Example Usage from the Material Component Library</h3>
          <MyAccordion />
        </section>

        <section className="card-section">
          <h2>Featured Card</h2>
          <Card
            title="Productivity Boost"
            subtitle="Daily Organization Tips"
            content="Stay organized and boost your productivity with our smart task management features."
            image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=200&fit=crop&auto=format"
          />
        </section>
      </main>

      <footer>
        <Footer message="Contact me at contact@melxcreative.com" />

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </footer>
    </div>
  );
}

export default App;
