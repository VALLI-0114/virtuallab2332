import type { Week } from "./course-data";

export const dsExercise9: Week = {
  title: "EXERCISE 9",
  objective: "Hashing including hash table implementation with collision resolution techniques and a simple cache implementation using hashing for fast data retrieval.",
  tutorial: "Tutorial 9: Hashing",
  labTitle: "Lab 9: Hashing",
  experiments: [
    {
      id: "ds-e9-1",
      title: "Hash Table with Collision Resolution Techniques",
      desc: "Implement a hash table with collision resolution (chaining, linear/quadratic probing).",
      expected: "Hash table contents",
      content: {
        aim: {
          text: "In this experiment, the student will implement a Hash Table and demonstrate three collision resolution techniques: Chaining, Linear Probing, and Quadratic Probing. The student will:",
          bullets: [
            "Understand hashing and hash functions",
            "Implement insert(), search(), and delete() operations",
            "Handle collisions using chaining (linked list) and open addressing (linear and quadratic probing)",
            "Analyse load factor and its effect on performance"
          ]
        },
        theory: [
          {
            title: "Hashing",
            body: [
              "A technique to map keys to array indices using a hash function. Enables average O(1) time for insert, search, and delete operations."
            ]
          },
          {
            title: "Hash function",
            body: [
              "A function h(k) = k % TABLE_SIZE maps a key k to an index in the hash table. A good hash function distributes keys uniformly."
            ]
          },
          {
            title: "Collision",
            body: [
              "When two different keys map to the same index: h(k1) == h(k2). Collisions are inevitable due to the pigeonhole principle."
            ]
          },
          {
            title: "Collision Resolution Technique 1 — Chaining",
            body: [
              "Each table slot holds a linked list. All keys that hash to the same index are stored in the list at that index. No overflow; handles any number of collisions. Search time degrades to O(n) in the worst case."
            ]
          },
          {
            title: "Collision Resolution Technique 2 — Linear Probing",
            body: [
              "Open addressing method. If slot h(k) is occupied, try h(k)+1, h(k)+2, ... until an empty slot is found, wrapping around with modulo. Simple but suffers from primary clustering."
            ]
          },
          {
            title: "Collision Resolution Technique 3 — Quadratic Probing",
            body: [
              "Open addressing method. If slot h(k) is occupied, try h(k)+1², h(k)+2², h(k)+3², ... Reduces primary clustering but may cause secondary clustering."
            ]
          },
          {
            title: "Load factor",
            body: [
              "α = n / TABLE_SIZE where n is the number of elements. Performance degrades as α approaches 1 in open addressing. Chaining handles α > 1."
            ]
          }
        ],
        pretest: [
          { question: "What is the average time complexity of search in a hash table?", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], answerIndex: 2, hint: "Think about why the correct answer involves: O(1)" },
          { question: "A collision occurs when:", options: ["Two keys are equal", "Two different keys map to the same index", "The hash table is full", "The hash function returns -1"], answerIndex: 1, hint: "Think about why the correct answer involves: Two different keys map to the same index" },
          { question: "In linear probing, if slot h(k) is occupied, the next slot tried is:", options: ["h(k) + k", "h(k) + 1² (wrapping with modulo)", "h(k) * 2", "A random slot"], answerIndex: 1, hint: "Think about why the correct answer involves: h(k) + 1² (wrapping with modulo)" },
          { question: "Chaining uses which data structure at each table slot?", options: ["Array", "Stack", "Linked list", "Tree"], answerIndex: 2, hint: "Think about why the correct answer involves: Linked list" },
          { question: "Load factor α = 0.9 means:", options: ["90% of keys collided", "90% of table slots are occupied", "10% of keys are missing", "Hash function failed"], answerIndex: 1, hint: "Think about why the correct answer involves: 90% of table slots are occupied" }
        ],
        procedure: [
          "Read Aim and Theory. Understand what a collision is and why it occurs.",
          "Step through the Simulation — observe how the same index is reached by two different keys.",
          "Open the Solve workspace. Three separate programs are provided as starter code.",
          "For chaining: insert keys 10, 20, 30 (all hash to same index with TABLE_SIZE=10). Verify all three are in the chain at index 0.",
          "For linear probing: insert 10, 20, 30. Observe that 20 and 30 probe to the next free slots.",
          "Test search() and delete() for all three approaches.",
          "Observe what happens when load factor exceeds 0.7 in open addressing.",
          "Proceed to Posttest."
        ],
        simulation: {
          code: "int main() { /* Simulation code for hash table */ return 0; }",
          steps: [
            { line: 0, annotation: "Step 1 — Initialisation: All 10 slots point to NULL.", memory: [], output: "" },
            { line: 0, annotation: "Step 2 — insert(10): index = 10 % 10 = 0.", memory: [], output: "Inserted 10 at index 0\n" },
            { line: 0, annotation: "Step 3 — insert(20): index = 20 % 10 = 0. Collision! Prepend to chain.", memory: [], output: "Inserted 20 at index 0 (chained)\n" },
            { line: 0, annotation: "Step 4 — insert(30): index = 30 % 10 = 0. Collision! Prepend to chain.", memory: [], output: "Inserted 30 at index 0 (chained)\n" },
            { line: 0, annotation: "Step 5 — search(20): index = 20 % 10 = 0; traverse chain: 30 -> 20 (found!)", memory: [], output: "20 found at index 0\n" },
            { line: 0, annotation: "Step 6 — display()", memory: [], output: "Table[0]: 30 -> 20 -> 10 -> NULL\nTable[1] to Table[9]: empty\n" }
          ]
        },
        posttest: [
          { question: "In chaining, worst case search time when all keys hash to same index is:", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answerIndex: 2, hint: "Think about why the correct answer involves: O(n)" },
          { question: "In linear probing, why is DELETED marked differently from EMPTY?", options: ["To save memory", "So that search does not stop prematurely at a deleted slot", "Compiler requirement", "To speed up insert"], answerIndex: 1, hint: "Think about why the correct answer involves: So that search does not stop prematurely at a deleted slot" },
          { question: "Primary clustering is a problem specific to:", options: ["Chaining", "Quadratic probing", "Linear probing", "Double hashing"], answerIndex: 2, hint: "Think about why the correct answer involves: Linear probing" },
          { question: "For TABLE_SIZE=10 and key=35, h(35) =?", options: ["3", "5", "35", "0"], answerIndex: 1, hint: "Think about why the correct answer involves: 5" },
          { question: "Which technique allows load factor to exceed 1?", options: ["Linear probing", "Quadratic probing", "Chaining", "Open addressing"], answerIndex: 2, hint: "Think about why the correct answer involves: Chaining" }
        ],
        references: [
          "Cormen, Leiserson, Rivest, Stein — \"Introduction to Algorithms\", 3rd Ed., MIT Press",
          "Balagurusamy — \"Data Structures Using C\", McGraw Hill",
          "Sedgewick, Wayne — \"Algorithms\", 4th Ed., Addison-Wesley",
          "JNTUGV Data Structures Lab Syllabus, CS&IT Dept."
        ]
      }
    },
    {
      id: "ds-e9-2",
      title: "Simple Cache Using Hashing",
      desc: "Implement a simple cache mechanism using hashing.",
      expected: "Cache hit/miss output",
      content: {
        aim: {
          text: "In this experiment, the student will implement a simple key-value cache using a hash table. The student will:",
          bullets: [
            "Understand what a cache is and why hashing suits cache implementation",
            "Store and retrieve key-value pairs using a hash table",
            "Implement a cache miss and cache hit mechanism",
            "Implement an eviction strategy using LRU (Least Recently Used) order tracking"
          ]
        },
        theory: [
          {
            title: "Cache",
            body: [
              "A high-speed storage layer that saves results of expensive operations (database queries, computations, API calls) so future requests for the same data are served faster."
            ]
          },
          {
            title: "Why hashing for cache?",
            body: [
              "Cache requires O(1) average lookup by key. Hash tables provide exactly this. The key is hashed to find the slot; the associated value is returned directly."
            ]
          },
          {
            title: "Cache hit",
            body: [
              "The requested key exists in the cache. Value is returned immediately without recomputation."
            ]
          },
          {
            title: "Cache miss",
            body: [
              "The requested key is not in the cache. The value must be fetched from the original source and then stored in the cache for future use."
            ]
          },
          {
            title: "Key-value pair",
            body: [
              "The cache stores pairs: struct Cache { int key; int value; int valid; }. The valid flag distinguishes an occupied slot from an empty one."
            ]
          },
          {
            title: "Eviction",
            body: [
              "When the cache is full and a new item must be stored, an old item is removed. Simple strategy: overwrite the slot (direct-mapped cache). Advanced strategy: LRU removes the least recently used item."
            ]
          },
          {
            title: "Real-world use",
            body: [
              "CPU L1/L2/L3 caches, browser caches, DNS caches, Redis, Memcached all operate on this principle."
            ]
          }
        ],
        pretest: [
          { question: "A cache hit means:", options: ["The cache is full", "The requested key was found in the cache", "The hash function failed", "A collision occurred"], answerIndex: 1, hint: "Think about why the correct answer involves: The requested key was found in the cache" },
          { question: "Which data structure provides O(1) average lookup needed for a cache?", options: ["Array (unsorted)", "Linked list", "Hash table", "Binary search tree"], answerIndex: 2, hint: "Think about why the correct answer involves: Hash table" },
          { question: "What is the valid flag used for in the cache struct?", options: ["To count accesses", "To mark whether a slot holds a real entry", "To store the hash index", "To detect collisions"], answerIndex: 1, hint: "Think about why the correct answer involves: To mark whether a slot holds a real entry" },
          { question: "LRU eviction removes:", options: ["The most recently used item", "The item with the smallest key", "The least recently used item", "A random item"], answerIndex: 2, hint: "Think about why the correct answer involves: The least recently used item" },
          { question: "A cache miss results in:", options: ["Program termination", "Fetching from the original source and storing in cache", "Deleting the cache", "Hash table resize"], answerIndex: 1, hint: "Think about why the correct answer involves: Fetching from the original source and storing in cache" }
        ],
        procedure: [
          "Read Aim and Theory. Understand cache hit, cache miss, and eviction.",
          "Step through the Simulation — observe how a lookup first checks the cache before computing.",
          "Open the Solve workspace. Starter code provides the struct and hash function.",
          "Run the program. Call get(5) — observe cache miss, value computed as 5*5=25, stored in cache.",
          "Call get(5) again — observe cache hit, value returned directly.",
          "Fill the cache. Call get() for a new key — observe eviction of an existing entry.",
          "Verify that after eviction the new key is stored and old one is gone.",
          "Proceed to Posttest."
        ],
        simulation: {
          code: "int main() { /* Simulation code for simple cache */ return 0; }",
          steps: [
            { line: 0, annotation: "Step 1 — Initialisation: All slots invalid (empty).", memory: [], output: "" },
            { line: 0, annotation: "Step 2 — get(5) called: index = 5 % 8 = 5. table[5].valid is FALSE.", memory: [], output: "CACHE MISS for key 5\n" },
            { line: 0, annotation: "Step 3 — Compute value and store: 5*5=25.", memory: [], output: "Computed value = 25. Stored in cache at index 5.\n" },
            { line: 0, annotation: "Step 4 — get(5) called again: table[5].valid == 1 && table[5].key == 5 → TRUE.", memory: [], output: "CACHE HIT for key 5 -> value = 25\n" },
            { line: 0, annotation: "Step 5 — get(13) called (eviction scenario): index = 13 % 8 = 5. Evict key 5.", memory: [], output: "CACHE MISS for key 13. Evicted key 5. Stored key 13 at index 5.\n" }
          ]
        },
        posttest: [
          { question: "For CACHE_SIZE=8, keys 5 and 13 both hash to index 5. What happens when get(13) is called after get(5)?", options: ["Both are stored at index 5", "13 is rejected", "Key 5 is evicted and key 13 takes index 5", "Cache resizes automatically"], answerIndex: 2, hint: "Think about why the correct answer involves: Key 5 is evicted and key 13 takes index 5" },
          { question: "Hit rate = hits / (hits + misses). For 3 hits and 1 miss, hit rate is:", options: ["33%", "25%", "75%", "100%"], answerIndex: 2, hint: "Think about why the correct answer involves: 75%" },
          { question: "Why is accessCount tracked per cache entry?", options: ["To compute the hash index", "To implement LRU — evict the entry with lowest access count", "Required by struct syntax", "To detect collisions"], answerIndex: 1, hint: "Think about why the correct answer involves: To implement LRU — evict the entry with lowest access count" },
          { question: "The compute() function in the program simulates:", options: ["A hash function", "An expensive operation whose result is worth caching", "A collision resolver", "A sort algorithm"], answerIndex: 1, hint: "Think about why the correct answer involves: An expensive operation whose result is worth caching" },
          { question: "A cache with 100% hit rate means:", options: ["The cache is full", "No evictions occurred", "Every requested key was already in the cache", "The hash function had no collisions"], answerIndex: 2, hint: "Think about why the correct answer involves: Every requested key was already in the cache" }
        ],
        references: [
          "Cormen, Leiserson, Rivest, Stein — \"Introduction to Algorithms\", 3rd Ed., MIT Press",
          "Balagurusamy — \"Data Structures Using C\", McGraw Hill",
          "Tanenbaum — \"Modern Operating Systems\", 4th Ed., Pearson",
          "JNTUGV Data Structures Lab Syllabus, CS&IT Dept."
        ]
      }
    }
  ]
};
