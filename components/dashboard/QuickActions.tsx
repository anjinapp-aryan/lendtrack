import { UserPlus, FilePlus, CreditCard, ShieldCheck } from "lucide-react";

const actions = [
  { label: "Add Borrower", icon: UserPlus, bgColor: "bg-blue-50", iconColor: "text-blue-600" },
  { label: "New Loan", icon: FilePlus, bgColor: "bg-green-50", iconColor: "text-green-600" },
  { label: "Payments", icon: CreditCard, bgColor: "bg-purple-50", iconColor: "text-purple-600" },
  { label: "Security", icon: ShieldCheck, bgColor: "bg-orange-50", iconColor: "text-orange-600" },
];

export function QuickActions() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
        <p className="text-sm text-gray-500 mt-1">Frequent operations</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, i) => {
          const Icon = action.icon;
          return (
            <button
              key={i}
              className="bg-white border border-slate-100 rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-all duration-200"
            >
              <div className={`w-11 h-11 rounded-full ${action.bgColor} flex items-center justify-center`}>
                <Icon size={18} className={action.iconColor} />
              </div>
              <span className="text-sm font-medium text-gray-700">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}