import { useState } from "react";

function Header() {
  const [role, setRole] = useState("viewer");

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border px-3 py-1 rounded"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}

export default Header;