import {
  FaGithub,
  FaReact,
  FaHeart,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="mt-20 bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-2xl font-bold">
              Todo Dashboard
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              A simple and modern Todo Dashboard built using
              React Hooks and Tailwind CSS.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Technologies
            </h3>

            <div className="space-y-3">

              <div className="flex items-center gap-3">
                <FaReact className="text-cyan-400 text-xl" />
                <span>React</span>
              </div>

              <div className="flex items-center gap-3">
                <RiTailwindCssFill className="text-sky-400 text-xl" />
                <span>Tailwind CSS</span>
              </div>

              <div className="flex items-center gap-3">
                <FaGithub className="text-white text-xl" />
                <span>GitHub</span>
              </div>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Developer
            </h3>

            <p className="text-gray-400">
              North
            </p>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl transition-all hover:scale-105"
            >
              <FaGithub />
              GitHub Profile
            </a>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-center md:text-left">
            © 2026 Todo Dashboard. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-400 mt-4 md:mt-0">
            Made with
            <FaHeart className="text-red-500" />
            using React
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;