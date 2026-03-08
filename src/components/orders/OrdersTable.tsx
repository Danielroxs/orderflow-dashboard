import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import type { Order } from "../../types/order";
import { orderColumns } from "./columns";
import { useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";

interface OrdersTableProps {
  data: Order[];
}

export const OrdersTable = ({ data }: OrdersTableProps) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  const table = useReactTable({
    data,
    columns: orderColumns,
    state: { sorting, pagination },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="mt-6 rounded border border-gray-200 bg-white">
      {/* Mobile Card */}
      <div className="md:hidden space-y-3 p-3">
        {table.getRowModel().rows.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-8">
            No orders found
          </p>
        ) : (
          table.getRowModel().rows.map((row) => {
            const order = row.original;

            return (
              <div
                key={order.id}
                className=" rounded border border-gray-200 bg-white p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {order.id}
                    </p>
                    <p className="text-sm text-gray-600">
                      {order.customerName}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDate(order.date)}
                    </p>
                  </div>
                  <span className="px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs font-medium">
                    {order.status}
                  </span>
                </div>

                <p className="mt-3 text-sm font-medium text-gray-900">
                  {formatCurrency(order.total)}
                </p>
              </div>
            );
          })
        )}
      </div>

      {/* Escritorio/Tablet Tabla */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                      {{ asc: "↑", desc: "↓" }[
                        header.column.getIsSorted() as string
                      ] ?? null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="divide-y divide-gray-100">
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={orderColumns.length}
                  className="px-4 py-12 text-center text-sm text-gray-500"
                >
                  No orders found
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-3 text-sm text-gray-700"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col gap-3 px-4 py-3 border-t border-gray-200 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-gray-600">
          Page{" "}
          {table.getPageCount() === 0
            ? 0
            : table.getState().pagination.pageIndex + 1}{" "}
          of {table.getPageCount()}
        </div>

        <div className="flex items-center gap-2">
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="px-2 py-1 border border-gray-300 rounded text-sm"
          >
            {[10, 20, 50].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-3 py-1 border border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed text-sm"
          >
            Prev
          </button>

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-3 py-1 border border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
