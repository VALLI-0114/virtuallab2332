import { createFileRoute, Link } from "@tanstack/react-router";
import { branches } from "@/lib/lab-data";
import { ArrowLeft, BookOpen } from "lucide-react";

export const Route = createFileRoute("/branch/$branchId")({
  component: BranchPage,
});

function BranchPage() {
  const { branchId } = Route.useParams();
  
  // Find the branch data (case insensitive)
  const branch = branches.find(b => b.code.toLowerCase() === branchId.toLowerCase());

  if (!branch) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Branch Not Found</h1>
        <Link to="/branches" className="text-cyan hover:underline mt-4 inline-block">Return to Branches</Link>
      </div>
    );
  }

  const Icon = branch.icon;

  return (
    <div className="px-6 lg:px-10 py-12 max-w-5xl mx-auto">
      <Link to="/branches" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="size-4" /> Back to Curriculum Matrix
      </Link>
      
      <div className="mb-12 flex items-start gap-4">
        <div className="grid place-items-center size-16 rounded-xl bg-secondary text-foreground font-mono text-xl font-semibold shadow-sm">
          {branch.code}
        </div>
        <div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight flex items-center gap-3">
            {branch.title} <Icon className="size-8 text-muted-foreground opacity-50" />
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{branch.subtitle}</p>
        </div>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs font-medium text-muted-foreground mb-6">
          <BookOpen className="size-3.5" /> Department Subjects
        </div>
        
        {branch.topics.length === 0 ? (
          <div className="text-muted-foreground p-10 border border-dashed border-border rounded-xl text-center">
            No subjects configured for this branch yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {branch.topics.map((t) => {
              const slug = t.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
              return (
                <Link 
                  key={t}
                  to={`/course/${slug}`}
                  className="group flex flex-col justify-between p-6 rounded-xl border border-border bg-card hover:border-foreground/30 hover:shadow-sm transition-all"
                >
                  <div>
                    <h3 className="font-display text-xl font-semibold group-hover:text-cyan transition-colors">{t}</h3>
                    <p className="text-sm text-muted-foreground mt-2">View complete syllabus and experiment workspace for this course.</p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-foreground">
                    Explore Course &rarr;
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
