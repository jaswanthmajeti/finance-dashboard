import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />

        <div className="p-6">
          {/* Content will come here */}
          <h1 className="text-2xl font-bold">Welcome</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;