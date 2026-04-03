import SearchBar from "./SearchBar";
import Filter from "./Filter";
import TransactionTable from "./TransactionTable";

function Transactions() {
  return (
    <div className="mt-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
        <SearchBar />
        <Filter />
      </div>

      <TransactionTable />
    </div>
  );
}

export default Transactions;