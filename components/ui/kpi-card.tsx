type KPICardProps = {
  title: string;
  value: string | number;
  demo?: boolean;
};
export default function KPICard({ title, value, demo = true }: KPICardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">{title}</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900">{value}</h2>
      {demo && <p className="mt-2 text-xs text-slate-400">Demo data</p>}
    </div>
  );
}
