"use client";

import { useState } from "react";
import Navbar from "../dashboard/Navbar";
import { KPIGrid } from "../dashboard/KPIGrid";
import { TrendChart } from "../dashboard/TrendChart";
import { LoanOverview } from "../dashboard/LoanOverview";
import { RecentTransactions } from "../dashboard/RecentTransactions";
import { TopDefaulters } from "../dashboard/TopDefaulters";
import { QuickActions } from "../dashboard/QuickActions";
import { LoanStatusChart } from "../dashboard/LoanStatusChart";
import { DASHBOARD_DATA } from "../../lib/constants/dashboard";

export default function Dashboard() {
  const [viewBy, setViewBy] = useState<'Daily' | 'Weekly' | 'Monthly'>('Weekly');
  const options: ('Daily' | 'Weekly' | 'Monthly')[] = ['Daily', 'Weekly', 'Monthly'];
  const currentData = DASHBOARD_DATA[viewBy];
  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <Navbar />

      {/* SUB-HEADER FILTER BAR */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          {/* LEFT: Title */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Overview of your lending business</p>
          </div>

          {/* CENTER: View By Toggle */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            {options.map((period) => (
              <button
                key={period}
                onClick={() => setViewBy(period)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  viewBy === period
                    ? "bg-purple-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {period}
              </button>
            ))}
          </div>

          {/* RIGHT: Date Range Picker */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-gray-600">19 May – 25 May 2024</span>
          </div>
        </div>
      </div>

      {/* KPI GRID */}
      <KPIGrid totalLent={currentData.totalLent} totalCollected={currentData.totalCollected} />

      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-8">

        {/* LEFT SIDE */}
        <div className="col-span-8 space-y-8">
          <TrendChart data={currentData.trendData} />
          <LoanOverview />
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-4 space-y-8">
          <RecentTransactions />
          <TopDefaulters />
          <LoanStatusChart />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}