import type { Week } from "./course-data";

export const dsExercise6: Week = {
  title: "EXERCISE 6",
  objective: "Queue Operations including array-based and linked list-based queue implementation, printer queue simulation as a real-world application, and circular queue implementation for memory-efficient operation.",
  tutorial: "Tutorial 6: Queues",
  labTitle: "Lab 6: Queue Operations",
  experiments: [
    {
      id: "ds-e6-1",
      title: "Queue using Array",
      desc: "Implement queue operations (enqueue, dequeue) using an array.",
      expected: "Queue elements",
      content: {
        aim: {
          text: "In this experiment, the student will implement a Queue Abstract Data Structure using an array-based implementation. The student will:",
          bullets: [
            "Understand the FIFO (First In First Out) principle",
            "Implement enqueue(), dequeue(), peek(), isEmpty(), and display() operations",
            "Compare static (array) vs. dynamic (linked list) memory allocation",
            "Handle overflow and underflow conditions"
          ]
        },
        theory: [
          {
            title: "Queue",
            body: [
              "A linear data structure that follows the FIFO principle: the first element inserted is the first one removed. It has two ends — FRONT (deletion end) and REAR (insertion end)."
            ]
          },
          {
            title: "Array implementation",
            body: [
              "Uses a fixed-size array with two integer pointers front and rear, both initialised to -1. Enqueue increments rear and stores the element; dequeue increments front.",
              "Overflow occurs when rear == MAX-1; underflow when front == -1 || front > rear."
            ]
          },
          {
            title: "Time complexity",
            body: [
              "Achieves O(1) for enqueue and dequeue. Array uses O(n) space statically."
            ]
          }
        ],
        pretest: [
          { question: "Which principle does a Queue follow?", options: ["LIFO", "FIFO", "FILO", "Random"], answerIndex: 1, hint: "Think about why the correct answer involves: FIFO" },
          { question: "In an array queue, insertion happens at:", options: ["FRONT", "REAR", "Middle", "Both ends"], answerIndex: 1, hint: "Think about why the correct answer involves: REAR" },
          { question: "Queue underflow occurs when:", options: ["Dequeue on empty queue", "Enqueue on full queue", "front > MAX", "rear == 0"], answerIndex: 0, hint: "Think about why the correct answer involves: Dequeue on empty queue" },
          { question: "Advantage of linked list queue over array queue:", options: ["Faster enqueue", "No fixed size limit", "Less memory per element", "Simpler code"], answerIndex: 1, hint: "Think about why the correct answer involves: No fixed size limit" },
          { question: "Initial values of front and rear in array queue are:", options: ["-1, -1", "0, 0", "0, -1", "-1, 0"], answerIndex: 0, hint: "Think about why the correct answer involves: -1, -1" }
        ],
        procedure: [
          "Study the Aim and Theory sections. Understand FIFO and the roles of front/rear.",
          "Step through the Simulation to observe array state changes during enqueue/dequeue.",
          "Open the Solve workspace. The starter file is provided.",
          "Complete the enqueue() and dequeue() functions.",
          "Run the program. Enter choice 1 to enqueue values: 10 20 30.",
          "Enter choice 2 to dequeue. Verify FIFO order in output.",
          "Test overflow (enqueue beyond MAX) and underflow (dequeue from empty).",
          "Proceed to Posttest."
        ],
        simulation: {
          code: "int main() { /* Simulation code for array-based queue */ return 0; }",
          steps: [
            { line: 0, annotation: "Step 1 — Declaration: int queue[MAX], front = -1, rear = -1;", memory: [], output: "" },
            { line: 0, annotation: "Step 2 — enqueue(10): queue[++rear] = 10; front = 0, rear = 0", memory: [], output: "Enqueued: 10\n" },
            { line: 0, annotation: "Step 3 — enqueue(20): queue[++rear] = 20; rear = 1", memory: [], output: "Enqueued: 20\n" },
            { line: 0, annotation: "Step 4 — enqueue(30): queue[++rear] = 30; rear = 2", memory: [], output: "Enqueued: 30\n" },
            { line: 0, annotation: "Step 5 — dequeue(): returns 10, front = 1", memory: [], output: "Dequeued: 10\n" },
            { line: 0, annotation: "Step 6 — display(): prints Queue", memory: [], output: "Queue: 20 30\n" }
          ]
        },
        posttest: [
          { question: "After enqueue(10), enqueue(20), dequeue() — what is the front element?", options: ["10", "20", "-1", "Underflow"], answerIndex: 1, hint: "Think about why the correct answer involves: 20" },
          { question: "In linked list queue, rear always points to:", options: ["Last inserted node", "First inserted node", "NULL always", "Middle node"], answerIndex: 0, hint: "Think about why the correct answer involves: Last inserted node" },
          { question: "What is the drawback of an array queue (non-circular)?", options: ["Space wasted after dequeues — front memory unused", "Cannot store integers", "rear pointer missing", "No drawback"], answerIndex: 0, hint: "Think about why the correct answer involves: Space wasted after dequeues — front memory unused" },
          { question: "Which operation checks the front element without removing it?", options: ["dequeue()", "peek()", "display()", "isEmpty()"], answerIndex: 1, hint: "Think about why the correct answer involves: peek()" },
          { question: "In linked list queue, after dequeue removes the last element, front and rear should be:", options: ["Both NULL", "front = NULL, rear unchanged", "Both -1", "rear = front = 0"], answerIndex: 0, hint: "Think about why the correct answer involves: Both NULL" }
        ],
        references: [
          "Cormen, Leiserson, Rivest, Stein — \"Introduction to Algorithms\", 3rd Ed., MIT Press",
          "Balagurusamy — \"Data Structures Using C\", McGraw Hill",
          "Lipschutz — \"Data Structures\", Schaum's Outlines, McGraw Hill",
          "JNTUGV Data Structures Lab Syllabus, CS&IT Dept."
        ]
      }
    },
    {
      id: "ds-e6-2",
      title: "Queue using Linked List",
      desc: "Implement queue operations using a linked list.",
      expected: "Queue elements",
      content: {
        aim: {
          text: "In this experiment, the student will implement a Queue Abstract Data Structure using a singly linked list-based implementation. The student will:",
          bullets: [
            "Understand the FIFO (First In First Out) principle",
            "Implement enqueue(), dequeue(), peek(), isEmpty(), and display() operations",
            "Compare static (array) vs. dynamic (linked list) memory allocation",
            "Handle underflow conditions"
          ]
        },
        theory: [
          {
            title: "Queue",
            body: [
              "A linear data structure that follows the FIFO principle: the first element inserted is the first one removed. It has two ends — FRONT (deletion end) and REAR (insertion end)."
            ]
          },
          {
            title: "Linked List implementation",
            body: [
              "Uses struct Node { int data; struct Node* next; }. Enqueue creates a new node at the tail; dequeue removes the node at the head and frees memory.",
              "No overflow risk (only memory limit). Underflow when front == NULL."
            ]
          },
          {
            title: "Time complexity",
            body: [
              "Achieves O(1) for enqueue and dequeue. Linked list uses O(n) dynamically."
            ]
          }
        ],
        pretest: [
          { question: "Which principle does a Queue follow?", options: ["LIFO", "FIFO", "FILO", "Random"], answerIndex: 1, hint: "Think about why the correct answer involves: FIFO" },
          { question: "In a linked list queue, insertion happens at:", options: ["FRONT", "REAR", "Middle", "Both ends"], answerIndex: 1, hint: "Think about why the correct answer involves: REAR" },
          { question: "Queue underflow occurs when:", options: ["Dequeue on empty queue", "Enqueue on full queue", "front > MAX", "rear == 0"], answerIndex: 0, hint: "Think about why the correct answer involves: Dequeue on empty queue" },
          { question: "Advantage of linked list queue over array queue:", options: ["Faster enqueue", "No fixed size limit", "Less memory per element", "Simpler code"], answerIndex: 1, hint: "Think about why the correct answer involves: No fixed size limit" },
          { question: "Initial values of front and rear in linked list queue are:", options: ["-1, -1", "0, 0", "NULL, NULL", "-1, 0"], answerIndex: 2, hint: "Think about why the correct answer involves: NULL, NULL" }
        ],
        procedure: [
          "Study the Aim and Theory sections. Understand FIFO and the roles of front/rear.",
          "Open the Solve workspace. The starter file is provided.",
          "Complete the enqueue() and dequeue() functions.",
          "Run the program. Enter choice 1 to enqueue values: 10 20 30.",
          "Enter choice 2 to dequeue. Verify FIFO order in output.",
          "Test underflow (dequeue from empty).",
          "Proceed to Posttest."
        ],
        simulation: {
          code: "int main() { /* Simulation code for linked list-based queue */ return 0; }",
          steps: [
            { line: 0, annotation: "Step 1 — Declaration: struct Node *front = NULL, *rear = NULL;", memory: [], output: "" },
            { line: 0, annotation: "Step 2 — enqueue(10): rear points to new node 10, front points to it as well", memory: [], output: "Enqueued: 10\n" },
            { line: 0, annotation: "Step 3 — enqueue(20): new node 20 attached to rear, rear updated", memory: [], output: "Enqueued: 20\n" },
            { line: 0, annotation: "Step 4 — enqueue(30): new node 30 attached to rear, rear updated", memory: [], output: "Enqueued: 30\n" },
            { line: 0, annotation: "Step 5 — dequeue(): front moves to next node (20), node 10 is freed", memory: [], output: "Dequeued: 10\n" },
            { line: 0, annotation: "Step 6 — display(): prints Queue", memory: [], output: "Queue: 20 30\n" }
          ]
        },
        posttest: [
          { question: "After enqueue(10), enqueue(20), dequeue() — what is the front element?", options: ["10", "20", "-1", "Underflow"], answerIndex: 1, hint: "Think about why the correct answer involves: 20" },
          { question: "In linked list queue, rear always points to:", options: ["Last inserted node", "First inserted node", "NULL always", "Middle node"], answerIndex: 0, hint: "Think about why the correct answer involves: Last inserted node" },
          { question: "What is the drawback of an array queue (non-circular)?", options: ["Space wasted after dequeues — front memory unused", "Cannot store integers", "rear pointer missing", "No drawback"], answerIndex: 0, hint: "Think about why the correct answer involves: Space wasted after dequeues — front memory unused" },
          { question: "Which operation checks the front element without removing it?", options: ["dequeue()", "peek()", "display()", "isEmpty()"], answerIndex: 1, hint: "Think about why the correct answer involves: peek()" },
          { question: "In linked list queue, after dequeue removes the last element, front and rear should be:", options: ["Both NULL", "front = NULL, rear unchanged", "Both -1", "rear = front = 0"], answerIndex: 0, hint: "Think about why the correct answer involves: Both NULL" }
        ],
        references: [
          "Cormen, Leiserson, Rivest, Stein — \"Introduction to Algorithms\", 3rd Ed., MIT Press",
          "Balagurusamy — \"Data Structures Using C\", McGraw Hill",
          "Lipschutz — \"Data Structures\", Schaum's Outlines, McGraw Hill",
          "JNTUGV Data Structures Lab Syllabus, CS&IT Dept."
        ]
      }
    },
    {
      id: "ds-e6-3",
      title: "Printer Queue Simulation",
      desc: "Simulate a printer queue using a queue data structure.",
      expected: "Simulation output",
      content: {
        aim: {
          text: "In this experiment, the student will simulate a real-world printer queue system using a C program. The student will:",
          bullets: [
            "Model print jobs as queue elements with job ID, name, and page count",
            "Implement add job (enqueue) and process job (dequeue) operations",
            "Display the pending job queue at any point",
            "Understand how operating systems schedule tasks using queues"
          ]
        },
        theory: [
          {
            title: "Printer spooler",
            body: [
              "Operating systems use a queue (the print spooler) to manage print jobs. Jobs are added in order and processed one at a time in FIFO order. This ensures fairness — no job is skipped."
            ]
          },
          {
            title: "Job structure",
            body: [
              "Each print job is represented as a struct: struct Job { int id; char name[30]; int pages; }. The queue holds an array of these structs."
            ]
          },
          {
            title: "Add job (enqueue) and Process job (dequeue)",
            body: [
              "Add job: A new job is inserted at the rear. rear is incremented and the job details are stored.",
              "Process job: The job at the front is printed and removed. front is incremented. The program displays pages being printed and confirms completion."
            ]
          },
          {
            title: "Real-world connection",
            body: [
              "This pattern (task queue) is also used in CPU scheduling (Round Robin), network packet queuing, and web server request handling."
            ]
          }
        ],
        pretest: [
          { question: "In a printer queue, which job gets printed first?", options: ["The job submitted earliest", "The job with fewest pages", "The job with most pages", "Random"], answerIndex: 0, hint: "Think about why the correct answer involves: The job submitted earliest" },
          { question: "The print spooler is an example of which data structure?", options: ["Stack", "Queue", "Tree", "Graph"], answerIndex: 1, hint: "Think about why the correct answer involves: Queue" },
          { question: "Which C construct is best for grouping job_id, name, and pages together?", options: ["struct", "union", "enum", "array of ints"], answerIndex: 0, hint: "Think about why the correct answer involves: struct" },
          { question: "When the job queue is empty and processJob() is called:", options: ["Last job reruns", "Underflow — \"No jobs in queue\" printed", "Program crashes", "First job reprints"], answerIndex: 1, hint: "Think about why the correct answer involves: Underflow — \"No jobs in queue\" printed" },
          { question: "The OS technique of managing tasks one by one in order is called:", options: ["Paging", "Scheduling via FIFO queue", "Fragmentation", "Swapping"], answerIndex: 1, hint: "Think about why the correct answer involves: Scheduling via FIFO queue" }
        ],
        procedure: [
          "Read Aim and Theory. Note the struct definition for a print job.",
          "Step through the Simulation to see jobs being added and processed.",
          "Open the Solve workspace. Starter code includes the struct definition.",
          "Run the menu-driven program. Choose 1 to add jobs — enter: Doc1 5, Report 12, Photo 2.",
          "Choose 3 to view the queue. Verify all three jobs appear in order.",
          "Choose 2 to process. Confirm Doc1 prints first (FIFO).",
          "Process remaining jobs. Verify the queue empties.",
          "Proceed to Posttest."
        ],
        simulation: {
          code: "int main() { /* Simulation code for printer queue */ return 0; }",
          steps: [
            { line: 0, annotation: "Step 1 — Declaration: struct Job queue[MAX]; int front = -1, rear = -1, jobCounter = 1;", memory: [], output: "" },
            { line: 0, annotation: "Step 2 — addJob(\"Doc1\", 5): queue[0] = {id:1, name:\"Doc1\", pages:5}", memory: [], output: "Job #1 (Doc1, 5 pages) added to queue.\n" },
            { line: 0, annotation: "Step 3 — addJob(\"Report\", 12): queue[1] = {id:2, name:\"Report\", pages:12}", memory: [], output: "Job #2 (Report, 12 pages) added to queue.\n" },
            { line: 0, annotation: "Step 4 — processJob(): Prints Job #1 (Doc1). front = 1", memory: [], output: "Printing Job #1: Doc1 (5 pages)... Done.\n" },
            { line: 0, annotation: "Step 5 — viewQueue(): Only queue[1] (Report) remains.", memory: [], output: "--- Pending Print Jobs ---\n  [#2] Report - 12 pages\n--------------------------\n" }
          ]
        },
        posttest: [
          { question: "Jobs added in order: Doc1, Report, Photo. Which is printed first?", options: ["Doc1", "Report", "Photo", "Depends on pages"], answerIndex: 0, hint: "Think about why the correct answer involves: Doc1" },
          { question: "What does strcpy() do in the addJob function?", options: ["Copies job name string into the struct field", "Compares two strings", "Returns string length", "Clears the name field"], answerIndex: 0, hint: "Think about why the correct answer involves: Copies job name string into the struct field" },
          { question: "After all jobs are processed, front and rear are set to:", options: ["-1, -1", "0, 0", "MAX, MAX", "Unchanged"], answerIndex: 0, hint: "Think about why the correct answer involves: -1, -1" },
          { question: "Why is jobCounter used in the program?", options: ["To assign a unique ID to each job", "To count pages", "To track front pointer", "To track rear pointer"], answerIndex: 0, hint: "Think about why the correct answer involves: To assign a unique ID to each job" },
          { question: "Real-world systems that use a similar queue mechanism include:", options: ["File compression", "CPU process scheduling and web server request handling", "Binary search", "Bubble sort"], answerIndex: 1, hint: "Think about why the correct answer involves: CPU process scheduling and web server request handling" }
        ],
        references: [
          "Cormen, Leiserson, Rivest, Stein — \"Introduction to Algorithms\", 3rd Ed., MIT Press",
          "Balagurusamy — \"Data Structures Using C\", McGraw Hill",
          "Silberschatz, Galvin — \"Operating System Concepts\", 10th Ed., Wiley",
          "JNTUGV Data Structures Lab Syllabus, CS&IT Dept."
        ]
      }
    },
    {
      id: "ds-e6-4",
      title: "Circular Queue",
      desc: "Implement a circular queue.",
      expected: "Queue elements",
      content: {
        aim: {
          text: "In this experiment, the student will implement a Circular Queue using an array to overcome the limitation of memory wastage in a simple array queue. The student will:",
          bullets: [
            "Understand the circular nature of index wrapping using modulo arithmetic",
            "Implement enqueue() and dequeue() for circular queues",
            "Distinguish between full and empty conditions in a circular queue",
            "Solve problems involving circular queue operations manually and programmatically"
          ]
        },
        theory: [
          {
            title: "Problem with linear array queue",
            body: [
              "After several enqueue/dequeue cycles, front advances and the slots at the beginning of the array become vacant but unusable. This wastes memory."
            ]
          },
          {
            title: "Circular queue solution",
            body: [
              "The array is treated as circular: after reaching index MAX-1, the next position wraps to index 0. This is achieved with modulo: rear = (rear + 1) % MAX."
            ]
          },
          {
            title: "Full condition",
            body: [
              "(rear + 1) % MAX == front. One slot is intentionally left empty to distinguish full from empty."
            ]
          },
          {
            title: "Empty condition",
            body: [
              "front == rear (both point to the same position, initialised to 0)."
            ]
          },
          {
            title: "Modulo arithmetic",
            body: [
              "The key to circularity. (4 + 1) % 5 = 0 wraps index 4 back to 0, connecting the end to the beginning of the array."
            ]
          }
        ],
        pretest: [
          { question: "Circular queue solves which problem of linear array queue?", options: ["Memory wastage due to unreachable front slots", "Slow enqueue", "LIFO ordering", "Pointer errors"], answerIndex: 0, hint: "Think about why the correct answer involves: Memory wastage due to unreachable front slots" },
          { question: "How is the next rear index computed in a circular queue of size MAX?", options: ["rear + 1", "(rear + 1) % MAX", "rear - 1", "rear * 2"], answerIndex: 1, hint: "Think about why the correct answer involves: (rear + 1) % MAX" },
          { question: "Circular queue is FULL when:", options: ["rear == MAX - 1", "(rear + 1) % MAX == front", "front == -1", "rear == front"], answerIndex: 1, hint: "Think about why the correct answer involves: (rear + 1) % MAX == front" },
          { question: "Circular queue is EMPTY when:", options: ["rear == -1", "front == rear", "front == MAX", "rear == 0"], answerIndex: 1, hint: "Think about why the correct answer involves: front == rear" },
          { question: "For MAX = 5, what is (4 + 1) % 5?", options: ["0", "5", "1", "4"], answerIndex: 0, hint: "Think about why the correct answer involves: 0" }
        ],
        procedure: [
          "Study Aim and Theory. Pay close attention to the full/empty conditions.",
          "Step through the Simulation — observe how rear wraps to 0 after reaching MAX-1.",
          "Open the Solve workspace. Starter code provides the array and front/rear variables.",
          "Complete the enqueue() and dequeue() functions using modulo arithmetic.",
          "Run the program and enqueue 5 elements (MAX=6 means 5 usable slots).",
          "Dequeue two elements, then enqueue two more — observe the wrap-around.",
          "Verify full/empty detection and proceed to Posttest."
        ],
        simulation: {
          code: "int main() { /* Simulation code for circular queue */ return 0; }",
          steps: [
            { line: 0, annotation: "Step 1 — Declaration: int queue[MAX], front = 0, rear = 0;", memory: [], output: "" },
            { line: 0, annotation: "Step 2 — enqueue(10): rear = (0+1)%6 = 1", memory: [], output: "Enqueued: 10  (front=0, rear=1)\n" },
            { line: 0, annotation: "Step 3 — enqueue(20, 30, 40, 50): rear advances to 5", memory: [], output: "Enqueued: 50  (front=0, rear=5)\n" },
            { line: 0, annotation: "Step 4 — isFull() check: (5 + 1) % 6 = 0 == front(0) → TRUE", memory: [], output: "Circular Queue is Full!\n" },
            { line: 0, annotation: "Step 5 — dequeue(): front = (0 + 1) % 6 = 1", memory: [], output: "Dequeued: 10  (front=1, rear=5)\n" },
            { line: 0, annotation: "Step 6 — enqueue(60): rear = (5+1)%6 = 0 (WRAP-AROUND)", memory: [], output: "Enqueued: 60  (front=1, rear=0)\n" }
          ]
        },
        posttest: [
          { question: "For MAX=6, after enqueue(10,20,30,40,50), is the queue full?", options: ["Yes — 5 elements fill the 5 usable slots", "No — one slot remains", "Only if rear == 5", "Depends on front"], answerIndex: 0, hint: "Think about why the correct answer involves: Yes — 5 elements fill the 5 usable slots" },
          { question: "After two dequeues then enqueue(60, 70), rear wraps to:", options: ["Index 0 and 1 (wraps from 5 back to start)", "Stays at 5", "Goes to MAX", "Resets to -1"], answerIndex: 0, hint: "Think about why the correct answer involves: Index 0 and 1 (wraps from 5 back to start)" },
          { question: "Why is one slot intentionally left empty in circular queue?", options: ["To distinguish between full and empty states", "Hardware requirement", "To store front pointer", "Simplifies modulo math"], answerIndex: 0, hint: "Think about why the correct answer involves: To distinguish between full and empty states" },
          { question: "Time complexity of enqueue and dequeue in circular queue:", options: ["O(1) for both", "O(n) for enqueue", "O(log n)", "O(n²)"], answerIndex: 0, hint: "Think about why the correct answer involves: O(1) for both" },
          { question: "Circular queue is preferred over simple array queue in:", options: ["Linked list implementations", "Fixed memory scenarios where slots must be reused", "When priority ordering is needed", "When data size is unknown"], answerIndex: 1, hint: "Think about why the correct answer involves: Fixed memory scenarios where slots must be reused" }
        ],
        references: [
          "Cormen, Leiserson, Rivest, Stein — \"Introduction to Algorithms\", 3rd Ed., MIT Press",
          "Balagurusamy — \"Data Structures Using C\", McGraw Hill",
          "Lipschutz — \"Data Structures\", Schaum's Outlines, McGraw Hill",
          "JNTUGV Data Structures Lab Syllabus, CS&IT Dept."
        ]
      }
    }
  ]
};
