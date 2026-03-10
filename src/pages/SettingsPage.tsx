import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

export const SettingsPage = () => {
  const { user } = useAuthStore();
  const [notifications, setNotifications] = useState<boolean>(true);
  const [compactView, setCompactView] = useState<boolean>(false);

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-600 mt-1">
          Manage your profile and preferences
        </p>
      </div>

      {/* Profile */}
      <section className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Profile
        </h2>

        <div className=" flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
            {user?.name?.[0]?.toUpperCase() ?? "U"}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {user?.name ?? "User"}
            </p>
            <p className="text-sm text-gray-500">{user?.email ?? "-"}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4  sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Name
            </label>
            <input
              type="text"
              value={user?.name ?? ""}
              readOnly
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-700 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Email
            </label>
            <input
              type="email"
              value={user?.email ?? ""}
              readOnly
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-700 cursor-not-allowed"
            />
          </div>
        </div>

        <p className="text-xs text-gray-400">
          This is a demo account. Profile editing is not available.
        </p>
      </section>

      <section className=" bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Preferences
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Notifications</p>
              <p className="text-xs text-gray-500">
                Receive alerts for new orders and updates.
              </p>
            </div>
            <button
              onClick={() => setNotifications((prev) => !prev)}
              className={`relative h-6 w-11 rounded-full transition-colors ${notifications ? "bg-blue-600" : "bg-gray-200"}`}
            >
              <span
                className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${notifications ? "translate-x-5" : "translate-x-0"}`}
              ></span>
            </button>
          </div>

          <div className="border-t border-gray-100 " />

          <div className="flex items-center justify-between">
            <div>
              <p className="tetx-sm font-medium text-gray-900">Compact View</p>
              <p className="tetx-xs text-gray-500">
                Show more rows in tables with reduced spacing.
              </p>
            </div>
            <button
              onClick={() => setCompactView((prev) => !prev)}
              className={`relative h-6 w-11 rounded-full transition-colors ${compactView ? "bg-blue-600" : "bg-gray-200"}`}
            >
              <span
                className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${compactView ? "translate-x-5" : "translate-x-0"}`}
              ></span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
