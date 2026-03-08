import type { ColumnDef } from "@tanstack/react-table";
import type { Order } from "../../types/order";
import { formatDate } from "../../utils/formatDate";
import { formatCurrency } from "../../utils/formatCurrency";

export const orderColumns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Order ID",
  },
  {
    accessorKey: "customerName",
    header: "Customer",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => formatDate(row.original.date),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const colors = {
        Pending: "bg-amber-100 text-amber-800",
        Processing: "bg-blue-100 text-blue-800",
        Shipped: "bg-indigo-100 text-indigo-800",
        Delivered: "bg-green-100 text-green-800",
        Cancelled: "bg-red-100 text-red-800",
      };
      return (
        <span
          className={`px-2 py-1 rounded tetx-xs font-medium ${colors[status]}`}
        ></span>
      );
    },
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => formatCurrency(row.original.total),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row, table }) => {
      const meta = table.options.meta as { onViewOrder?: (id: string) => void };

      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
            meta?.onViewOrder?.(row.original.id);
          }}
          className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors"
        >
          Ver
        </button>
      );
    },
  },
];
