import { AppLayout } from "../components/layout/AppLayout";
import { OrdersTable } from "../components/orders/OrdersTable";
import { useOrdersStore } from "../store/useOrdersStore";
import type { OrderStatus } from "../types/order";

export const OrdersPage = () => {
  const { orders, searchTerm, statusFilter, setSearchTerm, setStatusFilter } =
    useOrdersStore();

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <AppLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-600 mt-2">Manage your orders here</p>
        {/* Filters */}
        <div className="flex gap-4 mt-6">
          <input
            type="text"
            placeholder="Search by ID, customer, email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500"
          />
          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value as OrderStatus | "all")
            }
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Orders List */}
        {/* <div className="mt-6 space-y-3">
          {filteredOrders.length === 0 ? (
            <p className="text-gray-500">No orders found</p>
          ) : (
            filteredOrders.map((order) => (
              <div key={order.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">
                      {order.customerName}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      ${order.total.toFixed(2)}
                    </p>
                    <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div> */}
      </div>
      <OrdersTable data={filteredOrders} />
    </AppLayout>
  );
};
