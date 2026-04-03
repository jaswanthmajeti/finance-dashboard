import CustomLineChart from "./LineChart";
import CustomPieChart from "./PieChart";

function Charts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <CustomLineChart />
      <CustomPieChart />
    </div>
  );
}

export default Charts;