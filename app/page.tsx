import Sidebar from "../components/Sidebar";
import Dashboard from "../components/layout/DashboardLayout";

import React from "react";


export default function Home() {
  return (
    <div className="flex h-screen overflow-x-hidden">
      <Sidebar className="hidden lg:flex" />
      <div className="flex-1 overflow-auto">
        <Dashboard />
      </div>
    </div>
  );
}