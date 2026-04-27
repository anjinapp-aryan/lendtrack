"use client";

import { motion } from "framer-motion";

const loans = [
  { name: "Ravi", amount: 25000, paid: 15000, remaining: 10000, status: "Active" },
  { name: "Mahesh", amount: 20000, paid: 5000, remaining: 15000, status: "Overdue" },
];

export default function LoanTable() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm overflow-x-auto">
      <table className="w-full text-sm min-w-[640px] md:min-w-0">
        <thead className="text-gray-500">
          <tr>
            <th>Borrower</th>
            <th className="hidden sm:table-cell">Loan</th>
            <th>Paid</th>
            <th className="hidden md:table-cell">Remaining</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan, i) => (
            <motion.tr key={i} whileHover={{ backgroundColor: "#f9fafb" }} className="border-t">
              <td className="flex items-center gap-2 py-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                {loan.name}
              </td>
              <td className="hidden sm:table-cell">₹{loan.amount}</td>
              <td className="text-emerald-600 font-semibold">₹{loan.paid}</td>
              <td className="hidden md:table-cell text-red-500 font-medium">₹{loan.remaining}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    loan.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {loan.status}
                </span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}