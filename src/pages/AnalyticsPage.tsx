import RevenueChart from "../components/analytics/RevenueChart";
import StatusChart from "../components/analytics/StatusChart";
import { useOrdersStore } from "../store/useOrdersStore";

export const AnalyticsPage = () => {
  const { orders } = useOrdersStore();

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        <p className="text-sm text-gray-600">Revenue and orders distribution</p>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RevenueChart orders={orders} />
        <StatusChart orders={orders} />
      </div>
    </section>
  );
};
