interface EmptyStateProps {
  title: string;
  message?: string;
  icon?: string;
}

export const EmptyState = ({
  title,
  message,
  icon = "📭",
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 text-center max-w-md">{message}</p>
    </div>
  );
};
