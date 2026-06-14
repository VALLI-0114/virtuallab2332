import React, { useState, useEffect } from "react";
import {
  Play, RotateCcw, ArrowRight, CheckCircle2, Terminal, Info,
  Database, HelpCircle, Star, Sparkles, Code, Cpu, Award, Zap,
  Layers, PlayCircle, ShieldAlert, BookOpen, AlertCircle, Rocket,
  Globe, Radio, Compass, Lock, RefreshCw, Send, Check, X, ShieldCheck
} from "lucide-react";

type CampaignProps = {
  expId: string;
};

interface Badge {
  id: string;
  name: string;
  desc: string;
  icon: string;
  unlocked: boolean;
}

interface StageProgress {
  id: number;
  name: string;
  status: "locked" | "unlocked" | "completed";
  xpAwarded: number;
}

export function PythonInterpreterCampaign({ expId }: CampaignProps) {
  // --- Profile & Progress State ---
  const [xp, setXp] = useState(0);
  const [activeScreen, setActiveScreen] = useState<"lobby" | "game" | "completion">("lobby");
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [badges, setBadges] = useState<Badge[]>([
    { id: "mode_explorer", name: "Mode Explorer", desc: "Explored Interactive and Script modes", icon: "🚪", unlocked: false },
    { id: "interpreter_observer", name: "Interpreter Observer", desc: "Watched PyBot process statements", icon: "🤖", unlocked: false },
    { id: "satellite_activated", name: "Satellite Activated", desc: "Delivered first space message", icon: "📡", unlocked: false },
    { id: "language_explorer", name: "Language Explorer", desc: "Understood Python vs Java differences", icon: "🚀", unlocked: false },
    { id: "separator_engineer", name: "Separator Engineer", desc: "Mastered the sep parameter", icon: "⚙️", unlocked: false },
    { id: "output_designer", name: "Output Designer", desc: "Controlled lines using the end parameter", icon: "📐", unlocked: false },
    { id: "indentation_guardian", name: "Indentation Guardian", desc: "Solved the Indentation Temple", icon: "⛩️", unlocked: false },
    { id: "launch_commander", name: "Python Launch Commander", desc: "Saved the space station", icon: "👑", unlocked: false }
  ]);

  const [stages, setStages] = useState<StageProgress[]>([
    { id: 1, name: "Enter the Launch Station", status: "unlocked", xpAwarded: 50 },
    { id: 2, name: "Meet PyBot Interpreter", status: "locked", xpAwarded: 100 },
    { id: 3, name: "Deliver First Space Message", status: "locked", xpAwarded: 150 },
    { id: 4, name: "Python vs Java Race", status: "locked", xpAwarded: 100 },
    { id: 5, name: "Build Your Own Message", status: "locked", xpAwarded: 150 },
    { id: 6, name: "Separator Factory", status: "locked", xpAwarded: 100 },
    { id: 7, name: "Newline Machine", status: "locked", xpAwarded: 100 },
    { id: 8, name: "Indentation Temple", status: "locked", xpAwarded: 150 }
  ]);

  const [toast, setToast] = useState<{ message: string; type: "success" | "xp" | "error" | "badge" } | null>(null);

  // Trigger toast notification
  const triggerToast = (message: string, type: "success" | "xp" | "error" | "badge") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const addXpPoints = (amount: number, reason: string) => {
    setXp(prev => prev + amount);
    triggerToast(`+${amount} XP: ${reason}`, "xp");
  };

  const unlockBadgeById = (badgeId: string) => {
    setBadges(prev => prev.map(b => {
      if (b.id === badgeId && !b.unlocked) {
        triggerToast(`Badge Unlocked: ${b.name}!`, "badge");
        return { ...b, unlocked: true };
      }
      return b;
    }));
  };

  const completeStage = (stageId: number) => {
    setStages(prev => prev.map(s => {
      if (s.id === stageId) {
        if (s.status !== "completed") {
          addXpPoints(s.xpAwarded, `Completed Stage ${stageId}`);
        }
        return { ...s, status: "completed" };
      }
      if (s.id === stageId + 1 && s.status === "locked") {
        return { ...s, status: "unlocked" };
      }
      return s;
    }));
  };

  // --- STAGE VARIABLES & INTERACTION LOGIC ---

  // Stage 1: Modes
  const [s1SelectedDoor, setS1SelectedDoor] = useState<"interactive" | "script" | null>(null);
  const [s1DemoOutput, setS1DemoOutput] = useState<string[]>([]);
  const [s1Visited, setS1Visited] = useState<Record<string, boolean>>({});

  const handleS1DoorClick = (mode: "interactive" | "script") => {
    setS1SelectedDoor(mode);
    setS1Visited(prev => ({ ...prev, [mode]: true }));
    if (mode === "interactive") {
      setS1DemoOutput([">>> print(\"Hello\")", "Hello"]);
    } else {
      setS1DemoOutput(["print(\"Hello\")", "print(\"World\")", "--- Run Output ---", "Hello", "World"]);
    }

    const newVisited = { ...s1Visited, [mode]: true };
    if (newVisited.interactive && newVisited.script) {
      unlockBadgeById("mode_explorer");
      completeStage(1);
    }
  };

  // Stage 2: Robot
  const [s2Step, setS2Step] = useState(0);
  const [s2Logs, setS2Logs] = useState<string[]>([]);
  const s2Steps = [
    { label: "Step 1: Read Line", desc: "PyBot reads the code line: print(\"Hello World\")", log: "Reading line: print(\"Hello World\")" },
    { label: "Step 2: Recognize print()", desc: "PyBot identifies print as a built-in statement", log: "Parsed token: print call identified." },
    { label: "Step 3: Extract Text", desc: "PyBot extracts the characters inside quotes", log: "Extracted value: 'Hello World'" },
    { label: "Step 4: Display Output", desc: "PyBot flushes 'Hello World' directly to the screen", log: "Writing to console stdout: Hello World" }
  ];

  const handleS2Next = () => {
    if (s2Step < s2Steps.length) {
      setS2Logs(prev => [...prev, s2Steps[s2Step].log]);
      setS2Step(prev => prev + 1);
      if (s2Step === s2Steps.length - 1) {
        unlockBadgeById("interpreter_observer");
        completeStage(2);
      }
    }
  };

  // Stage 3: Space Message
  const [s3Launched, setS3Launched] = useState(false);
  const handleS3Launch = () => {
    setS3Launched(true);
    unlockBadgeById("satellite_activated");
    completeStage(3);
  };

  // Stage 4: Python vs Java Race
  const [s4OrderJava, setS4OrderJava] = useState<string[]>([]);
  const [s4OrderPython, setS4OrderPython] = useState<string[]>([]);
  const [s4Success, setS4Success] = useState(false);

  const handleS4Drop = (lang: "java" | "python", step: string) => {
    if (lang === "java") {
      if (!s4OrderJava.includes(step)) {
        setS4OrderJava([...s4OrderJava, step]);
      }
    } else {
      if (!s4OrderPython.includes(step)) {
        setS4OrderPython([...s4OrderPython, step]);
      }
    }
  };

  const handleS4Clear = () => {
    setS4OrderJava([]);
    setS4OrderPython([]);
    setS4Success(false);
  };

  useEffect(() => {
    const javaCorrect = JSON.stringify(s4OrderJava) === JSON.stringify(["Write", "Compile", "Run"]);
    const pythonCorrect = JSON.stringify(s4OrderPython) === JSON.stringify(["Write", "Run"]);
    if (javaCorrect && pythonCorrect && !s4Success) {
      setS4Success(true);
      unlockBadgeById("language_explorer");
      completeStage(4);
    }
  }, [s4OrderJava, s4OrderPython]);

  // Stage 5: Live Custom Message
  const [s5Name, setS5Name] = useState("Alex");
  const [s5Success, setS5Success] = useState(false);

  const handleS5Submit = () => {
    if (s5Name.trim() && s5Name !== "Alex") {
      setS5Success(true);
      addXpPoints(150, "Completed First Custom Python Program!");
      completeStage(5);
    } else {
      triggerToast("Replace the placeholder name with your own name first!", "error");
    }
  };

  // Stage 6: Separator Factory
  const [s6Sep, setS6Sep] = useState(" ");
  const [s6Success, setS6Success] = useState(false);

  const handleS6Select = (sepVal: string) => {
    setS6Sep(sepVal);
    setS6Success(true);
    unlockBadgeById("separator_engineer");
    completeStage(6);
  };

  // Stage 7: Newline Machine
  const [s7End, setS7End] = useState("\\n");
  const [s7Success, setS7Success] = useState(false);

  const handleS7Select = (endVal: string) => {
    setS7End(endVal);
    setS7Success(true);
    unlockBadgeById("output_designer");
    completeStage(7);
  };

  // Stage 8: Indentation Temple
  const [s8Indented, setS8Indented] = useState(false);
  const [s8Success, setS8Success] = useState(false);

  const handleS8Verify = () => {
    if (s8Indented) {
      setS8Success(true);
      unlockBadgeById("indentation_guardian");
      completeStage(8);
    } else {
      triggerToast("The print block needs to be indented under the if condition!", "error");
    }
  };

  // --- MINI CHALLENGES STATE ---
  const [mcAnswer1, setMcAnswer1] = useState<string | null>(null);
  const [mcAnswer2, setMcAnswer2] = useState<string | null>(null);
  const [mcAnswer3, setMcAnswer3] = useState<Record<string, string>>({});
  const [mcAnswer4, setMcAnswer4] = useState<string | null>(null);
  const [mcAnswer5, setMcAnswer5] = useState<string | null>(null);

  // --- FINAL BOSS SYSTEM REPAIR ---
  const [crystals, setCrystals] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });

  const [bossT1, setBossT1] = useState("");
  const [bossT2, setBossT2] = useState("");
  const [bossT3, setBossT3] = useState("");
  const [bossT4, setBossT4] = useState("");
  const [bossT5Indented, setBossT5Indented] = useState(false);

  const checkBossTask = (taskIndex: number) => {
    if (taskIndex === 1) {
      if (bossT1.trim() === 'print("Hello World")') {
        setCrystals(prev => ({ ...prev, 1: true }));
        addXpPoints(30, "Crystal 1 Restored!");
      } else {
        triggerToast("Format must be: print(\"Hello World\")", "error");
      }
    } else if (taskIndex === 2) {
      if (bossT2.startsWith('print("') && bossT2.endsWith('")') && bossT2 !== 'print("Alex")') {
        setCrystals(prev => ({ ...prev, 2: true }));
        addXpPoints(30, "Crystal 2 Restored!");
      } else {
        triggerToast("Use print(\"Your Name\")", "error");
      }
    } else if (taskIndex === 3) {
      const match = bossT3.replace(/\s+/g, "");
      if (match.includes('sep="-"')) {
        setCrystals(prev => ({ ...prev, 3: true }));
        addXpPoints(30, "Crystal 3 Restored!");
      } else {
        triggerToast("Must include separator parameter: sep=\"-\"", "error");
      }
    } else if (taskIndex === 4) {
      const match = bossT4.replace(/\s+/g, "");
      if (match.includes('end=" "') || match.includes("end=' '")) {
        setCrystals(prev => ({ ...prev, 4: true }));
        addXpPoints(30, "Crystal 4 Restored!");
      } else {
        triggerToast("Must set end parameter to a space: end=\" \"", "error");
      }
    } else if (taskIndex === 5) {
      if (bossT5Indented) {
        setCrystals(prev => ({ ...prev, 5: true }));
        addXpPoints(30, "Crystal 5 Restored!");
      } else {
        triggerToast("Indentation is missing!", "error");
      }
    }
  };

  const isStationRestored = Object.values(crystals).every(v => v);

  const triggerCompletion = () => {
    unlockBadgeById("launch_commander");
    setActiveScreen("completion");
  };

  const currentStage = stages[currentStageIndex];

  return (
    <div className="flex flex-col h-full bg-[#030712] text-slate-100 font-sans select-none overflow-hidden relative">
      {/* Interactive Cyber Space Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      {/* Global Space Navigation Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gray-900/80 backdrop-blur-md border-b border-cyan-500/20 relative z-10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-tr from-cyan-600 to-indigo-600 rounded-xl text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <Rocket className="size-6 animate-pulse" />
          </div>
          <div>
            <h1 className="font-black text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
              PYTHON LAUNCH PAD
            </h1>
            <p className="text-[10px] text-cyan-300 tracking-widest uppercase font-mono">Space Station Command Console</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-indigo-950/50 border border-indigo-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-indigo-200">
            <Star className="size-4 text-yellow-400 fill-yellow-400" />
            <span>{xp} XP</span>
          </div>
          <button
            onClick={() => setActiveScreen("lobby")}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 border border-cyan-500/30 hover:border-cyan-400 text-xs font-bold rounded-lg transition-all"
          >
            Lobby Menu
          </button>
        </div>
      </header>

      {/* Toast Alert */}
      {toast && (
        <div className={`absolute top-20 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl shadow-2xl animate-in slide-in-from-top-10 z-50 font-bold flex items-center gap-3 border ${
          toast.type === "error" ? "bg-red-950/90 text-red-300 border-red-500/50" :
          toast.type === "xp" ? "bg-indigo-950/90 text-indigo-200 border-indigo-500/50" :
          toast.type === "badge" ? "bg-yellow-950/90 text-yellow-200 border-yellow-500/50" :
          "bg-emerald-950/90 text-emerald-200 border-emerald-500/50"
        }`}>
          <Sparkles className="size-5 text-yellow-400 animate-spin" />
          <span className="text-sm font-mono">{toast.message}</span>
        </div>
      )}

      {/* Main Content Pane */}
      <main className="flex-1 min-h-0 relative flex flex-col">
        {activeScreen === "lobby" && (
          <div className="flex-1 p-8 overflow-y-auto max-w-6xl mx-auto w-full space-y-8 animate-in fade-in duration-300">
            
            {/* Story Jumbotron */}
            <div className="bg-gradient-to-r from-gray-900 to-indigo-950/40 border border-cyan-500/20 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 top-0 size-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="text-5xl">📡</div>
              <div className="space-y-2">
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-extrabold text-cyan-300 uppercase tracking-widest font-mono">Mission Briefing</span>
                <h2 className="text-2xl font-black text-white">Restore Communication with Earth</h2>
                <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                  You are a Junior Space Programmer at the Python Launch Station. A communication satellite is waiting for a telemetry message. Unlike Java which requires setup templates and compilation, Python can launch commands instantly. Assist the robot in executing Python messages to reboot the station!
                </p>
              </div>
            </div>

            {/* Stages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-extrabold text-lg text-cyan-300 tracking-wider uppercase border-b border-cyan-900/30 pb-2">Launch Sequence Modules</h3>
                <div className="grid grid-cols-1 gap-3">
                  {stages.map((stg, i) => (
                    <div
                      key={stg.id}
                      className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
                        stg.status === "completed"
                          ? "bg-emerald-950/10 border-emerald-500/30 hover:border-emerald-500/60"
                          : stg.status === "unlocked"
                            ? "bg-indigo-950/10 border-indigo-500/30 hover:border-indigo-500/60 cursor-pointer hover:scale-[1.01]"
                            : "bg-gray-950 border-slate-900 opacity-40 pointer-events-none"
                      }`}
                      onClick={() => {
                        if (stg.status !== "locked") {
                          setCurrentStageIndex(i);
                          setActiveScreen("game");
                        }
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`size-10 rounded-lg flex items-center justify-center font-black ${
                          stg.status === "completed"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : stg.status === "unlocked"
                              ? "bg-cyan-500/20 text-cyan-400 animate-pulse"
                              : "bg-slate-800 text-slate-500"
                        }`}>
                          {stg.id}
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{stg.name}</h4>
                          <p className="text-xs text-slate-400">Award: {stg.xpAwarded} XP</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {stg.status === "completed" && <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1 font-mono"><CheckCircle2 className="size-4" /> Ready</span>}
                        {stg.status === "unlocked" && <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1 font-mono">Initiate <ArrowRight className="size-4" /></span>}
                        {stg.status === "locked" && <span className="text-xs font-bold text-slate-600 uppercase tracking-widest font-mono"><Lock className="size-3 inline mr-1" />Locked</span>}
                      </div>
                    </div>
                  ))}

                  {/* Boss Arena Banner */}
                  <div
                    className={`p-5 rounded-2xl border-2 border-dashed flex items-center justify-between transition-all ${
                      stages.every(s => s.status === "completed")
                        ? "bg-gradient-to-r from-red-950/20 to-indigo-950/20 border-red-500/40 hover:border-red-500 cursor-pointer"
                        : "bg-slate-900/10 border-slate-800/40 opacity-40 pointer-events-none"
                    }`}
                    onClick={() => {
                      setCurrentStageIndex(8); // Boss Stage
                      setActiveScreen("game");
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">☄️</div>
                      <div>
                        <h4 className="font-extrabold text-red-400 text-lg">FINAL MISSION: Save the Space Station</h4>
                        <p className="text-xs text-slate-400">Restore the offline crystals by applying all concepts!</p>
                      </div>
                    </div>
                    <div>
                      <span className="px-4 py-1.5 bg-red-950 border border-red-500/40 rounded-lg text-xs font-bold text-red-300 uppercase tracking-wider">Activate Protocol</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements Column */}
              <div className="space-y-6">
                <div className="bg-gray-900 border border-cyan-500/20 p-5 rounded-2xl space-y-4 shadow-xl">
                  <h3 className="font-extrabold text-sm text-cyan-300 uppercase tracking-widest flex items-center gap-2">
                    <Award className="size-5 text-yellow-500" /> Space Badges
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {badges.map(b => (
                      <div
                        key={b.id}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${
                          b.unlocked
                            ? "bg-yellow-500/10 border-yellow-500/40"
                            : "bg-slate-950/50 border-slate-900 opacity-30"
                        }`}
                        title={b.desc}
                      >
                        <span className="text-2xl mb-1">{b.icon}</span>
                        <span className="text-[10px] font-bold text-slate-300 leading-tight">{b.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeScreen === "game" && (
          <div className="flex-1 flex flex-col min-h-0">
            {/* Simulation Header */}
            <div className="px-6 py-3 bg-gray-950 border-b border-cyan-500/20 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">Stage {currentStage.id}:</span>
                <h3 className="font-extrabold text-white text-sm">{currentStage.name}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  disabled={currentStageIndex === 0}
                  onClick={() => setCurrentStageIndex(prev => prev - 1)}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-xs font-bold rounded"
                >
                  Prev
                </button>
                <button
                  disabled={currentStageIndex === stages.length - 1 || stages[currentStageIndex + 1].status === "locked"}
                  onClick={() => setCurrentStageIndex(prev => prev + 1)}
                  className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-30 text-xs font-bold rounded"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Stages Interface Area */}
            <div className="flex-1 min-h-0 p-6 overflow-y-auto">
              
              {/* STAGE 1: Interactive vs Script Mode Doorway */}
              {currentStage.id === 1 && (
                <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-white">Choose how you want to communicate with Python</h3>
                    <p className="text-xs text-slate-400">Interactive Mode executes one command immediately. Script Mode stores commands in a file.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Interactive Door */}
                    <div
                      onClick={() => handleS1DoorClick("interactive")}
                      className={`p-6 rounded-2xl border-2 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:scale-105 ${
                        s1SelectedDoor === "interactive"
                          ? "bg-cyan-950/20 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                          : "bg-gray-900 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <span className="text-5xl mb-4">🚪</span>
                      <h4 className="text-lg font-bold text-cyan-300">Interactive Mode</h4>
                      <p className="text-xs text-slate-400 mt-2">Type a command, get an instant response from the interpreter shell.</p>
                    </div>

                    {/* Script Door */}
                    <div
                      onClick={() => handleS1DoorClick("script")}
                      className={`p-6 rounded-2xl border-2 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:scale-105 ${
                        s1SelectedDoor === "script"
                          ? "bg-indigo-950/20 border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                          : "bg-gray-900 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <span className="text-5xl mb-4">🚪</span>
                      <h4 className="text-lg font-bold text-indigo-300">Script Mode</h4>
                      <p className="text-xs text-slate-400 mt-2">Write multiple instructions in a file, and execute the entire program at once.</p>
                    </div>
                  </div>

                  {s1DemoOutput.length > 0 && (
                    <div className="bg-black border border-slate-800 rounded-xl p-4 font-mono text-xs max-w-md mx-auto space-y-1">
                      <span className="text-slate-500 uppercase text-[9px] block mb-2">Shell Live Feed</span>
                      {s1DemoOutput.map((ln, idx) => (
                        <div key={idx} className={ln.startsWith(">>>") ? "text-cyan-400" : ln.startsWith("print") ? "text-indigo-400" : "text-emerald-400"}>
                          {ln}
                        </div>
                      ))}
                    </div>
                  )}

                  {stages[0].status === "completed" && (
                    <div className="flex justify-center">
                      <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl px-6 py-2.5 text-center text-emerald-400 text-xs font-bold animate-pulse">
                        🏅 Mode Explorer Badge Unlocked! (Stage complete. Click "Next Stage" at top right)
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STAGE 2: PyBot Interpreter Robot */}
              {currentStage.id === 2 && (
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
                  <div className="bg-gray-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">🤖</span>
                      <div>
                        <h3 className="font-bold text-white text-base">PyBot Interpreter</h3>
                        <p className="text-xs text-slate-400">Reads your Python code line-by-line and executes it instantly.</p>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 text-center font-mono text-cyan-300 text-sm">
                      print("Hello World")
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-400">Processing Steps:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {s2Steps.map((step, idx) => (
                          <div
                            key={idx}
                            className={`p-2 rounded-lg border text-xs flex justify-between ${
                              s2Step > idx
                                ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-400"
                                : s2Step === idx
                                  ? "bg-cyan-950/20 border-cyan-500/50 text-cyan-300 animate-pulse"
                                  : "bg-slate-950 border-slate-900 text-slate-600"
                            }`}
                          >
                            <span>{step.label}</span>
                            <span className="text-[10px] text-slate-400">{step.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={handleS2Next}
                      disabled={s2Step >= s2Steps.length}
                      className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 text-xs font-bold rounded-lg text-white"
                    >
                      {s2Step >= s2Steps.length ? "PyBot Finished processing" : "▶ Next Step"}
                    </button>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <div className="bg-black border border-slate-800 rounded-2xl p-5 h-[200px] flex flex-col">
                      <span className="text-[10px] text-cyan-300 font-mono tracking-wider uppercase mb-2">Space Console Screen</span>
                      <div className="flex-1 bg-slate-950 p-4 rounded-xl font-mono text-emerald-400 text-sm overflow-y-auto">
                        {s2Logs.length === 0 ? (
                          <span className="text-slate-700 italic">Awaiting PyBot execution...</span>
                        ) : (
                          s2Logs.map((log, idx) => <div key={idx} className="pb-1">{log}</div>)
                        )}
                        {s2Step === s2Steps.length && (
                          <div className="text-xl font-bold mt-2 animate-bounce">Hello World</div>
                        )}
                      </div>
                    </div>

                    {stages[1].status === "completed" && (
                      <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 text-center text-emerald-400 text-xs font-bold">
                        🏅 Interpreter Observer Badge Unlocked! (Stage complete. Click "Next Stage")
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* STAGE 3: Deliver Space Message */}
              {currentStage.id === 3 && (
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-300">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md mx-auto space-y-4">
                    <div className="flex justify-center text-4xl">🛰️</div>
                    <h3 className="text-lg font-bold text-white">Deliver the First Space Message</h3>
                    <p className="text-xs text-slate-400">Send the command to the satellite orbiting overhead. The print() function will transmit the payload.</p>

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 text-left font-mono text-cyan-300 text-xs">
                      print("Hello World")
                    </div>

                    <button
                      onClick={handleS3Launch}
                      disabled={s3Launched}
                      className="w-full py-3 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:brightness-110 disabled:opacity-40 text-xs font-bold rounded-xl text-white flex items-center justify-center gap-2"
                    >
                      <Radio className="size-4 animate-ping" />
                      🚀 Launch Message
                    </button>
                  </div>

                  {s3Launched && (
                    <div className="space-y-4 animate-in zoom-in duration-300">
                      <div className="max-w-md mx-auto p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl text-emerald-400 font-bold text-xs">
                        🎉 Satellite Activated! Earth Link Restored.
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STAGE 4: Python vs Java Rocket Race */}
              {currentStage.id === 4 && (
                <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
                  <div className="text-center space-y-1">
                    <h3 className="text-lg font-bold text-white">Python vs Java Race</h3>
                    <p className="text-xs text-slate-400">Order the steps correctly to launch each rocket. Java requires compilation, while Python runs directly.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Java Card */}
                    <div className="bg-gray-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-indigo-400">Java Rocket</span>
                        <span className="text-[10px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded font-mono">Compiled</span>
                      </div>
                      
                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-900 font-mono text-[10px] text-slate-400 h-24 overflow-y-auto">
                        class Main &#123;<br />
                        &nbsp;&nbsp;public static void main(String[] args)&#123;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello");<br />
                        &nbsp;&nbsp;&#125;<br />
                        &#125;
                      </div>

                      <div className="flex gap-2">
                        {["Write", "Compile", "Run"].map(step => (
                          <button
                            key={step}
                            onClick={() => handleS4Drop("java", step)}
                            disabled={s4OrderJava.includes(step)}
                            className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded text-slate-300 font-mono"
                          >
                            + {step}
                          </button>
                        ))}
                      </div>

                      <div className="bg-slate-950 p-2.5 rounded-lg text-xs font-bold flex gap-2 items-center text-indigo-300 font-mono">
                        <span>Sequence:</span>
                        {s4OrderJava.map((s, idx) => (
                          <span key={idx} className="bg-indigo-900/60 px-2 py-0.5 rounded text-[10px] border border-indigo-500/20">{s}</span>
                        ))}
                      </div>
                    </div>

                    {/* Python Card */}
                    <div className="bg-gray-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-cyan-400">Python Rocket</span>
                        <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded font-mono">Interpreted</span>
                      </div>

                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-900 font-mono text-[10px] text-cyan-400 h-24 flex items-center justify-center">
                        print("Hello")
                      </div>

                      <div className="flex gap-2">
                        {["Write", "Compile", "Run"].map(step => (
                          <button
                            key={step}
                            onClick={() => handleS4Drop("python", step)}
                            disabled={s4OrderPython.includes(step)}
                            className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded text-slate-300 font-mono"
                          >
                            + {step}
                          </button>
                        ))}
                      </div>

                      <div className="bg-slate-950 p-2.5 rounded-lg text-xs font-bold flex gap-2 items-center text-cyan-300 font-mono">
                        <span>Sequence:</span>
                        {s4OrderPython.map((s, idx) => (
                          <span key={idx} className="bg-cyan-900/60 px-2 py-0.5 rounded text-[10px] border border-cyan-500/20">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <button onClick={handleS4Clear} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-lg text-slate-300">
                      Reset Order
                    </button>
                  </div>

                  {s4Success && (
                    <div className="max-w-md mx-auto p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl text-emerald-400 font-bold text-xs text-center">
                      🏅 Language Explorer Badge Unlocked! Python rocket has launched with 2 simple steps (Write → Run)!
                    </div>
                  )}
                </div>
              )}

              {/* STAGE 5: Build Your Own Message */}
              {currentStage.id === 5 && (
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
                  <div className="bg-gray-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                    <h3 className="font-bold text-white text-base">Mission Control Console</h3>
                    <p className="text-xs text-slate-400">Replace the name "Alex" inside the quotes with your own name to personalize the message output.</p>

                    <div className="space-y-2">
                      <label className="text-[10px] text-slate-500 uppercase font-mono">Modify Code Here:</label>
                      <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 font-mono text-xs">
                        <span className="text-indigo-400">print("My name is </span>
                        <input
                          type="text"
                          value={s5Name}
                          onChange={e => {
                            setS5Name(e.target.value);
                            setS5Success(false);
                          }}
                          className="bg-slate-900 border-b border-cyan-400 text-cyan-300 outline-none px-1 text-xs w-28 font-bold text-center"
                        />
                        <span className="text-indigo-400">")</span>
                      </div>
                    </div>

                    <button
                      onClick={handleS5Submit}
                      className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-xs font-bold rounded-lg text-white"
                    >
                      🚀 Transmit Custom Code
                    </button>
                  </div>

                  <div className="bg-black border border-slate-800 rounded-2xl p-5 flex flex-col h-[200px] justify-between">
                    <div>
                      <span className="text-[10px] text-cyan-300 font-mono tracking-wider uppercase mb-2 block">Live Display Panel</span>
                      <div className="bg-slate-950 p-4 rounded-xl font-mono text-emerald-400 text-sm min-h-24 flex items-center justify-center">
                        {s5Success ? `My name is ${s5Name}` : "Awaiting customized launch code..."}
                      </div>
                    </div>

                    {s5Success && (
                      <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl text-center text-emerald-400 text-xs font-bold">
                        🏅 First Python Program Complete! Proceed to the next module.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* STAGE 6: Separator Factory */}
              {currentStage.id === 6 && (
                <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
                  <div className="text-center space-y-1">
                    <h3 className="text-lg font-bold text-white">Separator Factory</h3>
                    <p className="text-xs text-slate-400">Configure the separator parameter (sep) to connect the three cargo boxes: Hello, World, and Python.</p>
                  </div>

                  <div className="flex justify-center gap-6 items-center">
                    {["Hello", "World", "Python"].map((box, idx) => (
                      <React.Fragment key={idx}>
                        <div className="p-4 bg-indigo-950/50 border border-indigo-500/30 rounded-xl font-mono text-sm text-indigo-300 shadow-md">
                          {box}
                        </div>
                        {idx < 2 && (
                          <div className="px-3 py-1 bg-yellow-950 border border-yellow-500/30 rounded font-mono text-xs text-yellow-400">
                            {s6Sep === " " ? "Space" : s6Sep}
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="bg-gray-900 border border-slate-800 rounded-2xl p-6 max-w-md mx-auto space-y-4">
                    <h4 className="text-xs font-bold text-slate-400">Select Separator Value:</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { val: " ", label: "Space" },
                        { val: "-", label: "Dash (-)" },
                        { val: "*", label: "Star (*)" },
                        { val: "->", label: "Arrow (->)" }
                      ].map(item => (
                        <button
                          key={item.val}
                          onClick={() => handleS6Select(item.val)}
                          className={`p-2 border rounded-lg text-xs font-bold font-mono ${
                            s6Sep === item.val
                              ? "bg-cyan-950/40 border-cyan-500 text-cyan-300 shadow-lg"
                              : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-900"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-900 font-mono text-xs text-slate-400">
                      print("Hello", "World", "Python", sep="{s6Sep}")
                    </div>

                    <div className="bg-black p-3 rounded-lg border border-indigo-900/20 font-mono text-xs text-emerald-400 text-center">
                      Output: Hello{s6Sep}World{s6Sep}Python
                    </div>
                  </div>

                  {s6Success && (
                    <div className="max-w-md mx-auto p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl text-emerald-400 font-bold text-xs text-center">
                      🏅 Separator Engineer Badge Unlocked! You successfully customized the item spacer parameter.
                    </div>
                  )}
                </div>
              )}

              {/* STAGE 7: Newline Machine */}
              {currentStage.id === 7 && (
                <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
                  <div className="text-center space-y-1">
                    <h3 className="text-lg font-bold text-white">Newline Machine</h3>
                    <p className="text-xs text-slate-400">The end parameter controls what happens after printing. Use it to keep or break lines.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                      <h4 className="text-xs font-bold text-slate-400">Select Line Ending (end):</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { val: "\\n", label: "Newline" },
                          { val: " ", label: "Space" },
                          { val: "-", label: "Dash" }
                        ].map(item => (
                          <button
                            key={item.val}
                            onClick={() => handleS7Select(item.val)}
                            className={`p-2 border rounded-lg text-xs font-bold font-mono ${
                              s7End === item.val
                                ? "bg-cyan-950/40 border-cyan-500 text-cyan-300"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-900"
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>

                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-900 font-mono text-xs text-slate-400 space-y-1">
                        <div>print("Hello", end="{s7End}")</div>
                        <div>print("World")</div>
                      </div>
                    </div>

                    <div className="bg-black border border-slate-800 rounded-2xl p-5 flex flex-col justify-between h-[200px]">
                      <div>
                        <span className="text-[10px] text-cyan-300 font-mono tracking-wider uppercase mb-2 block">Live Display Panel</span>
                        <div className="bg-slate-950 p-4 rounded-xl font-mono text-emerald-400 text-sm min-h-20 flex flex-col justify-center items-center">
                          {s7End === "\\n" ? (
                            <>
                              <div>Hello</div>
                              <div>World</div>
                            </>
                          ) : (
                            <div>Hello{s7End === " " ? " " : "-"}World</div>
                          )}
                        </div>
                      </div>

                      {s7Success && (
                        <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl text-center text-emerald-400 text-xs font-bold">
                          🏅 Output Designer Badge Unlocked! Next stage is ready.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STAGE 8: Indentation Temple */}
              {currentStage.id === 8 && (
                <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
                  <div className="text-center space-y-1">
                    <h3 className="text-lg font-bold text-white">Indentation Temple</h3>
                    <p className="text-xs text-slate-400">Python uses indentation (4 spaces) instead of curly braces to group code statements.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                      <h4 className="text-xs font-bold text-slate-400">Indent the print statement:</h4>

                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 font-mono text-xs space-y-2">
                        <div className="text-purple-400">if True:</div>
                        <div className="flex items-center">
                          <button
                            onClick={() => setS8Indented(!s8Indented)}
                            className="mr-2 px-2 py-0.5 bg-slate-800 hover:bg-slate-700 rounded text-[10px] text-cyan-300 border border-cyan-500/20"
                          >
                            {s8Indented ? "← Remove Tab" : "→ Tab Indent"}
                          </button>
                          <span className={s8Indented ? "pl-8 text-cyan-400" : "text-cyan-400"}>
                            print("Inside Condition")
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={handleS8Verify}
                        className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-xs font-bold rounded-lg text-white"
                      >
                        Verify Block Indentation
                      </button>
                    </div>

                    <div className="bg-black border border-slate-800 rounded-2xl p-5 flex flex-col justify-between h-[220px]">
                      <div>
                        <span className="text-[10px] text-cyan-300 font-mono tracking-wider uppercase mb-2 block">Temple Gate Status</span>
                        <div className="bg-slate-950 p-4 rounded-xl font-mono text-sm min-h-20 flex items-center justify-center">
                          {s8Success ? (
                            <span className="text-emerald-400 font-bold">🚪 Temple Gate Unlocked! (Code verified)</span>
                          ) : (
                            <span className="text-red-400 font-bold">🚪 Temple Gate Locked</span>
                          )}
                        </div>
                      </div>

                      {s8Success && (
                        <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl text-center text-emerald-400 text-xs font-bold">
                          🏅 Indentation Guardian Badge Unlocked! Lobby menu has Boss Arena unlocked.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* --- COMPLETION MODULE --- */}
        {activeScreen === "completion" && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-2xl mx-auto space-y-8 animate-in zoom-in duration-300">
            <div className="size-24 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-5xl shadow-[0_0_30px_rgba(6,182,212,0.5)] animate-bounce">
              👑
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-extrabold text-cyan-300 uppercase tracking-widest font-mono">Mission Accomplished</span>
              <h2 className="text-3xl font-black text-white">Python Launch Commander!</h2>
              <p className="text-sm text-slate-400">
                You successfully mastered the Space Telemetry Console, PyBot Interpreter steps, Java rocket comparisons, custom message formatting, separator engineering, and Indentation Temple keys.
              </p>
            </div>

            <div className="bg-gray-900 border border-cyan-500/20 p-6 rounded-2xl w-full grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-slate-950/50 rounded-xl border border-slate-900">
                <span className="text-xs text-slate-500 uppercase block mb-1">XP Restored</span>
                <span className="text-xl font-black text-cyan-400">{xp}</span>
              </div>
              <div className="text-center p-3 bg-slate-950/50 rounded-xl border border-slate-900">
                <span className="text-xs text-slate-500 uppercase block mb-1">Badges Secured</span>
                <span className="text-xl font-black text-indigo-400">{badges.filter(b => b.unlocked).length} / {badges.length}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {badges.filter(b => b.unlocked).map(b => (
                <div key={b.id} className="bg-yellow-500/10 border border-yellow-500/30 px-3 py-1.5 rounded-full text-xs font-bold text-yellow-300 flex items-center gap-1.5">
                  <span>{b.icon}</span>
                  <span>{b.name}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setActiveScreen("lobby");
              }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:brightness-110 text-white font-bold rounded-xl transition-all scale-105 hover:scale-110"
            >
              Back to Command Station
            </button>
          </div>
        )}
      </main>

      {/* Mini Challenges Drawer overlay if activeScreen is game */}
      {activeScreen === "game" && (
        <footer className="bg-gray-900/90 border-t border-cyan-500/20 p-5 shrink-0 z-10 overflow-y-auto max-h-[200px]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-widest font-mono">Mini Quiz 1: print("Python")</h4>
              <div className="flex gap-2">
                {["Python", "print(\"Python\")", "Error"].map(opt => (
                  <button
                    key={opt}
                    onClick={() => {
                      setMcAnswer1(opt);
                      if (opt === "Python") addXpPoints(20, "Mini Quiz 1 Correct!");
                    }}
                    className={`px-3 py-1 rounded text-[10px] font-bold ${
                      mcAnswer1 === opt
                        ? opt === "Python"
                          ? "bg-emerald-900 text-emerald-300 border border-emerald-500/40"
                          : "bg-red-900 text-red-300 border border-red-500/40"
                        : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-widest font-mono">Mini Quiz 2: Mode shell</h4>
              <div className="flex gap-2">
                {["Python Shell", "Python File"].map(opt => (
                  <button
                    key={opt}
                    onClick={() => {
                      setMcAnswer2(opt);
                      if (opt === "Python Shell") addXpPoints(20, "Mini Quiz 2 Correct!");
                    }}
                    className={`px-3 py-1 rounded text-[10px] font-bold ${
                      mcAnswer2 === opt
                        ? opt === "Python Shell"
                          ? "bg-emerald-900 text-emerald-300 border border-emerald-500/40"
                          : "bg-red-900 text-red-300 border border-red-500/40"
                        : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-widest font-mono font-bold">Mistakes Visualizer</h4>
              <div className="flex gap-1">
                <button
                  onClick={() => triggerToast("print(Hello) -> NameError: name 'Hello' is not defined (missing quotes)", "error")}
                  className="px-2 py-1 bg-red-950 border border-red-500/30 rounded text-[9px] text-red-300 font-bold"
                >
                  print(Hello)
                </button>
                <button
                  onClick={() => triggerToast("print(\"Hello\" -> SyntaxError: unexpected EOF while parsing (missing bracket)", "error")}
                  className="px-2 py-1 bg-red-950 border border-red-500/30 rounded text-[9px] text-red-300 font-bold"
                >
                  print("Hello"
                </button>
              </div>
            </div>
          </div>
        </footer>
      )}

      {/* --- BOSS CRYSTAL REPAIR PANEL (Overlay inside Lobby when Stage 8 is complete) --- */}
      {activeScreen === "lobby" && stages[7].status === "completed" && (
        <div className="bg-gray-900/90 border-t border-red-500/30 p-6 z-10 overflow-y-auto max-h-[300px] shrink-0">
          <div className="max-w-6xl mx-auto space-y-4">
            <div className="flex items-center gap-3 border-b border-red-500/20 pb-2">
              <span className="text-3xl animate-bounce">☄️</span>
              <div>
                <h3 className="font-extrabold text-base text-red-400 uppercase tracking-wider font-mono">
                  Boss Reactor Repair Status Board
                </h3>
                <p className="text-xs text-slate-400">Activate all 5 crystals by writing code lines inside each command slot.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map(id => (
                <div
                  key={id}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center ${
                    crystals[id]
                      ? "bg-emerald-950/20 border-emerald-500/50 text-emerald-400"
                      : "bg-red-950/20 border-red-500/30 text-red-400 animate-pulse"
                  }`}
                >
                  <span className="text-2xl mb-1">💎</span>
                  <span className="text-[10px] font-bold">Crystal {id}</span>
                  <span className="text-[9px] text-slate-400 mt-1 uppercase font-mono">{crystals[id] ? "Online" : "Offline"}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {/* Task 1 */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="text-[10px] text-cyan-300 font-bold font-mono">Task 1: Print Hello World</span>
                <input
                  type="text"
                  placeholder='print("Hello World")'
                  value={bossT1}
                  onChange={e => setBossT1(e.target.value)}
                  className="w-full bg-slate-900 text-xs text-slate-200 font-mono p-1.5 rounded outline-none border border-slate-800"
                />
                <button
                  onClick={() => checkBossTask(1)}
                  disabled={crystals[1]}
                  className="w-full py-1 bg-cyan-700 hover:bg-cyan-600 disabled:opacity-40 text-[10px] font-bold rounded"
                >
                  {crystals[1] ? "Crystal Active" : "Restore"}
                </button>
              </div>

              {/* Task 2 */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="text-[10px] text-cyan-300 font-bold font-mono">Task 2: Print Your Own Name</span>
                <input
                  type="text"
                  placeholder='print("Your Name")'
                  value={bossT2}
                  onChange={e => setBossT2(e.target.value)}
                  className="w-full bg-slate-900 text-xs text-slate-200 font-mono p-1.5 rounded outline-none border border-slate-800"
                />
                <button
                  onClick={() => checkBossTask(2)}
                  disabled={crystals[2]}
                  className="w-full py-1 bg-cyan-700 hover:bg-cyan-600 disabled:opacity-40 text-[10px] font-bold rounded"
                >
                  {crystals[2] ? "Crystal Active" : "Restore"}
                </button>
              </div>

              {/* Task 3 */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="text-[10px] text-cyan-300 font-bold font-mono">Task 3: sep parameter separator</span>
                <input
                  type="text"
                  placeholder='print("Hello", "World", sep="-")'
                  value={bossT3}
                  onChange={e => setBossT3(e.target.value)}
                  className="w-full bg-slate-900 text-xs text-slate-200 font-mono p-1.5 rounded outline-none border border-slate-800"
                />
                <button
                  onClick={() => checkBossTask(3)}
                  disabled={crystals[3]}
                  className="w-full py-1 bg-cyan-700 hover:bg-cyan-600 disabled:opacity-40 text-[10px] font-bold rounded"
                >
                  {crystals[3] ? "Crystal Active" : "Restore"}
                </button>
              </div>

              {/* Task 4 */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="text-[10px] text-cyan-300 font-bold font-mono">Task 4: end parameter newline</span>
                <input
                  type="text"
                  placeholder='print("Hello", end=" ")'
                  value={bossT4}
                  onChange={e => setBossT4(e.target.value)}
                  className="w-full bg-slate-900 text-xs text-slate-200 font-mono p-1.5 rounded outline-none border border-slate-800"
                />
                <button
                  onClick={() => checkBossTask(4)}
                  disabled={crystals[4]}
                  className="w-full py-1 bg-cyan-700 hover:bg-cyan-600 disabled:opacity-40 text-[10px] font-bold rounded"
                >
                  {crystals[4] ? "Crystal Active" : "Restore"}
                </button>
              </div>

              {/* Task 5 */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-cyan-300 font-bold font-mono block mb-1">Task 5: Fix Indentation</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setBossT5Indented(!bossT5Indented)}
                      className={`px-3 py-1 text-[10px] rounded border font-mono ${
                        bossT5Indented ? "bg-cyan-950 border-cyan-500 text-cyan-300" : "bg-slate-900 border-slate-800 text-slate-400"
                      }`}
                    >
                      {bossT5Indented ? "Indented" : "No Indent"}
                    </button>
                    <div className="font-mono text-[9px] text-slate-500 flex flex-col">
                      <span>if True:</span>
                      <span className={bossT5Indented ? "pl-4 text-cyan-400" : "text-cyan-400"}>print("Yes")</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => checkBossTask(5)}
                  disabled={crystals[5]}
                  className="w-full py-1 bg-cyan-700 hover:bg-cyan-600 disabled:opacity-40 text-[10px] font-bold rounded mt-2"
                >
                  {crystals[5] ? "Crystal Active" : "Restore"}
                </button>
              </div>
            </div>

            {isStationRestored && (
              <div className="pt-4 flex justify-center">
                <button
                  onClick={triggerCompletion}
                  className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-sm rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] animate-bounce"
                >
                  🚀 Activate Space Station & Launch!
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
