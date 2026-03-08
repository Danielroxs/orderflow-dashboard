import { useOrdersStore } from "../../store/useOrdersStore";
import { formatCurrency } from "../../utils/formatCurrency";

export const RecentOrdersTable = () => {
  const orders = useOrdersStore((state) => state.orders);
  const recentOrders = orders.slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow mt-8">
      <div className="px-4 py-4 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[640px] w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase sm:px-6">
                Order ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase sm:px-6">
                Customer
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase sm:px-6">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase sm:px-6">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase sm:px-6">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {recentOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 text-sm font-medium text-gray-900 sm:px-6">
                  {order.id}
                </td>
                <td className="px-4 py-4 text-sm text-gray-600 sm:px-6">
                  {order.customerName}
                </td>
                <td className="px-4 py-4 text-sm text-gray-600 sm:px-6">
                  {order.date}
                </td>
                <td className="px-4 py-4 text-sm sm:px-6">
                  <span className="px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs font-medium">
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm font-medium text-gray-900 sm:px-6">
                  {formatCurrency(order.total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
