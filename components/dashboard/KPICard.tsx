import { LucideIcon } from "lucide-react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  color: string;
  icon?: LucideIcon;
  trend?: number; // positive = up, negative = down
}

export default function KPICard({ title, value, color, icon: Icon, trend }: KPICardProps) {
  const trendDirection = trend ? (trend > 0 ? "up" : "down") : null;
  const trendColor = trend ? (trend > 0 ? "text-green-600" : "text-red-600") : "text-gray-500";
  const TrendIcon = trend ? (trend > 0 ? TrendingUp : TrendingDown) : null;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
          {trend !== undefined && (
            <div className="flex items-center gap-1 mt-2">
              {TrendIcon && <TrendIcon size={16} className={trendColor} />}
              <span className={`text-xs font-semibold ${trendColor}`}>
                {trend > 0 ? "+" : ""}{trend}%
              </span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center flex-shrink-0`}>
          {Icon && <Icon size={24} className="text-gray-700" />}
        </div>
      </div>
    </div>
  );
}