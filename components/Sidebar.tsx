"use client";

import { Home, Users, Wallet, CreditCard, Shield, BarChart, Settings, Lock } from "lucide-react";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = "" }: SidebarProps) {
  const menu = [
    { name: "Dashboard", icon: Home },
    { name: "Borrowers", icon: Users },
    { name: "Loans", icon: Wallet },
    { name: "Payments", icon: CreditCard },
    { name: "Securities", icon: Shield },
    { name: "Reports", icon: BarChart },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside className={`w-64 bg-white border-r border-gray-200 flex flex-col h-screen ${className}`}>
      {/* Header */}
      <div className="px-6 py-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">LendTrack</h1>
        <p className="text-xs text-gray-500 mt-1">Loan Management</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menu.map((item, i) => {
          const Icon = item.icon;
          const isActive = i === 0;
          return (
            <button
              key={i}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-purple-100 text-purple-700 font-medium shadow-sm"
                  : "text-gray-700 hover:bg-gray-50 font-medium"
              }`}
            >
              <Icon size={20} />
              <span className="text-sm">{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Security Card */}
      <div className="px-4 py-6 border-t border-gray-200">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 border border-purple-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <Lock size={18} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Security</p>
              <p className="text-xs text-gray-500">All systems secured</p>
            </div>
          </div>
          <button className="w-full text-xs font-medium text-purple-600 hover:text-purple-700 bg-white rounded-lg py-2 transition-colors">
            View Status
          </button>
        </div>
      </div>
    </aside>
  );
}