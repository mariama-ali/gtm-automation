
import KPICard from "@/components/ui/kpi-card";
import EmptyState from "@/components/ui/empty-state";
import PageHeader from "@/components/ui/page-header";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Your GTM automation overview"
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KPICard title="Total Leads" value={120} />
        <KPICard title="Companies" value={35} />
        <KPICard title="Qualified Leads" value={24} />
        <KPICard title="Active Workflows" value={3} />
      </div>

      <div className="mt-8">
        <EmptyState
          title="No activity yet"
          description="Workflow activity will appear here when you connect real data."
        />
      </div>
    </div>
  );
}
