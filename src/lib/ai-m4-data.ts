import { Experiment } from "./course-data";

export const aiM4Experiments: Experiment[] = [
  {
    id: "ai-m4-1",
    title: "Lovable Landing Page",
    desc: "Design and deploy a landing page using Lovable with a single prompt.",
    expected: "A live, dynamic, responsive React-based landing page with consistent dark-mode styling, working animations, hover states, and clear component segmentation.",
    content: {
      aim: {
        text: "In this experiment, the student will use Lovable.dev (an AI full-stack web developer agent) to generate, iterate on, and deploy a fully functional, highly aesthetic product landing page. The focus is on moving from a text-based product prompt to a living web interface using natural language edits, understanding component sections, and mastering interactive UI refinements.",
        bullets: [
          "Understand how AI design agents interpret product copy to generate contextual UI sections",
          "Learn to use conversational micro-prompts to change layouts, typography, color themes, and assets",
          "Evaluate the generated interface for user experience (UI/UX) practices like visual hierarchy, CTA placement, and responsiveness",
          "Deploy a live landing page directly from an AI prompting environment"
        ]
      },
      theory: [
        {
          title: "What is Lovable.dev?",
          body: [
            "Lovable is an AI-powered full-stack development platform built on top of Large Language Models and specialized code-generation agents. Unlike simple template builders, Lovable interprets natural language to generate production-ready React code, using modern frontend tools like Tailwind CSS, Vite, and Shadcn UI.",
            "It manages the full lifecycle: code creation, state management, previewing, and live hosting."
          ]
        },
        {
          title: "Anatomy of a High-Converting Landing Page",
          body: [
            "A successful landing page relies on a strategic layout designed to guide a user's attention down a specific path. AI generation tools typically structure these pages into discrete, modular components:",
            "• Hero Section: Positioned at the very top, it contains an attention-grabbing H1 headline, a sub-headline explaining the value proposition, and a primary Call to Action (CTA) button.",
            "• Social Proof / Trust Bars: Logos of clients, user reviews, or security badges to establish immediate credibility.",
            "• Feature Grid: A breakdown of core technical/functional benefits, often organized into 3-column layouts using cards.",
            "• Pricing/CTA Section: A clear breakdown of costs or a final high-contrast action button to convert the visitor."
          ]
        },
        {
          title: "Iterative Visual Refinement",
          body: [
            "When working with Generative UI tools, the initial 'one-shot' output is rarely perfect. The core skill is Conversational Refinement. Instead of manually writing code or moving pixels, developers pass descriptive strings to the AI (e.g., 'Make the Hero background a dark glassmorphism container').",
            "The underlying AI reconstructs the Abstract Syntax Tree (AST) of the React components and applies the changes live."
          ]
        }
      ],
      pretest: [
        {
          question: "What layout pattern is most critical for a web landing page hero section to capture attention immediately?",
          options: [
            "A hidden hamburger menu with technical documentation links",
            "A high-contrast H1 headline, an explicit value proposition subtext, and an obvious, accessible Call-to-Action (CTA) button",
            "A long introductory paragraph explaining company history",
            "An embedded database connection log window"
          ],
          answerIndex: 1
        },
        {
          question: "When an AI design platform like Lovable updates a page layout based on a text prompt, what is it modifying under the hood?",
          options: [
            "It replaces the entire codebase with static, uneditable image files",
            "It rewrites or patches the component code (e.g., React, Tailwind CSS classes) to re-render the live interface element dynamically",
            "It reboots the virtual operating system hosting the server",
            "It changes the user's local monitor resolution"
          ],
          answerIndex: 1
        },
        {
          question: "What does the term 'Responsive Web Design' mean in modern UI development?",
          options: [
            "The server returns text answers within 2 milliseconds",
            "The web page automatically adjusts its layout, spacing, and sizing to look correct on any screen size, from mobile phones to wide desktop monitors",
            "The page plays a sound file whenever a user clicks a button",
            "The page limits the number of visitors to avoid crashes"
          ],
          answerIndex: 1
        }
      ],
      procedure: [
        "Review the theory behind high-converting landing page layouts and component anatomy.",
        "Choose a project concept. Recommended option: 'Climate Chain — A decentralized platform for trading carbon credits using verifiable quantum random identifiers.'",
        "Open the Solve tab and access the Lovable workspace link.",
        "Input your initial structural prompt: 'Create a highly modern, sleek landing page for a Web3 tech startup called Climate Chain. Use a dark-mode tech aesthetic with emerald green neon accents. Include a clean navigation bar, high-impact hero section, 3-card feature showcase, testimonial section, and footer.'",
        "Examine the generated preview. Identify three design elements that need adjustment.",
        "Execute a series of single-intent refinement turns.",
        "Turn 2 (Theme): 'Make the hero background look like a moving dark-gradient mesh network. Use glassmorphism blurs behind the text containers.'",
        "Turn 3 (Component): 'Change the 3-card feature grid. Add a smooth hover scaling effect to the cards and replace the generic icons with neon green abstract geometric shapes using Lucide icons.'",
        "Turn 4 (UX optimization): 'Make the main CTA button in the hero section pulse gently with an accent shadow to increase clickability.'",
        "Test the layout responsiveness using the viewport switching tools (Desktop, Tablet, Mobile) provided in the interface.",
        "Click Deploy to generate a public URL for your landing page, and document your prompts, iterations, and final live link in your report."
      ],
      posttest: [
        {
          question: "You notice your generated landing page looks excellent on a laptop but text cuts off awkwardly on mobile screens. What is the most effective prompt instruction to fix this?",
          options: [
            "Make the text smaller everywhere",
            "Ensure all font sizes, paddings, and flex layouts use mobile-responsive tailwind utility breakpoints like md: and sm: so text wraps beautifully on small screens",
            "Remove all text from the mobile view entirely",
            "Tell the user to open the page on a desktop machine"
          ],
          answerIndex: 1
        },
        {
          question: "Why is a multi-turn prompt refinement strategy better than accepting the first static code layout from an AI generator?",
          options: [
            "Multi-turn prompting forces the AI to use more server power",
            "The first draft provides a structural baseline; subsequent focused prompts let you polish micro-interactions, adjust alignment errors, fine-tune branding accents, and eliminate generic placeholders",
            "It makes the final files smaller in storage size",
            "It converts the website into a standalone mobile application automatically"
          ],
          answerIndex: 1
        }
      ],
      references: [
        "JNTUGV AI Tools Lab Syllabus, Module 4 — Web Design Lab"
      ]
    }
  },
  {
    id: "ai-m4-2",
    title: "Bolt.new Web App",
    desc: "Build a multi-section web app using Bolt.new and evaluate component quality.",
    expected: "A working, multi-component application with interactive tabular data rows, live calculating stat bars, and functional modal dialog views.",
    content: {
      aim: {
        text: "In this experiment, the student will leverage Bolt.new, an AI-powered browser-based development engine, to build, test, and run a complete multi-tier web application using natural language. The student will understand how an AI system manages frontend components, runtime environments, package installations, and client-side logic concurrently.",
        bullets: [
          "Understand the concept of full-stack AI development environments running in browser sandboxes",
          "Initialize a web app project requiring dynamic client-side state management",
          "Debug runtime execution issues and UI compilation errors through continuous automated error logs and prompt intervention",
          "Connect user interaction forms to visual dashboard elements that re-render instantly"
        ]
      },
      theory: [
        {
          title: "Browser-Based Full-Stack Sandboxes",
          body: [
            "Traditional development requires setting up local code editors, installing runtimes (like Node.js), managing package conflicts (npm install), and configuring local servers.",
            "Platforms like Bolt.new run an entire full-stack environment directly inside a web browser sandbox utilizing WebContainers.",
            "This allows an AI model to not only write code but also execute shell commands, install npm packages, spin up servers, and read console error logs in real-time."
          ]
        },
        {
          title: "Client-Side State Management",
          body: [
            "A passive web page displays information; an interactive Web Application manages live data. To build an app like a dashboard or tracker, the application must maintain a 'State'—a memory store of user inputs.",
            "When a user adds an item or toggles a status, the state changes, triggering an immediate graphical update of the DOM (Document Object Model) without needing a full page reload."
          ]
        },
        {
          title: "The AI-Developer Feedback Loop",
          body: [
            "When building complex functional web applications, the AI might write code that contains bugs, broken references, or typing mismatches.",
            "The core architectural cycle of Bolt.new involves a closed loop: The user gives an instruction -> The AI writes the code files -> The integrated compiler builds the app.",
            "If an error surfaces, the runtime logs are fed back into the AI context, allowing it to patch its own code automatically."
          ]
        }
      ],
      pretest: [
        {
          question: "What is the fundamental difference between a static landing page website and a full-stack web application?",
          options: [
            "A web application is always colored blue",
            "A static page only displays fixed information, while a web application maintains active state memory, processes data inputs, updates UI blocks dynamically, and runs transactional logic",
            "A web application cannot be viewed on mobile browsers",
            "A static page requires an internet connection but an application does not"
          ],
          answerIndex: 1
        },
        {
          question: "What technology enables systems like Bolt.new to run a full Node.js development server directly inside a normal web browser tab?",
          options: [
            "Large hardware wires plugged directly into the screen",
            "WebContainer technology that sandboxes an operating runtime inside the client-side browser engine",
            "Converting all web elements into raw text documents",
            "High-speed satellite video streaming of a remote server computer"
          ],
          answerIndex: 1
        },
        {
          question: "If your web app state updates but the screen fails to refresh, what is the most likely root problem?",
          options: [
            "The monitor refresh rate is too low",
            "The UI component is not correctly tracking or binding to the dynamic state variable change",
            "The browser needs to be uninstalled",
            "The user typed their name incorrectly"
          ],
          answerIndex: 1
        }
      ],
      procedure: [
        "Study the concept of reactive state handling and full-stack runtime compilation inside browser sandboxes.",
        "Select a technical app concept to build: 'VoiceLeave Management System Dashboard' (A dashboard managing university leave permissions, featuring analytics tracking, student data cards, status toggles, and mock filter controls).",
        "Access the Bolt.new environment via the Solve tab.",
        "Input the application core generation brief: 'Build a comprehensive VoiceLeave Management Dashboard for a university environment. Use React, Tailwind CSS, and Lucide icons. Include top stats ribbon, interactive data list, approve/reject action buttons, and a modal pop-up form to add a new request.'",
        "Let the environment execute package installations (e.g., initializing Vite, Tailwind, installing icon sets). Watch the terminal output pane.",
        "Open the active preview tab. Interact with the application: add a row, filter items, and click status buttons to confirm the data updates properly.",
        "If the preview window throws an error block or fails to render a feature, copy the snippet or type: 'The Add Leave modal form button crashes when clicked. Check the state handler mapping and rewrite the form state initialization to fix it.'",
        "Once fully functional, save your project and note the structural flow of files generated in the file tree view."
      ],
      posttest: [
        {
          question: "During execution, the web container console logs a red error stating: 'Error: Cannot find module \"lucide-react\"'. What is the correct next step to handle this?",
          options: [
            "Delete the entire project and start over manually",
            "Type a short corrective prompt: 'Install the missing package lucide-react using npm and import the icons correctly in the dashboard layout file'",
            "Change the page background color to hide the error",
            "Turn off the browser console view"
          ],
          answerIndex: 1
        },
        {
          question: "Why is managing components as separate, modular files an important engineering practice when building web applications?",
          options: [
            "It makes the code take up more space on the host disk",
            "It breaks the code down into clean, isolated units, making it significantly easier to trace bugs, modify layout components, and scale the app without breaking unrelated features",
            "It speeds up the typing speed of the AI model",
            "It stops human users from altering the website style sheet"
          ],
          answerIndex: 1
        }
      ],
      references: [
        "JNTUGV AI Tools Lab Syllabus, Module 4 — Web Design Lab"
      ]
    }
  },
  {
    id: "ai-m4-3",
    title: "v0 Component Library",
    desc: "Generate a responsive UI component library using v0 and integrate it into a project.",
    expected: "An accessible, flexible React sidebar component code framework featuring layout transitions, active link highlights, accordion tabs, and standardized CSS utility formatting.",
    content: {
      aim: {
        text: "In this experiment, the student will use Vercel's v0 generative UI platform to build design-system-compliant, highly accurate UI components based on Shadcn UI and Tailwind CSS.",
        bullets: [
          "Learn the principles of atomic web design using modern component-driven developer platforms",
          "Generate highly stylized, standalone UI components using clear, explicit design constraints",
          "Utilize precise code-based version history tracks to step forward and backward through component design revisions",
          "Interpret and extract production-ready React / Tailwind code for deployment in clean external file structures"
        ]
      },
      theory: [
        {
          title: "Atomic Component Design",
          body: [
            "Modern frontend engineering rejects massive, monolithic pages in favor of Component-Driven Development. UI interfaces are broken down into small, isolated structural building blocks called components.",
            "These components are structured hierarchically: [Atom: Button] ➔ [Molecule: Search Bar] ➔ [Organism: Navigation Header].",
            "Atoms are basic building blocks; Molecules are combinations of atoms; Organisms are complex UI components composed of molecules and atoms."
          ]
        },
        {
          title: "v0 Generative Mechanics",
          body: [
            "Vercel v0 is trained explicitly to map design patterns directly into optimized code using React, Tailwind CSS utility classes, and Radix UI primitives (packaged via the Shadcn UI library).",
            "Rather than guessing styles arbitrarily, v0 uses predictable tokens for theme variables, ensuring generated elements match consistent structural parameters."
          ]
        },
        {
          title: "Version Tracking and Branching in Generative UI",
          body: [
            "When building UI components, an iteration may introduce unwanted design drift or break visual layout logic. v0 maintains an immutable sequential history log of every generation pass.",
            "Developers can navigate back to a stable structural node (e.g., v2), branch out with a revised stylistic instruction, and generate a new visual variant without losing previous working states."
          ]
        }
      ],
      pretest: [
        {
          question: "In modern component library architectures, what is the core advantage of building interfaces with utility frameworks like Tailwind CSS?",
          options: [
            "It forces the website to load external image frameworks slower",
            "It allows developers to style elements directly inside HTML tags using consistent, predetermined utility classes (e.g., flex, pt-4, rounded-xl), keeping styles modular and highly uniform",
            "It requires compiling backend databases to operate correctly",
            "It disables user interactions entirely"
          ],
          answerIndex: 1
        },
        {
          question: "What design practice does the term 'Atomic Design' refer to?",
          options: [
            "Splitting data systems across different server facilities globally",
            "Breaking down user interfaces into fundamental standalone pieces (atoms, molecules, organisms) that can be mixed, combined, and reused consistently",
            "Designing black-and-white websites only",
            "Restricting website access exclusively to nuclear physicists"
          ],
          answerIndex: 1
        },
        {
          question: "How does historical version tracking assist a designer using an AI engine like v0?",
          options: [
            "It clears out all code files randomly to save cloud space",
            "It provides an incremental historical record of design iterations, allowing the engineer to instantly inspect, test, or roll back to a specific stable visual version if a prompt ruins the layout",
            "It changes the programming language of the component automatically",
            "It records the password credentials of the developer team"
          ],
          answerIndex: 1
        }
      ],
      procedure: [
        "Study the theory behind modular UI architecture and component-driven assembly lines.",
        "Select an advanced UI component to construct: 'Interactive Sidebar Navigation Panel with Framer-Motion Style Accordions'.",
        "Open the v0 environment through the Solve interface link.",
        "Issue a precise structural component brief: 'Generate a responsive, highly modern sticky navigation sidebar component using React, Tailwind CSS, and Lucide icons. The component must feature: a top logo container, a middle section with 5 navigation link items with hover state backgrounds, an expandable accordion drop-menu block under Projects, and a bottom user profile card snippet with an avatar badge. Ensure full keyboard focus accessibility indicators.'",
        "Review the resulting visual interface on version v1. Toggle the code interface view to inspect the generation output.",
        "Refine specific micro-interactions and layout choices. Turn 2 (Animation styling): 'Add a collapsible trigger toggle button at the top corner. When collapsed, the sidebar should shrink to show icons only, using clean transition classes.'",
        "Turn 3 (Theme polish): 'Change the border framing line to a transparent glass accent style and use an organic emerald-green color dot indicator next to the active page navigation item link.'",
        "Use the v0 historical slider to toggle back to v1, review the structural difference, and then return to your latest production version node.",
        "Copy the clean code output for usage in your modular UI document records."
      ],
      posttest: [
        {
          question: "When inspecting code generated by v0, you see classes like className=\"flex items-center space-x-2 rounded-lg p-2 transition-colors\". What design layout behavior does this group produce?",
          options: [
            "A vertical list with static background layers",
            "A horizontal row alignment, centering items vertically, adding space between them, applying a curved corner border, padding the cell inner margins, and activating smooth color shifts on state adjustments",
            "An encrypted data security algorithm execution block",
            "A permanent structural crash wrapper"
          ],
          answerIndex: 1
        },
        {
          question: "If you need to integrate a v0 component into a local standalone project setup, what is the proper engineering approach?",
          options: [
            "Take a screenshot and save it inside your server folder",
            "Copy the structured React source code, ensure your local workspace has the dependent utility imports installed (like Tailwind or Lucide packages), and place it into a dedicated component folder file (e.g., Sidebar.tsx)",
            "Paste the raw text into your terminal command window directly",
            "Rename your entire website project file to match the component title"
          ],
          answerIndex: 1
        }
      ],
      references: [
        "JNTUGV AI Tools Lab Syllabus, Module 4 — Web Design Lab"
      ]
    }
  },
  {
    id: "ai-m4-4",
    title: "Figma AI Layouts",
    desc: "Use Figma AI to auto-generate UI layouts and annotate design decisions.",
    expected: "A cleanly organized, fully layered, vector-based mobile analytics screen layout inside your canvas workspace utilizing standard auto-layout parameters and generating accessible CSS translation files.",
    content: {
      aim: {
        text: "In this experiment, the student will use Figma's built-in AI layout engines to accelerate design workflows, convert textual component requirements into dynamic editable vector wires, map automatic alignment models, and prepare UI structures for production deployment.",
        bullets: [
          "Understand the role of AI layout tools within professional design and prototyping software",
          "Use natural language canvas commands to output structured vector interface mockups directly onto design frames",
          "Apply Figma Auto Layout engineering concepts to make components flexible and scalable",
          "Utilize Developer Mode tools to convert vector component blocks into structured frontend code layouts"
        ]
      },
      theory: [
        {
          title: "Vector Canvas AI Engines",
          body: [
            "While platforms like Lovable and v0 output web code directly, professional product development workflows often begin in visual workspace vector tools like Figma.",
            "Figma AI processes design-system parameters to assemble editable vector shapes, real layers, typography paths, and structural layouts on a blank frame from a textual layout brief.",
            "Because these outputs are vector-based, human designers can resize, regroup, recolor, and manipulate any specific node manually."
          ]
        },
        {
          title: "Auto Layout Engineering Constraints",
          body: [
            "The core layout tool inside professional design setups is Auto Layout. It mirrors the behavior of the CSS Flexbox model in web code.",
            "When AI engines generate canvas assets, they organize sections using clear structural rules: Direction (Arranging layers along a horizontal row or vertical column), Gaps and Padding (Controlling fixed spacing), and Resizing Rules (Defining whether a component card shrinks to Hug contents or stretches to Fill container)."
          ]
        },
        {
          title: "Design-to-Code Translation",
          body: [
            "Once a design layout is finalized on the vector canvas, it acts as a blueprint for developers.",
            "Figma's Dev Mode inspects the layout geometry, alignment values, typography points, and spacing measurements, converting those properties directly into clean CSS properties or Tailwind CSS utility strings.",
            "This bridges the gap between creative visual mockups and frontend code implementation."
          ]
        }
      ],
      pretest: [
        {
          question: "What is the main advantage of generating a UI mockup inside a tool like Figma versus generating raw web code directly right away?",
          options: [
            "Figma files can only be read by computers",
            "It creates an editable, highly flexible vector canvas workspace where designers can easily adjust spatial structures, modify layer paths, test layouts visually, and build detailed component flows before committing to full code development",
            "It handles database server installations automatically",
            "It reduces website data costs down to zero percent"
          ],
          answerIndex: 1
        },
        {
          question: "Which property configuration allows an Auto Layout element card to expand its width automatically when the main parent container frame is stretched out wider?",
          options: [
            "Fixed Width configuration setting",
            "Fill Container resizing property rule",
            "Hug Contents constraint model",
            "Hidden Layer lock property toggling"
          ],
          answerIndex: 1
        },
        {
          question: "What does Figma's Dev Mode do to assist a software engineer working on a frontend development squad?",
          options: [
            "It lets them rewrite the corporate server infrastructure logic",
            "It inspects selected canvas vector components and extracts exact CSS code values, typography details, spacing metrics, and asset metrics to simplify coding tasks",
            "It compiles the UI design into an executable operating system desktop app",
            "It alerts the design team if their internet connections slow down"
          ],
          answerIndex: 1
        }
      ],
      procedure: [
        "Study the principles of design systems, spatial layout rules, and Figma Auto Layout constraints.",
        "Select an interface context to design: 'Real-Time Sales Analytics System Mobile App Interface Dashboard'.",
        "Open the Figma design workspace and launch the AI Layout Prompting Palette.",
        "Input your layout generation request: 'Generate a sleek, modern mobile application user interface layout for a Real-Time Sales Analytics System. Include a top greeting header bar, a large focal card showing total revenue with an analytics trend arrow, a 4-item horizontal sliding category scroll bar, and a vertical list item feed displaying recent transactions.'",
        "Let the canvas engine generate the vector elements. Inspect the layer panel to verify that items are sorted into clean grouped layers.",
        "Select the generated transaction list group and explore the Auto Layout properties panel on the right sidebar context area.",
        "Perform manual and prompted layout adjustments. Adjustment 1 (Spacing): Set the horizontal and vertical card edge padding spaces to exactly 16px, and change the item gap spacing distance variable to 12px.",
        "Adjustment 2 (Constraint Modification): Alter the revenue total card width setting from a Fixed specification to a Fill Container rule to test how it stretches when your main frame boundaries change.",
        "Toggle your workspace viewpoint over into Dev Mode using the workspace switch control.",
        "Click directly on your customized revenue card element, inspect the generated CSS / Tailwind utility string panel output on the right, and copy the grid properties layout for your records."
      ],
      posttest: [
        {
          question: "You select a card container component that has an Auto Layout rule applied, but when you type a longer description title string inside, the text overlaps outside the lower border line awkwardly. What configuration change fixes this bug?",
          options: [
            "Delete the text block element completely",
            "Set the height parameter constraint of the parent card container component to Hug Contents instead of a locked Fixed Height specification value",
            "Change the application background layer to a dark theme tone",
            "Move the text block layer completely outside the card frame boundary area"
          ],
          answerIndex: 1
        },
        {
          question: "When converting a visual design mockup over into modern frontend code, what core translation error should you look out for when using Dev Mode code outputs?",
          options: [
            "The translation tool might switch the entire project database framework",
            "The generated code strings might utilize absolute position points (position: absolute) instead of clean responsive flow boxes if the canvas designer built the layers loosely without setting up Auto Layout frameworks correctly",
            "The color values might get converted into large text description blocks",
            "The text characters might get rearranged backwards completely"
          ],
          answerIndex: 1
        },
        {
          question: "How does using Figma's Auto Layout conceptually map to modern web development frameworks?",
          options: [
            "It requires developers to learn a new proprietary coding language",
            "It closely mirrors CSS Flexbox and CSS Grid paradigms, teaching designers to think in terms of flexible containers, padding, and relational alignment just like a frontend developer",
            "It converts vector paths directly into backend SQL databases",
            "It locks elements in place permanently so they cannot be resized"
          ],
          answerIndex: 1
        },
        {
          question: "What is the benefit of grouping elements properly in the layers panel when using Figma AI layout generation?",
          options: [
            "It applies an automatic dark mode theme to the layers",
            "It ensures structural hierarchy, making it easier to apply Auto Layout rules to specific parent-child relationships and export clean component code",
            "It makes the file size significantly smaller",
            "It hides the elements from developers in Dev Mode"
          ],
          answerIndex: 1
        },
        {
          question: "A student wants to extract the CSS for a specific button generated in the layout. What is the most efficient way to do this in Figma?",
          options: [
            "Manually measure the button with the ruler tool and guess the colors",
            "Use Dev Mode, select the button element, and copy the auto-generated CSS/Tailwind utility properties from the inspect panel",
            "Export the button as a PNG and use an external code generator",
            "Right-click the button and select \"Convert to Code\""
          ],
          answerIndex: 1
        }
      ],
      references: [
        "JNTUGV AI Tools Lab Syllabus, Module 4 — Web Design Lab"
      ]
    }
  }
];
