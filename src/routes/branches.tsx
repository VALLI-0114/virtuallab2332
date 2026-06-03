import { createFileRoute } from "@tanstack/react-router";
import { BranchCard } from "@/components/BranchCard";
import { branches } from "@/lib/lab-data";

export const Route = createFileRoute("/branches")({
  head: () => ({ meta: [{ title: "Branches — VLMS" }, { name: "description", content: "Technical branches for the curriculum." }] }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <div className="px-6 lg:px-10 py-12">
      <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan">Curriculum Matrix</div>
      <h1 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">Branches</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">Explore branches and their respective subjects.</p>
      <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {branches.map((d) => <BranchCard key={d.code} d={d} />)}
      </div>
    </div>
  );
}
