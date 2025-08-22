import React, { useEffect, useState } from "react";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/YOUR_DEPLOYED_URL/exec?action=getEmployees")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching employees:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4 text-gray-500">Loading employees...</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Employee List</h1>
      <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Ops ID</th>
            <th className="border px-4 py-2">Full Name</th>
            <th className="border px-4 py-2">Agency</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{emp["Ops or employee number"]}</td>
              <td className="border px-4 py-2">{emp["Full Name"]}</td>
              <td className="border px-4 py-2">{emp["Agency"]}</td>
              <td className="border px-4 py-2">{emp["Role"]}</td>
              <td className="border px-4 py-2">{emp["status"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
