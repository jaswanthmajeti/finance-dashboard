import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import SummaryCards from "../components/dashboard/SummaryCards";
import Charts from "../components/charts/Charts";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />

        <div className="p-6">
          <SummaryCards />
          <Charts></Charts>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;