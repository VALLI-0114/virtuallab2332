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
        "JNTUGV AI Tools Lab Syllabus, Module 2 — Writing Lab"
      ]
    }
  }
];
