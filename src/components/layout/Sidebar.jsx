function Sidebar(){
    return (<div className="fixed left-0 top-0 w-64 h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">FinTrack</h1>
      
      <ul className="space-y-4">
        <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
        <li className="hover:text-gray-300 cursor-pointer">Transactions</li>
        <li className="hover:text-gray-300 cursor-pointer">Insights</li>
      </ul>
    </div>);
}

export default Sidebar;