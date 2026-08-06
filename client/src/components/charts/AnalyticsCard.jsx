function AnalyticsCard({
  title,
  value,
  subtitle,
  color = "text-blue-600",
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <h2 className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </h2>

      {subtitle && (
        <p className="text-gray-500 mt-2 text-sm">
          {subtitle}
        </p>
      )}

    </div>
  );
}

export default AnalyticsCard;