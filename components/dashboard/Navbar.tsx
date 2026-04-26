"use client";

import { Search, Bell, Calendar, Plus, Sun, Moon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white rounded-2xl p-6 shadow-sm">
      {/* LEFT: Search */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search loans, borrowers..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg outline-none text-sm text-gray-700 placeholder-gray-400 focus:border-purple-300 focus:ring-1 focus:ring-purple-300"
          />
        </div>
      </div>

      {/* CENTER: Date Filter */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
        <Calendar size={16} className="text-gray-600" />
        <span className="text-sm text-gray-600">April 2024</span>
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-4 ml-6">
        {/* Theme Toggle */}
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Sun size={20} className="text-gray-600" />
        </button>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Add New Button */}
        <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
          <Plus size={16} />
          Add New
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 ml-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold text-sm">
            A
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-gray-900">Aryan</p>
            <p className="text-xs text-gray-500">Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
}