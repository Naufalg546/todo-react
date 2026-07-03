import { FaCheckCircle } from "react-icons/fa";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          <div className="flex items-center gap-3">

            <div className="bg-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
              <FaCheckCircle className="text-white text-2xl" />
            </div>

            <div>
              <h1 className="text-white text-2xl font-bold">
                Todo Dashboard
              </h1>

              <p className="text-gray-300 text-sm">
                React • Tailwind CSS
              </p>
            </div>

          </div>

          <nav className="hidden md:flex items-center gap-8">

            <a
              href="#"
              className="text-white hover:text-cyan-400 transition font-medium"
            >
              Home
            </a>

            <a
              href="#"
              className="text-white hover:text-cyan-400 transition font-medium"
            >
              Tasks
            </a>

            <a
              href="#"
              className="text-white hover:text-cyan-400 transition font-medium"
            >
              Profile
            </a>

          </nav>

          <div className="bg-cyan-500 text-white px-5 py-2 rounded-full font-semibold shadow-md">
            Web Programming
          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;