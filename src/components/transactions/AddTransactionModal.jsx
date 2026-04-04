import { useState } from "react";

function AddTransactionModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now().toString(),
      ...form,
      amount: Number(form.amount),
    };

    onAdd(newTransaction);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Add Transaction</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="date"
            required
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Category"
            required
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Amount"
            required
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            className="border p-2 rounded"
          />

          <select
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <div className="flex justify-end gap-2 mt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 border rounded"
            >
              Cancel
            </button>

            <button className="px-3 py-1 bg-blue-600 text-white rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTransactionModal;