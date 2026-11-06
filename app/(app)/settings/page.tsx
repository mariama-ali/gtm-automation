import PageHeader from "@/components/ui/page-header";
import EmptyState from "@/components/ui/empty-state";
export default function SettingsPage() {
  return (
    <div>
      <PageHeader
        title="Settings"
        description="Manage your account and integrations."
      />
      <EmptyState
        title="No integrations configured"
        description="You will connect APIs and CRM tools here."
      />
    </div>
  );
}
