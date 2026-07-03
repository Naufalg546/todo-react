import { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaSave,
  FaClock,
} from "react-icons/fa";

function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim() === "") return;

    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div
      className={`rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border hover:-translate-y-1 ${
        todo.completed
          ? "bg-green-50 border-green-200"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

        <div className="flex-1">

          {isEditing ? (
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="w-full border-2 border-cyan-300 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-cyan-100"
            />
          ) : (
            <h3
              className={`text-2xl font-bold ${
                todo.completed
                  ? "line-through text-gray-400"
                  : "text-slate-800"
              }`}
            >
              {todo.text}
            </h3>
          )}

          <div className="flex items-center gap-2 mt-4 text-gray-500">
            <FaClock />
            <span>{todo.date}</span>
          </div>

          <div className="mt-5">

            {todo.completed ? (
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                Completed
              </span>
            ) : (
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                Active
              </span>
            )}

          </div>

        </div>

        <div className="flex gap-3 items-start">

          <button
            onClick={() => toggleTodo(todo.id)}
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-white transition ${
              todo.completed
                ? "bg-green-600 hover:bg-green-700"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            <FaCheckCircle />
          </button>

          {isEditing ? (
            <button
              onClick={handleSave}
              className="w-12 h-12 rounded-xl bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition"
            >
              <FaSave />
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="w-12 h-12 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center transition"
            >
              <FaEdit />
            </button>
          )}

          <button
            onClick={() => {
              if (window.confirm("Delete this task?")) {
                deleteTodo(todo.id);
              }
            }}
            className="w-12 h-12 rounded-xl bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition"
          >
            <FaTrash />
          </button>

        </div>

      </div>
    </div>
  );
}

export default TodoItem;