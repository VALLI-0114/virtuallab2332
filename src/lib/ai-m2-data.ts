import { Experiment } from "./course-data";

export const aiM2Experiments: Experiment[] = [
  {
    id: "ai-m2-1",
    title: "ChatGPT Persuasive Essay",
    desc: "Draft, edit, and refine a persuasive essay using ChatGPT with multi-turn prompting.",
    expected: "A well-structured 600–800 word persuasive essay with a clear thesis, evidence-supported body paragraphs, counterargument acknowledgment, and a strong conclusion.",
    content: {
      aim: {
        text: "In this experiment the student will use OpenAI's ChatGPT to draft, refine, and critically evaluate a persuasive essay through multi-turn prompting. The focus is on understanding ChatGPT as a writing collaborator rather than a one-shot generator, and on developing prompt engineering skills specific to long-form persuasive writing.",
        bullets: [
          "Understand how ChatGPT processes multi-turn conversational context to build and refine long-form writing",
          "Apply role prompting and persona assignment to control tone, audience targeting, and rhetorical style",
          "Use iterative refinement instructions to improve argument structure, evidence integration, and conclusion strength",
          "Identify and correct common weaknesses in AI-generated persuasive writing including vague claims, repetition, and lack of specific evidence",
          "Compare a one-shot generated essay against a multi-turn refined version and evaluate the quality difference",
          "Understand the ethical responsibilities around AI-assisted academic writing including disclosure and originality",
          "Apply ChatGPT to practical CSE writing tasks including technical blog posts, project proposals, and research abstracts"
        ]
      },
      theory: [
        {
          title: "What is ChatGPT?",
          body: [
            "ChatGPT is a conversational AI assistant developed by OpenAI, built on the GPT-4 family of large language models.",
            "GPT-4 is a transformer-based autoregressive language model trained on a large corpus of text data followed by Reinforcement Learning from Human Feedback (RLHF) to align its outputs with human preferences for helpfulness, harmlessness, and honesty.",
            "ChatGPT maintains conversational context within a session, allowing each response to be informed by the full history of the exchange. This multi-turn capability is what makes it particularly effective for iterative writing tasks."
          ]
        },
        {
          title: "Transformer Architecture and Language Generation",
          body: [
            "GPT-4 is based on the transformer architecture introduced by Vaswani et al. in 2017.",
            "The model uses self-attention mechanisms to compute relationships between all tokens in the input simultaneously, allowing it to capture long-range dependencies in text far more effectively than earlier recurrent architectures.",
            "During generation the model predicts the next token based on all preceding tokens, sampling from a probability distribution shaped by temperature and top-p parameters."
          ]
        },
        {
          title: "RLHF and Writing Quality",
          body: [
            "Raw GPT-4 outputs are refined through Reinforcement Learning from Human Feedback (RLHF).",
            "This process significantly improves the coherence, factual grounding, appropriate tone, and instruction-following ability of the model's outputs compared to base pretraining alone.",
            "It is the reason ChatGPT follows nuanced writing instructions such as 'make this more formal' or 'add a counterargument in paragraph 3' reliably."
          ]
        },
        {
          title: "Persuasive Essay Structure",
          body: [
            "A well-structured persuasive essay contains an introduction with a clear thesis statement, body paragraphs each making a single claim supported by evidence and reasoning, acknowledgment and refutation of counterarguments, and a conclusion that reinforces the thesis and calls to action or reflection.",
            "When prompting ChatGPT for persuasive writing, explicitly requesting each of these structural components produces significantly better results than a generic 'write a persuasive essay' prompt."
          ]
        },
        {
          title: "Role Prompting and Persona Assignment",
          body: [
            "Assigning ChatGPT a role or persona at the start of the conversation constrains its tone, vocabulary level, and rhetorical approach.",
            "For example 'You are a senior technology policy analyst writing for a peer-reviewed journal audience' will produce more formal, evidence-grounded, and citation-aware writing than no role assignment."
          ]
        },
        {
          title: "Multi-Turn Refinement Workflow",
          body: [
            "The most effective approach to using ChatGPT for persuasive writing is a staged multi-turn workflow.",
            "In the first turn establish the role, audience, topic, and structural requirements. In subsequent turns issue specific refinement instructions — strengthen the thesis, add a counterargument, replace vague claims with specific examples.",
            "Each turn builds on the previous, allowing precise control over the final output without restarting from scratch."
          ]
        },
        {
          title: "Ethical Considerations for Academic Writing",
          body: [
            "Submitting AI-generated text as one's own original work without disclosure constitutes academic dishonesty in most institutional policies.",
            "The appropriate use of ChatGPT in academic contexts includes using it as a drafting aid, structural scaffold, or editing partner while ensuring the ideas, arguments, and final expression reflect the student's own thinking."
          ]
        }
      ],
      pretest: [
        {
          question: "What architectural feature of GPT-4 allows it to maintain coherent long-form writing across hundreds of tokens?",
          options: [
            "Recurrent hidden states that carry information token by token",
            "The self-attention mechanism in the transformer architecture which computes relationships between all tokens in the context simultaneously",
            "A separate memory module that stores previously generated paragraphs",
            "A fixed template library that the model fills in"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: The self-attention mechanism in the transformer architecture which computes relationships between al..." },
        {
          question: "What is the most effective prompt engineering strategy to improve a generic AI-generated essay?",
          options: [
            "Ask ChatGPT to 'make it better' in the next turn",
            "Assign a role, specify the target audience, request a clear thesis, define the structure, and specify tone and length",
            "Increase the temperature setting to get more creative output",
            "Ask the same question multiple times until a better output appears"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Assign a role, specify the target audience, request a clear thesis, define the structure, and specif..." },
        {
          question: "What is the primary purpose of Reinforcement Learning from Human Feedback (RLHF) in ChatGPT's training?",
          options: [
            "To increase the speed of text generation",
            "To fine-tune the model to produce outputs that humans rate as more helpful, coherent, and appropriately toned by training a reward model on human preference data",
            "To prevent the model from generating any text on controversial topics",
            "To reduce the size of the model so it runs faster on consumer hardware"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: To fine-tune the model to produce outputs that humans rate as more helpful, coherent, and appropriat..." },
        {
          question: "What change is most likely in the output if you assign the role 'Supreme Court advocate'?",
          options: [
            "The output will be shorter because legal writing is concise",
            "The output will adopt a more formal, authoritative, and legally-framed rhetorical style with arguments structured around precedent and policy",
            "ChatGPT will refuse to write persuasive content",
            "The role assignment has no effect"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: The output will adopt a more formal, authoritative, and legally-framed rhetorical style with argumen..." },
        {
          question: "What is the primary ethical concern of submitting a ChatGPT-drafted essay unmodified?",
          options: [
            "ChatGPT essays are always factually incorrect",
            "Submitting AI-generated text as original work without disclosure constitutes academic dishonesty and violates institutional integrity policies",
            "ChatGPT holds copyright over the generated text",
            "The essay will be too well-written and arouse suspicion"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Submitting AI-generated text as original work without disclosure constitutes academic dishonesty and..." }
      ],
      procedure: [
        "Read the Theory section and understand the transformer architecture, RLHF training, and the multi-turn refinement workflow.",
        "Choose a CSE-relevant persuasive essay topic (e.g. 'AI should be mandatory in undergraduate engineering education').",
        "Open the Solve tab and navigate to the ChatGPT workspace.",
        "Begin with a role and context turn — do not generate the essay yet. Example: 'You are a senior technology policy researcher writing for an audience of undergraduate engineering students and faculty.'",
        "In the second turn issue the generation instruction with full structural requirements: length, thesis, body paragraphs, counterargument, conclusion.",
        "Read the output critically. Identify the three weakest elements (e.g. vague claims, missing examples).",
        "Issue three targeted refinement instructions in separate turns, one for each weakness.",
        "After refinements, ask ChatGPT to produce a final clean version incorporating all changes.",
        "Compare the first-draft output against the final refined output.",
        "Document the full conversation for the Feedback Report."
      ],
      posttest: [
        {
          question: "What does a multi-turn refined version demonstrating a stronger thesis and more specific evidence show about ChatGPT?",
          options: [
            "ChatGPT regenerated the essay randomly",
            "The conversational context maintained across turns allowed targeted refinement instructions to build on and improve specific elements, producing better outcomes than single-shot generation",
            "The refined version is better because it is longer",
            "ChatGPT automatically improves its outputs after a delay"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: The conversational context maintained across turns allowed targeted refinement instructions to build..." },
        {
          question: "What should a student do instead of instructing ChatGPT to 'make the essay more persuasive'?",
          options: [
            "Use a different tool",
            "Identify specific weak elements and issue concrete instructions such as 'strengthen the thesis by making the position more specific'",
            "Restart ChatGPT",
            "Accept the essay as maximally persuasive"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Identify specific weak elements and issue concrete instructions such as 'strengthen the thesis by ma..." },
        {
          question: "What does finding incorrect or unverifiable statistics in a ChatGPT essay illustrate?",
          options: [
            "ChatGPT is incapable of producing factual content",
            "ChatGPT can generate plausible-sounding but hallucinated statistics and citations — all factual claims must be independently verified",
            "The statistics are correct and fact-checking sources are wrong",
            "This only occurs at high temperature settings"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: ChatGPT can generate plausible-sounding but hallucinated statistics and citations — all factual clai..." },
        {
          question: "What is the ethically appropriate approach to use a ChatGPT-assisted essay for a conference submission?",
          options: [
            "Submit the ChatGPT output directly",
            "Use the ChatGPT draft as a structural scaffold, rewrite all arguments in your own voice, fact-check all claims, add original analysis, and disclose AI assistance",
            "Delete all traces of AI involvement before submission",
            "Add your name to the ChatGPT output without modification"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Use the ChatGPT draft as a structural scaffold, rewrite all arguments in your own voice, fact-check" },
        {
          question: "Which multi-turn prompting strategy is most effective for a hackathon proposal?",
          options: [
            "Ask in one prompt: 'write a hackathon proposal'",
            "Begin with a role assignment, request the proposal with explicit structural requirements, then issue separate refinement turns for each section based on critical reading",
            "Ask ChatGPT to write the proposal ten times and select the best version",
            "Use the highest temperature setting"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Begin with a role assignment, request the proposal with explicit structural requirements, then issue..." }
      ],
      references: [
        "OpenAI GPT-4 Technical Report, OpenAI, 2023",
        "Vaswani A. et al., Attention Is All You Need, NeurIPS 2017",
        "Ouyang L. et al., Training Language Models to Follow Instructions with Human Feedback (InstructGPT / RLHF paper), NeurIPS 2022",
        "JNTUGV AI Tools Lab Syllabus, Module 2 — Writing Lab"
      ]
    }
  },
  {
    id: "ai-m2-2",
    title: "Claude Paper Summary",
    desc: "Use Claude to summarize a complex research paper and critically assess accuracy.",
    expected: "A structured multi-section summary with clearly labeled components, calibrated language indicating uncertainty where appropriate, and a glossary and research questions section.",
    content: {
      aim: {
        text: "In this experiment the student will use Anthropic's Claude to summarize complex research papers and critically assess the accuracy, completeness, and fidelity of the summaries produced. The focus is on understanding how to use Claude as a research reading assistant and on developing the critical skills to evaluate AI-generated summaries against source material.",
        bullets: [
          "Understand Claude's constitutional AI training approach and how it shapes output quality and honesty",
          "Use Claude's long context window to process full or partial research papers and produce structured summaries",
          "Apply structured prompting to request summaries at specific levels — abstract-level, section-by-section, and critical analysis",
          "Critically compare Claude's summary against the original paper and identify omissions, distortions, and hallucinations",
          "Use Claude for follow-up analytical tasks including identifying research gaps, generating review questions, and explaining technical terminology",
          "Evaluate Claude's suitability for literature review assistance in CSE research contexts",
          "Understand the risks of over-reliance on AI summaries in academic research workflows"
        ]
      },
      theory: [
        {
          title: "What is Claude?",
          body: [
            "Claude is a large language model developed by Anthropic. Claude is trained using Constitutional AI (CAI), a methodology that uses a set of principles (a 'constitution') to guide the model's self-critique and revision during training.",
            "This approach aims to produce a model that is reliably honest, calibrated in its uncertainty, and resistant to producing harmful or misleading outputs."
          ]
        },
        {
          title: "Constitutional AI and Calibrated Uncertainty",
          body: [
            "One key principle of Constitutional AI is calibrated uncertainty — Claude is trained to acknowledge when it is uncertain, to avoid overstating confidence in claims it cannot verify, and to flag when a summary may be incomplete or oversimplified.",
            "For research summarization this reduces the risk of a confident-sounding but inaccurate summary misleading the reader."
          ]
        },
        {
          title: "Long Context Window",
          body: [
            "Claude 3.5 Sonnet supports a context window of 200,000 tokens (approx. 150,000 words or 500 pages).",
            "This means Claude can process a full research paper or multiple related papers in a single context and produce a summary that draws on the full document rather than truncating."
          ]
        },
        {
          title: "Structured Summarization Prompting",
          body: [
            "Claude responds well to structured summarization instructions that specify the exact output format.",
            "An effective prompt structure requests: a one-paragraph abstract-level summary, a section-by-section breakdown, the top significant contributions, a glossary of technical terms, and follow-up research questions."
          ]
        },
        {
          title: "Critical Assessment of AI Summaries",
          body: [
            "A critical assessment evaluates an AI summary on four dimensions:",
            "1. Accuracy: correctly represents claims and methodology without distortion.",
            "2. Completeness: includes all significant contributions and limitations.",
            "3. Fidelity: preserves the paper's own framing without substituting meanings.",
            "4. Hallucination risk: does not introduce claims or statistics absent in the original."
          ]
        },
        {
          title: "Claude in Research Workflows",
          body: [
            "Claude is a practical research assistant for literature review acceleration.",
            "However over-reliance on AI summaries without reading primary sources is an academic risk — summaries necessarily simplify and may miss the nuance and limitations essential for rigorous research."
          ]
        }
      ],
      pretest: [
        {
          question: "What is Constitutional AI and how does it differ from standard RLHF fine-tuning?",
          options: [
            "It uses a larger dataset than RLHF and produces faster models",
            "It trains the model to critique and revise its own outputs against a set of guiding principles during training, aiming for more reliably honest, calibrated outputs",
            "It removes the need for any human feedback",
            "It is a technique for generating structured JSON outputs"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: It trains the model to critique and revise its own outputs against a set of guiding principles durin..." },
        {
          question: "Which prompt structure will most likely produce the most useful academic summary of a 40-page research paper?",
          options: [
            "\"Summarize this paper\"",
            "\"Give me the main point\"",
            "\"Provide: (1) an abstract-level summary, (2) section-by-section breakdown, (3) top three contributions, (4) glossary of technical terms, and (5) follow-up research questions\"",
            "\"What is this paper about in one sentence\""
          ],
          answerIndex: 2, hint: "Think about why the correct answer involves: \"Provide: (1) an abstract-level summary, (2) section-by-section breakdown, (3) top three contributio..." },
        {
          question: "Why is Claude's 200,000-token context window particularly significant for research paper summarization?",
          options: [
            "It allows Claude to generate images from figures",
            "It enables processing a full research paper in a single context, producing summaries that account for the complete document",
            "A larger context window means faster generation speed",
            "It allows Claude to search the internet for related papers automatically"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: It enables processing a full research paper in a single context, producing summaries that account fo..." },
        {
          question: "What type of error has occurred if Claude includes a specific accuracy percentage not found in the original paper?",
          options: [
            "The student misread the original paper",
            "Hallucination — Claude generated a plausible-sounding but fabricated statistic not present in the original paper",
            "Claude rounded the statistic",
            "The paper was updated after Claude's training cutoff"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Hallucination — Claude generated a plausible-sounding but fabricated statistic not present in the or..." },
        {
          question: "For which specific CSE research task is Claude most immediately valuable as an AI assistant?",
          options: [
            "Running and debugging Python experiments",
            "Accelerating literature review by generating structured summaries, explaining terminology, and drafting annotated bibliography entries",
            "Automatically generating citations in IEEE format",
            "Replacing the need to read primary research sources entirely"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Accelerating literature review by generating structured summaries, explaining terminology, and draft..." }
      ],
      procedure: [
        "Read the Theory section and understand Constitutional AI, Claude's context window, and critical summary assessment.",
        "Select a research paper relevant to your CSE curriculum (at least 8 pages).",
        "Open the Solve tab and navigate to the Claude workspace.",
        "Upload the paper PDF or paste the text.",
        "Issue the structured summarization prompt requesting the abstract, section breakdown, contributions, glossary, and follow-up questions.",
        "Read the output carefully alongside the original paper.",
        "Conduct a critical assessment across the four dimensions — accuracy, completeness, fidelity, and hallucination risk.",
        "Issue a follow-up prompt targeting the weakest element of the summary.",
        "Ask Claude to explain the most technically complex term from the paper.",
        "Ask Claude to suggest a feasible final-year undergraduate project extending the paper's findings.",
        "Document the full session and your evaluation for the Feedback Report."
      ],
      posttest: [
        {
          question: "Which dimension of critical assessment does omitting the limitations section represent?",
          options: [
            "Accuracy",
            "Completeness — limitations are essential context, and omission produces a misleadingly positive representation",
            "Fidelity",
            "Hallucination risk"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Completeness — limitations are essential context, and omission produces a misleadingly positive repr..." },
        {
          question: "Which dimension of critical assessment does substituting 'competitive with state-of-the-art' with 'outperforming state-of-the-art' represent?",
          options: [
            "Completeness",
            "Fidelity — the summary substituted language that shifts the meaning of the original claim",
            "Hallucination",
            "Accuracy"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Fidelity — the summary substituted language that shifts the meaning of the original claim" },
        {
          question: "If Claude summarizes a 2024 paper not provided in its context, what is the most likely explanation for its confident-sounding summary?",
          options: [
            "It accessed the paper through web search",
            "It likely hallucinated the content since it cannot have training knowledge of a post-cutoff publication",
            "It has access to all academic papers regardless of date",
            "It summarized a different paper with a similar title"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: It likely hallucinated the content since it cannot have training knowledge of a post-cutoff publicat..." },
        {
          question: "What is the primary academic risk of writing a literature review based entirely on unverified AI summaries?",
          options: [
            "The review section will be too long",
            "AI summaries simplify and may omit nuances or hallucinate details, misrepresenting the field and undermining research credibility",
            "Claude will detect that the student is using its summaries",
            "There is no academic risk"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: AI summaries simplify and may omit nuances or hallucinate details, misrepresenting the field and und..." },
        {
          question: "What is the most effective follow-up prompt if an AI suggestion for an extension study is too trivial?",
          options: [
            "Ask Claude to suggest a completely different topic",
            "Issue a constrained refinement: 'suggest a project that modifies the model architecture to address a stated limitation, achievable in 3 months by a two-person team'",
            "Accept the trivial suggestion",
            "Ask the same question again"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Issue a constrained refinement: 'suggest a project that modifies the model architecture to address a..." }
      ],
      references: [
        "Anthropic Claude Model Card and Constitutional AI Documentation",
        "Bai Y. et al., Constitutional AI: Harmlessness from AI Feedback, Anthropic, 2022",
        "JNTUGV AI Tools Lab Syllabus, Module 2 — Writing Lab"
      ]
    }
  },
  {
    id: "ai-m2-3",
    title: "Gemini Blog Post",
    desc: "Generate a structured blog post using Gemini and evaluate tone and coherence.",
    expected: "A well-structured 700–800 word blog post with consistent conversational tone, descriptive subheadings, accessible analogies for technical concepts, and a practical conclusion.",
    content: {
      aim: {
        text: "In this experiment the student will use Google's Gemini to generate a structured blog post from a topic brief and evaluate the output on dimensions of tone, coherence, structural organization, and audience appropriateness. The focus is on understanding Gemini as a writing tool for technical communication and content creation relevant to CSE students.",
        bullets: [
          "Understand Gemini's architecture as a natively multimodal model and how this influences its text generation capabilities",
          "Use Gemini to generate a full blog post from a structured brief specifying topic, audience, tone, and length",
          "Evaluate the output on tone consistency, structural coherence, factual grounding, and engagement quality",
          "Use Gemini's Google Search grounding feature to produce factually current and reference-supported content",
          "Compare outputs across different tone instructions — technical, conversational, and journalistic",
          "Apply Gemini to practical CSE content creation tasks including technical tutorials and project documentation blogs",
          "Reflect on the role of AI in democratizing technical writing for students"
        ]
      },
      theory: [
        {
          title: "What is Gemini?",
          body: [
            "Gemini is Google DeepMind's family of large language models. Gemini was designed from the ground up as a natively multimodal model — trained simultaneously on text, images, audio, video, and code.",
            "This native multimodality gives Gemini a different representational basis than text-only models, and it shows in tasks requiring integration of visual and textual knowledge."
          ]
        },
        {
          title: "Natively Multimodal Architecture",
          body: [
            "Gemini's architecture processes different modalities through a unified transformer-based backbone rather than separate encoders with a fusion layer.",
            "This means the model's internal representations blend textual and visual information at the attention level. For blog writing, Gemini can describe or write about images and diagrams provided in the context."
          ]
        },
        {
          title: "Google Search Grounding",
          body: [
            "A key differentiator of Gemini in the Google ecosystem is its ability to ground responses in real-time Google Search results.",
            "When Search grounding is enabled, Gemini retrieves current information from the web before generating a response, allowing it to incorporate recent events and statistics, addressing the knowledge cutoff limitation."
          ]
        },
        {
          title: "Blog Post Structure and Writing Register",
          body: [
            "A well-structured blog post for a technical audience includes a hook introduction, descriptive subheadings, practical examples or code snippets, and a summary conclusion.",
            "Register refers to the level of formality and stylistic character of writing. For blog posts, registers include technical, conversational, and journalistic.",
            "Specifying the register explicitly in the prompt is the most effective way to control Gemini's tone output."
          ]
        },
        {
          title: "Gemini for CSE Technical Communication",
          body: [
            "For CSE students Gemini is particularly applicable for writing technical blog posts explaining projects, generating documentation for open-source contributions, drafting event write-ups, and producing tutorial content."
          ]
        }
      ],
      pretest: [
        {
          question: "What is the primary architectural difference between Gemini and GPT-4 in terms of multimodality?",
          options: [
            "Gemini is text-only while GPT-4 supports images",
            "Gemini was designed as a natively multimodal model trained simultaneously across text, images, audio, video, and code through a unified transformer backbone",
            "GPT-4 is multimodal while Gemini only processes text",
            "Both models use identical multimodal architectures"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Gemini was designed as a natively multimodal model trained simultaneously across text, images, audio..." },
        {
          question: "Which Gemini feature makes it most suitable for writing about a recent machine learning breakthrough?",
          options: [
            "Gemini generates longer blog posts",
            "Gemini's Google Search grounding capability allows it to retrieve and incorporate current information from the web",
            "Gemini automatically generates images",
            "Gemini has a larger vocabulary"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Gemini's Google Search grounding capability allows it to retrieve and incorporate current informatio..." },
        {
          question: "Which prompt revision will most improve a generic blog post output?",
          options: [
            "Add 'make it good' to the prompt",
            "Specify the target audience, tone, structure, and length",
            "Ask Gemini to write the post in a different language",
            "Ask for a shorter post"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Specify the target audience, tone, structure, and length" },
        {
          question: "Which tone instruction should be included for a newsletter accessible to non-technical readers but still accurate?",
          options: [
            "Use a highly technical register",
            "Use a journalistic register — factual, structured around a news hook, written for a general educated audience using analogies",
            "Write in the style of an academic research paper",
            "Use a conversational register assuming the reader is a CSE senior"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Use a journalistic register — factual, structured around a news hook, written for a general educated..." },
        {
          question: "For which CSE writing task is Gemini's native multimodality most directly useful?",
          options: [
            "Writing a sorting algorithm in Python",
            "Generating a blog post that analyzes and describes a system architecture diagram uploaded by the student",
            "Debugging a segmentation fault in C code",
            "Generating SQL queries from a natural language description"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Generating a blog post that analyzes and describes a system architecture diagram uploaded by the stu..." }
      ],
      procedure: [
        "Read the Theory section and understand Gemini's multimodal architecture, Search grounding, and writing registers.",
        "Choose a CSE-relevant blog post topic (e.g., 'Why Every Developer Should Learn Docker').",
        "Open the Solve tab and navigate to the Gemini workspace.",
        "Craft a full blog post brief prompt specifying topic, target audience, tone and register, required sections, and length.",
        "Read the output and evaluate tone consistency throughout.",
        "Issue a targeted tone correction prompt for any section that drifts in register.",
        "Regenerate the same topic brief with a different tone instruction (e.g., technical register). Compare the two outputs side by side.",
        "If Search grounding is available, add a prompt instruction to include a current real-world example from 2024 or 2025.",
        "Document both tone variants, the refinement turn, and your evaluation for the Feedback Report."
      ],
      posttest: [
        {
          question: "What is the most measurable difference between a conversational and a technical register blog post?",
          options: [
            "The length of the posts",
            "Vocabulary choice, sentence complexity, assumed reader knowledge, use of first/second person, and presence of qualifying language",
            "The number of subheadings",
            "Technical posts always include code while conversational posts never do"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Vocabulary choice, sentence complexity, assumed reader knowledge, use of first/second person, and pr..." },
        {
          question: "What is the most responsible course of action if you cannot verify a statistic cited by Gemini?",
          options: [
            "Trust the figure since Gemini has Google Search grounding",
            "Independently verify the statistic through the original source before publishing, as AI models can misquote or aggregate statistics incorrectly",
            "Remove all statistics from the post",
            "Ask Gemini to confirm its own statistic"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Independently verify the statistic through the original source before publishing, as AI models can m..." },
        {
          question: "What targeted refinement prompt will most effectively fix a generic conclusion?",
          options: [
            "Make the conclusion better",
            "Rewrite the conclusion to match the conversational tone of the introduction and end with a specific actionable recommendation",
            "Delete the conclusion and replace it with a summary",
            "Add more words to the conclusion"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Rewrite the conclusion to match the conversational tone of the introduction and end with a specific" },
        {
          question: "What accounts for Gemini referencing a specific recent product launch while ChatGPT does not?",
          options: [
            "Gemini has a larger training dataset",
            "Gemini's Google Search grounding retrieved current information at generation time, while ChatGPT (without browsing mode) relies on static training data",
            "ChatGPT filtered out product mentions",
            "Gemini generates more words per response"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Gemini's Google Search grounding retrieved current information at generation time, while ChatGPT (wi..." },
        {
          question: "What is the most effective and academically honest workflow for a CSE student using Gemini to write a blog post about their project?",
          options: [
            "Submit the Gemini output directly",
            "Provide Gemini with a detailed technical brief, review the output for accuracy, add personal reflections, and disclose AI assistance",
            "Use Gemini only to generate the title",
            "Ask Gemini to write the entire codebase"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Provide Gemini with a detailed technical brief, review the output for accuracy, add personal reflect..." }
      ],
      references: [
        "JNTUGV AI Tools Lab Syllabus, Module 2 — Writing Lab"
      ]
    }
  },
  {
    id: "ai-m2-4",
    title: "Perplexity Research Query",
    desc: "Conduct a multi-source research query using Perplexity and assess citation quality.",
    expected: "A detailed research synthesis report including primary findings, citation quality assessment, and identification of any hallucinated or misattributed sources.",
    content: {
      aim: {
        text: "In this experiment the student will use Perplexity AI to conduct a multi-source research query. The student will explore how conversational search engines differ from traditional search engines and how to critically evaluate the AI's synthesis of multiple sources, focusing on citation accuracy and source quality.",
        bullets: [
          "Understand how conversational search engines aggregate and synthesize real-time web data",
          "Formulate complex research queries that require synthesizing information from multiple domains",
          "Critically evaluate the quality and credibility of the sources selected by the AI",
          "Verify the fidelity of AI-generated claims by cross-referencing inline citations",
          "Understand the limitations of real-time web retrieval in AI systems"
        ]
      },
      theory: [
        {
          title: "Conversational Search Engines",
          body: [
            "Conversational search engines like Perplexity AI combine the real-time retrieval capabilities of traditional search engines with the natural language synthesis of Large Language Models (LLMs).",
            "Instead of returning a list of links, the engine reads the top search results and writes a coherent, synthesized answer with inline citations pointing to the original sources."
          ]
        },
        {
          title: "Retrieval-Augmented Generation (RAG) in Search",
          body: [
            "Perplexity uses a technique similar to Retrieval-Augmented Generation. When a user asks a question, the system first queries the web to retrieve relevant documents.",
            "These documents are injected into the LLM's context window, forcing the model to generate its response based strictly on the retrieved text rather than its parametric memory, heavily reducing hallucination."
          ]
        },
        {
          title: "Citation Verification and Source Quality",
          body: [
            "While conversational search engines provide citations, the quality of the answer is bounded by the quality of the sources it retrieves. If it retrieves biased, outdated, or incorrect web pages, the synthesized answer will reflect those errors.",
            "A critical skill for knowledge workers is verifying that an AI's claim is actually supported by the cited source (citation fidelity) and that the source itself is credible."
          ]
        }
      ],
      pretest: [
        {
          question: "How does a conversational search engine like Perplexity differ from a traditional search engine like Google?",
          options: [
            "It does not use the internet to find answers",
            "Instead of returning a list of hyperlinks, it retrieves multiple sources, reads them, and synthesizes a direct, coherent answer with inline citations",
            "It only searches academic journals",
            "It requires you to write code to perform a search"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Instead of returning a list of hyperlinks, it retrieves multiple sources, reads them, and synthesize..." },
        {
          question: "What is the primary vulnerability of conversational search engines?",
          options: [
            "They are too slow to use for simple questions",
            "The synthesized answer is only as reliable as the sources the AI chooses to retrieve; if it retrieves poor-quality sources, the answer will be unreliable",
            "They cannot be used on mobile devices",
            "They only provide answers in a single language"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: The synthesized answer is only as reliable as the sources the AI chooses to retrieve; if it retrieve..." },
        {
          question: "When evaluating an AI-generated research summary, what does 'citation fidelity' mean?",
          options: [
            "The number of citations included in the summary",
            "Whether the AI's generated claim accurately reflects the information actually present in the source document it cites",
            "The aesthetic formatting of the bibliography",
            "Whether the sources used are older than ten years"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Whether the AI's generated claim accurately reflects the information actually present in the source" }
      ],
      procedure: [
        "Review the theory behind conversational search and RAG architecture.",
        "Choose a complex, multi-faceted research question (e.g., 'What are the environmental impacts of training Large Language Models compared to traditional data center operations?').",
        "Open the Solve tab and navigate to the Perplexity AI workspace.",
        "Input your research query and observe the AI's synthesis process.",
        "Read the generated response critically. Select three distinct claims made in the text that have inline citations attached.",
        "Click on the citations to visit the original source websites.",
        "For each claim, evaluate Citation Fidelity: Does the source actually state what the AI claims it states? Evaluate Source Quality: Is the source credible, authoritative, and current?",
        "Issue a follow-up refinement prompt (e.g., 'Provide more detailed statistics on water usage specifically, and only cite peer-reviewed academic papers').",
        "Document your initial query, your verification findings for the three claims, and the results of your refinement prompt for your Feedback Report."
      ],
      posttest: [
        {
          question: "You click on a citation in an AI's response, and the source document talks about a completely different topic than the claim the AI made. What has occurred?",
          options: [
            "The internet connection dropped",
            "Citation hallucination or misattribution: the AI generated a claim and incorrectly attached a source that does not support it",
            "The source document was updated while you were reading it",
            "The AI is intentionally hiding the real source"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Citation hallucination or misattribution: the AI generated a claim and incorrectly attached a source..." },
        {
          question: "Why is it important to explicitly instruct a conversational search engine to prioritize certain types of sources (e.g., 'only cite peer-reviewed papers')?",
          options: [
            "It makes the AI generate responses faster",
            "Because without constraints, the AI might prioritize SEO-optimized blogs or marketing materials over rigorous, authoritative sources",
            "It prevents the AI from using the internet",
            "It forces the AI to output responses in APA format automatically"
          ],
          answerIndex: 1, hint: "Think about why the correct answer involves: Because without constraints, the AI might prioritize SEO-optimized blogs or marketing materials over..." }
      ],
      references: [
        "JNTUGV AI Tools Lab Syllabus, Module 2 — Writing Lab"
      ]
    }
  }
];
