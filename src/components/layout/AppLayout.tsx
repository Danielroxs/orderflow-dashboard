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

  const handleNavClick = () => {
    if (window.innerWidth < 1024 && isSidebarOpen) {
      toggleSidebar();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Escritorio: lateral y mobile: overlay */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transition-transform duration-300 lg:translate-0 lg:static lg:z-auto`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold">OrderFlow</h1>
        </div>
        <nav className="mt-8 space-y-2 px-4">
          <Link
            to="/dashboard"
            className="block px-4 py-2 rounded hover:bg-slate-800 transition"
            onClick={handleNavClick}
          >
            Dashboard
          </Link>
          <Link
            to="/orders"
            className="block px-4 py-2 rounded hover:bg-slate-800 transition"
            onClick={handleNavClick}
          >
            Orders
          </Link>
          <Link
            to="/analytics"
            className="block px-4 py-2 rounded hover:bg-slate-800 transition"
            onClick={handleNavClick}
          >
            Analytics
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 rounded hover:bg-slate-800 transition"
            onClick={handleNavClick}
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* Backdrop (para mobile) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center lg:justify-end justify-between lg:px-6 lg:py-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded text-lg lg:hidden"
          >
            ☰
          </button>
          <div className="flex items-center gap-2 lg:gap-4">
            <span className="hidden sm:inline text-sm text-gray-600">
              {user?.email}
            </span>
            <button
              onClick={logout}
              className="px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 text-sm lg:px-4 lg:py-2"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
};
