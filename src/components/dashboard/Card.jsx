function Card({ title, value, color }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex flex-col gap-2 cursor-pointer">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className={`text-2xl font-bold ${color}`}>{value}</h2>
    </div>
  );
}

export default Card;