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
          { question: "Mock Pretest Question 1 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 2 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 3 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 4 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 5 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 6 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 7 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 8 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 9 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 10 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 11 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 12 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 13 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 14 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 15 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 16 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 17 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 18 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 19 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 20 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 21 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 22 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 23 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 24 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 25 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 26 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 27 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 28 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 29 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 30 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 31 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 32 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 33 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 34 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 35 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 36 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 37 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 38 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 39 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 40 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 41 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 42 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 43 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 44 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 45 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 46 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 47 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 48 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 49 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 50 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 }
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
          { question: "Mock Posttest Question 1 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 2 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 3 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 4 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 5 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 6 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 7 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 8 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 9 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 10 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 11 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 12 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 13 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 14 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 15 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 16 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 17 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 18 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 19 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 20 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 21 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 22 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 23 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 24 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 25 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 26 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 27 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 28 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 29 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 30 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 31 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 32 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 33 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 34 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 35 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 36 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 37 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 38 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 39 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 40 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 41 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 42 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 43 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 44 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 45 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 46 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 47 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 48 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 49 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 50 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 }
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
          { question: "Mock Pretest Question 1 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 2 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 3 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 4 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 5 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 6 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 7 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 8 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 9 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 10 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 11 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 12 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 13 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 14 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 15 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 16 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 17 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 18 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 19 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 20 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 21 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 22 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 23 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 24 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 25 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 26 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 27 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 28 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 29 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 30 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 31 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 32 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 33 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 34 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 35 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 36 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 37 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 38 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 39 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 40 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 41 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 42 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 43 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 44 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 45 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 46 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 47 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 48 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 49 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 50 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 }
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
          { question: "Mock Posttest Question 1 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 2 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 3 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 4 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 5 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 6 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 7 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 8 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 9 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 10 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 11 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 12 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 13 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 14 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 15 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 16 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 17 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 18 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 19 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 20 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 21 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 22 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 23 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 24 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 25 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 26 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 27 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 28 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 29 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 30 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 31 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 32 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 33 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 34 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 35 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 36 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 37 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 38 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 39 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 40 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 41 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 42 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 43 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 44 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 45 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 46 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 47 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 48 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 49 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 50 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 }
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
          { question: "Mock Pretest Question 1 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 2 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 3 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 4 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 5 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 6 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 7 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 8 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 9 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 10 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 11 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 12 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 13 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 14 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 15 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 16 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 17 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 18 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 19 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 20 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 21 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 22 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 23 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 24 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 25 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 26 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 27 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 28 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 29 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 30 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 31 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 32 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 33 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 34 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 35 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 36 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 37 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 38 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 39 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 40 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 41 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 42 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 43 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 44 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 45 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 46 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 47 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 48 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 49 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 50 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 }
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
          { question: "Mock Posttest Question 1 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 2 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 3 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 4 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 5 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 6 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 7 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 8 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 9 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 10 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 11 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 12 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 13 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 14 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 15 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 16 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 17 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 18 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 19 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 20 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 21 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 22 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 23 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 24 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 25 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 26 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 27 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 28 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 29 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 30 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 31 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 32 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 33 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 34 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 35 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 36 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 37 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 38 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 39 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 40 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 41 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 42 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 43 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 44 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 45 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 46 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 47 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 48 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 49 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 50 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 }
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
          { question: "Mock Pretest Question 1 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 2 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 3 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 4 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 5 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 6 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 7 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 8 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 9 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 10 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 11 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 12 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 13 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 14 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 15 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 16 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 17 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 18 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 19 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 20 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 21 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 22 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 23 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 24 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 25 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 26 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 27 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 28 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 29 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 30 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 31 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 32 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 33 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 34 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 35 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 36 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 37 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 38 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 39 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 40 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 41 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 42 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 43 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 44 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 45 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 46 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 47 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 48 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 49 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Pretest Question 50 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 }
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
          { question: "Mock Posttest Question 1 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 2 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 3 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 4 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 5 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 6 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 7 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 8 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 9 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 10 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 11 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 12 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 13 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 14 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 15 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 16 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 17 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 18 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 19 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 20 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 21 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 22 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 23 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 24 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 25 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 26 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 27 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 28 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 29 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 30 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 31 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 32 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 33 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 34 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 35 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 36 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 37 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 38 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 39 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 40 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 41 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 42 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 43 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 44 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 45 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 46 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 47 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 48 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 49 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 },
          { question: "Mock Posttest Question 50 - Replace this text later", options: ["Option A", "Option B", "Option C", "Option D"], answerIndex: 0 }
          ],
      references: [
        "JNTUGV AI Tools Lab Syllabus, Module 3 — Coding Lab"
      ]
    }
  }
];
