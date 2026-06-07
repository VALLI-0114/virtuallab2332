import { Experiment } from "./course-data";

export const aiM1Experiments: Experiment[] = [
  {
    id: "ai-m1-1",
    title: "Gemini Imagen Photorealism",
    desc: "Generate a photorealistic scene using Gemini Imagen and evaluate prompt sensitivity.",
    expected: "A high-resolution photorealistic image matching the described scene with accurate lighting, texture, and composition.",
    content: {
      aim: {
        text: "In this experiment the student will use Google DeepMind's Gemini Imagen to generate photorealistic images from text prompts. The student will explore how prompt structure, descriptive detail, and iterative refinement influence the realism, composition, and fidelity of AI-generated images. The focus is specifically on Imagen's strength in producing lifelike scenes, accurate lighting, and coherent spatial composition.",
        bullets: [
          "Understand how Gemini Imagen uses cascaded diffusion models to produce high-resolution photorealistic outputs",
          "Craft prompts that explicitly target photorealism using lighting descriptors, camera terminology, and scene context",
          "Observe how Imagen handles human subjects, architectural scenes, and natural environments",
          "Compare outputs from weak versus strong prompts on the same subject",
          "Understand Imagen's integration within the Google ecosystem and its API accessibility",
          "Identify limitations such as text rendering accuracy and complex multi-subject compositions",
          "Reflect on ethical considerations specific to photorealistic AI generation including deepfakes and misinformation"
        ]
      },
      theory: [
        {
          title: "What is Gemini Imagen?",
          body: [
            "Gemini Imagen is Google DeepMind's text-to-image generation system, integrated into the Gemini platform and accessible via Google's Vertex AI API.",
            "Imagen uses a cascade of diffusion models — a base model generates a low-resolution image from the text prompt, and a series of super-resolution models progressively upscale and refine the output to produce a high-fidelity result.",
            "This cascaded approach allows Imagen to preserve fine detail and achieve photorealistic texture across complex scenes."
          ]
        },
        {
          title: "Cascaded Diffusion Architecture",
          body: [
            "Unlike single-stage diffusion models, Imagen's cascaded pipeline works in stages. The first stage generates a 64x64 pixel image from the text embedding.",
            "Subsequent super-resolution stages upscale to 256x256 and then to 1024x1024, each conditioned on both the text prompt and the output of the previous stage.",
            "This means high-level semantics are established early and fine-grained details are added progressively, which is why Imagen performs strongly on photorealistic textures such as skin, fabric, water, and architectural surfaces."
          ]
        },
        {
          title: "Text Conditioning with T5",
          body: [
            "Imagen uses Google's T5 (Text-to-Text Transfer Transformer) as its text encoder rather than CLIP.",
            "T5 is a large language model trained on text-only data, which gives Imagen stronger understanding of complex sentence structures, negations, and attribute binding compared to vision-language encoders.",
            "This is why Imagen tends to handle detailed multi-attribute prompts more accurately than earlier systems."
          ]
        },
        {
          title: "Photorealism and Prompt Engineering",
          body: [
            "To produce photorealistic images with Imagen, prompts should include:",
            "Camera and lens descriptors: \"shot on Sony A7R IV\", \"85mm portrait lens\", \"wide angle 24mm\"",
            "Lighting conditions: \"golden hour sunlight\", \"overcast diffused lighting\", \"studio three-point lighting\"",
            "Scene detail: specific locations, textures, materials, and environmental conditions",
            "Quality markers: \"photorealistic\", \"8K resolution\", \"ultra-detailed\", \"sharp focus\"",
            "Composition terms: \"rule of thirds\", \"shallow depth of field\", \"bokeh background\"",
            "Example weak prompt: \"a street in India\"",
            "Example strong prompt: \"A busy street market in Old Delhi at dusk, warm orange street lamps reflecting on wet cobblestones, vendors selling marigold garlands, shallow depth of field, photorealistic, shot on Nikon D850, 35mm lens, cinematic color grading\""
          ]
        },
        {
          title: "Imagen in the Google Ecosystem",
          body: [
            "Imagen is accessible through Google Vertex AI, making it relevant for CSE students interested in cloud-based AI deployment.",
            "It is also embedded in Gemini Advanced and Google Workspace tools. The Vertex AI Imagen API supports programmatic image generation, editing, and visual question answering, enabling integration into full-stack applications."
          ]
        },
        {
          title: "Limitations of Imagen",
          body: [
            "Despite its photorealism strengths, Imagen has known limitations. Rendering legible text within images remains inconsistent across all diffusion-based systems including Imagen.",
            "Generating accurate hand anatomy and counting specific numbers of objects reliably are ongoing challenges.",
            "Imagen also enforces strict safety filters which may decline prompts involving real public figures or sensitive contexts."
          ]
        },
        {
          title: "Ethical Considerations",
          body: [
            "Photorealistic image generation carries the highest ethical risk among all image generation modalities.",
            "A photorealistic AI-generated image of a person, place, or event can be indistinguishable from a real photograph, making it a direct tool for misinformation, non-consensual imagery, and identity fraud.",
            "CSE students building applications with Imagen via the Vertex AI API must implement content moderation layers and comply with Google's Imagen usage policies."
          ]
        }
      ],
      pretest: [
        {
          question: "What architectural approach does Gemini Imagen use to produce high-resolution photorealistic images?",
          options: [
            "A single large diffusion model that directly generates 1024x1024 images from noise",
            "A cascaded diffusion pipeline where a base model generates a low-resolution image and successive super-resolution models progressively refine it",
            "A GAN-based system where a discriminator filters out non-photorealistic outputs",
            "A transformer that autoregressively predicts pixel values left to right"
          ],
          answerIndex: 1
        },
        {
          question: "Why does Imagen use T5 as its text encoder instead of CLIP?",
          options: [
            "T5 is smaller and faster than CLIP",
            "T5 is a language model trained on text data that better understands complex sentence structures and negations",
            "T5 produces visual embeddings that directly encode pixel colors",
            "CLIP is not compatible with Google's infrastructure"
          ],
          answerIndex: 1
        },
        {
          question: "Which prompt is most likely to produce the best photorealistic portrait result with Imagen?",
          options: [
            "\"a woman\"",
            "\"a realistic woman portrait\"",
            "\"A close-up portrait of a woman in her 30s with natural curly hair, soft window light from the left, shallow depth of field, shot on Canon 5D Mark IV\"",
            "\"woman, photo, real, detailed\""
          ],
          answerIndex: 2
        },
        {
          question: "Which of the following is a known limitation of Gemini Imagen?",
          options: [
            "Inability to generate images of outdoor scenes",
            "Consistently inaccurate rendering of legible text and correct hand anatomy",
            "Inability to generate images larger than 256x256 pixels",
            "Requirement that prompts be written in a specific programming language"
          ],
          answerIndex: 1
        },
        {
          question: "What is the most critical ethical obligation when building applications with the Imagen API?",
          options: [
            "Ensuring all generated images use a consistent color palette",
            "Implementing content moderation to prevent generation of harmful or deceptive photorealistic content",
            "Storing all generated images in a public database for transparency",
            "Limiting generation to black and white images to reduce realism risks"
          ],
          answerIndex: 1
        }
      ],
      procedure: [
        "Read the Theory section and understand the cascaded diffusion architecture and the role of T5 text conditioning in Imagen.",
        "On paper, write two versions of a prompt for the same subject — one weak (under 5 words) and one strong (including camera, lighting, scene detail, and quality markers).",
        "Predict which prompt will produce the more photorealistic output and note your reasoning before generating.",
        "Open the Solve tab and navigate to the Gemini Imagen workspace.",
        "Enter your weak prompt first. Observe and note the output — composition, lighting accuracy, texture quality, and overall realism.",
        "Enter your strong prompt for the same subject. Observe and compare — note specific improvements in lighting, detail, and spatial coherence.",
        "Generate a photorealistic architectural scene using the prompt: \"A modern glass office building in Hyderabad at sunrise, reflections of orange clouds on the glass facade, surrounding greenery, wide-angle shot, photorealistic, ultra-detailed, 8K\"",
        "Generate a natural environment scene: \"A misty rainforest waterfall in the Western Ghats, morning light filtering through dense canopy, wet mossy rocks, macro detail, photorealistic, shot on Sony A7R IV\"",
        "Generate a human subject scene: \"A street food vendor in Mumbai at night, warm tungsten lighting from a stall lamp, steam rising from a pan, candid shot, photorealistic, 50mm lens, cinematic\"",
        "Observe the handling of human faces, hands, and text in signboards if present. Note any artifacts or inaccuracies.",
        "Try adding a negative prompt such as \"blurry, cartoon, illustration, watermark, low quality\" and observe the difference in output quality.",
        "Document all outputs and your comparative observations for the Feedback Report."
      ],
      posttest: [
        {
          question: "A student generates two images... the detailed prompt image is significantly more photorealistic. What is the primary reason?",
          options: [
            "Longer prompts always take more compute time and therefore produce better results",
            "The detailed prompt provides richer text embeddings that more precisely condition the diffusion denoising process toward the desired visual attributes",
            "Imagen counts the number of words and allocates more GPU memory to longer prompts",
            "Short prompts are automatically rejected by Imagen's safety filter"
          ],
          answerIndex: 1
        },
        {
          question: "Why do diffusion models including Imagen struggle to reliably render legible text?",
          options: [
            "Imagen does not support the generation of outdoor scenes",
            "Text is a highly structured symbolic output that does not emerge naturally from spatial denoising",
            "The student used an incorrect language in the prompt",
            "The safety filter blocked all text to prevent misinformation"
          ],
          answerIndex: 1
        },
        {
          question: "What effect should adding a negative prompt like 'blurry, cartoon' produce?",
          options: [
            "The image will be generated faster",
            "Imagen will ignore the negative prompt as it only supports positive conditioning",
            "The denoising process will steer away from those undesired visual features, producing a sharper and more photorealistic output",
            "The image will be converted to grayscale"
          ],
          answerIndex: 2
        },
        {
          question: "What is the most critical risk that must be addressed before deployment of an Imagen-based app?",
          options: [
            "The images may have inconsistent aspect ratios",
            "Users could generate photorealistic fake images of real people, enabling identity fraud, non-consensual imagery, and visual misinformation",
            "The API costs may be too high for mobile deployment",
            "Photorealistic images consume more storage than cartoon images"
          ],
          answerIndex: 1
        },
        {
          question: "In Imagen's cascaded diffusion architecture, why does the system generate a low-resolution image first before upscaling?",
          options: [
            "Low-resolution generation is a safety requirement imposed by Google",
            "The cascaded approach allows high-level semantic structure and composition to be established at low resolution first, with fine-grained texture added progressively",
            "Imagen's hardware cannot process high-resolution images in a single pass",
            "Generating at low resolution first reduces the prompt token count"
          ],
          answerIndex: 1
        }
      ],
      references: [
        "Saharia C. et al., Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding (Imagen Paper), Google Research, 2022",
        "Ho J. et al., Cascaded Diffusion Models for High Fidelity Image Generation, NeurIPS 2022",
        "Raffel C. et al., Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer (T5), JMLR 2020",
        "Google Vertex AI Imagen Documentation: https://cloud.google.com/vertex-ai/docs/generative-ai/image/overview",
        "Google Gemini Imagen Interface: https://gemini.google.com",
        "JNTUGV AI Tools Lab Syllabus, Module 1 — Image Generation Lab"
      ]
    }
  },
  {
    id: "ai-m1-2",
    title: "DALL·E Concept Art",
    desc: "Create concept art using DALL·E with iterative prompt refinement.",
    expected: "A stylistically rich concept art image accurately representing the described metaphorical scene with the specified color palette and mood.",
    content: {
      aim: {
        text: "In this experiment the student will use OpenAI's DALL·E to generate concept art and illustrative imagery from text prompts. The student will explore DALL·E's strength in creative interpretation, conceptual scene building, and iterative prompt refinement within the ChatGPT interface.",
        bullets: [
          "Understand how DALL·E 3 improves on earlier versions through tighter prompt adherence and natural language understanding",
          "Generate concept art for fictional characters, environments, and objects using structured prompts",
          "Explore iterative generation — refining prompts based on previous outputs to converge toward a desired result",
          "Understand DALL·E's integration with ChatGPT and how conversational context influences image generation",
          "Compare DALL·E outputs with photorealistic tools and identify the qualitative difference in creative vs realistic generation",
          "Apply DALL·E to a practical CSE use case — generating UI mockup illustrations, app concept screens, or technical diagram art",
          "Reflect on copyright, originality, and attribution concerns specific to AI-generated concept art"
        ]
      },
      theory: [
        {
          title: "What is DALL·E?",
          body: [
            "DALL·E is OpenAI's text-to-image generation model, with DALL·E 3 being the current production version.",
            "Unlike earlier systems, DALL·E 3 was trained with a focus on prompt fidelity — the model is significantly better at following detailed and complex instructions, correctly attributing colors and counts to the right objects, and maintaining consistency across multi-element scenes.",
            "DALL·E 3 is natively integrated into ChatGPT, meaning users can generate images through a conversational interface where follow-up instructions refine the output."
          ]
        },
        {
          title: "DALL·E Architecture and Training",
          body: [
            "DALL·E 3 is built on a latent diffusion architecture similar to Stable Diffusion but trained with recaptioned data.",
            "OpenAI identified that images in training datasets often have poor or misleading captions, which degrades prompt adherence. To address this, they used a separate model to generate highly detailed synthetic captions for all training images, then trained DALL·E 3 on this recaptioned dataset.",
            "This recaptioning approach is the primary reason DALL·E 3 outperforms earlier models on complex multi-attribute prompts such as \"a red cube on top of a blue sphere to the left of a green pyramid.\""
          ]
        },
        {
          title: "Conversational Image Refinement",
          body: [
            "A distinctive feature of DALL·E 3 within ChatGPT is that generation is conversational.",
            "A user can say \"make the background darker,\" \"change the character's outfit to a lab coat,\" or \"regenerate but in a watercolor style\" and the model will interpret the instruction in the context of the prior exchange.",
            "This makes DALL·E uniquely suited for iterative concept development where the final output evolves through dialogue rather than a single prompt."
          ]
        },
        {
          title: "Concept Art and Illustrative Use Cases",
          body: [
            "DALL·E performs particularly well at: Fantasy and science fiction world-building, Product and app concept visualization, Diagrammatic and explanatory art, Logo and branding concepts, Children's book and editorial illustration styles.",
            "For CSE students, DALL·E is particularly useful for generating placeholder UI artwork, presentation visuals, architecture diagram illustrations, and project report cover imagery without requiring design skills."
          ]
        },
        {
          title: "Style Vocabulary for DALL·E",
          body: [
            "DALL·E responds well to explicit style references: Medium (\"oil painting\", \"watercolor\", \"vector art\"), Era and movement (\"Art Deco\", \"Cyberpunk\"), Mood (\"ethereal\", \"dystopian\").",
            "Important: DALL·E will not replicate a living artist's style by name but responds well to movement and aesthetic descriptors."
          ]
        },
        {
          title: "DALL·E Safety and Content Policy",
          body: [
            "DALL·E enforces OpenAI's content policy which prohibits generation of real people's likenesses, explicit content, and violent imagery. Unlike some open-source alternatives, these filters cannot be bypassed."
          ]
        }
      ],
      pretest: [
        {
          question: "What was the key training improvement in DALL·E 3 that significantly improved its prompt adherence?",
          options: [
            "Using a larger image resolution during training",
            "Training on a recaptioned dataset where synthetic detailed captions replaced the original captions",
            "Adding a separate discriminator network to filter low-quality outputs",
            "Reducing the number of diffusion steps to improve speed"
          ],
          answerIndex: 1
        },
        {
          question: "Which prompt will most likely produce the best concept art result in DALL·E 3?",
          options: [
            "\"AI lab\"",
            "\"futuristic lab interior\"",
            "\"A futuristic AI research laboratory interior with holographic displays, rows of quantum computing servers, digital concept art, cinematic lighting\"",
            "\"a lab that looks like the future, make it good\""
          ],
          answerIndex: 2
        },
        {
          question: "What makes DALL·E 3's integration with ChatGPT particularly useful?",
          options: [
            "ChatGPT automatically selects the best prompt on behalf of the user",
            "The conversational interface allows iterative refinement where follow-up instructions modify the image in context",
            "ChatGPT compresses the generated images for faster download",
            "DALL·E only works through the ChatGPT interface and has no standalone access"
          ],
          answerIndex: 1
        },
        {
          question: "Which of the following prompt approaches is most appropriate given DALL·E's content policies?",
          options: [
            "\"In the style of [specific living artist's name]\"",
            "\"In a Bauhaus-inspired geometric flat design style with primary colors and clean typography\"",
            "\"Copy the exact style of a recent Marvel movie poster\"",
            "\"Replicate the visual style of a specific branded video game\""
          ],
          answerIndex: 1
        },
        {
          question: "For which CSE use cases is DALL·E most immediately applicable?",
          options: [
            "Compiling and running C++ source code",
            "Generating placeholder UI artwork, architecture diagram illustrations, and app concept screen mockups",
            "Automatically generating SQL queries from database schemas",
            "Debugging segmentation faults in operating system kernel code"
          ],
          answerIndex: 1
        }
      ],
      procedure: [
        "Read the Theory section and understand DALL·E 3's recaptioning training approach, its conversational refinement capability, and its content policy.",
        "On paper, write a concept art brief for a fictional subject of your choice — a character, environment, or object relevant to a CSE or tech theme.",
        "Structure your brief into prompt components: subject, setting, style, lighting, mood, and composition.",
        "Open the Solve tab and navigate to the DALL·E workspace.",
        "Enter your first prompt and generate the image. Observe how well DALL·E interprets the concept.",
        "Identify one specific element that does not match your intent. Write a follow-up refinement instruction in plain language.",
        "Generate the refined version and compare. Document the delta.",
        "Generate concept art for the fixed brief: \"A neural network visualized as a glowing tree with roots made of binary code growing into a dark digital soil, branches forming interconnected nodes...\"",
        "Attempt the same prompts with a significantly stripped-down version and compare outputs side by side.",
        "Document all images and observations for the Feedback Report."
      ],
      posttest: [
        {
          question: "A student generates a concept art image and notices a red cube is blue and positioned incorrectly. This is an example of:",
          options: [
            "The model ran out of GPU memory during generation",
            "Attribute binding and spatial reasoning errors, a known weakness in earlier diffusion models that DALL·E 3 mitigates through recaptioning",
            "The image was generated using the wrong model version",
            "The prompt was too long for the model to process"
          ],
          answerIndex: 1
        },
        {
          question: "What mechanism enables DALL·E to correctly interpret a follow-up instruction in ChatGPT?",
          options: [
            "DALL·E stores a pixel-level copy of the previous image and performs image editing",
            "The conversational context maintained in the ChatGPT session allows the follow-up instruction to be interpreted relative to the prior prompt",
            "DALL·E automatically detects sky regions and replaces them using computer vision",
            "The student must re-enter the full original prompt with the modification included"
          ],
          answerIndex: 1
        },
        {
          question: "What is the correct understanding of the copyright status of AI-generated images?",
          options: [
            "The student owns full copyright since they wrote the prompt",
            "OpenAI owns full copyright of all DALL·E outputs",
            "Copyright status of AI-generated images is legally unsettled; courts hold that purely AI-generated works lack sufficient human authorship for copyright protection",
            "AI-generated images are automatically released into the public domain"
          ],
          answerIndex: 2
        },
        {
          question: "What happens when style and mood descriptors are removed from a detailed concept art prompt?",
          options: [
            "Style descriptors are ignored by DALL·E and have no effect on output",
            "The core subject and scene semantics are encoded, while style descriptors shape the aesthetic rendering — removing them produces technically correct but aesthetically generic outputs",
            "DALL·E requires style descriptors to function and should have produced a blank image",
            "The stripped prompt produced a better image because shorter prompts are processed more accurately"
          ],
          answerIndex: 1
        },
        {
          question: "What is the most significant limitation of DALL·E 3 for generating consistent character sprites?",
          options: [
            "DALL·E cannot generate images of robots",
            "DALL·E 3 does not natively support character consistency across multiple generations",
            "DALL·E 3 is limited to generating a maximum of 3 images per session",
            "DALL·E 3 cannot generate environments, only isolated characters"
          ],
          answerIndex: 1
        }
      ],
      references: [
        "OpenAI DALL·E 3 Technical Report, OpenAI, 2023",
        "Betker J. et al., Improving Image Generation with Better Captions (DALL·E 3 paper), OpenAI Research, 2023",
        "ChatGPT with DALL·E Interface: https://chatgpt.com",
        "JNTUGV AI Tools Lab Syllabus, Module 1 — Image Generation Lab"
      ]
    }
  },
  {
    id: "ai-m1-3",
    title: "Leonardo AI Character Design",
    desc: "Produce stylized character designs using Leonardo AI and explore style presets.",
    expected: "A stylized full-body character concept with strong aesthetic consistency matching the selected style model, accurate costume detail, and minimal anatomy artifacts.",
    content: {
      aim: {
        text: "In this experiment the student will use Leonardo AI to design stylized characters by leveraging its fine-tuned model library, LoRA style adaptors, style presets, and canvas editing tools.",
        bullets: [
          "Understand how Leonardo AI is built on Stable Diffusion and extended through fine-tuned models and LoRA adaptors",
          "Apply style presets to generate characters in game art, anime, concept art, and photorealistic styles",
          "Use negative prompts effectively to eliminate common visual artifacts",
          "Control generation parameters including inference steps, guidance scale, and aspect ratio",
          "Use the Canvas tool to make targeted edits to generated character images",
          "Generate a consistent character across multiple poses using prompt engineering strategies"
        ]
      },
      theory: [
        {
          title: "What is Leonardo AI?",
          body: [
            "Leonardo AI is a cloud-based AI image generation platform built primarily on top of Stable Diffusion, extended with a rich library of community and platform-curated fine-tuned models, LoRA adaptors, and production tools.",
            "Unlike raw Stable Diffusion deployments, Leonardo AI provides a structured interface with pre-loaded style models optimized for specific use cases including game asset creation, anime character design, architectural visualization, and photorealistic portraiture."
          ]
        },
        {
          title: "Stable Diffusion Foundation",
          body: [
            "Leonardo AI's generation engine is based on Stable Diffusion, specifically Latent Diffusion Models (LDM).",
            "In LDMs the diffusion process operates in a compressed latent space rather than full pixel space. This approach is significantly more computationally efficient than pixel-space diffusion, enabling higher resolution generation on consumer-grade hardware."
          ]
        },
        {
          title: "Fine-Tuned Models and LoRA",
          body: [
            "A fine-tuned model is a version of Stable Diffusion that has been further trained on a curated dataset representing a specific style, character type, or subject domain.",
            "LoRA (Low Rank Adaptation) is a parameter-efficient fine-tuning technique where a small set of additional weight matrices is trained on top of the base model. Multiple LoRAs can be combined with adjustable weights, allowing users to blend styles."
          ]
        },
        {
          title: "Generation Parameters",
          body: [
            "Inference Steps: The number of denoising iterations. Typical values range from 20 to 60 steps. Diminishing returns are observed beyond 40–50 steps.",
            "Guidance Scale (CFG): Controls prompt adherence. Values between 7 and 12 are typical for character generation.",
            "Negative Prompts for Character Art: 'extra limbs, deformed hands, bad anatomy, blurry, low quality, watermark'",
            "Aspect Ratio: Portrait ratio (2:3 or 3:4) is standard for character sheets. Square (1:1) for headshots."
          ]
        },
        {
          title: "Canvas Editing",
          body: [
            "Leonardo AI's Canvas tool allows inpainting — selecting a specific region of a generated image and regenerating only that region with a new prompt while keeping the rest of the image intact. This is essential for character design workflows."
          ]
        }
      ],
      pretest: [
        {
          question: "What is the primary technical difference between a fine-tuned model and a LoRA in Leonardo AI?",
          options: [
            "Fine-tuned models are larger and slower while LoRAs are faster but produce lower quality",
            "A fine-tuned model involves retraining full weights, while a LoRA injects style information through small additional low-rank matrices without full retraining",
            "LoRAs work only for photorealistic styles while fine-tuned models work only for anime",
            "There is no practical difference"
          ],
          answerIndex: 1
        },
        {
          question: "A student wants to generate a fantasy RPG character in a painterly concept art style. Which Leonardo AI approach is most appropriate?",
          options: [
            "Use the default base model with no style selection and rely entirely on the prompt",
            "Select a fine-tuned model or LoRA optimized for fantasy concept art, set guidance scale 7-12, portrait aspect ratio, and include negative prompts",
            "Set inference steps to 5 for speed and use a photorealism model",
            "Generate in landscape aspect ratio and crop afterward"
          ],
          answerIndex: 1
        },
        {
          question: "Why does Leonardo AI's latent diffusion approach offer a computational advantage?",
          options: [
            "Latent diffusion skips the denoising process entirely to save computation",
            "The diffusion process operates in a compressed latent space rather than full pixel space, making each step faster",
            "Latent diffusion generates lower resolution images which are then scaled up using simple interpolation",
            "Latent diffusion does not use a text encoder, reducing computation"
          ],
          answerIndex: 1
        },
        {
          question: "Which Leonardo AI tool addresses a distorted face without regenerating the entire image?",
          options: [
            "Regenerating the image from scratch with a modified prompt",
            "Using the Canvas inpainting tool to select only the face region and regenerate it",
            "Applying a sharpening filter to the entire image",
            "Increasing the inference steps and regenerating the full image"
          ],
          answerIndex: 1
        },
        {
          question: "What is the expected effect of combining a 'cel shading' LoRA and a 'sci-fi armor' LoRA?",
          options: [
            "The two LoRAs will cancel each other out",
            "The output will blend both style influences, producing a cel-shaded sci-fi armored character",
            "Only the higher-weighted LoRA will have any effect",
            "Combining LoRAs is not supported in Leonardo AI"
          ],
          answerIndex: 1
        }
      ],
      procedure: [
        "Read the Theory section and understand the Stable Diffusion foundation and Leonardo's tools.",
        "Decide on a character concept for your design session (e.g., cyberpunk hacker, medieval alchemist).",
        "Open the Solve tab and navigate to the Leonardo AI workspace.",
        "In the model selector, choose a fine-tuned model appropriate for your character's aesthetic.",
        "Enter a base character prompt. Set Inference Steps = 30, Guidance Scale = 8, Aspect Ratio = 2:3, and add a negative prompt.",
        "Generate the character. Evaluate the output critically.",
        "Apply a different style model or LoRA to the same prompt and regenerate. Compare the outputs.",
        "Use the Canvas inpainting tool to fix any artifacts in the face or hands.",
        "Generate a headshot variant of the same character by changing the aspect ratio to 1:1 and modifying the prompt.",
        "Document all generations and parameter settings for the Feedback Report."
      ],
      posttest: [
        {
          question: "A student increases inference steps from 20 to 60. What change should they expect?",
          options: [
            "Quality improves linearly with every additional step",
            "Output quality improves up to around 40-50 steps, beyond which additional steps produce marginal improvement while increasing time",
            "More steps always produce worse results due to over-processing",
            "Inference steps have no effect on output quality"
          ],
          answerIndex: 1
        },
        {
          question: "What happens when guidance scale is set to 15 (very high)?",
          options: [
            "The image will be blurry and low detail",
            "The image will closely follow prompt semantics but may appear overly saturated, high-contrast, or unnaturally sharp",
            "The character will have better anatomy than at lower guidance scales",
            "The background will be removed automatically"
          ],
          answerIndex: 1
        },
        {
          question: "If an inpainted hand does not match the lighting of the rest of the image, what caused this?",
          options: [
            "The inpainting tool always produces correct hands — the mismatch indicates a software error",
            "Inpainting regenerates the region independently; the student should extend the selection slightly and add lighting descriptors to the prompt",
            "The student should increase inference steps to 100",
            "This is expected and cannot be corrected"
          ],
          answerIndex: 1
        },
        {
          question: "What is the most significant workflow challenge in generating consistent character sprites across multiple poses?",
          options: [
            "Leonardo AI cannot generate characters in side-view poses",
            "Maintaining visual consistency across multiple independent generations, as diffusion models do not natively preserve character identity",
            "Leonardo AI has a maximum of 10 images per project",
            "2D sprite art is not a supported style"
          ],
          answerIndex: 1
        },
        {
          question: "What is the most technically appropriate method to blend cel-shading with realistic skin texture?",
          options: [
            "Write a very long prompt",
            "Apply two LoRAs simultaneously with balanced weights",
            "Generate two separate images and manually composite them",
            "Select the photorealism fine-tuned model only"
          ],
          answerIndex: 1
        }
      ],
      references: [
        "Rombach R. et al., High-Resolution Image Synthesis with Latent Diffusion Models, CVPR 2022",
        "Leonardo AI Platform: https://leonardo.ai",
        "JNTUGV AI Tools Lab Syllabus, Module 1 — Image Generation Lab"
      ]
    }
  },
  {
    id: "ai-m1-4",
    title: "Midjourney Artistic Composition",
    desc: "Generate a high-detail artistic composition using Midjourney and compare with other tools.",
    expected: "A stylistically sophisticated composition utilizing aspect ratio, stylization, and varied parameter settings.",
    content: {
      aim: {
        text: "In this experiment the student will use Midjourney to generate aesthetically refined, painterly, and compositionally sophisticated images. The student will explore Midjourney's unique parameter system.",
        bullets: [
          "Understand Midjourney's proprietary model architecture",
          "Use Midjourney's parameter syntax including --ar, --stylize, --chaos, --v, and --no flags",
          "Apply the grid, upscale, and variation workflow to iteratively select and refine the best output",
          "Generate compositionally complex images with strong visual storytelling",
          "Use image prompting to influence generation style and composition from a reference image",
          "Compare Midjourney output quality and aesthetic character against DALL·E and Leonardo AI"
        ]
      },
      theory: [
        {
          title: "What is Midjourney?",
          body: [
            "Midjourney is a proprietary AI image generation tool developed by Midjourney Inc. Unlike DALL·E and Leonardo AI, Midjourney uses its own custom model architecture rather than Stable Diffusion.",
            "The model is known for producing images with exceptionally strong aesthetic quality — richly textured, painterly, compositionally balanced, and with a distinctive visual character."
          ]
        },
        {
          title: "Parameter Syntax",
          body: [
            "Midjourney uses a flag-based parameter system appended to the prompt:",
            "--ar W:H : Sets aspect ratio. Examples: --ar 16:9 for widescreen.",
            "--stylize N : Controls how strongly Midjourney's aesthetic training is applied. Range 0–1000. Default 100.",
            "--chaos N : Controls variation between the four images in the output grid. Range 0–100.",
            "--v N : Selects the model version. --v 6.1 is the current production version.",
            "--no [element] : Negative prompt equivalent."
          ]
        },
        {
          title: "The Grid, Upscale, and Variation Workflow",
          body: [
            "Every Midjourney generation produces a 2x2 grid of four image variants. The user selects the best variant using U1–U4 (upscale) buttons to get a full-resolution version, or V1–V4 (variation) buttons to generate four new variants."
          ]
        },
        {
          title: "Image Prompting",
          body: [
            "Midjourney supports image prompting — prepending an image URL to the text prompt causes the model to use that image as a stylistic and compositional reference."
          ]
        }
      ],
      pretest: [
        {
          question: "What does the --stylize parameter control in Midjourney and what is the effect of setting it to a very high value?",
          options: [
            "It controls image resolution — higher values produce larger images",
            "It controls how strongly Midjourney's aesthetic training is applied — higher values produce more artistically stylized, painterly outputs that may deviate from the literal prompt",
            "It controls the number of images",
            "It controls aspect ratio"
          ],
          answerIndex: 1
        }
      ],
      procedure: [
        "Read the Theory section and understand the Midjourney workflow and parameters.",
        "Log into the Midjourney workspace.",
        "Create an initial composition using --ar and --stylize parameters.",
        "Refine the output using the V1-V4 variations workflow.",
        "Upscale the final chosen output with the U1-U4 buttons.",
        "Record the aesthetic differences compared to other tools for the Feedback Report."
      ],
      posttest: [],
      references: [
        "Midjourney Documentation: https://docs.midjourney.com",
        "JNTUGV AI Tools Lab Syllabus, Module 1 — Image Generation Lab"
      ]
    }
  }
];
