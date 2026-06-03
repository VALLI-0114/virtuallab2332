import { createFileRoute } from "@tanstack/react-router";
import { domains } from "@/lib/lab-data";
import { ClipboardCheck, Timer, Trophy, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/assessments")({
  head: () => ({
    meta: [
      { title: "Assessments — VLMS" },
      { name: "description", content: "Auto-graded lab assessments across all curriculum tracks." },
    ],
  }),
  component: AssessmentsPage,
});

const assessments = domains.flatMap((d, i) => [
  {
    id: `${d.code}-A1`,
    domain: d.code,
    title: `${d.title} — Foundations Quiz`,
    duration: 30 + i * 5,
    questions: 15,
    status: i % 3 === 0 ? "completed" : i % 3 === 1 ? "in-progress" : "pending",
    score: i % 3 === 0 ? 82 + i : null,
  },
  {
    id: `${d.code}-A2`,
    domain: d.code,
    title: `${d.title} — Practical Lab`,
    duration: 60,
    questions: 5,
    status: i % 2 === 0 ? "pending" : "completed",
    score: i % 2 === 0 ? null : 74 + i * 2,
  },
]);

function AssessmentsPage() {
  const completed = assessments.filter((a) => a.status === "completed").length;
  const avg = Math.round(
    assessments.filter((a) => a.score).reduce((s, a) => s + (a.score ?? 0), 0) /
      Math.max(1, assessments.filter((a) => a.score).length),
  );

  return (
    <div className="px-6 lg:px-10 py-12">
      <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan">Evaluation Layer</div>
      <h1 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">Assessments</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">
        Timed quizzes and practical labs with deterministic auto-grading.
      </p>

      <div className="mt-8 grid sm:grid-cols-3 gap-3">
        {[
          { icon: ClipboardCheck, label: "Total", value: assessments.length },
          { icon: CheckCircle2, label: "Completed", value: completed },
          { icon: Trophy, label: "Avg Score", value: `${avg}%` },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center size-10 rounded-xl bg-secondary">
                <Icon className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="font-display text-2xl font-bold">{value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50 text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="text-left px-5 py-3">ID</th>
              <th className="text-left px-5 py-3">Title</th>
              <th className="text-left px-5 py-3">Duration</th>
              <th className="text-left px-5 py-3">Status</th>
              <th className="text-left px-5 py-3">Score</th>
            </tr>
          </thead>
          <tbody>
            {assessments.map((a) => (
              <tr key={a.id} className="border-t border-border hover:bg-secondary/30">
                <td className="px-5 py-3 font-mono text-xs">{a.id}</td>
                <td className="px-5 py-3 font-medium">{a.title}</td>
                <td className="px-5 py-3 text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Timer className="size-3.5" />
                    {a.duration}m
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                      a.status === "completed"
                        ? "bg-mint/15 text-mint"
                        : a.status === "in-progress"
                          ? "bg-cyan/15 text-cyan"
                          : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>
                <td className="px-5 py-3 font-mono font-semibold">{a.score ? `${a.score}%` : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
