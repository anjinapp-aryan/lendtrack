"use client";

import { Home, Users, Wallet, CreditCard, Shield, BarChart, Settings } from "lucide-react";

export default function Sidebar() {
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
    <aside className="w-64 bg-white border-r p-5">
      <h1 className="text-xl font-bold text-purple-600">LendTrack</h1>
      <ul className="mt-6 space-y-2">
        {menu.map((item, i) => {
          const Icon = item.icon;
          return (
            <li
              key={i}
              className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer ${
                i === 0 ? "bg-purple-100 text-purple-700" : "hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}