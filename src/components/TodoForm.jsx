import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    addTodo(text);
    setText("");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 mt-10">
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-3xl font-bold text-slate-800">
              Add New Task
            </h2>

            <p className="text-gray-500 mt-2">
              Create a new task and stay productive today.
            </p>

          </div>

          <div className="hidden md:flex w-14 h-14 rounded-2xl bg-cyan-100 items-center justify-center">
            <FaPlus className="text-cyan-600 text-2xl" />
          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-5"
        >

          <input
            type="text"
            placeholder="What are you going to do today?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 px-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none text-lg transition-all"
          />

          <button
            type="submit"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            <FaPlus />
            Add Task
          </button>

        </form>

      </div>
    </section>
  );
}

export default TodoForm;