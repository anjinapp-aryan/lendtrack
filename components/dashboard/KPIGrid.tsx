import KPICard from "./KPICard";
import { DollarSign, TrendingUp, AlertCircle, Clock, Users } from "lucide-react";

const kpis = [
  { title: "Total Lent", value: "₹12,75,000", color: "bg-green-100", icon: DollarSign, trend: 12 },
  { title: "Total Collected", value: "₹8,45,000", color: "bg-blue-100", icon: TrendingUp, trend: 8 },
  { title: "Total Pending", value: "₹4,30,000", color: "bg-yellow-100", icon: AlertCircle, trend: -3 },
  { title: "Defaulters", value: "12", color: "bg-red-100", icon: Users, trend: -5 },
  { title: "Due This Week", value: "₹85,000", color: "bg-purple-100", icon: Clock, trend: 2 },
];

export function KPIGrid() {
  return (
    <div className="grid grid-cols-5 gap-6">
      {kpis.map((kpi) => (
        <KPICard key={kpi.title} {...kpi} />
      ))}
    </div>
  );
}