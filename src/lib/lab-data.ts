import { Code2, Database, Network, Cpu, FileCode, Coffee, FlaskConical, type LucideIcon } from "lucide-react";

export type Branch = {
  code: string;
  title: string;
  subtitle: string;
  level: "Beginner-Intermediate" | "Intermediate" | "Advanced";
  labs: number;
  hours: number;
  topics: string[];
  icon: LucideIcon;
  tint: string;
};

export const branches: Branch[] = [
  { code: "IT", title: "Information Technology", subtitle: "IT Labs", level: "Advanced", labs: 30, hours: 45, topics: ["Python", "Java", "Data Structures", "OS", "DBMS", "Machine Learning"], icon: Code2, tint: "from-cyan/20 to-transparent" },
  { code: "CSE", title: "Computer Science and Engineering", subtitle: "CSE Labs", level: "Advanced", labs: 25, hours: 38, topics: [], icon: Database, tint: "from-mint/25 to-transparent" },
  { code: "ECE", title: "Electronics and Communication", subtitle: "ECE Labs", level: "Intermediate", labs: 20, hours: 30, topics: [], icon: Cpu, tint: "from-primary/15 to-transparent" },
  { code: "BSHSS", title: "BS & HSS", subtitle: "Basic Sciences & Humanities", level: "Beginner-Intermediate", labs: 15, hours: 20, topics: ["C Programming", "Physics Lab", "Chemistry Lab"], icon: FlaskConical, tint: "from-accent/40 to-transparent" },
];

export const metrics = [
  { label: "Active Experiments Run", value: "1,284", delta: "+12.4%", tone: "mint" as const },
  { label: "Active Platform Runtimes", value: "42", delta: "Stable", tone: "cyan" as const },
  { label: "Submissions Today", value: "5,391", delta: "+842 / hr", tone: "mint" as const },
  { label: "Avg. Execution Latency", value: "87ms", delta: "Within SLO", tone: "cyan" as const },
  { label: "Sandbox Uptime", value: "99.98%", delta: "Last 90d", tone: "mint" as const },
  { label: "Institutions Served", value: "36", delta: "Federated", tone: "cyan" as const },
];

export const runtimes = ["py", "db", "jvm", "node", "gcc", "psql"];
