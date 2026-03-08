import { useOrdersStore } from "../../store/useOrdersStore";
import { useUIStore } from "../../store/useUIStore";
import type { OrderStatus } from "../../types/order";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";

export const OrderDetailDrawer = () => {
  const { isOrderDetailOpen, selectedOrderId, closeOrderDetail } = useUIStore();
  const { orders, updateOrderStatus } = useOrdersStore();

  const order = orders.find((order) => order.id === selectedOrderId);

  if (!isOrderDetailOpen || !order) return null;

  const handleStatusChange = (newStatus: OrderStatus) => {
    updateOrderStatus(order.id, newStatus);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeOrderDetail}
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
      />
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full bg-white shadow-xl z-50 overflow-y-auto sm:top-4 sm:bottom-4 sm:right-4 sm:w-[420px] px-4">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 py-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Order Details</h2>
          <button
            onClick={closeOrderDetail}
            className="p-2 hover:bg-gray-100 rounded text-gray-500"
          >
            X
          </button>
        </div>

        {/* Status Selector */}
        <div className="p-6 border-b border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <select
            value={order.status}
            onChange={(e) => handleStatusChange(e.target.value as OrderStatus)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Customer Info */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Customer</h3>
          <p className="text-sm text-gray-900">{order.customerName}</p>
          <p className="text-sm text-gray-600">{order.customerEmail}</p>
        </div>

        {/* SHipping Adress */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            Shipping Address
          </h3>
          <p className="text-sm text-gray-600">{order.shippingAddress}</p>
        </div>

        {/* Order Items */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Items</h3>
          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-900">{item.name}</p>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="text-gray-900 font-medium">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Payment Method</span>
              <span className="text-gray-900">{order.paymentMethod}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Order Date</span>
              <span className="text-gray-600">{formatDate(order.date)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
              <span>Total</span>
              <span>{formatCurrency(order.total)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
