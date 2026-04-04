import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#3b82f6", "#22c55e", "#ef4444", "#f59e0b"];

function CustomPieChart({ transactions }) {
  const categoryData = {};

  transactions.forEach((txn) => {
    if (txn.type === "expense") {
      if (!categoryData[txn.category]) {
        categoryData[txn.category] = 0;
      }
      categoryData[txn.category] += txn.amount;
    }
  });

  const data = Object.keys(categoryData).map((category) => ({
    name: category,
    value: categoryData[category],
  }));

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="mb-4 font-semibold">Spending Breakdown</h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={80}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomPieChart;