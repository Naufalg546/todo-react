import {
  FaTasks,
  FaCheckCircle,
  FaClipboardList,
} from "react-icons/fa";

function Stats({ active, completed, total }) {
  const cards = [
    {
      title: "Active Tasks",
      value: active,
      icon: <FaTasks />,
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    {
      title: "Completed",
      value: completed,
      icon: <FaCheckCircle />,
      color: "from-green-500 to-emerald-500",
      bg: "bg-green-50",
      text: "text-green-600",
    },
    {
      title: "Total Tasks",
      value: total,
      icon: <FaClipboardList />,
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-50",
      text: "text-purple-600",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
          >

            <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>

            <div className="p-8">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
                    {card.title}
                  </p>

                  <h2 className="text-5xl font-extrabold mt-3 text-slate-800">
                    {card.value}
                  </h2>

                </div>

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${card.text} bg-white shadow-lg`}
                >
                  {card.icon}
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;