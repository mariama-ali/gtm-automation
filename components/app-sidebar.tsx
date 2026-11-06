"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Building2, Settings } from "lucide-react";
const links = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Leads", href: "/leads", icon: Users },
  { name: "Companies", href: "/companies", icon: Building2 },
  { name: "Settings", href: "/settings", icon: Settings },
];
export default function AppSidebar() {
  const pathname = usePathname();
  return (
    <aside
      className="w-full shrink-0 border-b bg-white p-4
md:min-h-screen md:w-64 md:border-b-0 md:border-r"
    >
      <h1 className="mb-6 text-xl font-bold text-slate-900">GTM Automation</h1>
      <nav className="flex gap-2 overflow-x-auto md:flex-col">
        {links.map(({ name, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex shrink-0 items-center gap-3 rounded-lg
px-4 py-3 text-sm ${
              pathname === href
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Icon size={18} />
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
