export interface DashboardData {
  totalLent: string;
  totalCollected: string;
  trendData: Array<{ period: string; lent: number; collected: number; }>;
}

export const DASHBOARD_DATA: Record<'Daily' | 'Weekly' | 'Monthly', DashboardData> = {
  Daily: {
    totalLent: '₹1,25,000',
    totalCollected: '₹85,000',
    trendData: [
      { period: 'Day 1', lent: 15000, collected: 12000 },
      { period: 'Day 2', lent: 18000, collected: 14000 },
      { period: 'Day 3', lent: 20000, collected: 16000 },
      { period: 'Day 4', lent: 22000, collected: 18000 },
      { period: 'Day 5', lent: 25000, collected: 20000 },
      { period: 'Day 6', lent: 28000, collected: 22000 },
      { period: 'Day 7', lent: 30000, collected: 24000 },
    ],
  },
  Weekly: {
    totalLent: '₹12,75,000',
    totalCollected: '₹8,45,000',
    trendData: [
      { period: 'Week 1', lent: 10000, collected: 8000 },
      { period: 'Week 2', lent: 15000, collected: 12000 },
      { period: 'Week 3', lent: 20000, collected: 18000 },
      { period: 'Week 4', lent: 25000, collected: 22000 },
      { period: 'Week 5', lent: 30000, collected: 28000 },
      { period: 'Week 6', lent: 35000, collected: 32000 },
    ],
  },
  Monthly: {
    totalLent: '₹75,00,000',
    totalCollected: '₹50,00,000',
    trendData: [
      { period: 'Jan', lent: 100000, collected: 80000 },
      { period: 'Feb', lent: 150000, collected: 120000 },
      { period: 'Mar', lent: 200000, collected: 180000 },
      { period: 'Apr', lent: 250000, collected: 220000 },
      { period: 'May', lent: 300000, collected: 280000 },
      { period: 'Jun', lent: 350000, collected: 320000 },
    ],
  },
};