import type { Order } from "../../types/order";

interface StatusChartProps {
  orders: Order[];
}

const StatusChart = ({ orders }: StatusChartProps) => {
  return <div>StatusChart ({orders.length})</div>;
};

export default StatusChart;
