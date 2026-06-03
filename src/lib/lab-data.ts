import { Code2, Database, Network, Cpu, FileCode, Coffee, type LucideIcon } from "lucide-react";

export type Domain = {
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

export const domains: Domain[] = [
  { code: "PY", title: "Python Programming", subtitle: "Python 3 Runtime, Script Execution", level: "Beginner-Intermediate", labs: 18, hours: 24, topics: ["Matrix Manipulation", "File I/O Streams", "Functional Lambdas", "Generators"], icon: Code2, tint: "from-cyan/20 to-transparent" },
  { code: "DB", title: "Database Management Systems", subtitle: "PostgreSQL Query Isolated Sandbox", level: "Intermediate", labs: 22, hours: 30, topics: ["DDL/DML Operations", "Nested Subqueries", "Complex Joins", "Indexing", "Transactions"], icon: Database, tint: "from-mint/25 to-transparent" },
  { code: "DS", title: "Data Structures", subtitle: "Memory Layouts & Pointer Simulations", level: "Advanced", labs: 26, hours: 40, topics: ["Linked List Inversions", "BST Traversal", "Graph Algorithms", "Heaps"], icon: Network, tint: "from-primary/15 to-transparent" },
  { code: "OS", title: "Operating Systems", subtitle: "Process Scheduling Runtimes", level: "Advanced", labs: 20, hours: 36, topics: ["CPU Scheduling (Round Robin, SRTF)", "Semaphores", "Thread Mutexes", "Paging"], icon: Cpu, tint: "from-accent/40 to-transparent" },
  { code: "CP", title: "C Programming", subtitle: "GCC Compiler / Memory Layout Analysis", level: "Intermediate", labs: 20, hours: 32, topics: ["Pointers & Memory Management", "Structs & Unions", "File I/O Operations", "Linked Lists & Trees"], icon: FileCode, tint: "from-accent/30 to-transparent" },
  { code: "JV", title: "Java Programming", subtitle: "JVM Sandbox Compiler", level: "Intermediate", labs: 19, hours: 28, topics: ["Multi-threaded Synchronizations", "Polymorphic Interfaces", "Custom Exception Handlers"], icon: Coffee, tint: "from-mint/20 to-transparent" },
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
