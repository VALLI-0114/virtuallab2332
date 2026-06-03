import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Save, RotateCcw, CheckCircle2, Terminal, ArrowLeft, Lightbulb, Beaker, HelpCircle } from "lucide-react";
import { courses } from "@/lib/course-data";

type WorkspaceSearch = {
  exp?: string;
};

export const Route = createFileRoute("/workspace")({
  validateSearch: (search: Record<string, unknown>): WorkspaceSearch => {
    return {
      exp: search.exp as string | undefined,
    };
  },
  head: () => ({ meta: [{ title: "Workspace — VLMS" }, { name: "description", content: "Isolated runtime workspace for student experiments." }] }),
  component: Workspace,
});

// Helper to find experiment details
function getExperimentDetails(expId?: string) {
  if (!expId) return null;
  for (const course of Object.values(courses)) {
    for (let wIdx = 0; wIdx < course.weeks.length; wIdx++) {
      const week = course.weeks[wIdx];
      const expIdx = week.experiments.findIndex(e => e.id === expId);
      if (expIdx !== -1) {
        return { course, week, experiment: week.experiments[expIdx] };
      }
    }
  }
  return null;
}

function Workspace() {
  const { exp } = Route.useSearch();
  const details = getExperimentDetails(exp);

  const title = details?.experiment.title || "Experiment Workspace";
  const courseTitle = details?.course.title || "Sandbox";
  const weekTitle = details?.week.title || "";

  const [language, setLanguage] = useState("c");

  const templates: Record<string, { file: string, code: string }> = {
    c: {
      file: "main.c",
      code: `#include <stdio.h>\n\nint main() {\n    // Write your solution here\n    \n    printf("Hello World\\n");\n    \n    return 0;\n}`
    },
    java: {
      file: "Main.java",
      code: `public class Main {\n    public static void main(String[] args) {\n        // Write your solution here\n        \n        System.out.println("Hello World");\n    }\n}`
    },
    python: {
      file: "main.py",
      code: `def solve():\n    # Write your solution here\n    print("Hello World")\n\nif __name__ == "__main__":\n    solve()`
    }
  };

  return (
    <div className="h-screen flex flex-col pt-[5.5rem] bg-background">
      <div className="flex-1 overflow-hidden">
        <div className="h-full grid lg:grid-cols-[1fr_1fr] divide-x divide-border">
          
          {/* Left Pane: Syllabus & Problem Description */}
          <div className="h-full flex flex-col overflow-y-auto bg-card">
             <div className="p-6 border-b border-border bg-secondary/20">
               <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                 <Link to="/branches" className="hover:text-foreground flex items-center gap-1"><ArrowLeft className="size-3.5"/> Back</Link>
                 <span>/</span>
                 {details ? <Link to={`/course/${details.course.id}`} className="hover:text-foreground">{courseTitle}</Link> : <span>{courseTitle}</span>}
                 {details && <span>/</span>}
                 {details && <span>{weekTitle}</span>}
               </div>
               <h1 className="text-2xl font-bold font-display leading-tight">{title}</h1>
               <div className="mt-4 flex gap-2">
                 <span className="px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-mint/20 text-mint border border-mint/30">Easy</span>
                 <span className="px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-secondary text-foreground border border-border">Core</span>
               </div>
             </div>
             
             <div className="p-6 flex-1 text-sm text-foreground/90 space-y-6">
                {details ? (
                  <>
                    <section>
                      <h2 className="font-semibold text-base mb-2 flex items-center gap-2"><Beaker className="size-4 text-cyan" /> Problem Statement</h2>
                      <p className="leading-relaxed">
                        Implement a program for the following objective: <br/><br/>
                        <strong>{title}</strong>
                      </p>
                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        {details.week.objective}
                      </p>
                    </section>
                    <section>
                      <h2 className="font-semibold text-base mb-2 flex items-center gap-2"><Lightbulb className="size-4 text-mint" /> Example</h2>
                      <div className="bg-secondary/30 border border-border rounded-lg p-4 font-mono text-xs space-y-3">
                         <div>
                           <div className="text-muted-foreground mb-1">Input:</div>
                           <div>10, 20, 30</div>
                         </div>
                         <div>
                           <div className="text-muted-foreground mb-1">Output:</div>
                           <div>Sum: 60, Avg: 20</div>
                         </div>
                      </div>
                    </section>
                    <section>
                      <h2 className="font-semibold text-base mb-2 flex items-center gap-2"><HelpCircle className="size-4 text-primary" /> Mini Questions</h2>
                      <ul className="list-disc list-inside space-y-1.5 text-muted-foreground">
                        <li>What edge cases should you consider for this problem?</li>
                        <li>Can you optimize the time complexity?</li>
                        <li>How would this approach scale for 10^6 inputs?</li>
                      </ul>
                    </section>
                  </>
                ) : (
                  <div className="text-muted-foreground">Select a specific experiment from a course to view details here.</div>
                )}
             </div>

             <div className="p-6 border-t border-border bg-secondary/20">
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-3">Evaluation Criteria</div>
                <div className="space-y-2">
                  {["Compiles successfully", "Passes base test cases", "Memory efficient"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm"><CheckCircle2 className="size-4 text-mint" /> {t}</div>
                  ))}
                </div>
             </div>
          </div>

          {/* Right Pane: Editor & Console */}
          <div className="h-full flex flex-col bg-[#0f111a]">
             <div className="flex items-center justify-between p-3 border-b border-border/10 bg-black/20">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground ml-2">
                  <span className="size-2 rounded-full bg-destructive/70" />
                  <span className="size-2 rounded-full bg-cyan/80" />
                  <span className="size-2 rounded-full bg-mint" />
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="ml-2 bg-transparent border-none text-muted-foreground focus:ring-0 cursor-pointer hover:text-foreground transition-colors"
                  >
                    <option value="c">C</option>
                    <option value="java">Java</option>
                    <option value="python">Python 3</option>
                  </select>
                  <span className="ml-2 text-white/40">|</span>
                  <span className="ml-2">{templates[language].file}</span>
                </div>
                <div className="flex gap-2">
                  <button className="inline-flex items-center gap-2 rounded-md border border-border/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 hover:bg-white/10 hover:text-white transition-colors"><RotateCcw className="size-3.5" /> Reset</button>
                  <button className="inline-flex items-center gap-2 rounded-md border border-border/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 hover:bg-white/10 hover:text-white transition-colors"><Save className="size-3.5" /> Save</button>
                  <button className="inline-flex items-center gap-2 rounded-md bg-mint/20 text-mint border border-mint/20 px-4 py-1.5 text-xs font-medium hover:bg-mint/30 transition-colors"><Play className="size-3.5" /> Run Code</button>
                </div>
             </div>
             
             <div className="flex-1 overflow-auto p-4">
                <pre className="text-[13px] leading-6 font-mono text-blue-300">
{templates[language].code}
                </pre>
             </div>

             <div className="h-56 border-t border-border/10 bg-black/40 flex flex-col">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-border/10 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  <Terminal className="size-3.5" /> Console Output
                </div>
                <div className="flex-1 overflow-auto p-4">
                  <pre className="text-[13px] font-mono text-green-400">
{`> Compilation successful.
> Executing...

Hello World

> Process exited with code 0`}
                  </pre>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
