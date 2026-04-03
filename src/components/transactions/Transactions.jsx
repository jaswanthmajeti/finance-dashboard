import SearchBar from "./SearchBar";
import Filter from "./Filter";
import TransactionTable from "./TransactionTable";

function Transactions({role}) {
  return (
    <div className="mt-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
        <SearchBar />
        <Filter />
      </div>

      <TransactionTable role={role}/>
    </div>
  );
}

export default Transactions;