import profile from "../assets/profile.jpeg";

import {
  FaGithub,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

function Profile() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

        <div className="bg-gradient-to-r from-slate-900 via-cyan-700 to-blue-700 h-32"></div>

        <div className="px-8 pb-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 -mt-16">

            <img
              src={profile}
              alt="Naufal Gunardi"
              className="w-36 h-36 rounded-full border-4 border-white shadow-xl object-cover"
            />

            <div className="flex-1 text-center lg:text-left">

              <h2 className="text-4xl font-bold text-slate-800">
                Naufal Gunardi
              </h2>

              <a
                href="https://github.com/Naufalg546"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center lg:justify-start gap-2 mt-3 text-gray-600 hover:text-cyan-600 transition"
              >
                <FaGithub />
                github.com/Naufalg546
              </a>

              <a
                href="mailto:naufalgunardi54@gmail.com"
                className="flex items-center justify-center lg:justify-start gap-2 mt-3 text-gray-600 hover:text-cyan-600 transition"
              >
                <FaEnvelope />
                naufalgunardi54@gmail.com
              </a>

              <a
                href="https://github.com/Naufalg546"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-cyan-600 hover:scale-105 transition-all"
              >
                <FaGithub />
                Visit GitHub
              </a>

            </div>

            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">

              <div className="bg-cyan-50 rounded-2xl p-6 text-center shadow">

                <FaCode className="text-3xl text-cyan-600 mx-auto mb-3" />

                <h3 className="text-3xl font-bold text-slate-800">
                  React
                </h3>

                <p className="text-gray-500">
                  Front-End
                </p>

              </div>

              <div className="bg-blue-50 rounded-2xl p-6 text-center shadow">

                <FaGithub className="text-3xl text-blue-600 mx-auto mb-3" />

                <h3 className="text-3xl font-bold text-slate-800">
                  GitHub
                </h3>

                <p className="text-gray-500">
                  Portfolio
                </p>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Profile;