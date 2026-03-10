import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Order } from "../../types/order";
import { buildRevenueSeries } from "../../utils/analytics";

interface RevenueChartProps {
  orders: Order[];
}

const RevenueChart = ({ orders }: RevenueChartProps) => {
  const data = buildRevenueSeries(orders);

  if (data.length === 0) {
    return (
      <div className="rounded border border-gray-200 bg-white p-4 text-sm text-gray-500">
        No revenue data available
      </div>
    );
  }

  return (
    <div className="rounded border border-gray-200 bg-white p-4">
      <h3 className="mb-4 text-sm font-semibold text-gray-900">
        Revenue Over Time
      </h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
              angle={0}
              textAnchor="end"
            />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
