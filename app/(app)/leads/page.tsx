import PageHeader from "@/components/ui/page-header";
import EmptyState from "@/components/ui/empty-state";
export default function LeadsPage() {
  return (
    <div>
      <PageHeader title="Leads" description="Manage and qualify your leads." />
      <EmptyState
        title="No leads yet"
        description="You will import and manage leads here."
      />
    </div>
  );
}
