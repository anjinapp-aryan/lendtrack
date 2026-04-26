import { AlertTriangle } from "lucide-react";

const defaulters = [
  { name: "Mahesh Singh", amount: 15000, days: 15 },
  { name: "Rajesh Gupta", amount: 12000, days: 12 },
  { name: "Sunita Verma", amount: 8000, days: 8 },
];

export function TopDefaulters() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Top Defaulters</h3>
        <p className="text-sm text-gray-500 mt-1">Borrowers with overdue payments</p>
      </div>

      <div className="space-y-3">
        {defaulters.map((defaulter, i) => (
          <div key={i} className="flex items-center justify-between p-3 hover:bg-red-50 rounded-xl transition-colors border border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-600">{i + 1}.</span>
              <div>
                <p className="font-medium text-gray-900 text-sm">{defaulter.name}</p>
                <p className="text-xs text-red-600 font-medium">{defaulter.days} days overdue</p>
              </div>
            </div>
            <p className="font-bold text-red-600 text-sm">₹{defaulter.amount.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}