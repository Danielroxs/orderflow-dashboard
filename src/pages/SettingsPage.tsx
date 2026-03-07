import { AppLayout } from "../components/layout/AppLayout";

export const SettingsPage = () => {
  return (
    <AppLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your preferences</p>
      </div>
    </AppLayout>
  );
};
