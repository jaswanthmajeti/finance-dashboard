function TransactionTable({ transactions }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-6">
      <h2 className="mb-4 font-semibold">Transactions</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-500 text-sm">
            <th className="py-2">Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id} className="border-b hover:bg-gray-50">
              <td className="py-2">{txn.date}</td>
              <td>{txn.category}</td>
              <td className="font-medium">₹{txn.amount}</td>
              <td
                className={
                  txn.type === "income"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {txn.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;