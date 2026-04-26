import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const transactions = [
  { borrower: "Ravi Kumar", amount: 5000, type: "Payment", date: "2024-04-20" },
  { borrower: "Mahesh Singh", amount: 2000, type: "Payment", date: "2024-04-19" },
  { borrower: "Priya Sharma", amount: 10000, type: "Loan", date: "2024-04-18" },
  { borrower: "Amit Patel", amount: 3000, type: "Payment", date: "2024-04-17" },
];

export function RecentTransactions() {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
        <p className="text-sm text-gray-500 mt-1">Last 4 transactions</p>
      </div>

      <div className="space-y-3">
        {transactions.map((tx, i) => {
          const isPayment = tx.type === "Payment";
          return (
            <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold text-xs">
                  {getInitials(tx.borrower)}
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{tx.borrower}</p>
                  <p className="text-xs text-gray-500">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold text-sm ${isPayment ? "text-green-600" : "text-blue-600"}`}>
                  {isPayment ? "+" : "-"}₹{tx.amount.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">{tx.type}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}