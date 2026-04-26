"use client";

import { useState } from "react";

const loans = [
  {
    borrower: "Ravi Kumar",
    phone: "+91 98765 43210",
    loan: 25000,
    paid: 15000,
    remaining: 10000,
    emi: 2000,
    frequency: "Weekly",
    nextDue: "2024-04-28",
    status: "Active"
  },
  {
    borrower: "Mahesh Singh",
    phone: "+91 87654 32109",
    loan: 20000,
    paid: 5000,
    remaining: 15000,
    emi: 1500,
    frequency: "Monthly",
    nextDue: "2024-05-15",
    status: "Overdue"
  },
  {
    borrower: "Priya Sharma",
    phone: "+91 76543 21098",
    loan: 30000,
    paid: 30000,
    remaining: 0,
    emi: 2500,
    frequency: "Weekly",
    nextDue: "2024-04-25",
    status: "Completed"
  },
];

const tabs = ["Active Loans", "Closed Loans", "Overdue Loans"];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const formatNumber = (value: number) => value.toLocaleString('en-IN');

export function LoanOverview() {
  const [activeTab, setActiveTab] = useState("Active Loans");

  const getFilteredLoans = () => {
    switch (activeTab) {
      case "Active Loans":
        return loans.filter(loan => loan.status === "Active");
      case "Closed Loans":
        return loans.filter(loan => loan.status === "Completed");
      case "Overdue Loans":
        return loans.filter(loan => loan.status === "Overdue");
      default:
        return loans;
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Loan Overview</h3>
        <p className="text-sm text-gray-500 mt-1">Active loans and payment status</p>
      </div>

      {/* Tabbed Navigation */}
      <div className="flex gap-1 mb-6 bg-gray-100 rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === tab
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Borrower</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">EMI / Installment</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Next Due</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Loan Amount</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Paid</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Remaining</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Status</th>
            </tr>
          </thead>

          <tbody>
            {getFilteredLoans().map((loan, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold text-xs">
                      {getInitials(loan.borrower)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{loan.borrower}</p>
                      <p className="text-xs text-gray-500">{loan.phone}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">₹{formatNumber(loan.emi)}</p>
                    <p className="text-xs text-gray-500">{loan.frequency}</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <p className="font-medium text-gray-900 text-sm">{formatDate(loan.nextDue)}</p>
                </td>
                <td className="px-4 py-3 text-gray-700 text-sm">₹{formatNumber(loan.loan)}</td>
                <td className="px-4 py-3 text-green-600 font-medium text-sm">₹{formatNumber(loan.paid)}</td>
                <td className={`px-4 py-3 font-semibold text-sm ${loan.remaining > 0 ? "text-orange-600" : "text-green-600"}`}>
                  ₹{formatNumber(loan.remaining)}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                      loan.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : loan.status === "Overdue"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full mr-1 ${
                      loan.status === "Active"
                        ? "bg-green-500"
                        : loan.status === "Overdue"
                        ? "bg-red-500"
                        : "bg-blue-500"
                    }`}></span>
                    {loan.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}