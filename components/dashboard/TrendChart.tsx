"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", lent: 10000, collected: 8000 },
  { month: "Feb", lent: 15000, collected: 12000 },
  { month: "Mar", lent: 20000, collected: 18000 },
  { month: "Apr", lent: 25000, collected: 22000 },
  { month: "May", lent: 30000, collected: 28000 },
  { month: "Jun", lent: 35000, collected: 32000 },
];

export function TrendChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Collection vs Lending Trend</h3>
          <p className="text-sm text-gray-500 mt-1">Monthly lending and collection analysis</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors">
          Weekly
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="lentGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#7c3aed" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="collectedGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: "12px" }} />
          <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            cursor={{ stroke: "#e5e7eb", strokeWidth: 1 }}
          />
          <Legend
            wrapperStyle={{
              position: "absolute",
              top: "20px",
              left: "20px",
              fontSize: "12px",
            }}
            iconType="rect"
          />
          <Area
            type="monotone"
            dataKey="lent"
            stroke="#7c3aed"
            strokeWidth={3}
            fill="url(#lentGradient)"
            fillOpacity={0.1}
            dot={false}
            activeDot={false}
            name="Amount Lent"
          />
          <Area
            type="monotone"
            dataKey="collected"
            stroke="#10b981"
            strokeWidth={3}
            fill="url(#collectedGradient)"
            fillOpacity={0.1}
            dot={false}
            activeDot={false}
            name="Amount Collected"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}