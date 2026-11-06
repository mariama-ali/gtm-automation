type Status = "New" | "Qualified" | "Contacted";
export default function StatusBadge({ status }: { status: Status }) {
  const colors: Record<Status, string> = {
    New: "bg-blue-100 text-blue-700",
    Qualified: "bg-green-100 text-green-700",
    Contacted: "bg-yellow-100 text-yellow-700",
  };
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs
font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}
