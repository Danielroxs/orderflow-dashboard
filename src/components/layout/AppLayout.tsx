import type { ReactNode } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useUIStore } from "../../store/useUIStore";
import { Link } from "react-router-dom";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { logout, user } = useAuthStore();
  const { isSidebarOpen, toggleSidebar } = useUIStore();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-0"
        } bg-slate-900 text-white transition-all duration-300 overflow-hidden`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold">OrderFlow</h1>
        </div>
        <nav className="mt-8 space-y-2 px-4">
          <Link
            to="/dashboard"
            className="block px-4 py-2 rounded hover:bg-slate-800 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/orders"
            className="block px-4 py-2 rounded hover:bg-slate-800 transition"
          >
            Orders
          </Link>
          <Link
            to="/analytics"
            className="block px-4 py-2 rounded hover:bg-slate-800 transition"
          >
            Analytics
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 rounded hover:bg-slate-800 transition"
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded"
          >
            ☰
          </button>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{user?.email}</span>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};
