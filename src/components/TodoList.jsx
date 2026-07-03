import TodoItem from "./TodoItem";

function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">
        Today's Tasks
      </h2>

      {todos.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
          <h3 className="text-2xl font-semibold text-gray-600">
            No Tasks Yet
          </h3>

          <p className="text-gray-500 mt-2">
            Add your first task to get started.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TodoList;