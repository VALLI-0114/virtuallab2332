import { Experiment } from "./course-data";

export const aiM3Experiments: Experiment[] = [
  {
    id: "ai-m3-1",
    title: "Claude Code Mini-Project",
    desc: "Build a functional mini-project using Claude Code with natural language instructions.",
    expected: "A multi-file project with a main CLI script or API, data file, comprehensive error handling, and a README — all functional and testable.",
    content: {
      aim: {
        text: "In this experiment the student will use Claude Code — Anthropic's agentic command-line coding assistant — to build a functional software mini-project from natural language instructions. The student will explore how Claude Code interprets high-level requirements, scaffolds project structure, writes and iterates on code, runs tests, and self-corrects errors across a multi-step development session.",
        bullets: [
          "Understand the architectural difference between agentic coding assistants like Claude Code and autocomplete tools like GitHub Copilot",
          "Use natural language to specify functional requirements and watch Claude Code translate them into working code",
          "Observe how Claude Code handles multi-file project scaffolding, dependency management, and iterative debugging",
          "Evaluate the quality, readability, and correctness of Claude Code generated output against software engineering standards",
          "Intentionally introduce a bug or requirement change mid-session and observe how Claude Code responds to correction instructions",
          "Understand the appropriate boundaries of AI-generated code in production contexts including security review and testing obligations",
          "Apply Claude Code to a practical CSE mini-project such as a CLI tool, REST API, or data processing script"
        ]
      },
      theory: [
        {
          title: "What is Claude Code?",
          body: [
            "Claude Code is Anthropic's agentic coding assistant, available as a command-line tool (CLI) and as IDE extensions. Unlike GitHub Copilot which operates as an autocomplete engine within the editor, Claude Code is an agentic system.",
            "It can read and write files, execute terminal commands, run tests, install dependencies, and iterate on code across multiple steps in response to a single high-level instruction."
          ]
        },
        {
          title: "Agentic AI vs Autocomplete AI",
          body: [
            "Autocomplete AI operates at the token prediction level — predicting the next line based on the current editing context.",
            "Agentic AI operates at the task level — given a goal, it plans a sequence of actions, executes them, observes results, and adjusts without the developer writing a single line."
          ]
        },
        {
          title: "Natural Language to Code Workflow",
          body: [
            "The core workflow with Claude Code is: state the goal in plain English, review what Claude Code plans to do before it executes, approve or modify the plan, observe execution, and review the output.",
            "This plan-review-execute loop is important — Claude Code will ask for confirmation before making significant changes, especially in existing codebases."
          ]
        },
        {
          title: "Code Quality and Review Obligations",
          body: [
            "AI-generated code is not production-ready without human review. Common issues include missing input validation, security vulnerabilities in user-input handling, and inadequate test coverage.",
            "The developer retains full responsibility for all code submitted. Code review is not optional when using agentic coding tools."
          ]
        }
      ],
      pretest: [
        {
          question: "What is the fundamental difference between Claude Code as an agentic coding assistant and GitHub Copilot as an autocomplete coding assistant?",
          options: [
            "Claude Code only works in Python",
            "Claude Code operates at the task level (reading files, executing commands, iterating) while Copilot operates at the token prediction level (suggesting the next line)",
            "GitHub Copilot can build complete projects while Claude Code only suggests single lines",
            "There is no meaningful difference"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Claude Code operates at the task level (reading files, executing commands, iterating) while Copilot" },
        {
          question: "Claude Code presents a plan before executing changes in an existing codebase. Why is reviewing this plan important?",
          options: [
            "The plan is only shown for cosmetic purposes",
            "Reviewing it allows the developer to catch misunderstood requirements, unintended modifications to critical files, or overly destructive refactoring before execution",
            "Approving the plan faster leads to faster code generation",
            "The plan review step can always be skipped"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Reviewing it allows the developer to catch misunderstood requirements, unintended modifications to c..." },
        {
          question: "For which CSE task is Claude Code's agentic multi-step capability most directly advantageous over a standard autocomplete tool?",
          options: [
            "Completing a single sorting function",
            "Scaffolding a complete multi-file project, installing dependencies, writing tests, running them, and iterating on failures",
            "Suggesting variable names while typing",
            "Converting code comments into docstrings"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Scaffolding a complete multi-file project, installing dependencies, writing tests, running them, and..." }
      ],
      procedure: [
        "Read the Theory section and understand the distinction between agentic and autocomplete AI.",
        "Choose a mini-project (e.g., A command-line task manager in Python persisting tasks to a JSON file).",
        "Open the Solve tab and navigate to the Claude Code workspace.",
        "Begin with a complete natural language requirements statement. Be specific about the programming language, framework, data persistence, specific features, and output format.",
        "Submit the requirements and observe Claude Code's plan. Read the plan carefully before approving.",
        "After generation is complete, read every generated file and test the application manually with normal and edge cases.",
        "Identify one bug or missing feature and issue a correction instruction in plain natural language.",
        "Issue a requirement extension (e.g., 'Add a priority field to each task') and review the changes.",
        "Document the full session, bugs found, correction exchanges, and your code quality assessment for the Feedback Report."
      ],
      posttest: [
        {
          question: "A student approves each step of a Claude Code generation without reading the generated files. What is the primary risk?",
          options: [
            "Claude Code will refuse to generate code",
            "Unreviewed AI-generated code may contain security vulnerabilities, incorrect logic, or dependencies with licensing restrictions that the student is responsible for",
            "The project will not run without reading the files first",
            "This workflow is ideal"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Unreviewed AI-generated code may contain security vulnerabilities, incorrect logic, or dependencies" },
        {
          question: "A student introduces a requirement change to switch databases, and Claude Code misses three places where previous syntax was used. What does this reveal?",
          options: [
            "Claude Code perfectly handles all requirement changes",
            "Agentic AI tools can miss cascading changes required by a refactor, illustrating why the developer must conduct a full code review after significant changes",
            "PostgreSQL migration is impossible",
            "The missed changes were intentional"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Agentic AI tools can miss cascading changes required by a refactor, illustrating why the developer m..." }
      ],
      references: [
        "Anthropic Claude Code Documentation",
        "JNTUGV AI Tools Lab Syllabus, Module 3 — Coding Lab"
      ]
    }
  },
  {
    id: "ai-m3-2",
    title: "Cursor AI Refactoring",
    desc: "Refactor and debug an existing codebase using Cursor AI's inline editing and chat.",
    expected: "Refactored code that is measurably cleaner against clean code principles, with a planted bug identified and fixed.",
    content: {
      aim: {
        text: "In this experiment the student will use Cursor AI — an AI-native code editor built on VS Code — to refactor and debug an existing codebase. The focus is on using AI as a code quality partner on existing code rather than generating from scratch.",
        bullets: [
          "Understand Cursor AI's architecture as an AI-native editor and how it differs from VS Code with Copilot",
          "Use Cursor's Cmd+K inline edit feature to perform targeted refactoring of specific functions",
          "Use the Chat sidebar with codebase context to ask architectural and debugging questions",
          "Apply AI-assisted debugging to identify and fix a planted bug in a provided codebase",
          "Perform a meaningful refactoring task and evaluate the before/after quality against clean code principles"
        ]
      },
      theory: [
        {
          title: "What is Cursor AI?",
          body: [
            "Cursor is an AI-native code editor forked from VS Code that deeply integrates large language model capabilities into the editing experience.",
            "Unlike VS Code with Copilot which adds AI as a plugin layer, Cursor rebuilds the editing experience around AI interaction."
          ]
        },
        {
          title: "Cursor Interaction Modes",
          body: [
            "Cmd+K (Inline Edit): Places an AI edit instruction directly in the code for targeted, localized edits.",
            "Chat Sidebar (Cmd+L): Opens a conversation panel with full codebase context to ask architectural questions and debug hypotheses.",
            "Composer (Cmd+I): A multi-file editing mode where Cursor makes coordinated changes across multiple files."
          ]
        },
        {
          title: "AI-Assisted Debugging Workflow",
          body: [
            "For debugging, Cursor's Chat mode allows the developer to describe a bug symptom and ask for hypotheses. Cursor analyzes the function, identifies errors, and suggests fixes.",
            "The developer's role is to evaluate each hypothesis against their understanding of the intended behavior."
          ]
        }
      ],
      pretest: [
        {
          question: "What is the primary architectural difference between Cursor AI and VS Code with GitHub Copilot?",
          options: [
            "Cursor supports more programming languages",
            "Cursor is an AI-native editor with AI interaction built into every core editing action, while VS Code with Copilot adds AI as a plugin layer",
            "VS Code with Copilot is more powerful for all tasks",
            "Cursor cannot edit existing files"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Cursor is an AI-native editor with AI interaction built into every core editing action, while VS Cod..." },
        {
          question: "Which Cursor feature is best suited to understand how data flows from an API endpoint through to the database in an unfamiliar codebase?",
          options: [
            "Cmd+K inline edit",
            "Chat sidebar with codebase context",
            "Composer mode",
            "The VS Code file explorer"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Chat sidebar with codebase context" }
      ],
      procedure: [
        "Read the Theory section and understand Cursor's interaction modes.",
        "Open the Solve tab and navigate to the Cursor AI workspace (pre-loaded with a buggy Python project).",
        "Read through the codebase without making changes and write down three code quality issues and one potentially buggy section.",
        "Use Chat sidebar (Cmd+L) to ask Cursor to review the overall structure and identify code quality issues.",
        "Select a complex function and use Cmd+K to issue a refactoring instruction (e.g., 'Refactor this function to follow the single responsibility principle').",
        "Review the diff, evaluate it against clean code principles, and accept if it is an improvement.",
        "Use Chat sidebar to investigate the planted bug, ask for hypotheses, and use Cmd+K to apply the fix.",
        "Perform one more refactoring task to improve variable naming.",
        "Document before and after code, Cursor's responses, and your evaluation decisions for the Feedback Report."
      ],
      posttest: [
        {
          question: "If you accept a Cmd+K suggestion without reviewing the diff and it breaks existing behavior, what workflow failure caused this?",
          options: [
            "Cursor's refactoring is guaranteed to preserve behavior",
            "Accepting a code change without reviewing the diff is a critical workflow failure; reviewing allows the developer to catch logic changes before acceptance",
            "You should not use Cmd+K for complex functions",
            "Breakage is expected during refactoring"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Accepting a code change without reviewing the diff is a critical workflow failure; reviewing allows" },
        {
          question: "Cursor suggests extracting a single-use 5-line block into a helper function that adds indirection and makes the code harder to read. Should you accept?",
          options: [
            "Yes, AI suggestions should always be accepted",
            "No, refactoring should improve code clarity; extracting a single-use function that adds indirection without improving readability is not an improvement",
            "No, all functions should be extracted",
            "Yes, if the student prefers longer functions"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: No, refactoring should improve code clarity; extracting a single-use function that adds indirection" }
      ],
      references: [
        "Cursor AI Documentation",
        "Martin R.C., Clean Code",
        "JNTUGV AI Tools Lab Syllabus, Module 3 — Coding Lab"
      ]
    }
  },
  {
    id: "ai-m3-3",
    title: "GitHub Copilot Productivity",
    desc: "Measure and maximize developer productivity using GitHub Copilot for code and test generation.",
    expected: "Working implementations of function stubs, a Copilot-generated test file with gaps manually filled, and a productivity comparison table.",
    content: {
      aim: {
        text: "In this experiment the student will use GitHub Copilot to complete a structured set of coding tasks and measure the productivity impact compared to writing the same code without AI assistance. The focus is on understanding where Copilot accelerates development and where it requires careful supervision.",
        bullets: [
          "Understand how GitHub Copilot uses the Codex and GPT-4 models to generate context-aware code completions",
          "Use Copilot inline suggestions to accelerate implementation of standard algorithmic tasks",
          "Use Copilot's test generation feature to produce unit tests",
          "Measure productivity impact by timing AI-assisted versus unassisted completion",
          "Critically evaluate the quality of Copilot suggestions",
          "Understand the tab-to-accept risk and the importance of reading every suggestion"
        ]
      },
      theory: [
        {
          title: "What is GitHub Copilot?",
          body: [
            "GitHub Copilot is an AI pair programming tool powered by OpenAI's models. It provides real-time inline code suggestions as the developer types, predicting the next line, block, or entire function based on current file context."
          ]
        },
        {
          title: "Ghost Text and Tab-to-Accept",
          body: [
            "Copilot's inline suggestions appear as ghost text. The developer presses Tab to accept. The tab-to-accept workflow creates a risk: habitually accepting suggestions without reading them.",
            "Studies have found that Copilot-generated code can contain security vulnerabilities (like SQL injection). The developer must read every suggestion before accepting."
          ]
        },
        {
          title: "Comment-Driven Development",
          body: [
            "One effective pattern is writing a natural language comment describing the function logic before writing code, causing Copilot to generate the complete implementation as a suggestion."
          ]
        },
        {
          title: "Productivity Impact Measurement",
          body: [
            "A structured comparison involves timing equivalent tasks completed with and without Copilot, counting lines generated manually vs AI, and evaluating code quality. This produces calibrated data on Copilot's real value."
          ]
        }
      ],
      pretest: [
        {
          question: "What is the critical security risk if Copilot suggests string concatenation to build a SQL query?",
          options: [
            "String concatenation is slower",
            "String concatenation of user input into SQL creates a SQL injection vulnerability — the suggestion should be rejected and replaced with parameterized queries",
            "Copilot's SQL suggestions always use parameterized queries automatically",
            "It causes syntax errors"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: String concatenation of user input into SQL creates a SQL injection vulnerability — the suggestion s..." },
        {
          question: "What is the most likely gap in coverage if you rely solely on Copilot-generated unit tests?",
          options: [
            "There are no gaps",
            "Copilot-generated tests tend to cover happy-path cases but miss edge cases and boundary conditions; manual augmentation is required",
            "Copilot only generates one test per function",
            "The tests will all fail"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Copilot-generated tests tend to cover happy-path cases but miss edge cases and boundary conditions;" }
      ],
      procedure: [
        "Read the Theory section.",
        "Open the Solve tab and navigate to the GitHub Copilot workspace containing a starter Python file with function stubs.",
        "Complete Task Set A manually (without AI) and record your completion time.",
        "Enable Copilot suggestions and complete Task Set B (equivalent tasks) using Copilot. Record your time.",
        "For each Copilot suggestion, read it completely, verify logic and edge cases, and note if you accepted as-is, modified, or rejected it.",
        "Use comment-driven development for at least one function.",
        "Use Copilot Chat to generate unit tests for your functions, review them, and write at least two missing edge cases manually.",
        "Compare your Task Set A and B times, calculate net productivity gain accounting for correction time.",
        "Document the comparison, suggestion acceptance rate, and caught issues for the Feedback Report."
      ],
      posttest: [
        {
          question: "What does it reveal if Copilot provides 70% time reduction for boilerplate code but only 15% for novel algorithmic logic?",
          options: [
            "Copilot adds equal value across all tasks",
            "Copilot is most effective for pattern-rich code well-represented in its training data, and less effective for novel reasoning where correctness is harder to verify",
            "Copilot is only useful for beginners",
            "The measurement methodology is flawed"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Copilot is most effective for pattern-rich code well-represented in its training data, and less effe..." },
        {
          question: "If your Task B (Copilot) time was faster but you accepted unread vulnerabilities that represent significant technical debt, how should you interpret the productivity measurement?",
          options: [
            "You achieved a legitimate productivity gain",
            "The time saving is illusory because unread vulnerabilities require debugging and security review that exceeds initial time saved",
            "Security is a separate concern",
            "The gain is still valid"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: The time saving is illusory because unread vulnerabilities require debugging and security review tha..." }
      ],
      references: [
        "Anthropic Claude Code Documentation",
        "JNTUGV AI Tools Lab Syllabus, Module 3 — Coding Lab"
      ]
    }
  },
  {
    id: "ai-m3-4",
    title: "Replit Agent Prototyping",
    desc: "Prototype and deploy a full-stack web application using the Replit Agent.",
    expected: "A live deployed web application with database connectivity, functional UI components, and a documented prompt iteration log.",
    content: {
      aim: {
        text: "In this experiment the student will use the Replit Agent to prototype, build, and deploy a full-stack web application entirely through natural language instructions. The student will explore how autonomous AI agents manage the entire software development lifecycle—from project scaffolding and database configuration to frontend design and live deployment.",
        bullets: [
          "Understand the concept of autonomous coding agents and end-to-end AI software generation",
          "Formulate comprehensive project briefs that explicitly define frontend, backend, and database requirements",
          "Observe and guide an AI agent as it iterates on a full-stack codebase",
          "Deploy a functional web application to the cloud directly from a chat interface",
          "Evaluate the architectural decisions made by an autonomous agent"
        ]
      },
      theory: [
        {
          title: "Autonomous Coding Agents",
          body: [
            "Autonomous coding agents, like the Replit Agent, represent a paradigm shift from simple autocomplete tools. They operate within a fully managed cloud environment where they can write code, install packages, start servers, and interact with databases.",
            "Instead of assisting a developer line-by-line, the agent takes a high-level goal and autonomously executes the necessary steps to build the entire application."
          ]
        },
        {
          title: "Full-Stack AI Scaffolding",
          body: [
            "When given a prompt to build an app, the agent must orchestrate multiple layers: setting up a backend server (e.g., Express or Flask), configuring a database (e.g., PostgreSQL or SQLite), and building a frontend (e.g., React or plain HTML/JS).",
            "The developer's role shifts from writing syntax to acting as a product manager—defining requirements, reviewing progress, and issuing corrective prompts when the agent makes incorrect architectural choices."
          ]
        },
        {
          title: "Prompt Engineering for Applications",
          body: [
            "Building an entire application requires a structured prompt. A good 'App Brief' should specify:",
            "1. Core functionality (what the app does)",
            "2. Data models (what information needs to be stored)",
            "3. User Interface (how it should look and behave)",
            "4. Tech Stack (any specific language or framework requirements)"
          ]
        }
      ],
      pretest: [
        {
          question: "How does the Replit Agent differ from traditional AI code completion tools?",
          options: [
            "It only writes HTML and CSS",
            "It operates as an autonomous agent that can manage the entire software lifecycle—writing code, installing dependencies, configuring databases, and deploying—based on high-level instructions",
            "It requires the developer to manually install all dependencies first",
            "It only works offline"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: It operates as an autonomous agent that can manage the entire software lifecycle—writing code, insta..." },
        {
          question: "When acting as a 'product manager' for an AI coding agent, what is the developer's primary responsibility?",
          options: [
            "Typing the syntax for every function manually",
            "Defining clear requirements, reviewing the agent's progress, and issuing corrective prompts to guide the architectural and functional outcome",
            "Designing the company logo",
            "Paying for the cloud hosting server"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Defining clear requirements, reviewing the agent's progress, and issuing corrective prompts to guide..." },
        {
          question: "What is a critical component of a good 'App Brief' when prompting an agent to build a full-stack application?",
          options: [
            "A list of all the variable names to be used",
            "Explicit definitions of core functionality, data models to be stored, and the desired user interface behavior",
            "The exact color hex codes for every button",
            "A detailed history of the internet"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Explicit definitions of core functionality, data models to be stored, and the desired user interface..." }
      ],
      procedure: [
        "Review the theory behind autonomous coding agents and full-stack AI scaffolding.",
        "Draft a comprehensive 'App Brief' for a simple web application (e.g., 'A personal habit tracker where users can add daily habits, check them off, and see a progress bar for the week. Store data in a database.').",
        "Open the Solve tab and navigate to the Replit Agent workspace.",
        "Paste your App Brief into the chat interface and instruct the agent to begin building.",
        "Observe the agent's execution process: note how it creates files, installs packages, and tests the server.",
        "Once the initial prototype is running, test the application's functionality.",
        "Issue at least two iterative refinement prompts to add features or fix bugs (e.g., 'Add a dark mode toggle' or 'The habit counter isn't updating correctly; please fix the state management').",
        "Instruct the agent to deploy the application so it is accessible via a public URL.",
        "Document your App Brief, the iterative prompts you used, and the final deployed URL for your Feedback Report."
      ],
      posttest: [
        {
          question: "If the AI agent builds a working frontend but the data disappears when you refresh the page, what architectural instruction was likely missing from your initial prompt?",
          options: [
            "An instruction to make the background blue",
            "An explicit requirement to configure a database or persistent storage layer, as the agent likely stored the data in temporary client-side memory",
            "An instruction to use a larger font size",
            "An instruction to deploy the app"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: An explicit requirement to configure a database or persistent storage layer, as the agent likely sto..." },
        {
          question: "Why is an iterative prompting process necessary when building full-stack applications with AI agents?",
          options: [
            "Because the agent refuses to do all the work at once",
            "Because initial generations often contain logical bugs or miss nuanced UI requirements, requiring the developer to test and guide the agent to refine the application",
            "Because it makes the code run faster",
            "Because the agent forgets the programming language halfway through"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Because initial generations often contain logical bugs or miss nuanced UI requirements, requiring th..." }
      ],
      references: [
        "JNTUGV AI Tools Lab Syllabus, Module 3 — Coding Lab"
      ]
    }
  }
];
