import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AppSidebar from "@/components/app-sidebar";
import { signOut } from "./actions";
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 md:flex">
      <AppSidebar />
      <div className="min-w-0 flex-1">
        <header
          className="flex items-center justify-end border-b
bg-white px-6 py-3"
        >
          <form action={signOut}>
            <button
              type="submit"
              className="rounded-lg border
border-slate-200 px-4 py-2 text-sm text-slate-700
hover:bg-slate-100"
            >
              Log out
            </button>
          </form>
        </header>
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
