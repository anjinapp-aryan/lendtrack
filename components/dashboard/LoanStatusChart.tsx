"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Active", value: 58, color: "#3b82f6" },
  { name: "Closed", value: 33, color: "#10b981" },
  { name: "Overdue", value: 9, color: "#ef4444" },
];

const COLORS = ["#3b82f6", "#10b981", "#ef4444"];

export function LoanStatusChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Loan Status Overview</h3>
        <p className="text-sm text-gray-500 mt-1">Current loan distribution</p>
      </div>

      <div className="flex items-center justify-between gap-6">
        {/* Chart */}
        <div className="relative flex-shrink-0">
          <ResponsiveContainer width={180} height={180}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
                formatter={(value) => [`${value}%`, "Percentage"]}
              />
            </PieChart>
          </ResponsiveContainer>
          {/* Center Label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <p className="text-xs font-medium text-gray-500">Total</p>
              <p className="text-lg font-bold text-gray-900">100</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600 flex-1">{item.name}</span>
              <span className="text-sm font-semibold text-gray-900">{item.value} ({item.value}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}