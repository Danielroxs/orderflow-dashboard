import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { Order } from "../../types/order";
import { buildStatusDistribution } from "../../utils/analytics";

interface StatusChartProps {
  orders: Order[];
}

const COLORS = ["#f59e0b", "#3b82f6", "#6366f1", "#22c55e", "#ef4444"];

const StatusChart = ({ orders }: StatusChartProps) => {
  const data = buildStatusDistribution(orders);

  if (data.length === 0) {
    return (
      <div className="rounded border border-gray-200 bg-white text-sm text-gray-500">
        No status data available
      </div>
    );
  }

  return (
    <div className="rounded border border-gray-200 bg-white p-4">
      <h3 className="mb-4 text-sm font-semibold text-gray-900">
        Orders by Status
      </h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="count" nameKey="status" outerRadius={110}>
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatusChart;
