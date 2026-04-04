function Insights({ transactions }) {
  const categoryTotals = {};

  transactions.forEach((txn) => {
    if (txn.type === "expense") {
      if (!categoryTotals[txn.category]) {
        categoryTotals[txn.category] = 0;
      }
      categoryTotals[txn.category] += txn.amount;
    }
  });

  const highestCategory = Object.keys(categoryTotals).reduce(
    (a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b),
    Object.keys(categoryTotals)[0]
  );

  const monthlyTotals = {};

  transactions.forEach((txn) => {
    const month = new Date(txn.date).getMonth();

    if (!monthlyTotals[month]) {
      monthlyTotals[month] = 0;
    }

    if (txn.type === "expense") {
      monthlyTotals[month] += txn.amount;
    }
  });

  const months = Object.keys(monthlyTotals);

  let comparison = "No data";

  if (months.length >= 2) {
    const last = monthlyTotals[months[months.length - 1]];
    const prev = monthlyTotals[months[months.length - 2]];

    const diff = last - prev;

    comparison =
      diff > 0
        ? `↑ Increased by ₹${diff}`
        : `↓ Decreased by ₹${Math.abs(diff)}`;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-6">
      <h2 className="mb-4 font-semibold">Insights</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="p-3 bg-gray-100 rounded">
          <p className="text-sm text-gray-500">Top Category</p>
          <h3 className="font-bold">{highestCategory || "N/A"}</h3>
        </div>

        <div className="p-3 bg-gray-100 rounded">
          <p className="text-sm text-gray-500">Monthly Change</p>
          <h3 className="font-bold">{comparison}</h3>
        </div>

        <div className="p-3 bg-gray-100 rounded">
          <p className="text-sm text-gray-500">Observation</p>
          <h3 className="font-bold">
            You spend most on {highestCategory || "various categories"}
          </h3>
        </div>

      </div>
    </div>
  );
}

export default Insights;