import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-10">
      <div className="bg-white rounded-2xl shadow-lg p-6">

        <div className="relative">

          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search your task..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

        </div>

      </div>
    </section>
  );
}

export default SearchBar;