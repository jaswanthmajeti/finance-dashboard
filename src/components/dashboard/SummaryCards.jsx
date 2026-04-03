import Card from "./Card";

function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Total Balance" value="₹50,000" color="text-blue-600" />
      <Card title="Income" value="₹80,000" color="text-green-600" />
      <Card title="Expenses" value="₹30,000" color="text-red-600" />
    </div>
  );
}

export default SummaryCards;