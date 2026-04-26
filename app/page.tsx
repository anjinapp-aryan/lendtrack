import Sidebar from "../components/Sidebar";
import Dashboard from "../components/layout/DashboardLayout";


import React from "react";


export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Dashboard />
      </div>
    </div>
  );
}