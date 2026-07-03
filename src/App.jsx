import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import ProgressBar from "./components/ProgressBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      {
        id: 1,
        text: "Learn React Fundamentals",
        completed: false,
        date: new Date().toLocaleString(),
      },
      {
        id: 2,
        text: "Finish Web Programming Assignment",
        completed: true,
        date: new Date().toLocaleString(),
      },
    ];
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      date: new Date().toLocaleString(),
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: newText,
            }
          : todo
      )
    );
  };

  const active = todos.filter((todo) => !todo.completed).length;
  const completed = todos.filter((todo) => todo.completed).length;
  const total = todos.length;

  const filteredTodos = todos.filter((todo) => {
    const searchMatch = todo.text
      .toLowerCase()
      .includes(search.toLowerCase());

    const filterMatch =
      filter === "all"
        ? true
        : filter === "active"
        ? !todo.completed
        : todo.completed;

    return searchMatch && filterMatch;
  });

  useEffect(() => {
    document.title = `Todo Dashboard (${active} Active)`;
  }, [active]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-cyan-50 to-blue-100">

      <Navbar />

      <Hero />

      <Stats
        active={active}
        completed={completed}
        total={total}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Filter
        filter={filter}
        setFilter={setFilter}
      />

      <ProgressBar
        total={total}
        completed={completed}
      />

      <TodoForm
        addTodo={addTodo}
      />

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />

      <Profile />

      <Footer />

    </div>
  );
}

export default App;