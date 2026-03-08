import { MetricCard } from "../components/dashboard/MetricCard";
import { RecentOrdersTable } from "../components/dashboard/RecentOrdersTable";
import { AppLayout } from "../components/layout/AppLayout";
import { useOrdersStore } from "../store/useOrdersStore";
import { formatCurrency } from "../utils/formatCurrency";

export const DashboardPage = () => {
  const orders = useOrdersStore((state) => state.orders);

  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const pendingOrders = orders.filter(
    (order) => order.status === "Pending",
  ).length;
  const cancelledOrders = orders.filter(
    (order) => order.status === "Cancelled",
  ).length;

  return (
    <AppLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to OrderFlow</p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 mt-6 lg:mt-8">
          <MetricCard title="Total Orders" value={totalOrders} icon="📦" />
          <MetricCard
            title="Total Revenue"
            value={formatCurrency(totalRevenue)}
            icon="💰"
          />
          <MetricCard title="Pending Orders" value={pendingOrders} icon="📦" />
          <MetricCard
            title="Cancelled Orders"
            value={cancelledOrders}
            icon="❌"
          />
        </div>

        <RecentOrdersTable />
      </div>
    </AppLayout>
  );
};
