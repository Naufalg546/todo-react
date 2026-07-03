import { FaRocket, FaCheckCircle, FaTasks } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              React + Tailwind CSS
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Manage Your Tasks
              <br />
              Efficiently
            </h1>

            <p className="mt-6 text-lg text-cyan-100 leading-8">
              Organize your daily activities, monitor your progress,
              and stay productive with a modern Todo Dashboard built
              using React Hooks and Tailwind CSS.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-white text-cyan-700 px-7 py-3 rounded-xl font-bold hover:scale-105 transition">
                Get Started
              </button>

              <button className="border border-white px-7 py-3 rounded-xl font-bold hover:bg-white hover:text-cyan-700 transition">
                Learn More
              </button>

            </div>

          </div>

          <div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">

              <h2 className="text-2xl font-bold mb-8">
                Dashboard Overview
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between items-center bg-white/10 rounded-xl p-4">

                  <div className="flex items-center gap-3">

                    <FaTasks className="text-2xl" />

                    <span>Total Tasks</span>

                  </div>

                  <span className="text-2xl font-bold">100%</span>

                </div>

                <div className="flex justify-between items-center bg-white/10 rounded-xl p-4">

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-2xl" />

                    <span>Stay Organized</span>

                  </div>

                  <span className="text-green-300 font-bold">
                    Ready
                  </span>

                </div>

                <div className="flex justify-between items-center bg-white/10 rounded-xl p-4">

                  <div className="flex items-center gap-3">

                    <FaRocket className="text-2xl" />

                    <span>Performance</span>

                  </div>

                  <span className="text-yellow-300 font-bold">
                    Fast
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;