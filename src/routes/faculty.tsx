import { createFileRoute } from "@tanstack/react-router";
import { Users, FileCheck, ClipboardList, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/faculty")({
  head: () => ({ meta: [{ title: "Faculty Portal — VLMS" }, { name: "description", content: "Faculty oversight and grading console." }] }),
  component: Faculty,
});

const cards = [
  { icon: Users, label: "Enrolled Cohorts", value: "12", note: "Across 6 departments" },
  { icon: FileCheck, label: "Pending Review", value: "238", note: "Auto-graded · awaiting sign-off" },
  { icon: ClipboardList, label: "Published Rubrics", value: "47", note: "Versioned, audit-trail" },
  { icon: BarChart3, label: "Median Score", value: "82%", note: "Rolling 30-day window" },
];

function Faculty() {
  return (
    <div className="px-6 lg:px-10 py-12">
      <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan">Educator Console</div>
      <h1 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">Faculty Portal</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">Cohort telemetry, submission review, and rubric authoring — all backed by the same isolated runtime layer as the student workspace.</p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-xl border border-border bg-card p-5">
            <div className="grid place-items-center size-9 rounded-md bg-secondary"><c.icon className="size-4" /></div>
            <div className="mt-6 font-display text-3xl font-bold">{c.value}</div>
            <div className="mt-1 text-sm font-medium">{c.label}</div>
            <div className="mt-1 text-xs text-muted-foreground">{c.note}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-border bg-card overflow-hidden">
        <div className="px-5 py-3 border-b border-border flex items-center justify-between">
          <div className="font-display font-semibold">Recent Submissions</div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Live feed</div>
        </div>
        <table className="w-full text-sm">
          <thead className="text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
            <tr><Th>Roll</Th><Th>Lab</Th><Th>Runtime</Th><Th>Score</Th><Th>Latency</Th></tr>
          </thead>
          <tbody>
            {[
              ["CS21B042", "Matrix Manipulation", "py", "3/3", "87ms"],
              ["CS21B017", "BST Traversal", "gcc", "5/6", "121ms"],
              ["CS21B093", "Nested Subqueries", "psql", "4/4", "62ms"],
              ["CS21B005", "Round-Robin Scheduler", "jvm", "2/4", "210ms"],
              ["CS21B061", "REST Integration", "node", "6/6", "98ms"],
            ].map((row) => (
              <tr key={row[0]} className="border-b border-border last:border-0 hover:bg-secondary/40">
                {row.map((c, i) => <Td key={i} mono={i !== 1}>{c}</Td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) { return <th className="text-left font-medium px-5 py-3">{children}</th>; }
function Td({ children, mono }: { children: React.ReactNode; mono?: boolean }) { return <td className={`px-5 py-3 ${mono ? "font-mono text-xs" : ""}`}>{children}</td>; }
