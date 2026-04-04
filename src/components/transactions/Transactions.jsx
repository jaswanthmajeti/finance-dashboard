import { useState } from "react";
import transactionsData from "../../data/transactions";

import SearchBar from "./SearchBar";
import Filter from "./Filter";
import TransactionTable from "./TransactionTable";
import AddTransactionModal from "./AddTransactionModal";

function Transactions({ role }) {
  const [transactions, setTransactions] = useState(transactionsData);
  const [showModal, setShowModal] = useState(false);

  // Add transaction handler
  const handleAddTransaction = (newTxn) => {
    setTransactions([newTxn, ...transactions]);
  };

  return (
    <div className="mt-6">
      
      {/* Search + Filter (leave as is for now) */}
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
        <SearchBar />
        <Filter />
      </div>

      {/* Admin Button */}
      {role === "admin" && (
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        >
          + Add Transaction
        </button>
      )}

      {/* Table */}
      <TransactionTable transactions={transactions} />

      {/* Modal */}
      {showModal && (
        <AddTransactionModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddTransaction}
        />
      )}
    </div>
  );
}

export default Transactions;