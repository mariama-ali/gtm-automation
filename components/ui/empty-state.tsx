import { Inbox } from "lucide-react";
export default function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="flex flex-col items-center rounded-xl border
border-dashed border-slate-300 bg-white p-10 text-center"
    >
      <Inbox className="mb-4 text-slate-400" size={32} />
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  );
}
