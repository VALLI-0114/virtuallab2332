import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { LayoutDashboard, Database, FlaskConical, GraduationCap, BookOpen, PanelLeft, Activity, Beaker } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">Route not found in sandbox registry.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Return to Dashboard</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Runtime fault</h1>
        <p className="mt-2 text-sm text-muted-foreground">The sandbox encountered an unexpected exception.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Re-initialize</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VLMS — Virtual Lab Management System" },
      { name: "description", content: "Isolated, authoritative laboratory framework for computer science curricula." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/domains", label: "Target Domains", icon: Database },
  { to: "/workspace", label: "Experiment Workspace", icon: FlaskConical },
  { to: "/faculty", label: "Faculty Portal", icon: GraduationCap },
] as const;

function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex items-center gap-3 px-5 py-5 border-b border-sidebar-border">
        <div className="grid place-items-center size-9 rounded-md bg-primary text-primary-foreground">
          <Beaker className="size-5" />
        </div>
        <div>
          <div className="font-display font-bold text-sm tracking-tight">VLMS</div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Virtual Lab</div>
        </div>
      </div>
      <nav className="flex-1 p-3 space-y-6">
        <div>
          <div className="px-2 mb-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Navigate</div>
          <ul className="space-y-0.5">
            {navItems.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <Link
                  to={to}
                  activeOptions={{ exact: to === "/" }}
                  className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground/80 hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "bg-secondary text-foreground font-medium" }}
                >
                  <Icon className="size-4" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="px-2 mb-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Resources</div>
          <ul className="space-y-0.5">
            <li className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground/80">
              <BookOpen className="size-4" /> Syllabus Library
            </li>
          </ul>
        </div>
      </nav>
      <div className="p-4 border-t border-sidebar-border font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
        v2.6 · Sandbox Stable
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-border bg-background/80 backdrop-blur px-5 py-3">
      <div className="flex items-center gap-3 min-w-0">
        <button className="lg:hidden grid place-items-center size-9 rounded-md border border-border"><PanelLeft className="size-4" /></button>
        <div className="hidden md:flex items-center gap-3 text-xs">
          <span className="font-mono uppercase tracking-[0.18em] text-muted-foreground">Indian Institute of Applied Computing</span>
          <span className="text-border">|</span>
          <span className="font-medium">Virtual Lab Management System</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-4 rounded-md border border-border px-3 py-1.5 text-[11px] font-mono">
          <Metric label="Runtimes" value="42" dot />
          <Metric label="Active Runs" value="1,284" />
          <Metric label="Latency" value="87ms" />
        </div>
        <div className="hidden sm:flex items-center gap-2 rounded-md border border-cyan/40 bg-cyan/10 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-foreground/80">
          Zero-Friction · No Login Required
        </div>
        <div className="grid place-items-center size-9 rounded-md border border-border"><Activity className="size-4" /></div>
      </div>
    </header>
  );
}

function Metric({ label, value, dot }: { label: string; value: string; dot?: boolean }) {
  return (
    <div className="flex items-center gap-1.5">
      {dot && <span className="size-1.5 rounded-full bg-mint shadow-[0_0_8px_var(--mint)]" />}
      <span className="uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="font-semibold text-foreground">{value}</span>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Topbar />
          <main className="flex-1"><Outlet /></main>
        </div>
      </div>
    </QueryClientProvider>
  );
}
