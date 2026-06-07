import { Experiment } from "./course-data";

export const aiM5Experiments: Experiment[] = [
  {
    id: "ai-m5-1",
    title: "NotebookLM Document Chat",
    desc: "Extract knowledge and synthesize audio using NotebookLM on technical documents.",
    expected: "An organized knowledge notebook with a clean document reference panel, cited answers mapping structural systems, and a fully processed conversational audio synthesis file.",
    content: {
      aim: {
        text: "In this experiment, the student will use Google's NotebookLM to build a source-grounded AI research workspace. The student will upload complex technical materials to interact with an LLM that is strictly constrained to the provided source text. Additionally, the student will generate and evaluate synthetic audio discussions (podcasts) based on their source documents.",
        bullets: [
          "Understand the concept of a source-grounded language model workspace and how it eliminates hallucination",
          "Upload, organize, and query multiple heterogeneous documents (PDFs, Markdown text, website URLs)",
          "Critically evaluate AI-generated inline citations against primary source documents to verify accuracy",
          "Generate a multi-speaker synthetic audio overview (deep dive) and analyze its effectiveness in summarizing technical content"
        ]
      },
      theory: [
        {
          title: "Source-Grounded AI Workspaces",
          body: [
            "Traditional chat LLMs generate answers using their internal weights (parametric memory), which can lead to confident-sounding errors (hallucinations). NotebookLM uses an explicit Source-Grounded Architecture.",
            "When you upload documents, they form an exclusive, closed-world knowledge base. The AI searches the uploaded text index, injects exact excerpts into the LLM's context window, and synthesizes a response. If a fact isn't in your sources, the AI cannot invent it."
          ]
        },
        {
          title: "Interactive Study Guides and Synthetic Audio",
          body: [
            "Beyond conversational Q&A, source-grounded tools can automatically generate meta-content:",
            "Briefing Documents: High-level executive summaries that map out major technical themes.",
            "Inline Citations: Clicking a citation link jumps directly to the exact page and paragraph of the source document.",
            "Audio Overviews: Advanced pipeline architectures that convert source text into a natural, two-way conversational podcast script with realistic pacing and conversational banter."
          ]
        }
      ],
      pretest: [
        {
          question: "What is the main structural advantage of a source-grounded model like NotebookLM over standard ChatGPT when reading a technical manual?",
          options: [
            "NotebookLM runs faster because it ignores the text completely",
            "NotebookLM grounds its answers strictly in the documents you provide, generating direct inline citations and minimizing hallucination risks",
            "NotebookLM automatically translates the text into code",
            "NotebookLM converts the manual into an interactive video game"
          ],
          answerIndex: 1
        },
        {
          question: "What happens if you ask a source-grounded notebook a question that is entirely missing from your uploaded files?",
          options: [
            "The AI invents a plausible fake statistic",
            "The AI states that it cannot find that information within the provided sources",
            "The AI crashes and deletes your browser history",
            "The AI searches the entire live dark web for the answer"
          ],
          answerIndex: 1
        },
        {
          question: "What is the purpose of clicking an inline citation number inside a NotebookLM response?",
          options: [
            "It closes the application window",
            "It brings up a panel highlighting the exact paragraph and document source from which the AI extracted that fact",
            "It redirects you to an online shopping store",
            "It copies the entire response text into your computer's clipboard"
          ],
          answerIndex: 1
        }
      ],
      procedure: [
        "Review the theory behind source grounding and retrieval-focused context structures.",
        "Gather technical documents (e.g., system architecture specs, project proposals).",
        "Open the Solve tab and access the NotebookLM workspace interface.",
        "Click Create Notebook and upload your files (paste text blocks, link URLs, or upload PDFs).",
        "Review the automatically generated Notebook Guide.",
        "Issue an exploratory research prompt (e.g., 'Based strictly on the uploaded system documentation, outline the exact data flow...').",
        "Inspect the answer and click on the inline citation chips to verify that the pop-up pane matches your primary sources.",
        "Navigate to the Studio/Audio Generation options panel and click Generate Audio Overview (Deep Dive Podcast).",
        "Listen to the generated conversation and note how dense structural ideas are translated into conversational analogies.",
        "Document your workspace setup, verification steps, and audio accuracy evaluation for your report."
      ],
      posttest: [
        {
          question: "You notice that the generated Audio Overview podcast oversimplifies a critical step. How should you address this?",
          options: [
            "Delete the software project since the audio script is absolute truth",
            "Recognize that audio summaries are meant for high-level concepts; always rely on the primary text files and explicit inline citations for technical accuracy",
            "Change the voice settings to a faster accent speed",
            "Re-type your source document in all capital letters"
          ],
          answerIndex: 1
        },
        {
          question: "When compiling a literature review from multiple uploaded research articles, what is the best workflow to find competing arguments?",
          options: [
            "Ask the AI to write a random story about the authors",
            "Use a prompt like: 'Compare the findings across Source A and Source B regarding algorithm performance. Highlight where the authors disagree, and back your response with direct document citations'",
            "Read only the first sentence of the first uploaded file",
            "Ask the AI to delete all pages that contain math formulas"
          ],
          answerIndex: 1
        }
      ],
      references: [
        "JNTUGV AI Tools Lab Syllabus, Module 5 — Research & Productivity Lab"
      ]
    }
  },
  {
    id: "ai-m5-2",
    title: "Gamma Presentation Deck",
    desc: "Transform a text outline into a professional presentation using Gamma App.",
    expected: "A dynamic, multi-card responsive presentation deck featuring grid columns, high-impact data callout modules, and cohesive branding accents.",
    content: {
      aim: {
        text: "In this experiment, the student will use Gamma App to transform an unformatted text outline into a highly engaging, professional presentation deck using AI markdown parsing and flexible card layouts. The focus is on mastering structured storytelling, visual hierarchy, and real-time design adjustments.",
        bullets: [
          "Understand the transition from a markdown outline to a responsive, container-based slide layout",
          "Generate a complete multi-card presentation deck from a project brief",
          "Use AI design commands to reformat layouts, swap visual assets, and adjust column groupings",
          "Evaluate a presentation deck for clear visual communication, text-to-image ratios, and scannability"
        ]
      },
      theory: [
        {
          title: "Fluid Web-Based Presentational Elements",
          body: [
            "Traditional slide software uses a fixed canvas grid where text can spill off or shrink illegibly. Gamma relies on Fluid Web Containers. Slides are treated as flexible cards that assemble web layout blocks (flexboxes, grids, columns) dynamically.",
            "If your text scales or changes, the surrounding card container adjusts its vertical flow and padding parameters automatically, ensuring clean layout alignments."
          ]
        },
        {
          title: "AI Outline Extraction and Layout Rules",
          body: [
            "When an AI presentation engine receives a topic prompt, it follows a two-stage compilation pipeline:",
            "1. Semantic Partitioning: The model parses the prompt or outline into logical headers (H1, H2) to indicate the birth of a new slide card.",
            "2. Visual Mapping: Bulleted sequences under a header are translated into visual components (e.g., three points map to a 3-column card grid; a chronological process maps to a timeline track)."
          ]
        }
      ],
      pretest: [
        {
          question: "How does Gamma's fluid web card architecture differ from standard legacy slide tools like PowerPoint?",
          options: [
            "Gamma slides can only be viewed in black and white print formats",
            "Legacy tools use rigid pixel coordinates that cause text overflow, while Gamma uses responsive web containers that dynamically scale and align content boxes seamlessly",
            "Gamma requires you to write raw HTML code for every word",
            "Gamma limits presentations to a maximum of two slides"
          ],
          answerIndex: 1
        },
        {
          question: "When feeding a text brief into an AI presentation engine, what structural indicator tells the model to create a new slide card?",
          options: [
            "The end of every third word block",
            "Logical markdown section breaks, headers, or major topic transitions in your text outline structure",
            "Typing a random mathematical equation",
            "Inserting an external database link"
          ],
          answerIndex: 1
        },
        {
          question: "What is the design principle of 'Visual Scannability' in professional presentation development?",
          options: [
            "Making all font characters tiny",
            "Organizing information using bold callouts, icons, multi-column cards, and clear spacing so an audience can absorb the core takeaways in under five seconds",
            "Hiding all text behind hidden navigation bars",
            "Printing slides out onto physical paper cards"
          ],
          answerIndex: 1
        }
      ],
      procedure: [
        "Review presentation layout theories focusing on visual scannability and card component distribution.",
        "Select a presentation topic (e.g., 'Real-Time Sales Analytics System Performance Review').",
        "Open the Solve interface panel and access the Gamma generation workspace.",
        "Select the Text-to-Deck generation option and paste your presentation outline brief.",
        "Let the AI engine build the initial slide cards and review the layout structures.",
        "Use the inline AI Design Chat Partner sidebar to run real-time structural adjustments (e.g., 'Change the bulleted text list into an asymmetric 2-column layout').",
        "Extract a main data statistic and turn it into a massive, centralized callout card.",
        "Manually replace any generic icon blocks with context-specific items.",
        "Preview the final fluid deck in fullscreen presentation mode and record your prompts and results."
      ],
      posttest: [
        {
          question: "A generated slide has too much text, causing vertical scrolling. What is the most effective prompt instruction to fix this?",
          options: [
            "Delete this entire slide card from the deck",
            "Rewrite this slide layout into three concise, scannable column cards with illustrative icons, keeping text under 40 words per column",
            "Change the background color to white",
            "Tell the presenter to read faster"
          ],
          answerIndex: 1
        },
        {
          question: "Why is using an AI design assistant to modify slide structures mid-workflow beneficial?",
          options: [
            "It replaces the need to understand your own data",
            "It allows you to rapidly iterate on different layout structures (like switching columns to timelines) using natural language, saving time spent manually aligning shapes",
            "It automatically signs you up for competitions",
            "It converts your presentation into an automated script"
          ],
          answerIndex: 1
        }
      ],
      references: [
        "JNTUGV AI Tools Lab Syllabus, Module 5 — Research & Productivity Lab"
      ]
    }
  },
  {
    id: "ai-m5-3",
    title: "Napkin AI Diagrams",
    desc: "Generate contextual visual diagrams automatically from technical text using Napkin AI.",
    expected: "An illustrated document showing clear text paragraphs paired with vector diagrams, containing stylized custom nodes, relational arrows, and clear visual summaries.",
    content: {
      aim: {
        text: "In this experiment, the student will use Napkin AI to analyze raw technical text and automatically generate context-aware visual diagrams (flowcharts, venn diagrams, matrices, and mind maps). The student will master text-to-visual conversion workflows.",
        bullets: [
          "Understand the semantic mapping engine that connects abstract technical text to concrete visual diagrams",
          "Paste long-form technical explanations and trigger contextual diagram identification tracks",
          "Customize diagram nodes, labels, styles, and flows using interactive canvas editing toolbars",
          "Evaluate how adding specific visual diagrams impacts the readability and scannability of documentation"
        ]
      },
      theory: [
        {
          title: "Semantic Visual Mapping Mechanics",
          body: [
            "Napkin AI uses an internal Semantic-to-Visual Translation Engine. The AI reads sentences, extracts core nouns and relational verbs, and identifies the underlying spatial or logical model described in the text.",
            "For example: 'Data moves from Module A to Module B' becomes a Sequential Workflow Flowchart. 'System A has X, System B has Y' becomes a Venn Diagram Overlay."
          ]
        },
        {
          title: "Vector Diagram Topologies",
          body: [
            "Depending on the text structure, different diagram topologies are suggested:",
            "• Sequential Flowcharts: procedural paths, state transitions, step-by-step data tracking.",
            "• Hierarchical Core Pyramids: layers of abstraction (network protocols, software stacks).",
            "• Matrix Quadrants: comparative analysis, trade-off studies (Cost vs. Complexity)."
          ]
        }
      ],
      pretest: [
        {
          question: "If your technical documentation describes how data flows through a pipeline from an API gateway to a caching database, what diagram type should you choose?",
          options: [
            "A circular pie chart",
            "A linear, step-by-step sequential flowchart showing directional data nodes",
            "A overlapping Venn diagram",
            "A random abstract artistic painting"
          ],
          answerIndex: 1
        },
        {
          question: "How does Napkin AI determine where to suggest a diagram icon placeholder within a text document?",
          options: [
            "It randomly drops a graphic after every fifty letters",
            "It analyzes the semantic context of paragraphs to detect structural patterns like sequences, comparisons, hierarchies, or loops, placing triggers next to relevant sections",
            "It checks the file storage size",
            "It prompts you to upload a manual canvas drawing"
          ],
          answerIndex: 1
        },
        {
          question: "What is the main advantage of vector-based diagrams over static screenshot images within technical reports?",
          options: [
            "Vector diagrams cannot be edited by human users",
            "Vector shapes remain crisp at any display size, and individual nodes, text labels, color fills, and connecting arrows can be customized directly on the canvas",
            "Vector diagrams take up more disk space",
            "Vector diagrams completely hide the raw source code"
          ],
          answerIndex: 1
        }
      ],
      procedure: [
        "Study the relationships between technical prose structures and their corresponding diagram topologies.",
        "Select a text block to analyze (e.g., 'Water Guard Project Implementation Protocol').",
        "Open the Solve workspace link to enter the Napkin AI drafting document canvas.",
        "Paste your technical explanation block directly into the center text pane.",
        "Hover your cursor along the left margin next to your main operational paragraphs and click the Auto-Diagram Trigger.",
        "Examine the generated visual diagram variations and choose a layout.",
        "Click directly inside the generated diagram nodes to run custom canvas style refinements (Labeling, Visual Color Shift, Flow Adjustment).",
        "Click Export to download your final clean diagram asset as an SVG or high-resolution PNG file for your lab document."
      ],
      posttest: [
        {
          question: "You are reviewing a generated diagram showing a software stack architecture, but the frontend is at the bottom and the database is at the top. How do you fix this?",
          options: [
            "Throw away the report and re-code the backend",
            "Double-click the vector diagram node layers directly on the canvas and manually drag or rename the components to reflect the correct structural stacking order",
            "Use a white marker on your monitor",
            "Write a separate text document explaining the error"
          ],
          answerIndex: 1
        },
        {
          question: "Why is integrating direct vector diagrams alongside text documentation critical for onboarding new developers?",
          options: [
            "New developers prefer comics over code",
            "Visual diagrams provide an immediate mental map of system components and data relationships, significantly reducing cognitive load and accelerating architectural comprehension",
            "It prevents the software code from crashing",
            "It translates documentation into alternative spoken languages"
          ],
          answerIndex: 1
        }
      ],
      references: [
        "JNTUGV AI Tools Lab Syllabus, Module 5 — Research & Productivity Lab"
      ]
    }
  },
  {
    id: "ai-m5-4",
    title: "Elicit Literature Review",
    desc: "Automate literature mapping, matrix extraction, and source synthesis using Elicit.",
    expected: "A comprehensive, multi-row research extraction matrix displaying paper titles, automated summaries, custom parameter columns, and verified source citations.",
    content: {
      aim: {
        text: "In this experiment, the student will use Elicit (an AI-powered research assistant) to conduct a rigorous, automated literature review query. The student will master advanced search queries, construct customizable comparative data extraction matrices, and map the academic landscape.",
        bullets: [
          "Understand the difference between semantic research engines and simple keyword index systems",
          "Execute a formal scientific query to discover peer-reviewed journal papers and conference materials",
          "Construct an extraction matrix to systematically track methodologies, datasets, and limitations across papers",
          "Analyze AI-generated paper summaries while verifying source fidelity against the primary text"
        ]
      },
      theory: [
        {
          title: "Semantic Citation Discovery Engines",
          body: [
            "Traditional search platforms look for exact keyword text strings. Semantic search engines like Elicit use Dense Vector Retrieval (Semantic Space Mapping).",
            "The system maps queries into high-dimensional vector spaces where sentences with similar conceptual meanings are positioned close together. This ensures discovery of highly relevant papers that traditional keyword queries overlook."
          ]
        },
        {
          title: "Literature Extraction Matrices",
          body: [
            "Writing a literature review requires synthesizing information across dozens of separate publications. An Extraction Matrix organizes this process into a clear multi-attribute comparison table tracking Citations, Methodology, Dataset, Limitations, and Findings.",
            "AI-assisted research engines automate this data collection by extracting these parameters into customizable tables."
          ]
        }
      ],
      pretest: [
        {
          question: "What is the primary difference between a semantic search engine like Elicit and a standard keyword index search engine?",
          options: [
            "Keyword searches can only be executed using old terminals",
            "Keyword searches look for exact string matches, while semantic search maps conceptual meanings using vector embeddings to find relevant articles even if vocabulary terms differ",
            "Semantic engines only search social media",
            "Semantic search charges a user fee for every link"
          ],
          answerIndex: 1
        },
        {
          question: "Why is constructing an extraction matrix table critical during the literature review stage of a research project?",
          options: [
            "It makes your bibliography list look longer",
            "It organizes key variables, methodologies, datasets, and limitations across multiple papers into a side-by-side comparison grid for synthesis and gap analysis",
            "It automatically writes the code logic for your frontend",
            "It locks your research files"
          ],
          answerIndex: 1
        },
        {
          question: "When an AI research engine extracts a summary column stating a paper's dataset size, what action must a responsible student researcher take?",
          options: [
            "Copy the number directly into their report",
            "Click the reference link to open the original paper's methodology section to verify that the AI accurately extracted and represented the metric in context",
            "Delete the paper reference entirely",
            "Change the number to a larger value"
          ],
          answerIndex: 1
        }
      ],
      procedure: [
        "Study the mechanics of semantic mapping and the structured taxonomy of a scientific research paper.",
        "Formulate an academic query relevant to your advanced curriculum (e.g., 'Quantum Random Number Generation algorithms applied to Blockchain security frameworks').",
        "Open the Solve interface panel and launch the Elicit research assistant environment.",
        "Input your research question into the central discovery bar and click Search.",
        "Review the initial Summary of Top Papers panel.",
        "Use the Add Columns button to configure custom parameter extractions: Methodology Used, Dataset parameters, Stated Limitations.",
        "Examine the extraction matrix table. Hover over summary cells to see direct source text excerpts.",
        "Filter your search results (e.g., restrict publication years to 2022–2026).",
        "Export your synthesized extraction table matrix as a CSV spreadsheet file and save the top three paper abstracts."
      ],
      posttest: [
        {
          question: "You notice Elicit has extracted a paper that seems perfect for your thesis, but the full PDF is hidden behind a publisher paywall. What is the appropriate academic research step to take next?",
          options: [
            "Skip the topic entirely and pick an easier question",
            "Use your university library credentials, institutional login portals, or tools like Google Scholar to find legal open-access preprints or institutional copies",
            "Pay an unauthorized web hacker",
            "Invent a fake summary"
          ],
          answerIndex: 1
        },
        {
          question: "Which row entry in your literature extraction matrix is most useful for identifying 'Research Gaps' to help scope your final-year undergraduate project?",
          options: [
            "The font size listing row block",
            "The 'Stated Limitations or Future Work' column, which outlines what current models cannot handle and where further investigation is actively required",
            "The alphabetical ranking index",
            "The total number of pages in the document"
          ],
          answerIndex: 1
        },
        {
          question: "What is the primary benefit of exporting the extraction matrix as a CSV file?",
          options: [
            "It deletes the original papers from the internet",
            "It allows the researcher to sort, filter, and integrate the extracted data into spreadsheet software for deeper analysis and documentation",
            "It converts the text into a slideshow",
            "It changes the file into an executable program"
          ],
          answerIndex: 1
        },
        {
          question: "If Elicit generates a summary for a paper, what should you do if the methodology is unclear?",
          options: [
            "Assume the methodology was flawed",
            "Hover over the summary cell to see the direct source text excerpt or open the original paper to read the detailed methodology section",
            "Delete the row from your matrix",
            "Ask the AI to guess the methodology"
          ],
          answerIndex: 1
        },
        {
          question: "How does a semantic search engine handle vocabulary differences across papers (e.g., 'heart disease' vs 'cardiovascular interventions')?",
          options: [
            "It ignores papers that don't use the exact search terms",
            "It uses vector embeddings to position conceptually similar sentences close together, allowing it to find relevant papers regardless of the exact vocabulary used",
            "It requires the user to manually input all possible synonyms",
            "It searches only for the first word in the query"
          ],
          answerIndex: 1
        }
      ],
      references: [
        "JNTUGV AI Tools Lab Syllabus, Module 5 — Research & Productivity Lab"
      ]
    }
  }
];
