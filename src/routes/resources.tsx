import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, FileText, Video, Download } from "lucide-react";
import { domains } from "@/lib/lab-data";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — VLMS" },
      { name: "description", content: "Reference materials, manuals, and reading lists for every lab track." },
    ],
  }),
  component: ResourcesPage,
});

const TYPES = [
  { type: "Manual", icon: BookOpen, accent: "text-primary" },
  { type: "Cheatsheet", icon: FileText, accent: "text-cyan" },
  { type: "Walkthrough", icon: Video, accent: "text-mint" },
] as const;

function ResourcesPage() {
  return (
    <div className="px-6 lg:px-10 py-12">
      <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan">Knowledge Base</div>
      <h1 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">Resources</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">
        Curated manuals, cheatsheets, and walkthroughs to accompany every lab.
      </p>

      <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {domains.flatMap((d) =>
          TYPES.map(({ type, icon: Icon, accent }) => (
            <div
              key={`${d.code}-${type}`}
              className="group rounded-2xl border border-border bg-card p-5 hover:border-foreground/30 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className={`grid place-items-center size-10 rounded-xl bg-secondary ${accent}`}>
                  <Icon className="size-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  {d.code}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold leading-tight">
                {d.title} — {type}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{d.subtitle}</p>
              <button className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 hover:text-foreground">
                <Download className="size-3.5" />
                Open resource
              </button>
            </div>
          )),
        )}
      </div>
    </div>
  );
}
