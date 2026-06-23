import type { Course } from "./course-data";
import { dsExercise1 } from "./ds-e1";
import { dsExercise2 } from "./ds-e2";
import { dsExercise3 } from "./ds-e3";
import { dsExercise4 } from "./ds-e4";
import { dsExercise5 } from "./ds-e5";
import { dsExercise6 } from "./ds-e6";
import { dsExercise7 } from "./ds-e7";
import { dsExercise8 } from "./ds-e8";
import { dsExercise9 } from "./ds-e9";

export const dsCourse: Course = {
  id: "data-structures-using-c-programming",
  title: "Data Structures using C Programming",
  objectives: [
    "Master the Core Concepts: Understand the fundamental principles of Data Structures, differentiating between linear (Arrays, Linked Lists, Stacks, Queues) and non-linear (Trees, Graphs) structures.",
    "Analyze Algorithm Efficiency: Learn how to evaluate Time and Space Complexity (Big O Notation) to compare the performance of different searching and sorting algorithms.",
    "Implement Dynamic Memory: Gain practical experience using pointers and dynamic memory allocation in C (malloc/free) to construct flexible data structures like Linked Lists.",
    "Solve Problems with Stacks & Queues: Build LIFO and FIFO structures from scratch to solve real-world problems like expression evaluation, balanced parentheses, and process scheduling.",
    "Navigate Non-Linear Data: Understand how to implement and traverse Binary Search Trees (BST) for lightning-fast O(log n) data retrieval.",
    "Optimize with Hashing: Learn how to achieve O(1) constant-time data access by implementing Hash Tables and handling collisions via chaining and probing.",
    "Bridge Theory & Practice: Translate abstract theoretical concepts into functional, compiled C programs that handle real data efficiently."
  ],
  introduction: [
    "Data structures form the backbone of efficient software engineering. Every algorithm that powers modern technology — from search engines and social networks to operating systems and databases — depends fundamentally on how data is organized, stored, and accessed in memory. A strong understanding of data structures is not merely an academic requirement but an essential skill for every practicing software engineer and computer scientist.",
    "This Virtual Data Structures Lab is developed for B.Tech students of Computer Science Engineering, Information Technology, and allied branches at Jawaharlal Nehru Technological University Gurajada Vizianagaram (JNTUGV). The lab provides a structured, browser-based programming environment where students can implement, visualize, and experiment with fundamental data structures in C without requiring any local software installation or setup.",
    "The lab covers 9 exercises spanning the complete JNTUGV Data Structures Lab syllabus — from array manipulation and searching techniques to linked lists, stacks, queues, binary search trees, and hashing. Each exercise includes a clearly stated objective, theoretical background, step-by-step procedure, an interactive simulation showing data structure state changes visually, a live C code editor powered by a real GCC compiler, and pre-test and post-test assessments for self-evaluation.",
    "Data structures are not just programming constructs — they are problem-solving tools. This lab trains students to think algorithmically, analyze time and space complexity, choose the right data structure for a given problem, and implement clean, efficient C programs that work correctly on real inputs."
  ],
  targetAudience: {
    primary: "B.Tech students of Computer Science Engineering, Information Technology, and all allied branches of Engineering at Jawaharlal Nehru Technological University Gurajada Vizianagaram (JNTUGV) enrolled in the Data Structures Lab course (Course Code: refer JNTUGV curriculum, Credits: L:0 T:0 P:3 C:1.5).",
    prerequisites: [
      "Students should have completed the C Programming Lab or equivalent course before attempting this lab. Specifically students are expected to be comfortable with the following C concepts before starting:",
      "Pointers and pointer arithmetic",
      "Structures and self-referential structures",
      "Dynamic memory allocation using malloc and free",
      "Functions and recursion",
      "Arrays and strings",
      "Basic control flow constructs"
    ],
    usefulFor: [
      "Second-year students who want to strengthen their data structures foundation before advanced courses in algorithms, database systems, or operating systems.",
      "Students preparing for technical placements and competitive programming where data structures questions are extensively tested.",
      "Students preparing for GATE examinations where data structures carries significant weightage.",
      "Faculty members looking for ready-made experiment references aligned to the JNTUGV Data Structures Lab syllabus.",
      "Self-learners who want a structured compiler-ready environment to practice data structures in C."
    ]
  },
  alignment: {
    university: "Jawaharlal Nehru Technological University Gurajada Vizianagaram (JNTUGV)",
    department: "Computer Science Engineering (CSE), Information Technology (IT), and all allied branches of Engineering",
    course: "Data Structures Lab",
    credits: "L:0 T:0 P:3 C:1.5",
    yearSem: "Second Year, First Semester (typically)",
    branches: "Computer Science Engineering (CSE), Information Technology (IT), and all allied branches of Engineering",
    totalExperiments: "9 Exercises, 25 Individual Programs",
    compiler: "GCC (GNU Compiler Collection) via Wandbox — identical to the compiler used in JNTUGV physical labs",
    units: [
      { unit: "Exercise 1", topics: "Array Manipulation (reverse, linear search, binary search, bubble sort, selection sort, and insertion sort)", weeks: "Week 1" },
      { unit: "Exercise 2", topics: "Singly Linked List Implementation (insertion, deletion, iterative reversal, recursive reversal, traversal, and manipulation)", weeks: "Week 2" },
      { unit: "Exercise 3", topics: "Linked List Applications (duplicate detection and removal, polynomial representation and addition, double-ended queue)", weeks: "Week 3" },
      { unit: "Exercise 4", topics: "Double Linked List Implementation (forward and backward traversal, circular linked list)", weeks: "Week 4" },
      { unit: "Exercise 5", topics: "Stack Operations (array-based, linked list-based, postfix expression evaluation, balanced parenthesis)", weeks: "Week 5" },
      { unit: "Exercise 6", topics: "Queue Operations (array-based, linked list-based, printer queue simulation, circular queue)", weeks: "Week 6" },
      { unit: "Exercise 7", topics: "Stack and Queue Applications (infix to postfix conversion, palindrome checking, symmetry checking)", weeks: "Week 7" },
      { unit: "Exercise 8", topics: "Binary Search Tree (linked list-based BST, traversals: inorder, preorder, postorder)", weeks: "Week 8" },
      { unit: "Exercise 9", topics: "Hashing (collision resolution techniques, simple cache using hash tables)", weeks: "Week 9" }
    ]
  },
  weeks: [
    dsExercise1,
    dsExercise2,
    dsExercise3,
    dsExercise4,
    dsExercise5,
    dsExercise6,
    dsExercise7,
    dsExercise8,
    dsExercise9
  ],
  shortNotes: `DATA STRUCTURES - EXTENDED SHORT NOTES
(Comprehensive Guide with C Implementations & Deep Explanations)

INTRODUCTION TO DATA STRUCTURES

A **Data Structure** is a specialized format for organizing, processing, retrieving, and storing data in a computer. The way we store data in memory drastically impacts the speed of our software. Imagine a library: if books are just thrown in a pile, finding one (Searching) takes forever. If they are neatly arranged by category and author (Data Structure), finding a book is almost instant.

[TABLE]:<div class="grid grid-cols-2 gap-6 my-6"><div class="bg-indigo-50 p-5 rounded-xl border border-indigo-200"><h4 class="font-bold text-indigo-800 text-lg mb-3">Linear Data Structures</h4><ul class="list-disc ml-4 space-y-2 text-sm text-gray-700"><li>Elements are arranged sequentially.</li><li>Each element connects to exactly one next element.</li><li>Data is traversed sequentially in a single run.</li><li><strong>Examples:</strong> Arrays (Contiguous), Linked Lists (Scattered), Stacks (LIFO), Queues (FIFO).</li></ul></div><div class="bg-purple-50 p-5 rounded-xl border border-purple-200"><h4 class="font-bold text-purple-800 text-lg mb-3">Non-Linear Data Structures</h4><ul class="list-disc ml-4 space-y-2 text-sm text-gray-700"><li>Elements are arranged hierarchically.</li><li>One element can connect to multiple subsequent elements.</li><li>Data cannot be traversed in a single run.</li><li><strong>Examples:</strong> Trees (Parent-child relationship), Graphs (Network relationship).</li></ul></div></div>

Abstract Data Type (ADT)
An ADT is like an interface or blueprint. It tells you **what** a data structure should do, but not **how** it should do it.
- **Example:** A Stack ADT specifies operations like 'Push()' and 'Pop()'. But you can physically implement this Stack using an Array or a Linked List. The ADT only cares about the behavior, not the underlying code.

Time and Space Complexity (Big O Notation)
To compare algorithms, we don't use execution time in seconds (because a fast computer will always beat a slow one). Instead, we count the number of operations based on the input size $n$.
- **O(1) - Constant Time:** The operation takes the same amount of time regardless of data size (e.g., accessing an array element via index).
- **O(log n) - Logarithmic Time:** The data size is repeatedly halved (e.g., Binary Search). Extremely fast even for millions of records.
- **O(n) - Linear Time:** Execution time grows directly with the data size (e.g., Linear Search).
- **O(n²) - Quadratic Time:** Execution time grows exponentially, usually due to nested loops (e.g., Bubble Sort).


UNIT I — SEARCHING & SORTING

1. SEARCHING TECHNIQUES

Linear Search:
Linear Search checks every single element from start to finish until the target is found.
- **When to use:** When the array is unsorted, or when the dataset is very small.
- **Time Complexity:** O(n) (Worst case: the element is at the very end).

[START_CODE_SNIPPET]
// Linear Search in C - O(n)
int linearSearch(int arr[], int n, int target) {
    // Loop through every single element
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i; // Found! Return the index.
        }
    }
    return -1; // Exhausted the array, target not found
}
[END_CODE_SNIPPET]

Binary Search:
Binary search is vastly superior to Linear Search but requires the array to be **Sorted**. It works by comparing the target to the middle element. If the target is smaller, it discards the right half. If larger, it discards the left half.
- **When to use:** When searching inside large, sorted datasets.
- **Time Complexity:** O(log n).

[START_CODE_SNIPPET]
// Binary Search in C - O(log n)
int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2; // Prevents integer overflow
        
        if (arr[mid] == target) return mid;         // Target found at mid
        if (arr[mid] < target) left = mid + 1;      // Target must be in right half
        else right = mid - 1;                       // Target must be in left half
    }
    return -1; // Not found
}
[END_CODE_SNIPPET]


2. SORTING TECHNIQUES

Bubble Sort:
Works by repeatedly comparing adjacent elements and swapping them if they are out of order. The largest unsorted element "bubbles" up to the end of the array in every pass.
- **Drawback:** Extremely slow for large datasets because of excessive swapping.
- **Time Complexity:** O(n²).

[START_CODE_SNIPPET]
// Bubble Sort in C
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        // Last i elements are already in place
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap if out of order
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
[END_CODE_SNIPPET]

Selection Sort:
Instead of swapping adjacent elements constantly, Selection Sort finds the absolute minimum element from the unsorted portion, and performs just ONE swap to place it at the beginning.
- **Advantage over Bubble Sort:** Performs significantly fewer memory writes (swaps).
- **Time Complexity:** O(n²).

[START_CODE_SNIPPET]
// Selection Sort in C
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;
        // Find the minimum element in unsorted array
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        // Swap the found minimum element with the first unsorted element
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}
[END_CODE_SNIPPET]

Insertion Sort:
Builds the sorted array one element at a time. It takes the current element and "inserts" it into its correct position among the already sorted elements to its left.
- **When to use:** Extremely fast (O(n)) when the array is already mostly sorted.
- **Time Complexity:** O(n²) worst-case, O(n) best-case.

[START_CODE_SNIPPET]
// Insertion Sort in C
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i]; // Element to be inserted
        int j = i - 1;
        
        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
[END_CODE_SNIPPET]


UNIT II — LINKED LISTS

A Linked List overcomes the fixed-size limitations of an Array. Instead of allocating a huge block of contiguous memory, Linked Lists allocate memory dynamically as needed. Each element is called a **Node**.

[TABLE]:<table class="w-full border-collapse border border-cyan/30 text-base text-foreground/90 my-6 shadow-md rounded-xl overflow-hidden"><thead class="bg-gradient-to-r from-cyan/20 to-blue-500/10 text-cyan font-bold"><tr><th class="p-3 border border-cyan/20">Feature</th><th class="p-3 border border-cyan/20">Arrays</th><th class="p-3 border border-cyan/20">Linked Lists</th></tr></thead><tbody><tr class="hover:bg-cyan/5"><td class="p-3 border border-cyan-20 font-bold">Memory Layout</td><td class="p-3 border border-cyan/20">Contiguous blocks (Sequential)</td><td class="p-3 border border-cyan/20">Scattered across RAM, connected via pointers</td></tr><tr class="hover:bg-cyan/5"><td class="p-3 border border-cyan-20 font-bold">Size Flexibility</td><td class="p-3 border border-cyan/20">Fixed at compile-time (Static)</td><td class="p-3 border border-cyan/20">Can grow and shrink at runtime (Dynamic)</td></tr><tr class="hover:bg-cyan/5"><td class="p-3 border border-cyan-20 font-bold">Insertion / Deletion</td><td class="p-3 border border-cyan/20">Slow O(n) (requires shifting elements)</td><td class="p-3 border border-cyan/20">Fast O(1) (just change pointer links)</td></tr><tr class="hover:bg-cyan/5"><td class="p-3 border border-cyan-20 font-bold">Accessing Element i</td><td class="p-3 border border-cyan/20">Fast O(1) (Direct index access)</td><td class="p-3 border border-cyan/20">Slow O(n) (Must traverse from Head)</td></tr></tbody></table>

1. Singly Linked List
Each node contains 'data' and a 'next' pointer pointing to the following node. The final node points to 'NULL'.
Traversal is strictly **Unidirectional** (forward only).

[START_CODE_SNIPPET]
// Singly Linked List Operations
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next; // Pointer to the next node
};

// 1. Insert at Beginning (O(1) Time)
void insertAtBeginning(struct Node** head_ref, int newData) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node)); // Allocate memory
    newNode->data = newData;      // Assign data
    newNode->next = *head_ref;    // Point new node to current head
    *head_ref = newNode;          // Update head to be the new node
}

// 2. Delete Last Node safely (O(n) Time)
void deleteLastNode(struct Node** head_ref) {
    if (*head_ref == NULL) return; // Empty list
    
    // If there is only one node
    if ((*head_ref)->next == NULL) {
        free(*head_ref);
        *head_ref = NULL;
        return;
    }
    
    // Traverse to the second to last node
    struct Node* temp = *head_ref;
    while (temp->next->next != NULL) {
        temp = temp->next;
    }
    
    free(temp->next);       // Free the last node's memory
    temp->next = NULL;      // Disconnect it
}
[END_CODE_SNIPPET]

2. Doubly Linked List
Each node contains 'data', a 'next' pointer, AND a 'prev' pointer. 
This requires more memory per node but allows **Bidirectional Traversal** (can move forward and backward). Extremely useful for implementations like Browser History (Back/Forward buttons).

[START_CODE_SNIPPET]
// Doubly Linked List Node and Middle Insertion
struct DNode {
    int data;
    struct DNode* prev; // Points to previous node
    struct DNode* next; // Points to next node
};

// Insert after a given node
void insertAfter(struct DNode* prev_node, int newData) {
    if (prev_node == NULL) return;
    
    struct DNode* newNode = (struct DNode*)malloc(sizeof(struct DNode));
    newNode->data = newData;
    
    newNode->next = prev_node->next; // 1. Link new node to right side
    newNode->prev = prev_node;       // 2. Link new node to left side
    prev_node->next = newNode;       // 3. Link left node to new node
    
    if (newNode->next != NULL) {
        newNode->next->prev = newNode; // 4. Link right node back to new node
    }
}
[END_CODE_SNIPPET]

3. Circular Linked List
A list where the 'next' pointer of the final node points back to the 'head' node, forming an infinite circle. 
- **Application:** Essential for Operating Systems running Round-Robin task scheduling (CPU repeatedly cycles through active programs).


UNIT III — STACKS

A Stack is a linear ADT following the **LIFO (Last In, First Out)** principle. Imagine a stack of dinner plates: you can only place a new plate on the top, and you must remove the top plate before accessing the ones underneath.

Crucial Stack Errors:
- **Stack Overflow:** Attempting to 'Push' data onto a stack that has exhausted its memory limit.
- **Stack Underflow:** Attempting to 'Pop' data from a stack that is already entirely empty.

Real-World Applications:
- **Expression Evaluation:** Converting readable math equations (Infix like A+B) into machine-readable formats (Postfix like AB+).
- **Undo Functionality:** Every action you take is pushed to a stack. Hitting Ctrl+Z pops the most recent action.
- **Call Stack:** When a function calls another function, the OS pushes the current execution state onto a stack to return to later.

Array Implementation of a Stack:
Fast and simple, but suffers from a rigid, fixed maximum size.

[START_CODE_SNIPPET]
// Array Implementation of Stack in C
#define MAX_SIZE 100
int stack[MAX_SIZE];
int top = -1; // -1 indicates the stack is empty

void push(int data) {
    if (top >= MAX_SIZE - 1) {
        printf("ERROR: Stack Overflow! Cannot push %d\\n", data);
        return;
    }
    top++;
    stack[top] = data;
}

int pop() {
    if (top < 0) {
        printf("ERROR: Stack Underflow! Nothing to pop.\\n");
        return -1;
    }
    int poppedData = stack[top];
    top--;
    return poppedData;
}
[END_CODE_SNIPPET]

Linked List Implementation of a Stack:
Never overflows unless the entire computer runs out of RAM. The 'Head' of the linked list acts as the 'Top' of the stack.

[START_CODE_SNIPPET]
// Linked List Implementation of Stack in C
struct StackNode {
    int data;
    struct StackNode* next;
};
struct StackNode* topNode = NULL;

void pushList(int data) {
    struct StackNode* newNode = (struct StackNode*)malloc(sizeof(struct StackNode));
    newNode->data = data;
    newNode->next = topNode; // New node points to old top
    topNode = newNode;       // New node becomes the top
}

int popList() {
    if (topNode == NULL) return -1; // Underflow
    
    struct StackNode* temp = topNode;
    int poppedValue = temp->data;
    topNode = topNode->next; // Move top to the next node down
    
    free(temp); // Prevent memory leak
    return poppedValue;
}
[END_CODE_SNIPPET]


UNIT IV — QUEUES & DEQUES

A Queue is a linear ADT following the **FIFO (First In, First Out)** principle. Think of a queue of people waiting for a movie ticket. The first person to join the line is the first one served.
- **Enqueue:** Insert at the 'Rear'.
- **Dequeue:** Remove from the 'Front'.

Real-World Applications:
- **Print Spooling:** Documents sent to a printer wait in a Queue.
- **Process Scheduling:** The OS puts background processes in a queue to await CPU time.
- **Network Buffers:** Streaming video packets arrive and are processed in order.

The "False Full" Problem & Circular Queues:
In a standard array-based queue, as we 'Dequeue' elements, the 'Front' index moves forward. Even if the array has empty spaces at the beginning, once the 'Rear' index hits the end of the array, the queue reports it is FULL.
We solve this using a **Circular Queue**, where the 'Rear' wraps around to index 0 using the modulo '%' operator.

[START_CODE_SNIPPET]
// Circular Queue Implementation in C
#define SIZE 5
int cQueue[SIZE];
int front = -1, rear = -1;

void enqueueCircular(int data) {
    // Check if the next position for rear hits the front (Queue is Full)
    if ((rear + 1) % SIZE == front) {
        printf("Queue is Full! Cannot enqueue.\\n");
        return;
    }
    if (front == -1) front = 0; // Initialize front on first insertion
    
    rear = (rear + 1) % SIZE;   // Wrap around using modulo
    cQueue[rear] = data;
}

int dequeueCircular() {
    if (front == -1) {
        printf("Queue is Empty! Underflow.\\n");
        return -1;
    }
    
    int data = cQueue[front];
    
    // If it was the very last element in the queue
    if (front == rear) { 
        front = -1; rear = -1; // Reset queue
    } else {
        front = (front + 1) % SIZE; // Wrap around using modulo
    }
    return data;
}
[END_CODE_SNIPPET]

Deques (Double-Ended Queues)
A Deque removes the strict FIFO rule, allowing both insertion and deletion at BOTH the Front and the Rear ends.
- **Input Restricted Deque:** Can only insert at the Rear, but can delete from Both ends.
- **Output Restricted Deque:** Can insert at Both ends, but can only delete from the Front.


UNIT V — TREES & HASHING

1. TREES
Unlike Arrays and Linked Lists, a Tree represents data hierarchically.
- **Root Node:** The ultimate top-level parent node.
- **Leaf Node:** A node at the very bottom with absolutely no children.
- **Height of Tree:** The longest possible downward path from the root to a leaf.

Binary Search Tree (BST)
A binary tree where every node obeys a strict mathematical rule:
- Everything in the **Left Subtree** must be strictly smaller than the parent.
- Everything in the **Right Subtree** must be strictly greater than the parent.
This guarantees extremely fast searching (O(log n) time) because half the tree is discarded at every step.

[START_CODE_SNIPPET]
// BST Node Definition and Recursive Traversals in C
struct TreeNode {
    int data;
    struct TreeNode *left, *right;
};

// Inorder Traversal: Left -> Root -> Right
// In a BST, Inorder ALWAYS prints elements in ascending sorted order!
void inorder(struct TreeNode* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

// Preorder Traversal: Root -> Left -> Right
// Used practically when you need to clone or copy a complete tree.
void preorder(struct TreeNode* root) {
    if (root != NULL) {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

// Postorder Traversal: Left -> Right -> Root
// Used practically to delete a tree from memory, as children are deleted before the parent.
void postorder(struct TreeNode* root) {
    if (root != NULL) {
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }
}
[END_CODE_SNIPPET]

BST Deletion Rules (The 3 Cases):
Deleting a node from a BST is complex because the BST structure must not break.
1. **Node is a Leaf (0 children):** Safest. Just delete it from memory and set the parent's pointer to NULL.
2. **Node has 1 Child:** Delete the node, and directly link the parent to the node's single child (bypassing the deleted node).
3. **Node has 2 Children:** Most complex. Find the node's Inorder Successor (the absolute smallest node in its right subtree). Copy the successor's data into the node to be deleted, then safely delete the successor.

2. HASHING
Hashing is the ultimate search algorithm. It achieves lightning-fast **O(1) Constant Time** lookups.
- **Hash Function:** A math formula that accepts a 'Key' (like a username) and converts it directly into an integer 'Index'. The data is then instantly stored at that index in an array (Hash Table).
- **Hash Collision:** Because memory is limited, eventually a Hash Function will generate the *exact same index* for two totally different keys. 

How to Handle Collisions:
1. **Separate Chaining:** Instead of storing raw data, each index in the Hash Table array stores a pointer to a Linked List. If a collision happens, the new data is simply appended to the linked list at that specific index.
2. **Open Addressing (Linear Probing):** If an index is already occupied, the algorithm simply scans linearly (index + 1, index + 2, etc.) until it finds the next available empty slot in the array.
3. **Open Addressing (Quadratic Probing):** To prevent "clustering" (where data bunches up in one area), this checks slots in quadratic jumps (index + 1², index + 2², index + 3²).

[START_CODE_SNIPPET]
// Simple Hashing using Linear Probing for Collision Resolution
#define TABLE_SIZE 10
int hashTable[TABLE_SIZE]; // Array representing the hash table (Assume all initialized to -1)

void insertHash(int key) {
    int index = key % TABLE_SIZE; // Basic Hash Function
    int i = 0;
    
    // While the calculated index is occupied (Collision detected!)
    while (hashTable[(index + i) % TABLE_SIZE] != -1) {
        if (i == TABLE_SIZE) {
            printf("Error: Hash Table is 100%% Full!\\n");
            return;
        }
        i++; // Linear Probe: Jump to the next adjacent slot
    }
    
    // Empty slot found, insert the key
    hashTable[(index + i) % TABLE_SIZE] = key;
}
[END_CODE_SNIPPET]
`
};
