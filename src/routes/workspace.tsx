import { createFileRoute } from "@tanstack/react-router";
import { Play, Save, RotateCcw, CheckCircle2, Terminal } from "lucide-react";

export const Route = createFileRoute("/workspace")({
  head: () => ({ meta: [{ title: "Experiment Workspace — VLMS" }, { name: "description", content: "Isolated runtime workspace for student experiments." }] }),
  component: Workspace,
});

const code = `# Lab 04 — Matrix Manipulation
import numpy as np

def transpose(m):
    return [[m[j][i] for j in range(len(m))] for i in range(len(m[0]))]

A = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])

print("Transpose:")
for row in transpose(A.tolist()):
    print(row)
`;

function Workspace() {
  return (
    <div className="px-6 lg:px-10 py-10">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan">Sandbox · Python 3.11</div>
          <h1 className="mt-2 font-display text-3xl lg:text-4xl font-bold tracking-tight">Experiment Workspace</h1>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm"><RotateCcw className="size-4" /> Reset</button>
          <button className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm"><Save className="size-4" /> Save draft</button>
          <button className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium"><Play className="size-4" /> Execute</button>
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-[1fr_380px] gap-4">
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/50">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="size-2 rounded-full bg-destructive/70" />
              <span className="size-2 rounded-full bg-cyan/80" />
              <span className="size-2 rounded-full bg-mint" />
              <span className="ml-3 text-muted-foreground">lab_04_matrix.py</span>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Isolated · Read-only FS</div>
          </div>
          <pre className="p-5 text-[13px] leading-6 font-mono overflow-auto"><code>{code}</code></pre>
          <div className="border-t border-border bg-background">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <Terminal className="size-3.5" /> stdout
            </div>
            <pre className="p-5 text-[13px] leading-6 font-mono text-muted-foreground">{`Transpose:
[1, 4, 7]
[2, 5, 8]
[3, 6, 9]

> Process exited (0) in 87ms`}</pre>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Evaluation</div>
            <div className="mt-3 space-y-2">
              {["Correct transpose returned", "Handles non-square matrix", "No mutation of input"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm"><CheckCircle2 className="size-4 text-mint" /> {t}</div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold">3/3</span>
              <span className="text-xs text-muted-foreground">test cases passed</span>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 text-xs space-y-2 font-mono">
            <Row k="Runtime" v="python:3.11-slim" />
            <Row k="Memory" v="128 MiB cap" />
            <Row k="CPU" v="0.5 vCPU" />
            <Row k="Net" v="disabled" />
            <Row k="Wall time" v="87 ms" />
          </div>
        </aside>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return <div className="flex justify-between"><span className="text-muted-foreground uppercase tracking-wider">{k}</span><span>{v}</span></div>;
}
