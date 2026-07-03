function Filter({ filter, setFilter }) {

  const buttonStyle =
    "px-6 py-2 rounded-xl font-semibold transition";

  return (
    <section className="max-w-7xl mx-auto px-6 mt-6">

      <div className="flex gap-4 flex-wrap">

        <button
          onClick={() => setFilter("all")}
          className={`${buttonStyle} ${
            filter === "all"
              ? "bg-cyan-500 text-white"
              : "bg-white shadow"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("active")}
          className={`${buttonStyle} ${
            filter === "active"
              ? "bg-cyan-500 text-white"
              : "bg-white shadow"
          }`}
        >
          Active
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`${buttonStyle} ${
            filter === "completed"
              ? "bg-cyan-500 text-white"
              : "bg-white shadow"
          }`}
        >
          Completed
        </button>

      </div>

    </section>
  );
}

export default Filter;