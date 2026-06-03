import { createFileRoute, Link } from "@tanstack/react-router";
import { courses } from "@/lib/course-data";
import { ArrowLeft, Book, Code, FlaskConical } from "lucide-react";

export const Route = createFileRoute("/course/$courseId")({
  component: CoursePage,
});

function CoursePage() {
  const { courseId } = Route.useParams();
  const course = courses[courseId];

  if (!course) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Course Not Found</h1>
        <Link to="/branches" className="text-cyan hover:underline mt-4 inline-block">Return to Branches</Link>
      </div>
    );
  }

  return (
    <div className="px-6 lg:px-10 py-12 max-w-5xl mx-auto">
      <Link to="/branches" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="size-4" /> Back to Branches
      </Link>
      
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs font-medium text-muted-foreground mb-4">
          <Book className="size-3.5" /> Syllabus Overview
        </div>
        <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">{course.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{course.objectives}</p>
      </div>

      <div className="space-y-8">
        {course.weeks.map((week, index) => (
          <div key={index} className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="px-6 py-5 border-b border-border bg-secondary/30">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 grid place-items-center size-10 rounded-lg bg-primary/10 text-primary font-bold font-mono">
                  W{index + 1}
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{week.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{week.objective}</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-1 text-foreground/80">{week.tutorial}</h3>
                <p className="text-sm text-muted-foreground">{week.labTitle}</p>
              </div>
              <div className="space-y-2 mt-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan mb-3">Experiments</h4>
                {week.experiments.map((exp, i) => (
                  <div key={exp.id} className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-background/50 hover:border-border transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted-foreground">{i + 1}.</span>
                      <span className="text-sm font-medium">{exp.title}</span>
                    </div>
                    <Link 
                      to="/workspace"
                      search={{ exp: exp.id }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium hover:bg-secondary/80 transition-colors"
                    >
                      <Code className="size-3.5" /> Solve
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
