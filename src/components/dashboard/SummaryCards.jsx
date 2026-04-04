import Card from "./Card";

function SummaryCards({ balance, income, expenses }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Total Balance" value={`₹${balance.toLocaleString()}`} color="text-blue-600" />
      <Card title="Income" value={`₹${income.toLocaleString()}`} color="text-green-600" />
      <Card title="Expenses" value={`₹${expenses.toLocaleString()}`} color="text-red-600" />
    </div>
  );
}

export default SummaryCards;