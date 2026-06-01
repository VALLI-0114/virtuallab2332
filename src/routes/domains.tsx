import { createFileRoute } from "@tanstack/react-router";
import { DomainCard } from "@/components/DomainCard";
import { domains } from "@/lib/lab-data";

export const Route = createFileRoute("/domains")({
  head: () => ({ meta: [{ title: "Target Domains — VLMS" }, { name: "description", content: "Six technical tracks aligned to the undergraduate CS syllabus." }] }),
  component: DomainsPage,
});

function DomainsPage() {
  return (
    <div className="px-6 lg:px-10 py-12">
      <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan">Curriculum Matrix</div>
      <h1 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight">Target Domains</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">Isolated sandbox runtimes for every curriculum track. Pick a domain to enter its evaluation workspace.</p>
      <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {domains.map((d) => <DomainCard key={d.code} d={d} />)}
      </div>
    </div>
  );
}
