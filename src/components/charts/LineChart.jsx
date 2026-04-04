import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function CustomLineChart({ transactions }) {
  // Group by month
  const monthlyData = {};

  transactions.forEach((txn) => {
    const month = new Date(txn.date).toLocaleString("default", {
      month: "short",
    });

    if (!monthlyData[month]) {
      monthlyData[month] = 0;
    }

    monthlyData[month] += txn.amount;
  });

  const data = Object.keys(monthlyData).map((month) => ({
    name: month,
    value: monthlyData[month],
  }));

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="mb-4 font-semibold">Monthly Trend</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomLineChart;