const fs = require('fs');

const dataStr = fs.readFileSync('src/lib/course-data.ts', 'utf8');

const replacement = `          { id: "llms-w1-1", title: "Tokenization and Text Encoding", desc: "Tokenization and Text Encoding", code: "" },
          { 
            id: "llms-w1-2", 
            title: "Tokenization and Text Encoding (Byte-Pair Encoding)", 
            desc: "Tokenization and Text Encoding (Byte-Pair Encoding)", 
            code: \`import re\\nfrom collections import defaultdict\\n\\ndef get_stats(vocab):\\n    pairs = defaultdict(int)\\n    for word, freq in vocab.items():\\n        symbols = word.split()\\n        for i in range(len(symbols)-1):\\n            pairs[symbols[i], symbols[i+1]] += freq\\n    return pairs\\n\\ndef merge_vocab(pair, v_in):\\n    v_out = {}\\n    bigram = re.escape(' '.join(pair))\\n    p = re.compile(r'(?<!\\\\S)' + bigram + r'(?!\\\\S)')\\n    for word in v_in:\\n        w_out = p.sub(''.join(pair), word)\\n        v_out[w_out] = v_in[word]\\n    return v_out\\n\\n# Example Run\\ninitial_vocab = {'l o w </w>': 5, 'l o w e r </w>': 2, 'n e w e s t </w>': 6}\\npairs = get_stats(initial_vocab)\\nbest_pair = max(pairs, key=pairs.get)\\nprint(f"Most frequent pair to merge: {best_pair}")\`,
            content: {
              aim: {
                text: "To implement a subword tokenization pipeline using the Byte-Pair Encoding (BPE) algorithm from first principles, and evaluate its token compression efficiency across diverse text corpora.",
                bullets: []
              },
              theory: [
                {
                  title: "Traditional Language Models",
                  body: [
                    "Traditional language models processed text at the character level (causing massive sequence lengths and losing semantic chunks) or word level (resulting in massive vocabulary sizes and failure on Out-Of-Vocabulary words)."
                  ]
                },
                {
                  title: "Modern Subword Tokenization",
                  body: [
                    "Modern LLMs utilize subword tokenization, primarily Byte-Pair Encoding (BPE).",
                    "BPE is a data-compression algorithm adapted for NLP that iteratively merges the most frequent pair of adjacent bytes or characters in a text corpus to construct a vocabulary of optimal size."
                  ]
                }
              ],
              pretest: [
                {
                  question: "Which tokenization artifact directly causes an LLM to encounter an 'Out-Of-Vocabulary' (OOV) error?",
                  options: ["Word-level tokenization", "Character-level tokenization", "Subword tokenization", "Byte-Pair Encoding"],
                  correctAnswer: 0
                },
                {
                  question: "If a corpus contains the word frequencies {'low': 5, 'lower': 2, 'newest': 6}, what is the initial character-level vocabulary (excluding special tokens)?",
                  options: ["{'l', 'o', 'w', 'e', 'r', 'n', 's', 't'}", "{'low', 'lower', 'newest'}", "{'l', 'o', 'w'}", "{'n', 'e', 'w', 's', 't'}"],
                  correctAnswer: 0
                },
                {
                  question: "Why does GPT-4 use byte-level BPE instead of raw character-level BPE?",
                  options: ["It guarantees that any string can be tokenized, including rare Unicode characters.", "It reduces the vocabulary size to just 256 tokens.", "It completely eliminates the need for merging tokens.", "It is faster to compute on GPUs."],
                  correctAnswer: 0
                },
                {
                  question: "What is the primary advantage of subword tokenization over character-level tokenization?",
                  options: ["It balances vocabulary size with sequence length, capturing meaningful subwords.", "It requires no training data to construct the vocabulary.", "It treats every single character as a unique token, maximizing context.", "It ensures that every word gets exactly one token."],
                  correctAnswer: 0
                },
                {
                  question: "During the BPE algorithm, which pair of symbols is merged in each iteration?",
                  options: ["The pair with the highest frequency of adjacent occurrences.", "The longest pair of symbols.", "The pair containing the most vowels.", "A randomly selected pair of adjacent symbols."],
                  correctAnswer: 0
                }
              ],
              procedure: [
                "Initialize Corpus: Start with a standardized text corpus and append an end-of-word token (e.g., </w>) to every word.",
                "Splitting: Atomize every word into individual character tokens to form the base vocabulary.",
                "Frequency Calculation: Write a loop to scan adjacent token pairs across the corpus and count their joint occurrences.",
                "Iterative Merging: Identify the pair with the absolute highest frequency, merge them into a single new token, and update the global vocabulary.",
                "Termination: Repeat steps 3 and 4 until a predefined vocabulary size $V$ or max iteration threshold is reached."
              ],
              posttest: [
                {
                  question: "Given a fixed token limit, how does an inadequate BPE vocabulary size affect an LLM's context window efficiency?",
                  options: ["It increases sequence lengths since words are split into too many small tokens.", "It reduces sequence lengths by merging too many unrelated characters.", "It has no effect on the context window.", "It causes the LLM to process data faster."],
                  correctAnswer: 0
                },
                {
                  question: "Why can subword tokenizers cause vulnerabilities when handling structural formatting like code indentation or raw numerical data matrices?",
                  options: ["They inconsistently group spaces and digits depending on their surrounding context.", "They completely ignore all numbers and spaces during tokenization.", "They convert all numbers into text equivalents (e.g., '1' to 'one').", "They crash when encountering more than three spaces in a row."],
                  correctAnswer: 0
                },
                {
                  question: "What is the purpose of appending an end-of-word token (e.g., </w>) during BPE?",
                  options: ["To prevent merging characters across word boundaries.", "To signify the end of the entire document.", "To act as a punctuation mark in the final output.", "To reduce the overall vocabulary size."],
                  correctAnswer: 0
                },
                {
                  question: "How does BPE handle a completely novel word that was never seen during training?",
                  options: ["It splits the word into smaller known subword tokens or base characters.", "It throws an 'Out-Of-Vocabulary' error and halts execution.", "It ignores the word completely.", "It arbitrarily assigns it the token ID of a similar-sounding word."],
                  correctAnswer: 0
                },
                {
                  question: "Which of the following best describes the trade-off controlled by the number of BPE merge operations?",
                  options: ["More merges increase vocabulary size but decrease sequence length.", "More merges decrease vocabulary size and decrease sequence length.", "More merges increase both vocabulary size and sequence length.", "More merges have no impact on vocabulary size or sequence length."],
                  correctAnswer: 0
                }
              ]
            }
          },
          { 
            id: "llms-w1-3", 
            title: "Word Embeddings and Vector Representations", 
            desc: "Word Embeddings and Vector Representations", 
            code: \`import numpy as np\\n\\ndef cosine_similarity(v1, v2):\\n    dot_prod = np.dot(v1, v2)\\n    norm_v1 = np.linalg.norm(v1)\\n    norm_v2 = np.linalg.norm(v2)\\n    return dot_prod / (norm_v1 * norm_v2)\\n\\n# Simulated low-dimensional dummy representations\\nembeddings = {\\n    "king":  np.array([0.90, 0.10, 0.05]),\\n    "man":   np.array([0.85, 0.05, 0.02]),\\n    "woman": np.array([0.15, 0.80, 0.01]),\\n    "queen": np.array([0.20, 0.92, 0.04])\\n}\\n\\n# Linear translation math\\ntarget_vector = embeddings["king"] - embeddings["man"] + embeddings["woman"]\\nscore = cosine_similarity(target_vector, embeddings["queen"])\\n\\nprint(f"Cosine Similarity to 'queen': {score:.4f}")\`,
            content: {
              aim: {
                text: "To calculate, analyze, and map high-dimensional word representations, utilizing vector math metrics to quantify semantic similarity and capture structural language relationships.",
                bullets: []
              },
              theory: [
                {
                  title: "Word Embeddings",
                  body: [
                    "Word embeddings map tokens into a continuous vector space where words sharing contextual similarities are placed close to one another.",
                    "Formally, given a vocabulary $V$, an embedding function maps a token to a dense tensor: $f: W \\\\to \\\\mathbb{R}^d$ where $d$ represents the vector dimension (typically $768$ or $1536$ in modern architectures)."
                  ]
                },
                {
                  title: "Cosine Similarity",
                  body: [
                    "The primary metric used to evaluate proximity in this semantic space is Cosine Similarity, derived from the geometric dot product: $\\\\text{Similarity}(\\\\mathbf{A}, \\\\mathbf{B}) = \\\\cos(\\\\theta) = \\\\frac{\\\\mathbf{A} \\\\cdot \\\\mathbf{B}}{\\\\|\\\\mathbf{A}\\\\| \\\\|\\\\mathbf{B}\\\\|}$"
                  ]
                }
              ],
              pretest: [
                {
                  question: "What is the fundamental difference in geometric output between the Euclidean distance and Cosine Similarity of two vectors?",
                  options: ["Cosine similarity measures the angle between vectors, while Euclidean distance measures the straight-line magnitude difference.", "Cosine similarity is only for 2D planes, while Euclidean is for high dimensions.", "Euclidean distance is always bounded between 0 and 1, unlike Cosine similarity.", "There is no mathematical difference; they always yield the same relative rankings."],
                  correctAnswer: 0
                },
                {
                  question: "If two token vectors point in exactly opposite directions in an embedding space, what is their calculated cosine similarity?",
                  options: ["-1", "0", "1", "Infinity"],
                  correctAnswer: 0
                },
                {
                  question: "Why can static embeddings (like Word2Vec) not adequately differentiate the semantic meaning of the token 'apple' in tech contexts vs. agricultural contexts?",
                  options: ["They assign exactly one fixed vector to each token regardless of its surrounding context.", "They are limited to very low dimensions (e.g., 3 or 4) which cannot capture dual meanings.", "They only train on agricultural datasets.", "They explicitly remove all homonyms from their vocabulary."],
                  correctAnswer: 0
                },
                {
                  question: "What does the dimensionality $d$ of a word embedding vector represent?",
                  options: ["The number of continuous features or latent semantic attributes capturing the word's meaning.", "The total number of letters in the word.", "The frequency of the word in the training corpus.", "The vocabulary size of the entire model."],
                  correctAnswer: 0
                },
                {
                  question: "Which operation is typically used to normalize a vector to unit length?",
                  options: ["Dividing the vector by its L2 norm (magnitude).", "Adding 1 to every element in the vector.", "Taking the square root of the vector.", "Multiplying the vector by pi."],
                  correctAnswer: 0
                }
              ],
              procedure: [
                "Load Vectors: Instantiate a NumPy array containing multi-dimensional pre-trained vector embeddings.",
                "Normalize: Implement matrix operations to normalize the structural tensors to unit length.",
                "Dot Product: Compute the dot product of target word vectors against the entire matrix array.",
                "Rank Extraction: Sort indices in descending order to isolate the closest mathematical neighbors.",
                "Dimensionality Reduction: Run a t-SNE reduction pipeline to compress vectors down to a visualizable 2D plane."
              ],
              posttest: [
                {
                  question: "When dealing with high-dimensional embedding spaces, why does the 'curse of dimensionality' render standard Euclidean distance ($L_2$ norm) less effective than Cosine Similarity?",
                  options: ["As dimensions increase, the distance between any two points converges, making angle-based metrics more robust for distinguishing vectors.", "High-dimensional spaces cause Euclidean distance to always calculate to zero.", "Euclidean distance calculation is computationally impossible beyond 100 dimensions.", "Cosine similarity automatically reduces the dimensionality of the vectors."],
                  correctAnswer: 0
                },
                {
                  question: "How does the attention mechanism in transformer blocks modify static input representations into dynamic context-aware embeddings?",
                  options: ["By taking weighted sums of other token vectors in the sequence, allowing representations to shift based on context.", "By permanently overwriting the static embedding lookup table in memory.", "By randomly shuffling the dimensions of the vector.", "By converting the vectors back into raw text strings and re-tokenizing them."],
                  correctAnswer: 0
                },
                {
                  question: "In the equation $\\\\vec{v}_{King} - \\\\vec{v}_{Man} + \\\\vec{v}_{Woman} \\\\approx \\\\vec{v}_{Queen}$, what linguistic property is captured by the vector space?",
                  options: ["Analogical reasoning and semantic relationships through linear offsets.", "Syntactic grammar rules and punctuation.", "Phonetic pronunciation patterns.", "Absolute frequency of word occurrence."],
                  correctAnswer: 0
                },
                {
                  question: "Why is t-SNE often used in conjunction with high-dimensional word embeddings?",
                  options: ["To reduce dimensions to 2D or 3D for human visualization and cluster analysis.", "To increase the dimensions of the vector for better machine learning performance.", "To calculate the exact cosine similarity between a million vectors simultaneously.", "To train the embedding model from scratch."],
                  correctAnswer: 0
                },
                {
                  question: "If two words are completely unrelated semantically, what cosine similarity score would you expect them to have (assuming mean-centered vectors)?",
                  options: ["Close to 0", "Close to 1", "Exactly 100", "Less than -1"],
                  correctAnswer: 0
                }
              ]
            }
          },
          { id: "llms-w1-4", title: "Understanding Self-Attention", desc: "Understanding Self-Attention", code: "" }`;

const patternToReplace = `          { id: "llms-w1-1", title: "Tokenization and Text Encoding", desc: "Tokenization and Text Encoding", code: "" },
          { id: "llms-w1-2", title: "Word Embeddings and Vector Representations", desc: "Word Embeddings and Vector Representations", code: "" },
          { id: "llms-w1-3", title: "Exploring the Transformer Architecture", desc: "Exploring the Transformer Architecture", code: "" },
          { id: "llms-w1-4", title: "Understanding Self-Attention", desc: "Understanding Self-Attention", code: "" }`;

const newDataStr = dataStr.replace(patternToReplace, replacement);

fs.writeFileSync('src/lib/course-data.ts', newDataStr, 'utf8');
console.log("Updated course-data.ts successfully");
