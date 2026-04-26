"use client";

import { useState } from "react";
import { DollarSign, TrendingUp, AlertCircle, Clock } from "lucide-react";
import KPICard from "./KPICard";
import LoanTable from "./LoanTable";
import { TrendChart } from "./TrendChart";
import { DASHBOARD_DATA } from "../../lib/constants/dashboard";

export default function Dashboard() {
  const [viewBy, setViewBy] = useState<'Daily' | 'Weekly' | 'Monthly'>('Weekly');
  const options: ('Daily' | 'Weekly' | 'Monthly')[] = ['Daily', 'Weekly', 'Monthly'];

  const currentData = DASHBOARD_DATA[viewBy];

  return (
    <div className="p-6 space-y-6 overflow-auto">
      <div className="grid grid-cols-5 gap-4">
        <KPICard title="Total Lent" value={currentData.totalLent} icon={DollarSign} color="bg-green-100" />
        <KPICard title="Collected" value={currentData.totalCollected} icon={TrendingUp} color="bg-blue-100" />
        <KPICard title="Pending" value="₹4,30,000" icon={AlertCircle} color="bg-yellow-100" />
        <KPICard title="Defaulters" value="12" icon={AlertCircle} color="bg-red-100" />
        <KPICard title="Due" value="₹85,000" icon={Clock} color="bg-purple-100" />
      </div>

      <div className="flex bg-slate-100 p-1 rounded-lg gap-1 w-fit">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setViewBy(opt)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
              viewBy === opt
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <TrendChart data={currentData.trendData} />

      <LoanTable />
    </div>
  );
}