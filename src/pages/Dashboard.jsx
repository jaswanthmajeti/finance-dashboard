import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import SummaryCards from "../components/dashboard/SummaryCards";
import Charts from "../components/charts/Charts";
import Transactions from "../components/transactions/Transactions";
import transactionsData from "../data/transactions";
import Insights from "../components/insights/Insights";

function Dashboard() {
  const [role, setRole] = useState("viewer");
  const [transactions, setTransactions] = useState(transactionsData);

  // 💰 Calculations
  const income = transactions
    .filter((txn) => txn.type === "income")
    .reduce((sum, txn) => sum + txn.amount, 0);

  const expenses = transactions
    .filter((txn) => txn.type === "expense")
    .reduce((sum, txn) => sum + txn.amount, 0);

  const balance = income - expenses;

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen ml-64">
        <Header role={role} setRole={setRole} />

        <div className="p-6">
          <SummaryCards
            balance={balance}
            income={income}
            expenses={expenses}
          />

          <Charts transactions={transactions} />

          <Transactions
            role={role}
            transactions={transactions}
            setTransactions={setTransactions}
          />
          <Insights transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;