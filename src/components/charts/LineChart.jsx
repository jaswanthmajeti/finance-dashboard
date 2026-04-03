import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", balance: 4000 },
  { name: "Feb", balance: 6000 },
  { name: "Mar", balance: 5500 },
  { name: "Apr", balance: 7000 },
];

function CustomLineChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="mb-4 font-semibold">Balance Trend</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomLineChart;