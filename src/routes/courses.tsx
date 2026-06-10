import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { branches } from "@/lib/lab-data";
import {
  BookOpen, GitBranch, Code, Workflow, Monitor, Database, Brain,
  Sparkles, Bot, Star, Network, Cpu, TerminalSquare, Coffee,
  MessageSquareText, Wifi, Code2, ArrowRight, Share2, Hexagon, Component, ChevronRight
} from "lucide-react";

function getTopicIcon(topic: string) {
  const iconClass = "size-5 shrink-0 text-[#111F22] dark:text-slate-300";
  if (topic === "C Programming") return null;
  if (topic === "Python") return null;
  if (topic === "Java") return null;
  if (topic === "DBMS") return <Database className={iconClass} />;
  if (topic.includes("Data Structures")) return <GitBranch className={iconClass} />;
  if (topic === "OS" || topic === "Operating Systems") return <Monitor className={iconClass} />;
  if (topic === "Machine Learning") return <Bot className={iconClass} />;
  if (topic === "AI Tools") return <Sparkles className={iconClass} />;
  if (topic === "LLMs") return <Bot className={iconClass} />;
  if (topic === "IoT") return null;
  if (topic === "Algorithms") return <Workflow className={iconClass} />;
  return null;
}

function getSubtitle(topic: string) {
  if (topic === "C Programming") return "From basics to advanced applications";
  if (topic === "Python") return "From basics to circuit course";
  if (topic === "Java") return "Prepareeor and coffe learning";
  if (topic === "DBMS") return "Data-base drinking applications";
  if (topic === "Machine Learning") return "Learn how a neucryrited maching";
  if (topic.includes("Data Structures")) return "Advanced data structures";
  if (topic === "AI Tools") return "From basics to advanced pattertons";
  if (topic === "LLMs") return "Learn an text document";
  if (topic === "IoT") return "Circuit-ourot map map sensors";
  return "Comprehensive learning module";
}

function getBgIcon(topic: string) {
  const baseClass = "absolute opacity-10 transition-all duration-700 group-hover:scale-110 pointer-events-none";

  if (topic === "C Programming") {
    return (
      <div className="absolute right-0 bottom-0 pointer-events-none transition-all duration-700 group-hover:scale-105 overflow-visible">
        <svg className="w-64 h-64 translate-x-12 translate-y-12" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Traces Group - Dark Blue */}
          <g className="text-blue-800/40 dark:text-blue-400/50">
            {/* Top Traces */}
            <path d="M80 70 V 40 L 60 20" />
            <circle cx="60" cy="20" r="2" />
            <path d="M90 70 V 30 L 110 10" />
            <circle cx="110" cy="10" r="2" />
            <path d="M100 70 V 20" />
            <circle cx="100" cy="20" r="2" />
            <path d="M110 70 V 50 L 130 30" />
            <circle cx="130" cy="30" r="2" />
            <path d="M120 70 V 60 L 150 30" />
            {/* Bottom Traces */}
            <path d="M80 130 V 160 L 60 180" />
            <circle cx="60" cy="180" r="2" />
            <path d="M90 130 V 170 L 110 190" />
            <circle cx="110" cy="190" r="2" />
            <path d="M100 130 V 180" />
            <circle cx="100" cy="180" r="2" />
            <path d="M110 130 V 150 L 130 170" />
            <circle cx="130" cy="170" r="2" />
            <path d="M120 130 V 140 L 150 170" />
            {/* Left Traces */}
            <path d="M70 80 H 40 L 20 60" />
            <circle cx="20" cy="60" r="2" />
            <path d="M70 90 H 30 L 10 110" />
            <circle cx="10" cy="110" r="2" />
            <path d="M70 100 H 20" />
            <circle cx="20" cy="100" r="2" />
            <path d="M70 110 H 50 L 30 130" />
            <circle cx="30" cy="130" r="2" />
            <path d="M70 120 H 60 L 30 150" />
            {/* Right Traces */}
            <path d="M130 80 H 160 L 180 60" />
            <circle cx="180" cy="60" r="2" />
            <path d="M130 90 H 170 L 190 110" />
            <circle cx="190" cy="110" r="2" />
            <path d="M130 100 H 180" />
            <circle cx="180" cy="100" r="2" />
            <path d="M130 110 H 150 L 170 130" />
            <circle cx="170" cy="130" r="2" />
            <path d="M130 120 H 140 L 170 150" />
          </g>

          {/* Microchip Group - Solid */}
          <g className="drop-shadow-md group-hover:drop-shadow-lg transition-all duration-700">
            {/* Outer Chip */}
            <rect x="70" y="70" width="60" height="60" rx="4" strokeWidth="2" className="stroke-teal-700 dark:stroke-teal-500 fill-teal-50 dark:fill-teal-900/50" />
            {/* Inner Chip */}
            <rect x="80" y="80" width="40" height="40" rx="2" strokeWidth="1.5" className="stroke-teal-800 dark:stroke-teal-400 fill-teal-800 dark:fill-teal-600" />
            {/* Core Nodes */}
            <circle cx="90" cy="90" r="2" fill="#ffffff" />
            <circle cx="100" cy="90" r="2" fill="#ffffff" />
            <circle cx="110" cy="90" r="2" fill="#ffffff" />
            <circle cx="90" cy="100" r="2" fill="#ffffff" />
            <circle cx="100" cy="100" r="2" fill="#ffffff" />
            <circle cx="110" cy="100" r="2" fill="#ffffff" />
            <circle cx="90" cy="110" r="2" fill="#ffffff" />
            <circle cx="100" cy="110" r="2" fill="#ffffff" />
            <circle cx="110" cy="110" r="2" fill="#ffffff" />
          </g>
        </svg>
      </div>
    );
  }

  if (topic === "Python") {
    return (
      <div className="absolute right-0 bottom-0 pointer-events-none transition-all duration-700 group-hover:scale-105 overflow-visible">
        {/* Concentric traces */}
        <svg className="absolute -right-6 -bottom-6 w-72 h-72 text-[#111F22]/20 dark:text-cyan-800/30" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="100" cy="100" r="30" strokeDasharray="4 2" />
          <circle cx="100" cy="100" r="45" strokeDasharray="10 4" />
          <circle cx="100" cy="100" r="60" strokeDasharray="2 6" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="75" strokeDasharray="20 5" />
          <circle cx="100" cy="100" r="90" strokeDasharray="4 8" strokeWidth="0.5" />
          {/* Dots on traces */}
          <circle cx="100" cy="55" r="2" fill="currentColor" />
          <circle cx="145" cy="100" r="2" fill="currentColor" />
          <circle cx="55" cy="100" r="2" fill="currentColor" />
          <circle cx="100" cy="145" r="2" fill="currentColor" />
          <circle cx="100" cy="25" r="2.5" fill="currentColor" />
          <circle cx="175" cy="100" r="2.5" fill="currentColor" />
          <circle cx="25" cy="100" r="2.5" fill="currentColor" />
          <circle cx="100" cy="175" r="2.5" fill="currentColor" />
          {/* Connecting lines */}
          <path d="M 100 70 L 100 55" />
          <path d="M 130 100 L 145 100" />
          <path d="M 100 130 L 100 145" />
          <path d="M 70 100 L 55 100" />
          <path d="M 100 40 L 100 25" />
          <path d="M 160 100 L 175 100" />
        </svg>
        {/* Python Logo in center */}
        <div className="absolute -right-2 bottom-0 w-48 h-48 flex items-center justify-center drop-shadow-md group-hover:drop-shadow-lg transition-all duration-700">
          <i className="fab fa-python text-teal-800 dark:text-teal-600 text-[100px]"></i>
        </div>
      </div>
    );
  }

  if (topic === "Java") {
    return (
      <div className="absolute right-2 bottom-0 pointer-events-none transition-all duration-700 group-hover:scale-105 overflow-visible">
        <div className="w-36 h-36 flex items-center justify-center drop-shadow-[0_8px_16px_rgba(15,23,42,0.4)] opacity-90">
          <i className="fab fa-java text-slate-700 dark:text-slate-400 text-[130px]"></i>
        </div>
      </div>
    );
  }

  if (topic === "DBMS") {
    return (
      <div className={`${baseClass} right-4 bottom-4 opacity-10`}>
        <Share2 className="w-32 h-32 text-[#111F22] dark:text-slate-500" strokeWidth={0.5} />
      </div>
    );
  }

  if (topic === "Machine Learning") {
    return (
      <div className={`${baseClass} right-0 bottom-0 opacity-10`}>
        <Component className="w-40 h-40 text-[#111F22] dark:text-slate-500 translate-x-4 translate-y-4" strokeWidth={0.5} />
      </div>
    );
  }

  if (topic.includes("Data Structures")) {
    const IsoNode = ({ cx, cy }: { cx: number, cy: number }) => (
      <g transform={`translate(${cx}, ${cy})`}>
        {/* Left side */}
        <path d="M 0 10 L 15 18 V 30 L 0 22 Z" fill="#0f766e" />
        {/* Right side */}
        <path d="M 30 10 L 15 18 V 30 L 30 22 Z" fill="#115e59" />
        {/* Top lid */}
        <path d="M 0 10 L 15 2 L 30 10 L 15 18 Z" fill="#14b8a6" stroke="#5eead4" strokeWidth="0.5" />
        {/* Center dot */}
        <circle cx="15" cy="10" r="2.5" fill="#ffffff" />
      </g>
    );

    return (
      <div className="absolute right-0 bottom-0 pointer-events-none transition-all duration-700 group-hover:scale-105 overflow-visible">
        <svg className="w-64 h-64 text-slate-400 translate-x-20 translate-y-8" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Definition for arrowhead */}
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#1e40af" stroke="none" opacity="0.6" />
            </marker>
          </defs>

          {/* Arrows/Connections between nodes */}
          <g stroke="#1e40af" strokeWidth="1.5" opacity="0.6">
            <path d="M 100 45 L 75 60" markerEnd="url(#arrow)" />
            <path d="M 100 45 L 125 60" markerEnd="url(#arrow)" />

            <path d="M 75 80 L 50 95" markerEnd="url(#arrow)" />
            <path d="M 75 80 L 100 95" markerEnd="url(#arrow)" />

            <path d="M 125 80 L 100 95" markerEnd="url(#arrow)" />
            <path d="M 125 80 L 150 95" markerEnd="url(#arrow)" />

            <path d="M 50 115 L 75 130" markerEnd="url(#arrow)" />
            <path d="M 100 115 L 125 130" markerEnd="url(#arrow)" />
            <path d="M 150 115 L 125 130" markerEnd="url(#arrow)" />
          </g>

          {/* Draw 3D nodes */}
          <IsoNode cx={85} cy={20} />

          <IsoNode cx={60} cy={55} />
          <IsoNode cx={110} cy={55} />

          <IsoNode cx={35} cy={90} />
          <IsoNode cx={85} cy={90} />
          <IsoNode cx={135} cy={90} />

          <IsoNode cx={60} cy={125} />
          <IsoNode cx={110} cy={125} />

          {/* Floating decorative dots and lines matching screenshot */}
          <circle cx="45" cy="50" r="3" fill="#0f766e" opacity="0.6" />
          <circle cx="165" cy="45" r="4" fill="#115e59" opacity="0.6" />
          <circle cx="155" cy="85" r="2" fill="#14b8a6" opacity="0.6" />
          <circle cx="160" cy="145" r="3" fill="#0f766e" opacity="0.6" />
          <path d="M 140 25 L 160 40" stroke="#1e40af" strokeWidth="1" opacity="0.3" />
          <path d="M 30 130 L 60 145" stroke="#1e40af" strokeWidth="1" opacity="0.3" />
          <path d="M 140 145 L 170 120" stroke="#1e40af" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>
    );
  }

  if (topic === "AI Tools") {
    return (
      <div className={`${baseClass} right-0 top-0 opacity-10`}>
        <Hexagon className="w-48 h-48 text-[#111F22] dark:text-slate-500 translate-x-8 -translate-y-8" strokeWidth={0.5} />
      </div>
    );
  }

  if (topic === "LLMs") {
    return (
      <div className={`${baseClass} -right-4 -bottom-4 opacity-15`}>
        <MessageSquareText className="w-36 h-36 text-[#111F22] dark:text-slate-500" strokeWidth={0.5} />
      </div>
    );
  }

  if (topic === "IoT") {
    return (
      <div className={`${baseClass} right-0 bottom-0 opacity-10`}>
        <Wifi className="w-48 h-48 text-[#111F22] dark:text-slate-500 translate-x-8 translate-y-8" strokeWidth={0.5} />
      </div>
    );
  }

  return (
    <div className={`${baseClass} -right-6 -bottom-6 opacity-[0.08]`}>
      <BookOpen className="w-36 h-36 text-[#111F22] dark:text-slate-500" strokeWidth={0.5} />
    </div>
  );
}

export const Route = createFileRoute("/courses")({
  head: () => ({ meta: [{ title: "Courses — VLMS" }, { name: "description", content: "Technical courses for the curriculum." }] }),
  component: CoursesPage,
});

function CoursesPage() {
  const [profile, setProfile] = useState<{ name: string, interests: string[] } | null>(null);

  useEffect(() => {
    const profileStr = localStorage.getItem('currentUserProfile');
    if (profileStr) {
      try {
        setProfile(JSON.parse(profileStr));
      } catch (e) { }
    }
  }, []);

  const itBranch = branches.find(b => b.code === "IT");
  const courses = itBranch?.topics || [];

  const recommendedCourses = courses.filter(c => {
    if (!profile || !profile.interests || profile.interests.length === 0) return false;
    const lowerCourse = c.toLowerCase();
    return profile.interests.some(i => {
      const lowerInterest = i.toLowerCase();
      if (lowerInterest === "ai" && (lowerCourse.includes("ai") || lowerCourse.includes("machine learning") || lowerCourse.includes("llm"))) return true;
      if (lowerCourse.includes(lowerInterest)) return true;
      if (lowerInterest === "web development" && (lowerCourse.includes("web") || lowerCourse.includes("java"))) return true;
      return false;
    });
  });

  const remainingCourses = courses.filter(c => !recommendedCourses.includes(c));

  const renderCard = (t: string, isRecommended: boolean = false) => {
    const slug = t.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

    let cardBgClass = "bg-white dark:bg-slate-900";
    let cardBorderClass = "border-[#111F22]/20 dark:border-slate-700";
    let btnBorderClass = "border-[#111F22]/30 dark:border-slate-600";

    if (t === "DBMS") {
      cardBgClass = "bg-[#f0f9fa] dark:bg-cyan-950/30";
      cardBorderClass = "border-slate-700 dark:border-slate-500";
      btnBorderClass = "border-slate-700 dark:border-slate-500";
    } else if (t.includes("Data Structures")) {
      cardBgClass = "bg-gradient-to-br from-[#ebf5fb] to-[#f4f9fd] dark:from-slate-800 dark:to-slate-900";
      cardBorderClass = "border-slate-200 dark:border-slate-700";
      btnBorderClass = "border-slate-300 dark:border-slate-600";
    }

    return (
      <Link
        key={t}
        to={`/course/${slug}`}
        className={`group relative overflow-hidden flex flex-col justify-between p-6 rounded-xl border ${cardBorderClass} ${cardBgClass} transition-all min-h-[160px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)]`}
      >
        <div className="relative z-10 w-3/4">
          <h3 className={`font-display text-[21px] font-bold mb-1 flex items-start gap-2.5 ${t === "C Programming" || t.includes("Data Structures") ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan to-primary" : "text-[#111111] dark:text-slate-100"}`}>
            {getTopicIcon(t) && <div className="mt-1">{getTopicIcon(t)}</div>}
            <span className="leading-tight">{t}</span>
          </h3>
          <p className={`text-[13.5px] text-[#4A5558] dark:text-slate-400 font-medium leading-relaxed mt-1.5 mb-6`}>
            {getSubtitle(t)}
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-2.5 w-fit mt-4">
          <div className={`inline-flex items-center justify-center gap-1.5 px-4 py-1.5 bg-transparent border ${btnBorderClass} rounded-full text-[13px] font-medium text-[#111111] dark:text-slate-300 hover:bg-[#111F22]/5 dark:hover:bg-slate-800 transition-colors`}>
            Explore Course <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Background Icon */}
        {getBgIcon(t)}
      </Link>
    );
  };

  return (
    <div className="px-6 lg:px-10 py-12 max-w-7xl mx-auto">
      <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan to-primary w-fit block">Curriculum</div>
      <h1 className="mt-2 font-display text-4xl lg:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan to-primary pb-2 w-fit block">Courses</h1>
      {profile?.name && (
        <p className="mt-2 text-cyan font-medium text-lg">Welcome back, {profile.name}!</p>
      )}
      <p className="mt-2 text-muted-foreground max-w-2xl mb-10">Explore the complete syllabus and experiment workspace for your courses.</p>

      {recommendedCourses.length > 0 && (
        <>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-400/50 bg-purple-500/10 text-xs font-medium text-purple-400 mb-6">
            <Star className="size-3.5" /> Recommended for You
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {recommendedCourses.map((t) => renderCard(t, true))}
          </div>
        </>
      )}

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-xs font-medium text-cyan-600 dark:text-cyan-400 mb-6">
        <BookOpen className="size-3.5" /> All Subjects
      </div>

      {remainingCourses.length === 0 && recommendedCourses.length === 0 ? (
        <div className="text-muted-foreground p-10 border border-dashed border-border rounded-xl text-center">
          No subjects configured yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {remainingCourses.map((t) => renderCard(t, false))}
        </div>
      )}
    </div>
  );
}
