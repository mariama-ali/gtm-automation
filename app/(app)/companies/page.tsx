import PageHeader from "@/components/ui/page-header";
import EmptyState from "@/components/ui/empty-state";
export default function CompaniesPage() {
  return (
    <div>
      <PageHeader
        title="Companies"
        description="Track accounts and company information."
      />
      <EmptyState
        title="No companies yet"
        description="Your company records will appear here."
      />
    </div>
  );
}
