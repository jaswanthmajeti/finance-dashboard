import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import SummaryCards from "../components/dashboard/SummaryCards";
import Charts from "../components/charts/Charts";
import Transactions from "../components/transactions/Transactions";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen ml-64">
        <Header />

        <div className="p-6">
          <SummaryCards />
          <Charts></Charts>
          <Transactions></Transactions>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;