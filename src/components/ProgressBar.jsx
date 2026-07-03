function ProgressBar({ total, completed }) {
  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <section className="max-w-7xl mx-auto px-6 mt-8">
      <div className="bg-white rounded-2xl shadow-lg p-6">

        <div className="flex justify-between mb-3">
          <h3 className="text-xl font-bold">
            Progress
          </h3>

          <span className="font-semibold text-cyan-600">
            {percentage}%
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

      </div>
    </section>
  );
}

export default ProgressBar;