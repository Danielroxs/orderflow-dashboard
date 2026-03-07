interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: string;
  trend?: string;
}

export const MetricCard = ({ title, value, icon, trend }: MetricCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {trend && <p className="text-sm text-gray-500 mt-2">{trend}</p>}
        </div>
        {icon && <span className="text-4xl">{icon}</span>}
      </div>
    </div>
  );
};
