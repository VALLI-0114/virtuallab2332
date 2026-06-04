export type MCQ = {
  question: string;
  options: string[];
  answerIndex: number; // 0-indexed
};

export type SimulationStep = {
  line: number;
  annotation: string;
  memory: { variable: string; type: string; value: string }[];
  output: string;
};

export type SimulationData = {
  code: string;
  steps: SimulationStep[];
};

export type ExperimentContent = {
  aim?: { text: string; bullets?: string[] };
  theory?: { title: string; body: string[] }[];
  pretest?: MCQ[];
  procedure?: string[];
  simulation?: SimulationData;
  posttest?: MCQ[];
  references?: string[];
};

export type Experiment = {
  id: string;
  title: string;
  desc: string;
  expected: string;
  content?: ExperimentContent;
};

export type Week = {
  title: string;
  objective: string;
  tutorial: string;
  labTitle: string;
  experiments: Experiment[];
};

export type Course = {
  id: string;
  title: string;
  objectives: string | string[];
  introduction?: string[];
  targetAudience?: {
    primary: string;
    prerequisites: string[];
    usefulFor: string[];
  };
  alignment?: {
    university: string;
    department: string;
    course: string;
    credits: string;
    yearSem: string;
    branches: string;
    totalExperiments: string;
    compiler: string;
    units: { unit: string; topics: string; weeks: string }[];
  };
  weeks: Week[];
};

export const courses: Record<string, Course> = {
  "c-programming": {
    id: "c-programming",
    title: "C Programming",
    objectives: [
      "To introduce students to the C programming language and its role in modern computing",
      "To provide a structured, week-by-week hands-on programming experience aligned with JNTUGV syllabus",
      "To help students understand fundamental programming concepts such as variables, data types, operators, and expressions",
      "To train students in writing decision-making programs using if-else, switch-case, and nested conditionals",
      "To develop proficiency in iterative constructs — for, while, and do-while loops",
      "To understand and implement array operations including searching and sorting",
      "To learn string manipulation using both built-in and user-defined functions",
      "To explore pointer arithmetic, dynamic memory allocation using malloc, calloc, realloc, and free",
      "To understand structures, unions, bit fields, and self-referential structures including singly linked lists",
      "To design and implement modular programs using functions, call by value, and call by reference",
      "To develop recursive thinking by programming naturally recursive problems",
      "To perform file I/O operations including reading, writing, copying, and merging files",
      "To build problem-solving skills by converting real-world problems into algorithmic solutions"
    ],
    introduction: [
      "C is one of the most fundamental and widely-used programming languages in the history of computing. Developed at Bell Labs in the early 1970s, C has stood the test of time as the foundation for operating systems, embedded systems, compilers, and system-level software. Almost every modern programming language — including Python, Java, and C++ — draws concepts from C.",
      "This Virtual C Programming Lab is developed for first-year B.Tech students of Jawaharlal Nehru Technological University Gurajada Vizianagaram (JNTUGV) under the BS&HSS department. The lab provides a hands-on, browser-based environment where students can write, compile, and execute C programs without requiring any local software installation.",
      "The lab covers 14 weeks of structured experiments aligned with the JNTUGV C Programming syllabus — from basic I/O and arithmetic to pointers, data structures, recursion, and file handling. Each experiment includes a clear objective, problem statement, pre-loaded starter code, stdin support for interactive programs, and expected output for self-verification.",
      "Students can attempt all 47 lab problems directly in the browser using a professional code editor powered by a real GCC compiler via the Wandbox execution engine."
    ],
    targetAudience: {
      primary: "First-year B.Tech students of all branches at Jawaharlal Nehru Technological University Gurajada Vizianagaram (JNTUGV) enrolled in the C Programming Lab course under the BS&HSS department (Course Code: refer JNTUGV curriculum).",
      prerequisites: [
        "No prior programming experience required",
        "Basic computer operation skills (typing, using a browser)",
        "Understanding of basic mathematics (algebra, arithmetic)"
      ],
      usefulFor: [
        "Diploma students transitioning to B.Tech who want to strengthen fundamentals",
        "Students preparing for competitive exams like GATE where C concepts are tested",
        "Faculty members looking for ready-made experiment references aligned to JNTUGV syllabus",
        "Self-learners who want a structured, compiler-ready C programming environment"
      ]
    },
    alignment: {
      university: "Jawaharlal Nehru Technological University Gurajada Vizianagaram (JNTUGV)",
      department: "Basic Sciences and Humanities (BS&HSS)",
      course: "C Programming Lab",
      credits: "L:0 T:0 P:3 C:1.5",
      yearSem: "First Year, First / Second Semester",
      branches: "All B.Tech branches (CSE, IT, ECE, EEE, ME, Civil)",
      totalExperiments: "47 problems across 14 weeks",
      compiler: "GCC (GNU Compiler Collection) via Wandbox — identical to the compiler used in JNTUGV physical labs",
      units: [
        { unit: "Unit I", topics: "Environment, Algorithms, Variables, Arithmetic", weeks: "Week 1–3" },
        { unit: "Unit II", topics: "Operators, Branching, Loops", weeks: "Week 4–6" },
        { unit: "Unit III", topics: "Arrays, Strings, Sorting, Matrices", weeks: "Week 7–8" },
        { unit: "Unit IV", topics: "Pointers, Structures, Unions, Linked Lists", weeks: "Week 9–10" },
        { unit: "Unit V", topics: "Functions, Recursion, File Handling", weeks: "Week 11–14" }
      ]
    },
    weeks: [
      {
        title: "WEEK 1",
        objective: "Getting familiar with programming environment and writing first program",
        tutorial: "Tutorial 1: Environment Setup",
        labTitle: "Lab 1: First steps in C",
        experiments: [
          {
            id: "c-w1-1",
            title: "Hello World",
            desc: "Write a C program to print 'Hello World' to the console.",
            expected: "Hello World",
            content: {
              aim: {
                text: "In this experiment, the student will be able to understand the basic structure of a C program and learn how to display output on the screen using the printf() function.",
                bullets: [
                  "Understand the structure of a C program — preprocessor directives, main function, and return statement",
                  "Learn the role of #include <stdio.h> header file",
                  "Use printf() to print text to the console",
                  "Successfully compile and run their first C program"
                ]
              },
              theory: [
                {
                  title: "Structure of a C Program",
                  body: ["Every C program follows a fixed structure. Understanding this structure is the first step to writing C programs.", "A basic C program has these parts:"]
                },
                {
                  title: "1. Preprocessor Directive",
                  body: ["Lines starting with # are preprocessor directives. They are processed before compilation begins.", "#include <stdio.h> tells the compiler to include the Standard Input Output library, which contains functions like printf() and scanf()."]
                },
                {
                  title: "2. main() Function",
                  body: ["Every C program must have exactly one main() function. Execution of the program always begins from main().", "int main() means the function returns an integer value to the operating system."]
                },
                {
                  title: "3. printf() Function",
                  body: ["printf() is used to print formatted output to the console.", "Syntax: printf(\"text to print\");", "The text must be enclosed in double quotes.", "Special character \\n moves the cursor to the next line (newline)."]
                },
                {
                  title: "4. return 0",
                  body: ["return 0; at the end of main() tells the OS that the program ended successfully. Any non-zero value means the program ended with an error."]
                },
                {
                  title: "5. Curly Braces { }",
                  body: ["All statements inside main() are enclosed within curly braces. The opening { marks the beginning and closing } marks the end of the function body."]
                }
              ],
              pretest: [
                { question: "Which of the following is the correct extension for a C source file?", options: [".cp", ".c", ".cpp", ".cv"], answerIndex: 1 },
                { question: "Which header file is required to use printf() in C?", options: ["math.h", "string.h", "stdio.h", "stdlib.h"], answerIndex: 2 },
                { question: "What is the entry point of every C program?", options: ["start()", "begin()", "main()", "run()"], answerIndex: 2 },
                { question: "What does \\n do inside printf()?", options: ["Prints the letter n", "Adds a tab space", "Moves to the next line", "Ends the program"], answerIndex: 2 },
                { question: "What value should main() return to indicate successful execution?", options: ["1", "-1", "0", "NULL"], answerIndex: 2 }
              ],
              procedure: [
                "Read the Aim and Theory sections completely before starting",
                "Go to the Simulation tab and observe the step-by-step execution of the Hello World program",
                "Note how each line of the program executes in order — preprocessor → main() → printf() → return",
                "Observe the output panel on the right side showing 'Hello World'",
                "Go to the Code Test tab (code editor)",
                "The starter code is pre-loaded in the editor",
                "Read the code carefully — do not change anything yet",
                "Click the 'Run Code' button",
                "Verify your output matches the expected output: Hello World",
                "Try modifying the text inside printf() to print your own name",
                "Run again and verify your custom output appears correctly",
                "Once satisfied, proceed to the Posttest tab to test your understanding"
              ],
              simulation: {
                code: "#include <stdio.h>\n\nint main() {\n    printf(\"Hello World\\n\");\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Preprocessor loads stdio library containing printf()", memory: [], output: "" },
                  { line: 3, annotation: "Program execution begins at main() function", memory: [], output: "" },
                  { line: 4, annotation: "printf() sends the string to standard output", memory: [], output: "Hello World\n" },
                  { line: 5, annotation: "Program sends exit code 0 to OS, ending successfully", memory: [], output: "Hello World\n" }
                ]
              },
              posttest: [
                { question: "What is the output of printf(\"Hello\\nWorld\");?", options: ["Hello World", "Hello\\nWorld (on two lines)", "HelloWorld", "Error"], answerIndex: 1 },
                { question: "Which of the following correctly prints \"JNTUGV\" in C?", options: ["print(\"JNTUGV\")", "printf[JNTUGV]", "printf(\"JNTUGV\");", "Printf(\"JNTUGV\");"], answerIndex: 2 },
                { question: "What happens if you remove #include<stdio.h> from the Hello World program?", options: ["Program still runs normally", "printf() will not be recognized, compiler error", "Program prints nothing", "Program crashes at runtime"], answerIndex: 1 },
                { question: "What does int before main() indicate?", options: ["main() takes integer arguments", "main() returns an integer value", "main() is an integer variable", "Nothing, it is optional"], answerIndex: 1 },
                { question: "Which of the following will print Hello World with a newline at the end?", options: ["printf(\"Hello World\")", "printf(\"Hello World\\n\")", "printf(\\nHello World)", "printf(\"Hello World\\t\")"], answerIndex: 1 }
              ],
              references: [
                "Kernighan, B.W. and Ritchie, D.M., 'The C Programming Language', 2nd Edition, Prentice Hall",
                "Balagurusamy, E., 'Programming in ANSI C', 8th Edition, McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Department",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/",
                "Wandbox Online Compiler: https://wandbox.org"
              ]
            }
          },
          {
            id: "c-w1-2",
            title: "Basic Input Output",
            desc: "Write a program that takes two variables (a string name and an integer age) and prints them.",
            expected: "Name: Likhith Age: 20",
            content: {
              aim: {
                text: "In this experiment, the student will learn how to take input from the user using scanf() and display it back using printf(). The student will understand format specifiers, variable declaration, and the relationship between input and output in C.",
                bullets: [
                  "Declare variables of type char array and int",
                  "Use scanf() to read a string and integer from the user",
                  "Use printf() with format specifiers %s and %d to display them",
                  "Understand the use of & (address-of operator) in scanf()"
                ]
              },
              theory: [
                {
                  title: "scanf() — Reading Input",
                  body: [
                    "scanf() reads formatted input from the keyboard (standard input).",
                    "Syntax: scanf(\"format_specifier\", &variable);",
                    "The & symbol gives the memory address of the variable so scanf() can store the value there."
                  ]
                },
                {
                  title: "printf() with Format Specifiers",
                  body: [
                    "printf() uses the same specifiers to print variables.",
                    "printf(\"Name: %s Age: %d\", name, age);",
                    "→ Replaces %s with the value of name, %d with the value of age"
                  ]
                },
                {
                  title: "char array for strings",
                  body: [
                    "C does not have a built-in string type. Strings are stored as character arrays.",
                    "char name[50]; → declares a character array that can hold up to 49 characters + null terminator",
                    "Why no & for char arrays in scanf?",
                    "The array name itself is already a memory address in C, so & is not needed."
                  ]
                }
              ],
              pretest: [
                { question: "Which function is used to take input from the user in C?", options: ["input()", "cin()", "scanf()", "read()"], answerIndex: 2 },
                { question: "What is the format specifier for an integer in C?", options: ["%i", "%d", "%int", "%n"], answerIndex: 1 },
                { question: "What does the & symbol do in scanf(\"%d\", &age)?", options: ["It is the AND operator", "It passes the address of the variable", "It multiplies the value", "It is not required"], answerIndex: 1 },
                { question: "To store a person's name in C, which data type is used?", options: ["string name", "char name[]", "text name[]", "varchar name"], answerIndex: 1 },
                { question: "What is the format specifier for a string in printf()?", options: ["%c", "%str", "%s", "%ch"], answerIndex: 2 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully",
                "Go to the Simulation tab to see how scanf() reads values and printf() displays them",
                "Observe what happens in memory when variables are assigned values from user input",
                "Go to the Code Test tab — starter code is pre-loaded",
                "Look at the Stdin input box — type your name and age separated by a space",
                "Example input: Likhith 20",
                "Click Run Code",
                "Verify output matches: Name: Likhith Age: 20",
                "Try changing the input values and run again",
                "Observe how output changes based on input",
                "Proceed to Posttest"
              ],
              simulation: {
                code: "#include <stdio.h>\n\nint main() {\n    char name[50];\n    int age;\n    scanf(\"%s %d\", name, &age);\n    printf(\"Name: %s Age: %d\\n\", name, age);\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Preprocessor loads stdio library", memory: [], output: "" },
                  { line: 3, annotation: "Program execution begins at main()", memory: [], output: "" },
                  { line: 4, annotation: "Memory allocated for char array 'name'", memory: [{ variable: "name", type: "char[50]", value: "garbage" }], output: "" },
                  { line: 5, annotation: "Memory allocated for integer 'age'", memory: [{ variable: "name", type: "char[50]", value: "garbage" }, { variable: "age", type: "int", value: "garbage" }], output: "" },
                  { line: 6, annotation: "scanf() reads 'Likhith 20' from standard input", memory: [{ variable: "name", type: "char[50]", value: "\"Likhith\"" }, { variable: "age", type: "int", value: "20" }], output: "" },
                  { line: 7, annotation: "printf() sends formatted string to standard output", memory: [{ variable: "name", type: "char[50]", value: "\"Likhith\"" }, { variable: "age", type: "int", value: "20" }], output: "Name: Likhith Age: 20\n" },
                  { line: 8, annotation: "Program ends successfully", memory: [{ variable: "name", type: "char[50]", value: "\"Likhith\"" }, { variable: "age", type: "int", value: "20" }], output: "Name: Likhith Age: 20\n" }
                ]
              },
              posttest: [
                { question: "What will be the output of the program if input is Ram 25?", options: ["Name: Ram Age: 25", "Ram 25", "Name=Ram Age=25", "Error"], answerIndex: 0 },
                { question: "Why is & not used with char arrays in scanf()?", options: ["It is a syntax error", "char arrays already represent memory addresses", "scanf() does not support strings", "& is only for float variables"], answerIndex: 1 },
                { question: "What is the size of char name[50]?", options: ["50 integers", "50 characters including null terminator", "50 bytes of float", "50 bits"], answerIndex: 1 },
                { question: "Which format specifier is used to print a float value?", options: ["%d", "%s", "%f", "%fl"], answerIndex: 2 },
                { question: "What happens if you forget & before an int variable in scanf()?", options: ["Program prints 0", "Program compiles but may crash at runtime (undefined behavior)", "Program prints garbage value", "Compiler gives a warning but runs fine"], answerIndex: 1 }
              ],
              references: [
                "Kernighan, B.W. and Ritchie, D.M., 'The C Programming Language', 2nd Edition, Prentice Hall",
                "Balagurusamy, E., 'Programming in ANSI C', 8th Edition, McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Department",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          },
        ],
      },
      {
        title: "WEEK 2",
        objective: "Converting algorithms/flowcharts into C source code",
        tutorial: "Tutorial 2: Algorithms and Flowcharts",
        labTitle: "Lab 2: Basic Algorithms",
        experiments: [
          {
            id: "c-w2-1",
            title: "Sum & Average",
            desc: "Compute the sum and average of two integers.",
            expected: "Sum: 14 Average: 7.00",
            content: {
              aim: {
                text: "In this experiment, the student will write a C program to accept two integers from the user, compute their sum and average, and display the results. The student will:",
                bullets: [
                  "Declare and use multiple int and float variables",
                  "Perform arithmetic operations (addition, division)",
                  "Understand integer vs. float division and type casting",
                  "Use printf() with %d and %.2f format specifiers"
                ]
              },
              theory: [
                {
                  title: "Arithmetic in C",
                  body: ["C supports +, -, *, / and % (modulus). When both operands are integers, division truncates: 7 / 2 = 3, not 3.5.", "To obtain a decimal result, cast one operand to float: (float)a / b."]
                },
                {
                  title: "Sum",
                  body: ["sum = a + b; stores the result in a new variable. Both a and b must be declared before use."]
                },
                {
                  title: "Average",
                  body: ["average = (float)sum / 2; The cast ensures float division. Alternatively declare average as float and divide directly."]
                },
                {
                  title: "%.2f",
                  body: ["%.2f prints a float with exactly 2 decimal places. Useful for displaying averages cleanly."]
                }
              ],
              pretest: [
                { question: "What is the result of 7 / 2 in C when both are int?", options: ["3.5", "3", "4", "Error"], answerIndex: 1 },
                { question: "Which format specifier prints a float to 2 decimal places?", options: ["%d", "%f", "%.2f", "%2d"], answerIndex: 2 },
                { question: "To get float division from two int variables a and b, you write:", options: ["a / b", "(float)a / b", "float(a / b)", "a % b"], answerIndex: 1 },
                { question: "What operator computes the remainder of division?", options: ["/", "//", "%", "**"], answerIndex: 2 },
                { question: "If a = 10 and b = 4, what is (float)(a + b) / 2?", options: ["7", "7.00", "7.5", "3.0"], answerIndex: 1 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully.",
                "Open the Simulation tab below and step through the program trace.",
                "Observe how variables appear in memory and how integer vs. float division differ.",
                "Open the Code Test tab. Starter code is pre-loaded.",
                "In the Stdin box enter two integers separated by a space — e.g. 10 4.",
                "Click Run Code. Verify output: Sum: 14 Average: 7.00",
                "Try different inputs (odd numbers to test rounding). Proceed to Posttest."
              ],
              simulation: {
                code: "#include <stdio.h>\n\nint main() {\n    int a, b, sum;\n    float avg;\n    scanf(\"%d %d\", &a, &b);\n    sum = a + b;\n    avg = (float)sum / 2;\n    printf(\"Sum: %d Average: %.2f\\n\", sum, avg);\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Load stdio library for I/O functions", memory: [], output: "" },
                  { line: 4, annotation: "Allocate memory for integers a, b, sum", memory: [{variable: "a", type: "int", value: "?"}, {variable: "b", type: "int", value: "?"}, {variable: "sum", type: "int", value: "?"}], output: "" },
                  { line: 5, annotation: "Allocate memory for float avg", memory: [{variable: "a", type: "int", value: "?"}, {variable: "b", type: "int", value: "?"}, {variable: "sum", type: "int", value: "?"}, {variable: "avg", type: "float", value: "?"}], output: "" },
                  { line: 6, annotation: "scanf() reads '10 4' from user", memory: [{variable: "a", type: "int", value: "10"}, {variable: "b", type: "int", value: "4"}, {variable: "sum", type: "int", value: "?"}, {variable: "avg", type: "float", value: "?"}], output: "" },
                  { line: 7, annotation: "Compute sum = a + b", memory: [{variable: "a", type: "int", value: "10"}, {variable: "b", type: "int", value: "4"}, {variable: "sum", type: "int", value: "14"}, {variable: "avg", type: "float", value: "?"}], output: "" },
                  { line: 8, annotation: "Compute avg using float casting", memory: [{variable: "a", type: "int", value: "10"}, {variable: "b", type: "int", value: "4"}, {variable: "sum", type: "int", value: "14"}, {variable: "avg", type: "float", value: "7.00"}], output: "" },
                  { line: 9, annotation: "printf() displays the result", memory: [{variable: "a", type: "int", value: "10"}, {variable: "b", type: "int", value: "4"}, {variable: "sum", type: "int", value: "14"}, {variable: "avg", type: "float", value: "7.00"}], output: "Sum: 14 Average: 7.00\n" },
                  { line: 10, annotation: "Program terminates successfully", memory: [{variable: "a", type: "int", value: "10"}, {variable: "b", type: "int", value: "4"}, {variable: "sum", type: "int", value: "14"}, {variable: "avg", type: "float", value: "7.00"}], output: "Sum: 14 Average: 7.00\n" }
                ]
              },
              posttest: [
                { question: "What will printf(\"Sum: %d\", 10+4); print?", options: ["Sum: 14", "Sum: 10+4", "14", "Error"], answerIndex: 0 },
                { question: "Which variable type is best for storing the average of two integers?", options: ["int", "float", "char", "double"], answerIndex: 1 },
                { question: "For inputs 7 and 3, what is the average printed with %.2f?", options: ["5.00", "5", "5.5", "4.00"], answerIndex: 0 },
                { question: "What is the purpose of type casting in (float)sum / 2?", options: ["Changes sum permanently to float", "Temporarily treats sum as float for division", "Rounds sum to nearest float", "No effect"], answerIndex: 1 },
                { question: "What is 13 % 4?", options: ["3.25", "1", "3", "4"], answerIndex: 1 }
              ],
              references: [
                "Kernighan & Ritchie, \"The C Programming Language\", 2nd Ed., Prentice Hall",
                "Balagurusamy, \"Programming in ANSI C\", 8th Ed., McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Dept.",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          },
          {
            id: "c-w2-2",
            title: "Fahrenheit to Celsius",
            desc: "Convert temperature from Fahrenheit to Celsius.",
            expected: "Celsius: 37.00",
            content: {
              aim: {
                text: "In this experiment, the student will write a C program to accept a temperature in Fahrenheit from the user, convert it to Celsius using the standard formula, and display the result. The student will:",
                bullets: [
                  "Declare and use float variables for temperature values",
                  "Apply the conversion formula: C = (F - 32) * 5 / 9",
                  "Understand operator precedence and parenthesisation in C",
                  "Use printf() with %.2f to display the result to 2 decimal places"
                ]
              },
              theory: [
                {
                  title: "Temperature Conversion Formula",
                  body: ["The relationship between Fahrenheit and Celsius is:", "C = (F - 32) * 5 / 9", "This formula subtracts 32 from the Fahrenheit value, then multiplies by 5 and divides by 9."]
                },
                {
                  title: "Operator Precedence",
                  body: ["In C, multiplication and division have higher precedence than subtraction.", "Without parentheses, F - 32 * 5 / 9 would be evaluated incorrectly. Always use parentheses: (F - 32) * 5 / 9."]
                },
                {
                  title: "Float Variables",
                  body: ["Declare both fahrenheit and celsius as float to avoid integer truncation.", "If declared as int, values like 98.6°F would lose their decimal part."]
                },
                {
                  title: "%.2f",
                  body: ["%.2f prints a floating-point result rounded to 2 decimal places, giving clean output like 37.00."]
                }
              ],
              pretest: [
                { question: "What is the correct formula to convert Fahrenheit to Celsius?", options: ["C = (F + 32) * 5 / 9", "C = (F - 32) * 9 / 5", "C = (F - 32) * 5 / 9", "C = F - 32 / 5 * 9"], answerIndex: 2 },
                { question: "What data type should be used to store a temperature like 98.6?", options: ["int", "char", "float", "long"], answerIndex: 2 },
                { question: "What is 98.6°F converted to Celsius (approx)?", options: ["32.00", "37.00", "66.60", "45.30"], answerIndex: 1 },
                { question: "Why are parentheses needed in (F - 32) * 5 / 9?", options: ["They are not needed", "To ensure subtraction happens before multiplication", "To convert F to an integer", "To print the result"], answerIndex: 1 },
                { question: "What will %.2f do when printing 37.0?", options: ["Print 37", "Print 37.0", "Print 37.00", "Print 37.000"], answerIndex: 2 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully.",
                "Open the Simulation tab and step through the program trace.",
                "Observe how the formula is applied and how float variables hold decimal values.",
                "Open the Code Test tab. Starter code is pre-loaded.",
                "In the Stdin box enter a Fahrenheit temperature — e.g. 98.6",
                "Click Run Code. Verify output: Celsius: 37.00",
                "Try inputs like 32 (freezing) and 212 (boiling) to verify. Proceed to Posttest."
              ],
              simulation: {
                code: "#include <stdio.h>\n\nint main() {\n    float f, c;\n    scanf(\"%f\", &f);\n    c = (f - 32) * 5 / 9;\n    printf(\"Celsius: %.2f\\n\", c);\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Load stdio library", memory: [], output: "" },
                  { line: 4, annotation: "Allocate memory for floats f, c", memory: [{variable: "f", type: "float", value: "?"}, {variable: "c", type: "float", value: "?"}], output: "" },
                  { line: 5, annotation: "scanf() reads 98.6 from user", memory: [{variable: "f", type: "float", value: "98.6"}, {variable: "c", type: "float", value: "?"}], output: "" },
                  { line: 6, annotation: "Compute conversion formula", memory: [{variable: "f", type: "float", value: "98.6"}, {variable: "c", type: "float", value: "37.00"}], output: "" },
                  { line: 7, annotation: "printf() displays formatted celsius", memory: [{variable: "f", type: "float", value: "98.6"}, {variable: "c", type: "float", value: "37.00"}], output: "Celsius: 37.00\n" },
                  { line: 8, annotation: "Program ends successfully", memory: [{variable: "f", type: "float", value: "98.6"}, {variable: "c", type: "float", value: "37.00"}], output: "Celsius: 37.00\n" }
                ]
              },
              posttest: [
                { question: "What is 0°C in Fahrenheit?", options: ["0", "32", "100", "212"], answerIndex: 1 },
                { question: "What output does the program print for input 32?", options: ["Celsius: 0.00", "Celsius: 32.00", "Celsius: 1.00", "Celsius: -1.00"], answerIndex: 0 },
                { question: "What happens if fahrenheit is declared as int instead of float?", options: ["No difference", "Decimal part of input is lost", "Program crashes", "Output doubles"], answerIndex: 1 },
                { question: "Which of the following correctly computes Celsius in C?", options: ["celsius = F - 32 * 5 / 9;", "celsius = (F - 32) * 5 / 9;", "celsius = F * 5 / 9 - 32;", "celsius = (F / 9) * 5 - 32;"], answerIndex: 1 },
                { question: "For input 212°F, what is the expected Celsius output?", options: ["180.00", "100.00", "37.00", "0.00"], answerIndex: 1 }
              ],
              references: [
                "Kernighan & Ritchie, \"The C Programming Language\", 2nd Ed., Prentice Hall",
                "Balagurusamy, \"Programming in ANSI C\", 8th Ed., McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Dept.",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          },
          {
            id: "c-w2-3",
            title: "Simple Interest",
            desc: "Calculate Simple Interest given P, R, T.",
            expected: "Simple Interest: 100.00",
            content: {
              aim: {
                text: "In this experiment, the student will write a C program to accept principal, rate of interest, and time from the user, compute the simple interest, and display the result. The student will:",
                bullets: [
                  "Declare and use float variables for financial calculations",
                  "Apply the simple interest formula: SI = (P * R * T) / 100",
                  "Understand the importance of float division in financial computations",
                  "Use printf() with %.2f to display monetary results to 2 decimal places"
                ]
              },
              theory: [
                {
                  title: "Simple Interest Formula",
                  body: ["Simple interest is calculated as:", "SI = (P * R * T) / 100", "Where: P = Principal amount, R = Rate of interest per annum, T = Time period"]
                },
                {
                  title: "Why Float?",
                  body: ["Financial values often involve decimals. Declaring P, R, T, and SI as float ensures that fractional values are preserved.", "If all variables were int, a rate like 8.5% would be truncated to 8."]
                },
                {
                  title: "Operator Precedence",
                  body: ["Multiplication is performed left to right before division. P * R * T is evaluated first, then divided by 100.", "No special parenthesisation is needed beyond the outer grouping."]
                }
              ],
              pretest: [
                { question: "What is the formula for Simple Interest?", options: ["SI = P + R + T", "SI = (P * R * T) / 100", "SI = (P + R) * T / 100", "SI = P / (R * T)"], answerIndex: 1 },
                { question: "What data type is most appropriate for storing principal and rate?", options: ["int", "char", "float", "void"], answerIndex: 2 },
                { question: "If P = 1000, R = 5, T = 2, what is SI?", options: ["10.00", "100.00", "1000.00", "50.00"], answerIndex: 1 },
                { question: "Why is dividing by 100 necessary in the SI formula?", options: ["To convert years to months", "Because rate is given as a percentage", "To round the result", "It is not necessary"], answerIndex: 1 },
                { question: "Which printf format specifier prints a float to 2 decimal places?", options: ["%d", "%f", "%.2f", "%s"], answerIndex: 2 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully.",
                "Open the Simulation tab and step through the program trace.",
                "Observe how P, R, and T are read and how SI is computed step by step.",
                "Open the Code Test tab. Starter code is pre-loaded.",
                "In the Stdin box enter three values: principal, rate, time — e.g. 1000 5 2",
                "Click Run Code. Verify output: Simple Interest: 100.00",
                "Try inputs with decimal rate like 1000 8.5 3 to test float handling. Proceed to Posttest."
              ],
              simulation: {
                code: "#include <stdio.h>\n\nint main() {\n    float p, r, t, si;\n    scanf(\"%f %f %f\", &p, &r, &t);\n    si = (p * r * t) / 100;\n    printf(\"Simple Interest: %.2f\\n\", si);\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Load stdio library", memory: [], output: "" },
                  { line: 4, annotation: "Allocate memory for floats p, r, t, si", memory: [{variable: "p", type: "float", value: "?"}, {variable: "r", type: "float", value: "?"}, {variable: "t", type: "float", value: "?"}, {variable: "si", type: "float", value: "?"}], output: "" },
                  { line: 5, annotation: "scanf() reads '1000 5 2' from user", memory: [{variable: "p", type: "float", value: "1000"}, {variable: "r", type: "float", value: "5"}, {variable: "t", type: "float", value: "2"}, {variable: "si", type: "float", value: "?"}], output: "" },
                  { line: 6, annotation: "Compute SI formula", memory: [{variable: "p", type: "float", value: "1000"}, {variable: "r", type: "float", value: "5"}, {variable: "t", type: "float", value: "2"}, {variable: "si", type: "float", value: "100.00"}], output: "" },
                  { line: 7, annotation: "printf() displays formatted result", memory: [{variable: "p", type: "float", value: "1000"}, {variable: "r", type: "float", value: "5"}, {variable: "t", type: "float", value: "2"}, {variable: "si", type: "float", value: "100.00"}], output: "Simple Interest: 100.00\n" },
                  { line: 8, annotation: "Program ends successfully", memory: [{variable: "p", type: "float", value: "1000"}, {variable: "r", type: "float", value: "5"}, {variable: "t", type: "float", value: "2"}, {variable: "si", type: "float", value: "100.00"}], output: "Simple Interest: 100.00\n" }
                ]
              },
              posttest: [
                { question: "For P = 500, R = 10, T = 3, what is SI?", options: ["15.00", "150.00", "1500.00", "50.00"], answerIndex: 1 },
                { question: "What happens if T is declared as int and the user enters 1.5?", options: ["SI is computed correctly", "T stores 1, losing the 0.5", "Program crashes", "T becomes 2"], answerIndex: 1 },
                { question: "Which line correctly computes simple interest in C?", options: ["si = P + R + T / 100;", "si = (P * R * T) / 100;", "si = P * R / T * 100;", "si = (P / 100) * R + T;"], answerIndex: 1 },
                { question: "What is the output for P = 2000, R = 3.5, T = 4?", options: ["28.00", "280.00", "2800.00", "700.00"], answerIndex: 1 },
                { question: "Why should SI be declared as float rather than int?", options: ["int cannot store numbers above 100", "SI may have a decimal part", "float is faster to compute", "printf requires float for all output"], answerIndex: 1 }
              ],
              references: [
                "Kernighan & Ritchie, \"The C Programming Language\", 2nd Ed., Prentice Hall",
                "Balagurusamy, \"Programming in ANSI C\", 8th Ed., McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Dept.",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          }
        ],
      },
      {
        title: "WEEK 3",
        objective: "Variables, data types, arithmetic operators",
        tutorial: "Tutorial 3: Variables and Arithmetic",
        labTitle: "Lab 3: Computational problems",
        experiments: [
          {
            id: "c-w3-1",
            title: "Square Root",
            desc: "Find square root of a given number using math.h.",
            expected: "Square Root: 5.00",
            content: {
              aim: {
                text: "In this experiment, the student will write a C program to accept a non-negative number from the user and compute its square root using the sqrt() function from the math library. The student will:",
                bullets: [
                  "Declare and use float/double variables",
                  "Include and use the math.h library",
                  "Apply the sqrt() function",
                  "Use printf() with %.2f to display the result",
                  "Understand the importance of linking the math library with -lm during compilation"
                ]
              },
              theory: [
                {
                  title: "Square Root",
                  body: ["The square root of a number n is a value x such that x * x = n.", "For example, sqrt(25) = 5.0 and sqrt(2) = 1.414..."]
                },
                {
                  title: "math.h Library",
                  body: ["C does not include mathematical functions by default. The header #include <math.h> must be included at the top of the program to access functions like sqrt(), pow(), fabs(), ceil(), floor(), etc."]
                },
                {
                  title: "sqrt() Function",
                  body: ["Syntax: double sqrt(double x);", "It accepts a double argument and returns the square root as a double. Passing a negative number results in a NaN (Not a Number) output; no crash occurs but the result is invalid."]
                },
                {
                  title: "Compilation and Types",
                  body: ["When using math.h functions, compile with: gcc program.c -o program -lm", "The -lm flag links the math library explicitly. Without it, a linker error occurs on some systems.", "sqrt() returns a double. If your variable is float, an implicit conversion occurs. It is safest to declare the variable as double when using math.h functions."]
                }
              ],
              pretest: [
                { question: "Which header file must be included to use sqrt() in C?", options: ["stdio.h", "stdlib.h", "math.h", "string.h"], answerIndex: 2 },
                { question: "What does sqrt(144) return?", options: ["14.00", "12.00", "72.00", "1.44"], answerIndex: 1 },
                { question: "What is the return type of the sqrt() function?", options: ["int", "float", "double", "char"], answerIndex: 2 },
                { question: "What happens if you pass a negative value to sqrt()?", options: ["Program crashes", "Returns 0", "Returns NaN", "Returns the absolute value"], answerIndex: 2 },
                { question: "Which compilation command correctly links the math library?", options: ["gcc program.c -o program", "gcc program.c -o program -lm", "gcc program.c -math -o program", "gcc -sqrt program.c -o program"], answerIndex: 1 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully.",
                "Open the Simulation tab and step through the program trace.",
                "Observe how the math.h library is included and how sqrt() is called.",
                "Open the Code Test tab. Starter code is pre-loaded.",
                "In the Stdin box enter a non-negative number — e.g. 25",
                "Click Run Code. Verify output: Square Root: 5.00",
                "Try inputs like 2 and 0 to observe decimal and zero results. Proceed to Posttest."
              ],
              simulation: {
                code: "#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double n, root;\n    scanf(\"%lf\", &n);\n    root = sqrt(n);\n    printf(\"Square Root: %.2f\\n\", root);\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Load stdio library for I/O", memory: [], output: "" },
                  { line: 2, annotation: "Load math library for sqrt()", memory: [], output: "" },
                  { line: 5, annotation: "Allocate memory for doubles n, root", memory: [{variable: "n", type: "double", value: "?"}, {variable: "root", type: "double", value: "?"}], output: "" },
                  { line: 6, annotation: "scanf() reads '25' from user", memory: [{variable: "n", type: "double", value: "25.00"}, {variable: "root", type: "double", value: "?"}], output: "" },
                  { line: 7, annotation: "Compute square root", memory: [{variable: "n", type: "double", value: "25.00"}, {variable: "root", type: "double", value: "5.00"}], output: "" },
                  { line: 8, annotation: "printf() displays result", memory: [{variable: "n", type: "double", value: "25.00"}, {variable: "root", type: "double", value: "5.00"}], output: "Square Root: 5.00\n" },
                  { line: 9, annotation: "Program terminates successfully", memory: [{variable: "n", type: "double", value: "25.00"}, {variable: "root", type: "double", value: "5.00"}], output: "Square Root: 5.00\n" }
                ]
              },
              posttest: [
                { question: "What is the output for input 2?", options: ["1.00", "1.41", "4.00", "2.00"], answerIndex: 1 },
                { question: "What is sqrt(0)?", options: ["1.00", "Undefined", "0.00", "NaN"], answerIndex: 2 },
                { question: "Which of the following correctly calls the square root function in C?", options: ["squareroot(n)", "sqrt[n]", "sqrt(n)", "Math.sqrt(n)"], answerIndex: 2 },
                { question: "What error occurs if you forget -lm during compilation?", options: ["Syntax error", "Runtime crash", "Linker error", "Logical error"], answerIndex: 2 },
                { question: "If the user enters 50, what is the approximate output?", options: ["25.00", "10.00", "5.00", "7.07"], answerIndex: 3 }
              ],
              references: [
                "Kernighan & Ritchie, \"The C Programming Language\", 2nd Ed., Prentice Hall",
                "Balagurusamy, \"Programming in ANSI C\", 8th Ed., McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Dept.",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          },
          {
            id: "c-w3-2",
            title: "Compound Interest",
            desc: "Calculate Compound Interest given P, R, T.",
            expected: "Compound Interest: 210.00",
            content: {
              aim: {
                text: "In this experiment, the student will write a C program to accept principal, rate of interest, and number of years from the user, compute the compound interest, and display the result. The student will:",
                bullets: [
                  "Declare and use float/double variables",
                  "Apply the compound interest formula: CI = P * pow(1 + R/100, T) - P",
                  "Use the pow() function from math.h",
                  "Use printf() with %.2f to display the result to 2 decimal places",
                  "Distinguish between simple interest and compound interest computations"
                ]
              },
              theory: [
                {
                  title: "Compound Interest Formula",
                  body: ["Unlike simple interest, compound interest calculates interest on both the principal and the previously accumulated interest:", "A = P * pow(1 + R/100, T)", "CI = A - P", "Where: P = Principal, R = Annual rate, T = Time, A = Amount"]
                },
                {
                  title: "pow() Function",
                  body: ["Syntax: double pow(double base, double exp);", "Returns base raised to the power exp. Requires #include <math.h> and -lm at compilation."]
                },
                {
                  title: "Why Not Use Simple Multiplication?",
                  body: ["Compound interest involves raising a value to a power (exponentiation), which cannot be done cleanly with * alone for arbitrary T.", "pow() handles this for any real value of T, including fractional years."]
                },
                {
                  title: "Float vs Double",
                  body: ["For financial calculations with many decimal places, double is more precise than float. Always prefer double when using pow() and similar functions."]
                }
              ],
              pretest: [
                { question: "What is the formula for the Amount in compound interest?", options: ["A = P + R * T / 100", "A = P * pow(1 + R/100, T)", "A = P * R * T / 100", "A = P / pow(R, T)"], answerIndex: 1 },
                { question: "Which function is used to raise a number to a power in C?", options: ["sqrt()", "exp()", "pow()", "log()"], answerIndex: 2 },
                { question: "What is the Compound Interest itself (not the Amount)?", options: ["CI = P * pow(1 + R/100, T)", "CI = A + P", "CI = A - P", "CI = P - A"], answerIndex: 2 },
                { question: "For P = 1000, R = 10, T = 1, what is the compound interest?", options: ["110.00", "10.00", "100.00", "1100.00"], answerIndex: 2 },
                { question: "Why is pow() preferred over repeated multiplication for compound interest?", options: ["It is faster for small T", "It correctly handles any value of T including non-integers", "It avoids the need for float variables", "It rounds the result automatically"], answerIndex: 1 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully.",
                "Open the Simulation tab and step through the program trace.",
                "Observe how pow() is called and how CI is derived from Amount minus Principal.",
                "Open the Code Test tab. Starter code is pre-loaded.",
                "In the Stdin box enter principal, rate, time — e.g. 1000 10 2",
                "Click Run Code. Verify output: Compound Interest: 210.00",
                "Try fractional rates like 1000 8.5 3 and compare with simple interest. Proceed to Posttest."
              ],
              simulation: {
                code: "#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double p, r, t, a, ci;\n    scanf(\"%lf %lf %lf\", &p, &r, &t);\n    a = p * pow(1 + r/100, t);\n    ci = a - p;\n    printf(\"Compound Interest: %.2f\\n\", ci);\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Load stdio and math libraries", memory: [], output: "" },
                  { line: 5, annotation: "Allocate memory for variables", memory: [{variable: "p", type: "double", value: "?"}, {variable: "r", type: "double", value: "?"}, {variable: "t", type: "double", value: "?"}, {variable: "a", type: "double", value: "?"}, {variable: "ci", type: "double", value: "?"}], output: "" },
                  { line: 6, annotation: "scanf() reads '1000 10 2'", memory: [{variable: "p", type: "double", value: "1000"}, {variable: "r", type: "double", value: "10"}, {variable: "t", type: "double", value: "2"}, {variable: "a", type: "double", value: "?"}, {variable: "ci", type: "double", value: "?"}], output: "" },
                  { line: 7, annotation: "Compute Amount using pow()", memory: [{variable: "p", type: "double", value: "1000"}, {variable: "r", type: "double", value: "10"}, {variable: "t", type: "double", value: "2"}, {variable: "a", type: "double", value: "1210.00"}, {variable: "ci", type: "double", value: "?"}], output: "" },
                  { line: 8, annotation: "Compute Compound Interest", memory: [{variable: "p", type: "double", value: "1000"}, {variable: "r", type: "double", value: "10"}, {variable: "t", type: "double", value: "2"}, {variable: "a", type: "double", value: "1210.00"}, {variable: "ci", type: "double", value: "210.00"}], output: "" },
                  { line: 9, annotation: "printf() displays result", memory: [{variable: "p", type: "double", value: "1000"}, {variable: "r", type: "double", value: "10"}, {variable: "t", type: "double", value: "2"}, {variable: "a", type: "double", value: "1210.00"}, {variable: "ci", type: "double", value: "210.00"}], output: "Compound Interest: 210.00\n" },
                  { line: 10, annotation: "Program terminates successfully", memory: [{variable: "p", type: "double", value: "1000"}, {variable: "r", type: "double", value: "10"}, {variable: "t", type: "double", value: "2"}, {variable: "a", type: "double", value: "1210.00"}, {variable: "ci", type: "double", value: "210.00"}], output: "Compound Interest: 210.00\n" }
                ]
              },
              posttest: [
                { question: "For P = 1000, R = 10, T = 2, what is the Amount?", options: ["1100.00", "1200.00", "1210.00", "1020.00"], answerIndex: 2 },
                { question: "What is the Compound Interest for P = 1000, R = 10, T = 2?", options: ["200.00", "210.00", "100.00", "220.00"], answerIndex: 1 },
                { question: "How does compound interest differ from simple interest for the same inputs?", options: ["They are always equal", "Simple interest is always greater", "Compound interest grows faster because interest is earned on interest", "Compound interest only applies to integers"], answerIndex: 2 },
                { question: "What header and flag are required to use pow() in C?", options: ["stdlib.h, no flag needed", "math.h, -lm", "stdio.h, -lm", "math.h, -lmath"], answerIndex: 1 },
                { question: "For P = 500, R = 5, T = 3, what is CI approximately?", options: ["75.00", "78.81", "57.88", "100.00"], answerIndex: 1 }
              ],
              references: [
                "Kernighan & Ritchie, \"The C Programming Language\", 2nd Ed., Prentice Hall",
                "Balagurusamy, \"Programming in ANSI C\", 8th Ed., McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Dept.",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          },
          {
            id: "c-w3-3",
            title: "Heron's Formula",
            desc: "Calculate the area of a triangle using sides a, b, c.",
            expected: "Area: 6.00",
            content: {
              aim: {
                text: "In this experiment, the student will write a C program to accept the three sides of a triangle from the user and compute its area using Heron's Formula. The student will:",
                bullets: [
                  "Declare and use float/double variables for side lengths and area",
                  "Compute the semi-perimeter of a triangle",
                  "Apply Heron's Formula using sqrt() from math.h",
                  "Validate that the three sides form a valid triangle",
                  "Use printf() with %.2f to display the computed area"
                ]
              },
              theory: [
                {
                  title: "Heron's Formula",
                  body: ["Given a triangle with sides a, b, and c, its area can be computed without knowing any angle:", "s = (a + b + c) / 2 (semi-perimeter)", "Area = sqrt(s * (s-a) * (s-b) * (s-c))", "This formula works for any triangle as long as the sides satisfy the triangle inequality."]
                },
                {
                  title: "Triangle Inequality",
                  body: ["For three sides to form a valid triangle, the sum of any two sides must be greater than the third side:", "a + b > c, b + c > a, a + c > b", "If this condition is not met, the expression inside sqrt() becomes negative or zero, yielding NaN or 0 as the area."]
                },
                {
                  title: "Semi-perimeter",
                  body: ["s is half the perimeter. It simplifies the formula and is a required intermediate value. Always compute s before computing the area."]
                },
                {
                  title: "sqrt() and math.h",
                  body: ["Heron's Formula requires a square root. Include math.h and compile with -lm."]
                }
              ],
              pretest: [
                { question: "What is the semi-perimeter s of a triangle with sides 3, 4, 5?", options: ["12", "7", "6", "5"], answerIndex: 2 },
                { question: "Using Heron's Formula, what is the area of a triangle with sides 3, 4, 5?", options: ["7.50", "5.00", "6.00", "12.00"], answerIndex: 2 },
                { question: "Which function computes the square root needed in Heron's Formula?", options: ["pow()", "sqrt()", "abs()", "ceil()"], answerIndex: 1 },
                { question: "What does the triangle inequality state?", options: ["All sides must be equal", "The sum of any two sides must be greater than the third", "One side must be the square root of another", "The sides must be integers"], answerIndex: 1 },
                { question: "What is the result inside sqrt() if the sides do not form a valid triangle?", options: ["A large positive number", "Zero or a negative number", "Always 1", "An integer"], answerIndex: 1 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully.",
                "Open the Simulation tab and step through the program trace.",
                "Observe how s is computed first and how each factor (s-a), (s-b), (s-c) is evaluated.",
                "Open the Code Test tab. Starter code is pre-loaded.",
                "In the Stdin box enter three side lengths — e.g. 3 4 5",
                "Click Run Code. Verify output: Area: 6.00",
                "Try an equilateral triangle like 5 5 5 and an invalid input like 1 2 10. Proceed to Posttest."
              ],
              simulation: {
                code: "#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double a, b, c, s, area;\n    scanf(\"%lf %lf %lf\", &a, &b, &c);\n    s = (a + b + c) / 2;\n    area = sqrt(s * (s-a) * (s-b) * (s-c));\n    printf(\"Area: %.2f\\n\", area);\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Load stdio and math libraries", memory: [], output: "" },
                  { line: 5, annotation: "Allocate memory for variables", memory: [{variable: "a", type: "double", value: "?"}, {variable: "b", type: "double", value: "?"}, {variable: "c", type: "double", value: "?"}, {variable: "s", type: "double", value: "?"}, {variable: "area", type: "double", value: "?"}], output: "" },
                  { line: 6, annotation: "scanf() reads '3 4 5' from user", memory: [{variable: "a", type: "double", value: "3.00"}, {variable: "b", type: "double", value: "4.00"}, {variable: "c", type: "double", value: "5.00"}, {variable: "s", type: "double", value: "?"}, {variable: "area", type: "double", value: "?"}], output: "" },
                  { line: 7, annotation: "Compute semi-perimeter s", memory: [{variable: "a", type: "double", value: "3.00"}, {variable: "b", type: "double", value: "4.00"}, {variable: "c", type: "double", value: "5.00"}, {variable: "s", type: "double", value: "6.00"}, {variable: "area", type: "double", value: "?"}], output: "" },
                  { line: 8, annotation: "Compute Area using Heron's formula", memory: [{variable: "a", type: "double", value: "3.00"}, {variable: "b", type: "double", value: "4.00"}, {variable: "c", type: "double", value: "5.00"}, {variable: "s", type: "double", value: "6.00"}, {variable: "area", type: "double", value: "6.00"}], output: "" },
                  { line: 9, annotation: "printf() displays area", memory: [{variable: "a", type: "double", value: "3.00"}, {variable: "b", type: "double", value: "4.00"}, {variable: "c", type: "double", value: "5.00"}, {variable: "s", type: "double", value: "6.00"}, {variable: "area", type: "double", value: "6.00"}], output: "Area: 6.00\n" },
                  { line: 10, annotation: "Program terminates successfully", memory: [{variable: "a", type: "double", value: "3.00"}, {variable: "b", type: "double", value: "4.00"}, {variable: "c", type: "double", value: "5.00"}, {variable: "s", type: "double", value: "6.00"}, {variable: "area", type: "double", value: "6.00"}], output: "Area: 6.00\n" }
                ]
              },
              posttest: [
                { question: "For sides 5, 5, 5, what is the semi-perimeter?", options: ["5.00", "15.00", "7.50", "10.00"], answerIndex: 2 },
                { question: "What is the area of an equilateral triangle with side 6?", options: ["36.00", "18.00", "15.59", "12.00"], answerIndex: 2 },
                { question: "For sides 1, 2, 10, what does the program output?", options: ["Area: 0.00", "Area: NaN or invalid result", "Area: 5.00", "Compilation error"], answerIndex: 1 },
                { question: "Which intermediate value must be computed before the area in Heron's Formula?", options: ["The height of the triangle", "The perimeter only", "The semi-perimeter s", "The largest angle"], answerIndex: 2 },
                { question: "For sides 6, 8, 10, what is the area?", options: ["48.00", "20.00", "30.00", "24.00"], answerIndex: 2 }
              ],
              references: [
                "Kernighan & Ritchie, \"The C Programming Language\", 2nd Ed., Prentice Hall",
                "Balagurusamy, \"Programming in ANSI C\", 8th Ed., McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Dept.",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          },
          {
            id: "c-w3-4",
            title: "Distance Traveled",
            desc: "Calculate distance using s = ut + 0.5*a*t^2.",
            expected: "Distance: 20.00",
            content: {
              aim: {
                text: "In this experiment, the student will write a C program to accept initial velocity, acceleration, and time from the user, compute the distance traveled using the equation of motion, and display the result. The student will:",
                bullets: [
                  "Declare and use float variables for physical quantities",
                  "Apply the kinematic equation: s = ut + (1/2) * a * t * t",
                  "Understand why (1/2) must be written as 0.5 or (float)1/2 to avoid integer truncation",
                  "Use printf() with %.2f to display the distance to 2 decimal places"
                ]
              },
              theory: [
                {
                  title: "Equation of Motion",
                  body: ["The distance traveled by an object under uniform acceleration is:", "s = u*t + 0.5 * a * t * t", "Where: s = Distance (m), u = Initial velocity (m/s), a = Acceleration (m/s²), t = Time (s)", "This is the second equation of motion from classical kinematics."]
                },
                {
                  title: "Integer Division Pitfall",
                  body: ["Writing 1/2 in C evaluates to 0 because both operands are integer literals, truncating the result.", "Always write 0.5 or (float)1/2 to preserve the half factor."]
                },
                {
                  title: "Squaring t",
                  body: ["C has no ** operator. To compute t squared, write t * t or use pow(t, 2).", "For simple squaring, t * t is preferred as it avoids the overhead of calling pow()."]
                },
                {
                  title: "Units",
                  body: ["Ensure consistent units. If u is in m/s and a is in m/s², then t must be in seconds and s will be in metres."]
                }
              ],
              pretest: [
                { question: "What is the kinematic formula for distance traveled under uniform acceleration?", options: ["s = u + a * t", "s = u*t + 0.5 * a * t * t", "s = 0.5 * u * t * t + a", "s = (u + a) * t / 2"], answerIndex: 1 },
                { question: "What does 1/2 evaluate to in C when both are integer literals?", options: ["0.5", "1", "0", "2"], answerIndex: 2 },
                { question: "How should the half factor be correctly written in C?", options: ["1/2", "1//2", "0.5", "half"], answerIndex: 2 },
                { question: "If u = 0, a = 10, t = 2, what is the distance?", options: ["40.00", "10.00", "20.00", "5.00"], answerIndex: 2 },
                { question: "Which operator computes t squared in C?", options: ["t^2", "t**2", "pow(t,2) or t*t", "sq(t)"], answerIndex: 2 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully.",
                "Open the Simulation tab and step through the program trace.",
                "Observe how each term u*t and 0.5*a*t*t is computed and summed.",
                "Open the Code Test tab. Starter code is pre-loaded.",
                "In the Stdin box enter initial velocity, acceleration, time — e.g. 0 10 2",
                "Click Run Code. Verify output: Distance: 20.00",
                "Try u = 5, a = 2, t = 3 and manually verify. Proceed to Posttest."
              ],
              simulation: {
                code: "#include <stdio.h>\n\nint main() {\n    float u, a, t, s;\n    scanf(\"%f %f %f\", &u, &a, &t);\n    s = u * t + 0.5 * a * t * t;\n    printf(\"Distance: %.2f\\n\", s);\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Load stdio library", memory: [], output: "" },
                  { line: 4, annotation: "Allocate memory for floats", memory: [{variable: "u", type: "float", value: "?"}, {variable: "a", type: "float", value: "?"}, {variable: "t", type: "float", value: "?"}, {variable: "s", type: "float", value: "?"}], output: "" },
                  { line: 5, annotation: "scanf() reads '0 10 2'", memory: [{variable: "u", type: "float", value: "0.00"}, {variable: "a", type: "float", value: "10.00"}, {variable: "t", type: "float", value: "2.00"}, {variable: "s", type: "float", value: "?"}], output: "" },
                  { line: 6, annotation: "Compute Distance s", memory: [{variable: "u", type: "float", value: "0.00"}, {variable: "a", type: "float", value: "10.00"}, {variable: "t", type: "float", value: "2.00"}, {variable: "s", type: "float", value: "20.00"}], output: "" },
                  { line: 7, annotation: "printf() displays distance", memory: [{variable: "u", type: "float", value: "0.00"}, {variable: "a", type: "float", value: "10.00"}, {variable: "t", type: "float", value: "2.00"}, {variable: "s", type: "float", value: "20.00"}], output: "Distance: 20.00\n" },
                  { line: 8, annotation: "Program terminates", memory: [{variable: "u", type: "float", value: "0.00"}, {variable: "a", type: "float", value: "10.00"}, {variable: "t", type: "float", value: "2.00"}, {variable: "s", type: "float", value: "20.00"}], output: "Distance: 20.00\n" }
                ]
              },
              posttest: [
                { question: "For u = 5, a = 2, t = 3, what is the distance?", options: ["20.00", "21.00", "24.00", "30.00"], answerIndex: 2 },
                { question: "What is the distance when u = 10, a = 0, t = 5?", options: ["0.00", "25.00", "50.00", "100.00"], answerIndex: 2 },
                { question: "Why is t*t preferred over pow(t,2) for squaring in simple programs?", options: ["pow() gives wrong results for integers", "t*t avoids including math.h and is simpler", "pow() only works for doubles", "t*t is always more accurate"], answerIndex: 1 },
                { question: "What is the output for u = 0, a = 0, t = 10?", options: ["10.00", "100.00", "0.00", "50.00"], answerIndex: 2 },
                { question: "For u = 20, a = -5, t = 4, what is the distance?", options: ["80.00", "40.00", "60.00", "20.00"], answerIndex: 1 }
              ],
              references: [
                "Kernighan & Ritchie, \"The C Programming Language\", 2nd Ed., Prentice Hall",
                "Balagurusamy, \"Programming in ANSI C\", 8th Ed., McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Dept.",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          }
        ],
      },
      {
        title: "WEEK 4",
        objective: "Expressions, operator precedence and associativity",
        tutorial: "Tutorial 4: Operators and Precedence",
        labTitle: "Lab 4: Expressions and Operators",
        experiments: [
          {
            id: "c-w4-1",
            title: "Expression Evaluation",
            desc: "Evaluate the expression A+B*C+(D*E)+F*G.",
            expected: "2 + 3 * 4 = 14",
            content: {
              aim: {
                text: "In this experiment, the student will write a C program to evaluate a complex arithmetic expression involving multiple operators and demonstrate the effect of operator precedence and associativity on the result. The student will:",
                bullets: [
                  "Understand operator precedence levels in C (*, /, % before +, -)",
                  "Understand left-to-right associativity for arithmetic operators",
                  "Use parentheses to control evaluation order",
                  "Declare and use int and float variables to observe truncation vs precision",
                  "Print intermediate and final results using printf()"
                ]
              },
              theory: [
                {
                  title: "Operator Precedence",
                  body: ["When an expression contains multiple operators, C evaluates higher-precedence operators first. The standard precedence order for arithmetic:", "Level 1 (highest): *, /, %", "Level 2: +, -", "Level 3 (lowest): = (assignment)", "Example: 2 + 3 * 4 evaluates as 2 + (3 * 4) = 2 + 12 = 14, not 20."]
                },
                {
                  title: "Associativity",
                  body: ["When two operators have equal precedence, associativity determines evaluation order. All basic arithmetic operators are left-to-right associative:", "10 - 3 - 2 evaluates as (10 - 3) - 2 = 5, not 10 - (3 - 2) = 9."]
                },
                {
                  title: "Parentheses",
                  body: ["Parentheses override all precedence rules and force a sub-expression to be evaluated first:", "(2 + 3) * 4 = 20"]
                },
                {
                  title: "Modulus and Types",
                  body: ["Integer vs Float Division — 7 / 2 = 3 (integer truncation). 7.0 / 2 = 3.5 (float).", "Modulus Operator — % gives the remainder of integer division. 17 % 5 = 2 because 17 = 5*3 + 2. % is only valid for integer operands in C."]
                },
                {
                  title: "Increment and Decrement",
                  body: ["++ and -- modify a variable by 1.", "Pre-increment ++x : increments first, then uses value.", "Post-increment x++ : uses value first, then increments."]
                }
              ],
              pretest: [
                { question: "What is the result of 2 + 3 * 4 in C?", options: ["20", "14", "24", "9"], answerIndex: 1 },
                { question: "What is the result of 10 - 3 - 2 in C?", options: ["9", "5", "7", "3"], answerIndex: 1 },
                { question: "What is 17 % 5?", options: ["3", "2", "1", "0"], answerIndex: 1 },
                { question: "What is the value of x after: int x = 5; int y = x++;?", options: ["x = 6, y = 6", "x = 5, y = 5", "x = 6, y = 5", "x = 5, y = 6"], answerIndex: 2 },
                { question: "What is the result of (2 + 3) * (8 - 4) / 2?", options: ["14", "8", "10", "20"], answerIndex: 2 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully.",
                "Open the Simulation tab and step through the expression evaluation trace.",
                "Observe how each sub-expression is evaluated in order of precedence.",
                "Open the Code Test tab. Starter code is pre-loaded.",
                "The program evaluates a set of expressions and prints each result.",
                "Click Run Code. Verify each printed result matches the expected value.",
                "Modify the expressions using parentheses and observe how results change. Proceed to Posttest."
              ],
              simulation: {
                code: "#include <stdio.h>\n\nint main() {\n    int res1 = 2 + 3 * 4;\n    int res2 = 10 - 3 - 2;\n    int res3 = 17 % 5;\n    printf(\"2 + 3 * 4 = %d\\n\", res1);\n    printf(\"10 - 3 - 2 = %d\\n\", res2);\n    printf(\"17 %% 5 = %d\\n\", res3);\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Load stdio library", memory: [], output: "" },
                  { line: 4, annotation: "Evaluate 3 * 4 first, then 2 + 12 = 14", memory: [{variable: "res1", type: "int", value: "14"}], output: "" },
                  { line: 5, annotation: "Left to right: 10 - 3 = 7, then 7 - 2 = 5", memory: [{variable: "res1", type: "int", value: "14"}, {variable: "res2", type: "int", value: "5"}], output: "" },
                  { line: 6, annotation: "17 % 5 is remainder of 17 / 5, which is 2", memory: [{variable: "res1", type: "int", value: "14"}, {variable: "res2", type: "int", value: "5"}, {variable: "res3", type: "int", value: "2"}], output: "" },
                  { line: 7, annotation: "Print first result", memory: [{variable: "res1", type: "int", value: "14"}, {variable: "res2", type: "int", value: "5"}, {variable: "res3", type: "int", value: "2"}], output: "2 + 3 * 4 = 14\n" },
                  { line: 8, annotation: "Print second result", memory: [{variable: "res1", type: "int", value: "14"}, {variable: "res2", type: "int", value: "5"}, {variable: "res3", type: "int", value: "2"}], output: "2 + 3 * 4 = 14\n10 - 3 - 2 = 5\n" },
                  { line: 9, annotation: "Print third result", memory: [{variable: "res1", type: "int", value: "14"}, {variable: "res2", type: "int", value: "5"}, {variable: "res3", type: "int", value: "2"}], output: "2 + 3 * 4 = 14\n10 - 3 - 2 = 5\n17 % 5 = 2\n" },
                  { line: 10, annotation: "Program terminates", memory: [{variable: "res1", type: "int", value: "14"}, {variable: "res2", type: "int", value: "5"}, {variable: "res3", type: "int", value: "2"}], output: "2 + 3 * 4 = 14\n10 - 3 - 2 = 5\n17 % 5 = 2\n" }
                ]
              },
              posttest: [
                { question: "What is the result of 100 / 4 * 5 in C?", options: ["5", "20", "125", "500"], answerIndex: 2 },
                { question: "What is the value of 5 + 3 * 2 - 8 / 4?", options: ["7", "9", "8", "4"], answerIndex: 1 },
                { question: "What does ++x do differently from x++?", options: ["No difference", "++x increments after use; x++ increments before use", "++x increments before use; x++ increments after use", "++x works only on float"], answerIndex: 2 },
                { question: "What is the result of 2 * 3 + 4 * 5 - 6 / 2?", options: ["20", "23", "18", "30"], answerIndex: 1 },
                { question: "Which expression evaluates to 1 in C?", options: ["5 / 2 * 2", "5 % 2", "5 - 2 * 2", "5 * 0 + 1 / 2"], answerIndex: 1 }
              ],
              references: [
                "Kernighan & Ritchie, \"The C Programming Language\", 2nd Ed., Prentice Hall",
                "Balagurusamy, \"Programming in ANSI C\", 8th Ed., McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Dept.",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          },
          {
            id: "c-w4-2",
            title: "Max of Three",
            desc: "Find maximum among three numbers using conditional operator.",
            expected: "Maximum: 25",
            content: {
              aim: {
                text: "In this experiment, the student will write a C program to accept three integers from the user and determine the largest among them using the ternary operator and/or relational operators. The student will:",
                bullets: [
                  "Declare and use int variables",
                  "Apply relational operators (>, <, >=, <=, ==, !=)",
                  "Use the ternary (conditional) operator ?: to select the maximum value",
                  "Understand short-circuit evaluation in logical expressions",
                  "Use printf() to display the result"
                ]
              },
              theory: [
                {
                  title: "Relational Operators",
                  body: ["Used to compare two values and return 1 (true) or 0 (false):", "> greater than, < less than, >= greater than or equal to, <= less than or equal to", "== equal to (note: == not =, which is assignment)", "!= not equal to"]
                },
                {
                  title: "Ternary Operator",
                  body: ["The conditional (ternary) operator is the only C operator that takes three operands.", "Syntax: condition ? expression_if_true : expression_if_false", "Example: max = (a > b) ? a : b;", "If a > b is true, max gets a; otherwise max gets b."]
                },
                {
                  title: "Finding Max of Three",
                  body: ["Chain two ternary operations:", "max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);", "Alternatively, use two sequential comparisons with a temporary variable:", "max = a; if (b > max) max = b; if (c > max) max = c;"]
                },
                {
                  title: "Logical Operators and Precedence",
                  body: ["Logical Operators — && (AND), || (OR), ! (NOT) are used to combine conditions. (a > b && a > c) is true only when a is strictly greater than both b and c.", "Arithmetic operators have higher precedence than relational operators.", "Relational operators have higher precedence than logical operators.", "Ternary has lower precedence than arithmetic and relational but higher than assignment."]
                }
              ],
              pretest: [
                { question: "What does the relational operator > return when the condition is false?", options: ["-1", "0", "1", "NULL"], answerIndex: 1 },
                { question: "What is the result of (10 > 5) ? 10 : 5?", options: ["5", "0", "1", "10"], answerIndex: 3 },
                { question: "Which operator is the ternary operator in C?", options: ["::", "?:", "??", "->"], answerIndex: 1 },
                { question: "For a = 3, b = 7, c = 5, what does (a > b) ? a : b evaluate to?", options: ["3", "5", "7", "0"], answerIndex: 2 },
                { question: "What is the difference between = and == in C?", options: ["No difference", "= compares, == assigns", "= assigns a value; == tests equality", "== is only for floats"], answerIndex: 2 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully.",
                "Open the Simulation tab and step through the ternary evaluation trace.",
                "Observe how conditions are evaluated and how the ternary operator selects a value.",
                "Open the Code Test tab. Starter code is pre-loaded.",
                "In the Stdin box enter three integers — e.g. 10 25 7",
                "Click Run Code. Verify output: Maximum: 25",
                "Try equal values like 5 5 5 and negative values like -3 -1 -7. Proceed to Posttest."
              ],
              simulation: {
                code: "#include <stdio.h>\n\nint main() {\n    int a, b, c, max;\n    scanf(\"%d %d %d\", &a, &b, &c);\n    max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);\n    printf(\"Maximum: %d\\n\", max);\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Load stdio library", memory: [], output: "" },
                  { line: 4, annotation: "Allocate memory for integers", memory: [{variable: "a", type: "int", value: "?"}, {variable: "b", type: "int", value: "?"}, {variable: "c", type: "int", value: "?"}, {variable: "max", type: "int", value: "?"}], output: "" },
                  { line: 5, annotation: "scanf() reads '10 25 7'", memory: [{variable: "a", type: "int", value: "10"}, {variable: "b", type: "int", value: "25"}, {variable: "c", type: "int", value: "7"}, {variable: "max", type: "int", value: "?"}], output: "" },
                  { line: 6, annotation: "Evaluate ternary: (10 > 25) is false, so evaluate ((25 > 7) ? 25 : 7) -> 25", memory: [{variable: "a", type: "int", value: "10"}, {variable: "b", type: "int", value: "25"}, {variable: "c", type: "int", value: "7"}, {variable: "max", type: "int", value: "25"}], output: "" },
                  { line: 7, annotation: "printf() displays max", memory: [{variable: "a", type: "int", value: "10"}, {variable: "b", type: "int", value: "25"}, {variable: "c", type: "int", value: "7"}, {variable: "max", type: "int", value: "25"}], output: "Maximum: 25\n" },
                  { line: 8, annotation: "Program terminates", memory: [{variable: "a", type: "int", value: "10"}, {variable: "b", type: "int", value: "25"}, {variable: "c", type: "int", value: "7"}, {variable: "max", type: "int", value: "25"}], output: "Maximum: 25\n" }
                ]
              },
              posttest: [
                { question: "For inputs 4, 4, 4, what is the output?", options: ["0", "Error", "4", "Undefined"], answerIndex: 2 },
                { question: "Which expression correctly finds the max of a and b?", options: ["max = a > b ? b : a", "max = (a > b) ? a : b", "max = a < b ? a : b", "max = a == b ? a : b"], answerIndex: 1 },
                { question: "For inputs -5, -1, -9, what is the maximum?", options: ["-9", "-5", "-1", "0"], answerIndex: 2 },
                { question: "What is the precedence order (highest to lowest) relevant here?", options: ["Ternary → Relational → Arithmetic", "Arithmetic → Ternary → Relational", "Arithmetic → Relational → Ternary", "Relational → Arithmetic → Ternary"], answerIndex: 2 },
                { question: "For a = 10, b = 20, c = 15, what does the following evaluate to? (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c)", options: ["10", "15", "20", "0"], answerIndex: 2 }
              ],
              references: [
                "Kernighan & Ritchie, \"The C Programming Language\", 2nd Ed., Prentice Hall",
                "Balagurusamy, \"Programming in ANSI C\", 8th Ed., McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Dept.",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          },
          {
            id: "c-w4-3",
            title: "Marks Average",
            desc: "Calculate total and average of 5 subjects.",
            expected: "Total: 425 Average: 85.00 Grade: B",
            content: {
              aim: {
                text: "In this experiment, the student will write a C program to accept marks for multiple subjects from the user, compute the total and average marks, and display the results along with a grade determined using relational and logical operators. The student will:",
                bullets: [
                  "Declare and use int variables for marks and float for average",
                  "Apply compound assignment operators (+=) to accumulate a total",
                  "Use relational and logical operators to determine a grade band",
                  "Use the ternary operator or chained conditions for grade classification",
                  "Use printf() with %d and %.2f format specifiers"
                ]
              },
              theory: [
                {
                  title: "Compound Assignment Operators",
                  body: ["C provides shorthand operators that combine arithmetic with assignment:", "total += marks is equivalent to total = total + marks", "x *= 2 is equivalent to x = x * 2", "These make code concise and reduce repetition."]
                },
                {
                  title: "Average Calculation",
                  body: ["To compute an average:", "average = (float)total / n", "The cast to float ensures decimal precision. If total and n are both int, integer division truncates the result."]
                },
                {
                  title: "Relational and Logical Operators in Grading",
                  body: ["Grade bands are checked using >= and <= with && (AND):", "if (average >= 90 && average <= 100) → Grade A", "if (average >= 75 && average < 90) → Grade B", "if (average >= 60 && average < 75) → Grade C", "if (average >= 40 && average < 60) → Grade D", "if (average < 40) → Grade F"]
                },
                {
                  title: "Precedence and Associativity",
                  body: ["Arithmetic is evaluated first, then relational operators (>, >=, <, <=), then logical operators (&&, ||).", "Parentheses can be used to make complex conditions clearer.", "Both && and || are left-to-right associative. In (a && b && c), a is evaluated first; if a is false, the rest are short-circuited (not evaluated)."]
                }
              ],
              pretest: [
                { question: "What does the += operator do?", options: ["Compares two values", "Adds the right operand to the left and assigns the result", "Always increments by 1", "Performs modulus and assigns"], answerIndex: 1 },
                { question: "For 5 subject marks totalling 375, what is the average?", options: ["70.00", "75.00", "80.00", "65.00"], answerIndex: 1 },
                { question: "Which logical operator means AND in C?", options: ["&", "|", "&&", "||"], answerIndex: 2 },
                { question: "What is the correct way to check if average is between 60 and 75 (inclusive of 60)?", options: ["60 < average < 75", "average >= 60 || average < 75", "average >= 60 && average < 75", "average == 60 && 75"], answerIndex: 2 },
                { question: "Why cast total to float before dividing by number of subjects?", options: ["To make the code longer", "To avoid integer truncation and get a decimal average", "Because printf requires float", "Because += only works with float"], answerIndex: 1 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully.",
                "Open the Simulation tab and step through the accumulation and grading trace.",
                "Observe how += builds the total and how the grade condition chain is evaluated.",
                "Open the Code Test tab. Starter code is pre-loaded.",
                "In the Stdin box enter marks for 5 subjects — e.g. 85 90 78 92 80",
                "Click Run Code. Verify output shows Total, Average, and Grade correctly.",
                "Try borderline inputs like 40 40 40 40 40 and 39 39 39 39 39. Proceed to Posttest."
              ],
              simulation: {
                code: "#include <stdio.h>\n\nint main() {\n    int m1, m2, m3, m4, m5;\n    int total = 0;\n    float avg;\n    scanf(\"%d %d %d %d %d\", &m1, &m2, &m3, &m4, &m5);\n    total += m1; total += m2; total += m3; total += m4; total += m5;\n    avg = (float)total / 5;\n    printf(\"Total: %d\\nAverage: %.2f\\n\", total, avg);\n    if (avg >= 90) printf(\"Grade: A\\n\");\n    else if (avg >= 75) printf(\"Grade: B\\n\");\n    else if (avg >= 60) printf(\"Grade: C\\n\");\n    else if (avg >= 40) printf(\"Grade: D\\n\");\n    else printf(\"Grade: F\\n\");\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Load stdio library", memory: [], output: "" },
                  { line: 4, annotation: "Allocate memory for marks", memory: [{variable: "total", type: "int", value: "0"}, {variable: "avg", type: "float", value: "?"}], output: "" },
                  { line: 7, annotation: "scanf() reads '85 90 78 92 80'", memory: [{variable: "total", type: "int", value: "0"}, {variable: "avg", type: "float", value: "?"}], output: "" },
                  { line: 8, annotation: "Accumulate total using +=", memory: [{variable: "total", type: "int", value: "425"}, {variable: "avg", type: "float", value: "?"}], output: "" },
                  { line: 9, annotation: "Compute float average", memory: [{variable: "total", type: "int", value: "425"}, {variable: "avg", type: "float", value: "85.00"}], output: "" },
                  { line: 10, annotation: "Print total and average", memory: [{variable: "total", type: "int", value: "425"}, {variable: "avg", type: "float", value: "85.00"}], output: "Total: 425\nAverage: 85.00\n" },
                  { line: 11, annotation: "Check if avg >= 90 (False)", memory: [{variable: "total", type: "int", value: "425"}, {variable: "avg", type: "float", value: "85.00"}], output: "Total: 425\nAverage: 85.00\n" },
                  { line: 12, annotation: "Check if avg >= 75 (True), print Grade: B", memory: [{variable: "total", type: "int", value: "425"}, {variable: "avg", type: "float", value: "85.00"}], output: "Total: 425\nAverage: 85.00\nGrade: B\n" },
                  { line: 17, annotation: "Program terminates", memory: [{variable: "total", type: "int", value: "425"}, {variable: "avg", type: "float", value: "85.00"}], output: "Total: 425\nAverage: 85.00\nGrade: B\n" }
                ]
              },
              posttest: [
                { question: "For marks 70 80 90 60 50, what is the total?", options: ["340", "360", "350", "370"], answerIndex: 2 },
                { question: "For the same marks above (total 350), what is the average?", options: ["75.00", "70.00", "65.00", "80.00"], answerIndex: 1 },
                { question: "With average 70.00, which grade is awarded?", options: ["A", "B", "C", "D"], answerIndex: 2 },
                { question: "Which compound operator correctly accumulates marks into total?", options: ["total == total + marks", "total = marks", "total += marks", "total =+ marks"], answerIndex: 2 },
                { question: "For marks 30 35 28 40 32, what is the grade?", options: ["D", "C", "F", "B"], answerIndex: 2 }
              ],
              references: [
                "Kernighan & Ritchie, \"The C Programming Language\", 2nd Ed., Prentice Hall",
                "Balagurusamy, \"Programming in ANSI C\", 8th Ed., McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Dept.",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          }
        ],
      },
      {
        title: "WEEK 5",
        objective: "if-else, switch-case, nested-if, relational and logical operators",
        tutorial: "Tutorial 5: Branching",
        labTitle: "Lab 5: Conditional statements",
        experiments: [
          {
            id: "c-w5-1",
            title: "Max and Min of Four Numbers",
            desc: "Find the max and min of four numbers using if-else.",
            expected: "Maximum: 45 Minimum: 7",
            content: {
              aim: {
                text: "In this experiment, the student will write a C program to accept four integers from the user and determine the largest and smallest among them using nested if-else statements and relational operators. The student will:",
                bullets: [
                  "Declare and use int variables for four input numbers",
                  "Apply nested if-else to compare multiple values systematically",
                  "Use relational operators (>, <) to drive conditional logic",
                  "Track both maximum and minimum in a single program pass",
                  "Use printf() to display the results clearly"
                ]
              },
              theory: [
                {
                  title: "Nested if-else",
                  body: ["An if-else construct placed inside another if or else block is called a nested if-else. It allows multi-way decisions based on a sequence of conditions.", "if (condition1) {\n    if (condition2) { ... }\n    else { ... }\n} else { ... }"]
                },
                {
                  title: "Finding Maximum and Minimum",
                  body: ["Assume the first variable is the maximum, then compare it against each remaining variable, updating the maximum whenever a larger value is found:", "max = a; if (b > max) max = b; if (c > max) max = c; if (d > max) max = d;", "Same strategy in reverse for minimum:", "min = a; if (b < min) min = b; if (c < min) min = c; if (d < min) min = d;"]
                },
                {
                  title: "Relational and Logical Operators",
                  body: ["> greater than, < less than, >= greater or equal, <= less or equal, == equality check, != not equal.", "Logical AND (&&) can combine conditions to check max in one step: if (a >= b && a >= c && a >= d) max = a;"]
                }
              ],
              pretest: [
                { question: "What is the correct initial assumption when finding the maximum of four numbers?", options: ["Assume max = 0", "Assume max = first number", "Assume max = last number", "Assume max = average"], answerIndex: 1 },
                { question: "For inputs 3, 9, 1, 7, what is the maximum?", options: ["3", "7", "1", "9"], answerIndex: 3 },
                { question: "For inputs 3, 9, 1, 7, what is the minimum?", options: ["3", "1", "7", "9"], answerIndex: 1 },
                { question: "What does the condition (b > max) check?", options: ["Whether b equals max", "Whether b is strictly greater than the current max", "Whether b is less than max", "Whether b is not zero"], answerIndex: 1 },
                { question: "What relational operator is used to find the smallest value?", options: [">", ">=", "<", "=="], answerIndex: 2 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully.",
                "Open the Simulation tab and step through the comparison trace.",
                "Observe how max and min are updated as each number is compared.",
                "Open the Code Test tab. Starter code is pre-loaded.",
                "In the Stdin box enter four integers — e.g. 12 45 7 30",
                "Click Run Code. Verify output: Maximum: 45  Minimum: 7",
                "Try all equal values like 5 5 5 5 and negative values like -3 -8 -1 -5. Proceed to Posttest."
              ],
              simulation: {
                code: "#include <stdio.h>\n\nint main() {\n    int a, b, c, d, max, min;\n    scanf(\"%d %d %d %d\", &a, &b, &c, &d);\n    max = a; min = a;\n    if (b > max) max = b;\n    if (c > max) max = c;\n    if (d > max) max = d;\n    if (b < min) min = b;\n    if (c < min) min = c;\n    if (d < min) min = d;\n    printf(\"Maximum: %d\\nMinimum: %d\\n\", max, min);\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Load stdio library", memory: [], output: "" },
                  { line: 4, annotation: "Allocate variables", memory: [{variable: "a", type: "int", value: "?"}, {variable: "b", type: "int", value: "?"}, {variable: "c", type: "int", value: "?"}, {variable: "d", type: "int", value: "?"}, {variable: "max", type: "int", value: "?"}, {variable: "min", type: "int", value: "?"}], output: "" },
                  { line: 5, annotation: "scanf() reads '12 45 7 30'", memory: [{variable: "a", type: "int", value: "12"}, {variable: "b", type: "int", value: "45"}, {variable: "c", type: "int", value: "7"}, {variable: "d", type: "int", value: "30"}, {variable: "max", type: "int", value: "?"}, {variable: "min", type: "int", value: "?"}], output: "" },
                  { line: 6, annotation: "Assume first is max and min", memory: [{variable: "a", type: "int", value: "12"}, {variable: "b", type: "int", value: "45"}, {variable: "c", type: "int", value: "7"}, {variable: "d", type: "int", value: "30"}, {variable: "max", type: "int", value: "12"}, {variable: "min", type: "int", value: "12"}], output: "" },
                  { line: 7, annotation: "45 > 12 is true, update max to 45", memory: [{variable: "a", type: "int", value: "12"}, {variable: "b", type: "int", value: "45"}, {variable: "c", type: "int", value: "7"}, {variable: "d", type: "int", value: "30"}, {variable: "max", type: "int", value: "45"}, {variable: "min", type: "int", value: "12"}], output: "" },
                  { line: 8, annotation: "7 > 45 is false, max stays 45", memory: [{variable: "a", type: "int", value: "12"}, {variable: "b", type: "int", value: "45"}, {variable: "c", type: "int", value: "7"}, {variable: "d", type: "int", value: "30"}, {variable: "max", type: "int", value: "45"}, {variable: "min", type: "int", value: "12"}], output: "" },
                  { line: 9, annotation: "30 > 45 is false, max stays 45", memory: [{variable: "a", type: "int", value: "12"}, {variable: "b", type: "int", value: "45"}, {variable: "c", type: "int", value: "7"}, {variable: "d", type: "int", value: "30"}, {variable: "max", type: "int", value: "45"}, {variable: "min", type: "int", value: "12"}], output: "" },
                  { line: 10, annotation: "45 < 12 is false, min stays 12", memory: [{variable: "a", type: "int", value: "12"}, {variable: "b", type: "int", value: "45"}, {variable: "c", type: "int", value: "7"}, {variable: "d", type: "int", value: "30"}, {variable: "max", type: "int", value: "45"}, {variable: "min", type: "int", value: "12"}], output: "" },
                  { line: 11, annotation: "7 < 12 is true, update min to 7", memory: [{variable: "a", type: "int", value: "12"}, {variable: "b", type: "int", value: "45"}, {variable: "c", type: "int", value: "7"}, {variable: "d", type: "int", value: "30"}, {variable: "max", type: "int", value: "45"}, {variable: "min", type: "int", value: "7"}], output: "" },
                  { line: 12, annotation: "30 < 7 is false, min stays 7", memory: [{variable: "a", type: "int", value: "12"}, {variable: "b", type: "int", value: "45"}, {variable: "c", type: "int", value: "7"}, {variable: "d", type: "int", value: "30"}, {variable: "max", type: "int", value: "45"}, {variable: "min", type: "int", value: "7"}], output: "" },
                  { line: 13, annotation: "Print result", memory: [{variable: "a", type: "int", value: "12"}, {variable: "b", type: "int", value: "45"}, {variable: "c", type: "int", value: "7"}, {variable: "d", type: "int", value: "30"}, {variable: "max", type: "int", value: "45"}, {variable: "min", type: "int", value: "7"}], output: "Maximum: 45\nMinimum: 7\n" },
                  { line: 14, annotation: "Program terminates", memory: [{variable: "a", type: "int", value: "12"}, {variable: "b", type: "int", value: "45"}, {variable: "c", type: "int", value: "7"}, {variable: "d", type: "int", value: "30"}, {variable: "max", type: "int", value: "45"}, {variable: "min", type: "int", value: "7"}], output: "Maximum: 45\nMinimum: 7\n" }
                ]
              },
              posttest: [
                { question: "For inputs -3, -8, -1, -5, what is the maximum?", options: ["-8", "-5", "-3", "-1"], answerIndex: 3 },
                { question: "For inputs -3, -8, -1, -5, what is the minimum?", options: ["-1", "-3", "-8", "-5"], answerIndex: 2 },
                { question: "What is wrong with initialising max = 0 when all inputs are negative?", options: ["Nothing, it always works", "max would remain 0, which is larger than all inputs — giving a wrong result", "It causes a compilation error", "It only fails when inputs are floats"], answerIndex: 1 },
                { question: "How many comparisons are needed to find max from four numbers using the sequential update method?", options: ["2", "4", "3", "6"], answerIndex: 2 },
                { question: "For inputs 5, 5, 5, 5, what are max and min?", options: ["max = 0, min = 0", "max = 5, min = 0", "max = 5, min = 5", "Undefined"], answerIndex: 2 }
              ],
              references: [
                "Kernighan & Ritchie, \"The C Programming Language\", 2nd Ed., Prentice Hall",
                "Balagurusamy, \"Programming in ANSI C\", 8th Ed., McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Dept.",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          },
          {
            id: "c-w5-2",
            title: "Electricity Bill Generator",
            desc: "Generate electricity bill based on units consumed.",
            expected: "Electricity Bill: Rs. 650.00",
            content: {
              aim: {
                text: "In this experiment, the student will write a C program to accept the number of units of electricity consumed by a customer and compute the electricity bill using a slab-based tariff structure implemented with if-else if-else statements. The student will:",
                bullets: [
                  "Declare and use int and float variables for units and bill amount",
                  "Apply if-else if-else chains to implement multi-slab billing logic",
                  "Perform cumulative arithmetic across multiple slabs",
                  "Use printf() with %.2f to display the bill to 2 decimal places",
                  "Understand real-world applications of conditional branching"
                ]
              },
              theory: [
                {
                  title: "Slab-Based Tariff",
                  body: ["Electricity boards charge different rates per unit for different consumption ranges. A common slab structure:", "Units 1–100 : Rs. 1.50 per unit", "Units 101–200 : Rs. 2.50 per unit (for units above 100)", "Units 201–300 : Rs. 4.00 per unit (for units above 200)", "Units above 300: Rs. 6.00 per unit (for units above 300)"]
                },
                {
                  title: "Cumulative Billing",
                  body: ["A consumer using 250 units pays:", "First 100 units: 100 * 1.50 = 150.00", "Next 100 units: 100 * 2.50 = 250.00", "Last 50 units: 50 * 4.00 = 200.00", "Total: Rs. 600.00"]
                },
                {
                  title: "if-else if-else Chain",
                  body: ["Used when exactly one of several mutually exclusive conditions must be selected:", "if (units <= 100) { ... } else if (units <= 200) { ... } else if (units <= 300) { ... } else { ... }", "Once a condition is true, the rest of the chain is skipped. A fixed service charge (e.g. Rs. 50) is often added to the computed amount."]
                }
              ],
              pretest: [
                { question: "What kind of conditional structure is best for multi-slab billing?", options: ["Nested ternary operators", "switch-case", "if-else if-else chain", "while loop"], answerIndex: 2 },
                { question: "A customer uses 150 units. How many units are billed at Rs. 2.50/unit?", options: ["150", "100", "50", "200"], answerIndex: 2 },
                { question: "What is the bill for 100 units at Rs. 1.50 per unit?", options: ["100.00", "200.00", "150.00", "50.00"], answerIndex: 2 },
                { question: "For 250 units using the slab above, what is the bill (excluding service charge)?", options: ["500.00", "625.00", "600.00", "550.00"], answerIndex: 2 },
                { question: "Once a true condition is found in an if-else if chain, what happens to the rest?", options: ["They are all evaluated", "They are skipped", "They cause an error", "They are evaluated only if the first is false"], answerIndex: 1 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully.",
                "Open the Simulation tab and step through the slab selection and bill computation.",
                "Observe how the if-else if chain selects exactly one slab block to execute.",
                "Open the Code Test tab. Starter code is pre-loaded.",
                "In the Stdin box enter number of units consumed — e.g. 250",
                "Click Run Code. Verify output: Electricity Bill: Rs. 650.00 (including Rs. 50 service charge)",
                "Try 50, 150, 350 units to exercise all slab branches. Proceed to Posttest."
              ],
              simulation: {
                code: "#include <stdio.h>\n\nint main() {\n    int units;\n    float bill = 0;\n    scanf(\"%d\", &units);\n    if (units <= 100) {\n        bill = units * 1.50;\n    } else if (units <= 200) {\n        bill = (100 * 1.50) + ((units - 100) * 2.50);\n    } else if (units <= 300) {\n        bill = (100 * 1.50) + (100 * 2.50) + ((units - 200) * 4.00);\n    } else {\n        bill = (100 * 1.50) + (100 * 2.50) + (100 * 4.00) + ((units - 300) * 6.00);\n    }\n    bill += 50.00;\n    printf(\"Electricity Bill: Rs. %.2f\\n\", bill);\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Load stdio library", memory: [], output: "" },
                  { line: 4, annotation: "Allocate variables", memory: [{variable: "units", type: "int", value: "?"}, {variable: "bill", type: "float", value: "0.00"}], output: "" },
                  { line: 5, annotation: "scanf() reads '250'", memory: [{variable: "units", type: "int", value: "250"}, {variable: "bill", type: "float", value: "0.00"}], output: "" },
                  { line: 6, annotation: "units <= 100 is false", memory: [{variable: "units", type: "int", value: "250"}, {variable: "bill", type: "float", value: "0.00"}], output: "" },
                  { line: 8, annotation: "units <= 200 is false", memory: [{variable: "units", type: "int", value: "250"}, {variable: "bill", type: "float", value: "0.00"}], output: "" },
                  { line: 10, annotation: "units <= 300 is true, executing this block", memory: [{variable: "units", type: "int", value: "250"}, {variable: "bill", type: "float", value: "0.00"}], output: "" },
                  { line: 11, annotation: "Calculate 150 + 250 + (50 * 4.00) = 600.00", memory: [{variable: "units", type: "int", value: "250"}, {variable: "bill", type: "float", value: "600.00"}], output: "" },
                  { line: 15, annotation: "Add fixed service charge of Rs. 50", memory: [{variable: "units", type: "int", value: "250"}, {variable: "bill", type: "float", value: "650.00"}], output: "" },
                  { line: 16, annotation: "printf() displays total bill", memory: [{variable: "units", type: "int", value: "250"}, {variable: "bill", type: "float", value: "650.00"}], output: "Electricity Bill: Rs. 650.00\n" },
                  { line: 17, annotation: "Program terminates", memory: [{variable: "units", type: "int", value: "250"}, {variable: "bill", type: "float", value: "650.00"}], output: "Electricity Bill: Rs. 650.00\n" }
                ]
              },
              posttest: [
                { question: "For 100 units, what is the bill (excluding service charge)?", options: ["200.00", "100.00", "250.00", "150.00"], answerIndex: 3 },
                { question: "For 200 units, what is the bill (excluding service charge)?", options: ["300.00", "400.00", "500.00", "350.00"], answerIndex: 2 },
                { question: "For 350 units, what is the bill (excluding service charge)?", options: ["900.00", "1100.00", "1050.00", "1150.00"], answerIndex: 3 },
                { question: "What is the role of the else block in the slab billing program?", options: ["Handles units equal to 300", "Handles zero units", "Handles units greater than 300", "Is never executed"], answerIndex: 2 },
                { question: "Why is a service charge added separately rather than inside each slab?", options: ["It makes the program longer", "It is a fixed charge applied regardless of units consumed", "It only applies to high consumers", "It is required by the C standard"], answerIndex: 1 }
              ],
              references: [
                "Kernighan & Ritchie, \"The C Programming Language\", 2nd Ed., Prentice Hall",
                "Balagurusamy, \"Programming in ANSI C\", 8th Ed., McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Dept.",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          },
          {
            id: "c-w5-3",
            title: "Quadratic Roots",
            desc: "Find roots of the quadratic equation ax2+bx+c=0.",
            expected: "Roots: 3.00, 2.00 or Complex",
            content: {
              aim: {
                text: "In this experiment, the student will write a C program to accept coefficients a, b, and c of a quadratic equation ax² + bx + c = 0 and compute and classify its roots using the discriminant. The student will:",
                bullets: [
                  "Declare and use float/double variables for coefficients and roots",
                  "Compute the discriminant: D = b*b - 4*a*c",
                  "Use nested if-else to classify roots as real & distinct, real & equal, or complex",
                  "Apply sqrt() from math.h to compute real roots",
                  "Handle edge cases including a = 0 (not a quadratic)"
                ]
              },
              theory: [
                {
                  title: "Quadratic Formula",
                  body: ["A second-degree polynomial equation of the form: ax² + bx + c = 0 where a ≠ 0", "Formula: x = (-b ± sqrt(b² - 4ac)) / (2a)"]
                },
                {
                  title: "Discriminant",
                  body: ["D = b² - 4ac determines the nature of the roots:", "D > 0 : Two distinct real roots. x1 = (-b + sqrt(D)) / (2a), x2 = (-b - sqrt(D)) / (2a)", "D == 0 : Two equal (repeated) real roots. x1 = x2 = -b / (2a)", "D < 0 : Two complex conjugate roots (no real roots). Real part = -b / (2a), Imaginary part = sqrt(-D) / (2a)"]
                },
                {
                  title: "Edge Case",
                  body: ["If a = 0, the equation becomes linear: bx + c = 0, solved as x = -c/b.", "This must be checked before applying the quadratic formula to avoid division by zero."]
                }
              ],
              pretest: [
                { question: "What is the discriminant of a quadratic equation?", options: ["b² + 4ac", "b² - 4ac", "2a - b", "-b / 2a"], answerIndex: 1 },
                { question: "If D > 0, the roots are:", options: ["Complex", "Equal", "Two distinct real roots", "Zero"], answerIndex: 2 },
                { question: "If D = 0, what can be said about the roots?", options: ["No real roots exist", "Two distinct real roots", "Two equal real roots", "One root is always zero"], answerIndex: 2 },
                { question: "For a = 1, b = -5, c = 6, what is the discriminant?", options: ["1", "49", "25", "1"], answerIndex: 3 },
                { question: "Why must a = 0 be handled separately before computing roots?", options: ["It causes a syntax error", "It makes D negative", "It results in division by zero in the quadratic formula", "sqrt() fails when a = 0"], answerIndex: 2 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully.",
                "Open the Simulation tab and trace through the discriminant computation and branching.",
                "Observe how D > 0, D == 0, and D < 0 lead to three different output paths.",
                "Open the Code Test tab. Starter code is pre-loaded.",
                "In the Stdin box enter a, b, c — e.g. 1 -5 6",
                "Click Run Code. Verify output: Root1: 3.00  Root2: 2.00",
                "Try 1 2 1 (equal roots) and 1 1 1 (complex roots). Proceed to Posttest."
              ],
              simulation: {
                code: "#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double a, b, c, d, r1, r2;\n    scanf(\"%lf %lf %lf\", &a, &b, &c);\n    if (a == 0) {\n        printf(\"Not a quadratic equation.\\n\");\n    } else {\n        d = b * b - 4 * a * c;\n        if (d > 0) {\n            r1 = (-b + sqrt(d)) / (2 * a);\n            r2 = (-b - sqrt(d)) / (2 * a);\n            printf(\"Root1: %.2f  Root2: %.2f\\n\", r1, r2);\n        } else if (d == 0) {\n            r1 = -b / (2 * a);\n            printf(\"Equal roots: %.2f\\n\", r1);\n        } else {\n            printf(\"Complex roots\\n\");\n        }\n    }\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Load stdio and math libraries", memory: [], output: "" },
                  { line: 5, annotation: "Allocate variables", memory: [{variable: "a", type: "double", value: "?"}, {variable: "b", type: "double", value: "?"}, {variable: "c", type: "double", value: "?"}, {variable: "d", type: "double", value: "?"}], output: "" },
                  { line: 6, annotation: "scanf() reads '1 -5 6'", memory: [{variable: "a", type: "double", value: "1.0"}, {variable: "b", type: "double", value: "-5.0"}, {variable: "c", type: "double", value: "6.0"}, {variable: "d", type: "double", value: "?"}], output: "" },
                  { line: 7, annotation: "Check if a == 0 (False)", memory: [{variable: "a", type: "double", value: "1.0"}, {variable: "b", type: "double", value: "-5.0"}, {variable: "c", type: "double", value: "6.0"}, {variable: "d", type: "double", value: "?"}], output: "" },
                  { line: 10, annotation: "Compute discriminant D = 25 - 24 = 1", memory: [{variable: "a", type: "double", value: "1.0"}, {variable: "b", type: "double", value: "-5.0"}, {variable: "c", type: "double", value: "6.0"}, {variable: "d", type: "double", value: "1.0"}], output: "" },
                  { line: 11, annotation: "Check if D > 0 (True)", memory: [{variable: "a", type: "double", value: "1.0"}, {variable: "b", type: "double", value: "-5.0"}, {variable: "c", type: "double", value: "6.0"}, {variable: "d", type: "double", value: "1.0"}], output: "" },
                  { line: 12, annotation: "Compute Root1 = (5 + 1)/2 = 3.0", memory: [{variable: "a", type: "double", value: "1.0"}, {variable: "b", type: "double", value: "-5.0"}, {variable: "c", type: "double", value: "6.0"}, {variable: "d", type: "double", value: "1.0"}], output: "" },
                  { line: 13, annotation: "Compute Root2 = (5 - 1)/2 = 2.0", memory: [{variable: "a", type: "double", value: "1.0"}, {variable: "b", type: "double", value: "-5.0"}, {variable: "c", type: "double", value: "6.0"}, {variable: "d", type: "double", value: "1.0"}], output: "" },
                  { line: 14, annotation: "printf() displays both distinct roots", memory: [{variable: "a", type: "double", value: "1.0"}, {variable: "b", type: "double", value: "-5.0"}, {variable: "c", type: "double", value: "6.0"}, {variable: "d", type: "double", value: "1.0"}], output: "Root1: 3.00  Root2: 2.00\n" },
                  { line: 22, annotation: "Program terminates", memory: [{variable: "a", type: "double", value: "1.0"}, {variable: "b", type: "double", value: "-5.0"}, {variable: "c", type: "double", value: "6.0"}, {variable: "d", type: "double", value: "1.0"}], output: "Root1: 3.00  Root2: 2.00\n" }
                ]
              },
              posttest: [
                { question: "For a=1, b=2, c=1, what is the discriminant and nature of roots?", options: ["D=8, distinct real", "D=0, equal real roots", "D=-4, complex", "D=4, distinct real"], answerIndex: 1 },
                { question: "For a=1, b=1, c=1, what is the nature of roots?", options: ["Distinct real", "Equal real", "Complex", "Zero"], answerIndex: 2 },
                { question: "For a=1, b=-5, c=6, what are the roots?", options: ["1 and 6", "2 and 3", "-2 and -3", "5 and 1"], answerIndex: 1 },
                { question: "What is the real part of complex roots when D < 0?", options: ["sqrt(-D) / (2a)", "b / (2a)", "-b / (2a)", "-b / a"], answerIndex: 2 },
                { question: "For a=0, b=2, c=4, what should the program output?", options: ["Roots: -2.00 and 2.00", "Not a quadratic — linear equation, x = -2.00", "Division by zero error", "Complex roots"], answerIndex: 1 }
              ],
              references: [
                "Kernighan & Ritchie, \"The C Programming Language\", 2nd Ed., Prentice Hall",
                "Balagurusamy, \"Programming in ANSI C\", 8th Ed., McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Dept.",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          },
          {
            id: "c-w5-4",
            title: "Calculator Using Switch",
            desc: "Simulate a basic calculator for +, -, *, /.",
            expected: "Result: 13.00",
            content: {
              aim: {
                text: "In this experiment, the student will write a C program to implement a simple arithmetic calculator that accepts two numbers and an operator from the user and performs the corresponding operation using a switch-case statement. The student will:",
                bullets: [
                  "Declare and use float variables for operands and result",
                  "Accept a char input for the operator (+, -, *, /)",
                  "Use switch-case to dispatch to the correct operation",
                  "Handle division by zero as a special case within the division branch",
                  "Use the default case to handle invalid operators",
                  "Use printf() with %.2f to display the result"
                ]
              },
              theory: [
                {
                  title: "switch-case Statement",
                  body: ["An alternative to long if-else if chains when branching on the value of a single integer or character expression.", "switch (expression) {\n    case value1: statements; break;\n    case value2: statements; break;\n    default: statements;\n}"]
                },
                {
                  title: "break Statement and Fall-Through",
                  body: ["Each case must end with break to prevent fall-through. Without break, execution continues into the next case regardless of its label.", "Intentional fall-through (omitting break) can group cases: case '+': case 'p': result = a + b; break;"]
                },
                {
                  title: "default Case and Char Input",
                  body: ["default case is executed when no case value matches the expression. Used to handle invalid or unexpected input gracefully.", "Operators are characters. Read with scanf(\" %c\", &op). The leading space in \" %c\" skips any leftover whitespace or newline in the input buffer."]
                },
                {
                  title: "Division by Zero",
                  body: ["Always check if the divisor is zero before performing division:\ncase '/':\n    if (b == 0) printf(\"Error\");\n    else result = a / b;\n    break;"]
                }
              ],
              pretest: [
                { question: "Which statement prevents fall-through in a switch-case block?", options: ["continue", "exit", "return", "break"], answerIndex: 3 },
                { question: "What is executed when no case matches in a switch statement?", options: ["The first case", "Nothing — program exits", "The default case", "An error is thrown"], answerIndex: 2 },
                { question: "What format specifier reads a character in scanf?", options: ["%s", "%d", "%c", "%ch"], answerIndex: 2 },
                { question: "For inputs 10, 0, and operator /, what should the program output?", options: ["0.00", "Infinity", "Error: Division by zero", "10.00"], answerIndex: 2 },
                { question: "What happens if break is omitted from a case in switch?", options: ["Compilation error", "That case is skipped", "Execution falls through to the next case", "switch exits immediately"], answerIndex: 2 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully.",
                "Open the Simulation tab and trace through the switch dispatch for different operators.",
                "Observe how break stops execution after each case and how default catches bad input.",
                "Open the Code Test tab. Starter code is pre-loaded.",
                "In the Stdin box enter two numbers and an operator — e.g. 10 3 +",
                "Click Run Code. Verify output: Result: 13.00",
                "Test all four operators and try 10 0 / for division by zero. Proceed to Posttest."
              ],
              simulation: {
                code: "#include <stdio.h>\n\nint main() {\n    float a, b, res;\n    char op;\n    scanf(\"%f %f %c\", &a, &b, &op);\n    switch(op) {\n        case '+': res = a + b; printf(\"Result: %.2f\\n\", res); break;\n        case '-': res = a - b; printf(\"Result: %.2f\\n\", res); break;\n        case '*': res = a * b; printf(\"Result: %.2f\\n\", res); break;\n        case '/': \n            if (b == 0) printf(\"Error: Division by zero\\n\");\n            else printf(\"Result: %.2f\\n\", a / b);\n            break;\n        default: printf(\"Invalid operator\\n\");\n    }\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Load stdio library", memory: [], output: "" },
                  { line: 4, annotation: "Allocate variables", memory: [{variable: "a", type: "float", value: "?"}, {variable: "b", type: "float", value: "?"}, {variable: "op", type: "char", value: "?"}], output: "" },
                  { line: 5, annotation: "scanf() reads '10 3 +'", memory: [{variable: "a", type: "float", value: "10.0"}, {variable: "b", type: "float", value: "3.0"}, {variable: "op", type: "char", value: "'+'"}], output: "" },
                  { line: 6, annotation: "switch evaluates op '+'", memory: [{variable: "a", type: "float", value: "10.0"}, {variable: "b", type: "float", value: "3.0"}, {variable: "op", type: "char", value: "'+'"}], output: "" },
                  { line: 7, annotation: "Case '+' matches. Compute res and print", memory: [{variable: "a", type: "float", value: "10.0"}, {variable: "b", type: "float", value: "3.0"}, {variable: "op", type: "char", value: "'+'"}], output: "Result: 13.00\n" },
                  { line: 7, annotation: "break statement exits switch block", memory: [{variable: "a", type: "float", value: "10.0"}, {variable: "b", type: "float", value: "3.0"}, {variable: "op", type: "char", value: "'+'"}], output: "Result: 13.00\n" },
                  { line: 16, annotation: "Program terminates", memory: [{variable: "a", type: "float", value: "10.0"}, {variable: "b", type: "float", value: "3.0"}, {variable: "op", type: "char", value: "'+'"}], output: "Result: 13.00\n" }
                ]
              },
              posttest: [
                { question: "For inputs 15, 4, and operator *, what is the output?", options: ["11.00", "3.75", "19.00", "60.00"], answerIndex: 3 },
                { question: "For inputs 9, 4, and operator -, what is the output?", options: ["13.00", "2.25", "5.00", "36.00"], answerIndex: 2 },
                { question: "For inputs 7, 2, and operator /, what is the output?", options: ["3.00", "3.50", "4.00", "14.00"], answerIndex: 1 },
                { question: "What does the default case in this calculator program do?", options: ["Performs addition as a fallback", "Exits the program silently", "Prints an invalid operator message", "Repeats the last valid operation"], answerIndex: 2 },
                { question: "Why is \" %c\" (with a leading space) used instead of \"%c\" for reading the operator?", options: ["%c cannot read symbols", "The leading space flushes the newline left in the input buffer", "Symbols require a space before them in scanf", "It makes the output prettier"], answerIndex: 1 }
              ],
              references: [
                "Kernighan & Ritchie, \"The C Programming Language\", 2nd Ed., Prentice Hall",
                "Balagurusamy, \"Programming in ANSI C\", 8th Ed., McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Dept.",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          },
          {
            id: "c-w5-5",
            title: "Leap Year Check",
            desc: "Determine if a given year is a leap year.",
            expected: "Leap Year / Not Leap Year",
            content: {
              aim: {
                text: "In this experiment, the student will write a C program to accept a year from the user and determine whether it is a leap year or not using nested if-else statements and logical operators. The student will:",
                bullets: [
                  "Declare and use an int variable for the year",
                  "Apply the standard leap year rule using % (modulus) and logical operators",
                  "Implement the three-condition leap year test using nested if-else",
                  "Use printf() to display whether the year is a leap year or not"
                ]
              },
              theory: [
                {
                  title: "Leap Year Rules",
                  body: ["A year is a leap year if: Rule 1: It is divisible by 4 AND Rule 2: It is NOT divisible by 100 OR Rule 3: It is divisible by 400", "Condensed Rule: (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)"]
                },
                {
                  title: "Breakdown",
                  body: ["Divisible by 4 : Candidate for leap year (e.g. 2024)", "Divisible by 100 : Century year — NOT a leap year unless also divisible by 400", "Divisible by 400 : Always a leap year (e.g. 2000)"]
                },
                {
                  title: "Examples",
                  body: ["2024 : 2024 % 4 == 0, 2024 % 100 != 0 → Leap year", "1900 : 1900 % 4 == 0, 1900 % 100 == 0, 1900 % 400 != 0 → Not a leap year", "2000 : 2000 % 400 == 0 → Leap year", "2023 : 2023 % 4 != 0 → Not a leap year"]
                },
                {
                  title: "Operators",
                  body: ["Modulus Operator — year % 4 gives the remainder when year is divided by 4.", "Logical Operators: && (AND) both conditions must be true, || (OR) at least one condition must be true, ! (NOT) inverts a boolean result"]
                }
              ],
              pretest: [
                { question: "Which of the following is the correct leap year condition in C?", options: ["year % 4 == 0", "(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)", "year % 100 == 0 || year % 4 == 0", "year % 400 == 0 && year % 4 == 0"], answerIndex: 1 },
                { question: "Is 1900 a leap year?", options: ["Yes", "No", "Only in some calendars", "Depends on the compiler"], answerIndex: 1 },
                { question: "Is 2000 a leap year?", options: ["No", "Yes", "Only if divisible by 100", "Cannot be determined"], answerIndex: 1 },
                { question: "What does year % 4 == 0 check?", options: ["Whether year is greater than 4", "Whether year divided by 4 leaves no remainder", "Whether year is a multiple of 100", "Whether year is odd"], answerIndex: 1 },
                { question: "Why is the divisible-by-100 rule needed in addition to divisible-by-4?", options: ["To handle negative years", "Because century years are not leap years unless divisible by 400", "To speed up computation", "To handle float years"], answerIndex: 1 }
              ],
              procedure: [
                "Read the Aim and Theory sections carefully.",
                "Open the Simulation tab and trace through the three-level condition check.",
                "Observe how 2000, 1900, 2024, and 2023 each take different paths through the logic.",
                "Open the Code Test tab. Starter code is pre-loaded.",
                "In the Stdin box enter a year — e.g. 2024",
                "Click Run Code. Verify output: 2024 is a Leap Year",
                "Test 1900, 2000, 2023, and 1600 to cover all rule branches. Proceed to Posttest."
              ],
              simulation: {
                code: "#include <stdio.h>\n\nint main() {\n    int year;\n    scanf(\"%d\", &year);\n    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {\n        printf(\"%d is a Leap Year\\n\", year);\n    } else {\n        printf(\"%d is not a Leap Year\\n\", year);\n    }\n    return 0;\n}",
                steps: [
                  { line: 1, annotation: "Load stdio library", memory: [], output: "" },
                  { line: 4, annotation: "Allocate year variable", memory: [{variable: "year", type: "int", value: "?"}], output: "" },
                  { line: 5, annotation: "scanf() reads '2024'", memory: [{variable: "year", type: "int", value: "2024"}], output: "" },
                  { line: 6, annotation: "Check condition: (2024 % 4 == 0 && 2024 % 100 != 0) is true", memory: [{variable: "year", type: "int", value: "2024"}], output: "" },
                  { line: 7, annotation: "printf() prints leap year message", memory: [{variable: "year", type: "int", value: "2024"}], output: "2024 is a Leap Year\n" },
                  { line: 11, annotation: "Program terminates", memory: [{variable: "year", type: "int", value: "2024"}], output: "2024 is a Leap Year\n" }
                ]
              },
              posttest: [
                { question: "Is 1600 a leap year?", options: ["No", "Yes", "Only if % 4 == 0", "Cannot be determined"], answerIndex: 1 },
                { question: "Is 2100 a leap year?", options: ["Yes, divisible by 4", "No — divisible by 100 but not 400", "Yes, divisible by 400", "Yes, all future years are leap years"], answerIndex: 1 },
                { question: "What is the output for year = 2023?", options: ["2023 is a Leap Year", "2023 is not a Leap Year", "Compilation error", "Undefined"], answerIndex: 1 },
                { question: "Which logical operator is used to combine the two main leap year conditions?", options: ["&&", "!", "||", "^"], answerIndex: 2 },
                { question: "How many leap years are there between 1900 and 2000 inclusive?", options: ["25", "24", "26", "23"], answerIndex: 1 }
              ],
              references: [
                "Kernighan & Ritchie, \"The C Programming Language\", 2nd Ed., Prentice Hall",
                "Balagurusamy, \"Programming in ANSI C\", 8th Ed., McGraw Hill",
                "JNTUGV C Programming Lab Syllabus, BS&HSS Dept.",
                "GCC Documentation: https://gcc.gnu.org/onlinedocs/"
              ]
            }
          }
        ],
      },
      {
        title: "WEEK 6",
        objective: "while, do-while, for loops, break and continue",
        tutorial: "Tutorial 6: Loops",
        labTitle: "Lab 6: Iterative problems",
        experiments: [
          {
            id: "c-w6-1",
            title: "Factorial",
            desc: "Calculate factorial of a given number.",
            expected: "Factorial=X",
          },
          {
            id: "c-w6-2",
            title: "Prime Number Check",
            desc: "Check if a number is prime.",
            expected: "Prime / Not Prime",
          },
          {
            id: "c-w6-3",
            title: "Sine Series",
            desc: "Calculate sin(x) using Taylor series expansion.",
            expected: "Sin=X.XXXX",
          },
          {
            id: "c-w6-4",
            title: "Palindrome Check",
            desc: "Check if a number is a palindrome.",
            expected: "Palindrome / Not Palindrome",
          },
          {
            id: "c-w6-5",
            title: "Number Pyramid",
            desc: "Print a number pyramid pattern.",
            expected: "Pyramid pattern",
          },
        ],
      },
      {
        title: "WEEK 7",
        objective: "1D array definition, initialization, linear search",
        tutorial: "Tutorial 7: 1D Arrays",
        labTitle: "Lab 7: Array manipulation",
        experiments: [
          {
            id: "c-w7-1",
            title: "Min and Max of Array",
            desc: "Find minimum and maximum in 1D array.",
            expected: "Min=X Max=X",
          },
          {
            id: "c-w7-2",
            title: "Linear Search",
            desc: "Search for an element in a 1D array.",
            expected: "Found at index X / Not Found",
          },
          {
            id: "c-w7-3",
            title: "Reverse Array",
            desc: "Reverse the elements of a 1D array.",
            expected: "Reversed array",
          },
          {
            id: "c-w7-4",
            title: "Remove Duplicates",
            desc: "Remove duplicate elements from an array.",
            expected: "Array without duplicates",
          },
        ],
      },
      {
        title: "WEEK 8",
        objective: "2D arrays, string operations, bubble sort",
        tutorial: "Tutorial 8: Matrices, Strings, Sorting",
        labTitle: "Lab 8: 2D Arrays and Strings",
        experiments: [
          {
            id: "c-w8-1",
            title: "Matrix Addition",
            desc: "Add two matrices.",
            expected: "Result matrix",
          },
          {
            id: "c-w8-2",
            title: "Matrix Multiplication",
            desc: "Multiply two matrices.",
            expected: "Product matrix",
          },
          {
            id: "c-w8-3",
            title: "Bubble Sort",
            desc: "Sort an array using bubble sort.",
            expected: "Sorted array",
          },
          {
            id: "c-w8-4",
            title: "String Concatenation",
            desc: "Concatenate two strings without using strcat().",
            expected: "Concatenated string",
          },
          {
            id: "c-w8-5",
            title: "Reverse String",
            desc: "Reverse a string.",
            expected: "Reversed string",
          },
        ],
      },
      {
        title: "WEEK 9",
        objective: "malloc, calloc, realloc, free, command-line args",
        tutorial: "Tutorial 9: Pointers and Dynamic Memory",
        labTitle: "Lab 9: Dynamic Allocation",
        experiments: [
          {
            id: "c-w9-1",
            title: "Array Sum using malloc",
            desc: "Calculate the sum of elements allocated via malloc().",
            expected: "Sum=X",
          },
          {
            id: "c-w9-2",
            title: "Student Average using Structures",
            desc: "Array of structures dynamically allocated with malloc().",
            expected: "Average=X.XX",
          },
          {
            id: "c-w9-3",
            title: "Failed Students using calloc",
            desc: "Filter and print failed students from an array allocated with calloc().",
            expected: "List of failed students",
          },
        ],
      },
      {
        title: "WEEK 10",
        objective: "Structures, Unions, bit fields, singly linked list",
        tutorial: "Tutorial 10: Structures and Unions",
        labTitle: "Lab 10: Advanced Data Structures",
        experiments: [
          {
            id: "c-w10-1",
            title: "Singly Linked List",
            desc: "Create and display a singly linked list.",
            expected: "X->X->NULL",
          },
          {
            id: "c-w10-2",
            title: "Structure vs Union Demo",
            desc: "Compare sizes of struct and union.",
            expected: "Different sizes shown",
          },
        ],
      },
      {
        title: "WEEK 11",
        objective: "Functions, call by value, scope, Euler's method",
        tutorial: "Tutorial 11: Functions",
        labTitle: "Lab 11: Modular Programming",
        experiments: [
          {
            id: "c-w11-1",
            title: "NCR Value",
            desc: "Calculate nCr using functions.",
            expected: "NCR=X",
          },
          {
            id: "c-w11-2",
            title: "String Length without strlen",
            desc: "Calculate the length of a string using a custom function.",
            expected: "Length=X",
          },
          {
            id: "c-w11-3",
            title: "Matrix Transpose",
            desc: "Transpose a matrix via a function.",
            expected: "Transposed matrix",
          },
        ],
      },
      {
        title: "WEEK 12",
        objective: "Recursive functions for naturally recursive problems",
        tutorial: "Tutorial 12: Recursion",
        labTitle: "Lab 12: Recursive techniques",
        experiments: [
          {
            id: "c-w12-1",
            title: "Fibonacci Series",
            desc: "Generate the Fibonacci series using recursion.",
            expected: "Fibonacci sequence",
          },
          {
            id: "c-w12-2",
            title: "Factorial Recursive",
            desc: "Calculate factorial recursively.",
            expected: "Factorial=X",
          },
          {
            id: "c-w12-3",
            title: "Ackermann Function",
            desc: "Compute the Ackermann function recursively.",
            expected: "Ackermann=X",
          },
        ],
      },
      {
        title: "WEEK 13",
        objective: "Pointers, call by reference, dangling pointers",
        tutorial: "Tutorial 13: Call by Reference and Pointers",
        labTitle: "Lab 13: Pointer manipulations",
        experiments: [
          {
            id: "c-w13-1",
            title: "Swap using Call by Reference",
            desc: "Swap two numbers using pointers.",
            expected: "Swapped values",
          },
          {
            id: "c-w13-2",
            title: "String Copy using Pointer",
            desc: "Copy a string using pointers.",
            expected: "Copied string",
          },
          {
            id: "c-w13-3",
            title: "Count Characters using Pointer",
            desc: "Count uppercase, lowercase, digits, and special characters using pointers.",
            expected: "Character counts",
          },
        ],
      },
      {
        title: "WEEK 14",
        objective: "File I/O, text and binary files, command-line args",
        tutorial: "Tutorial 14: File Handling",
        labTitle: "Lab 14: File operations",
        experiments: [
          {
            id: "c-w14-1",
            title: "Write and Read Text File",
            desc: "Simulate writing to and reading from a text file.",
            expected: "Read: [input text]",
          },
          {
            id: "c-w14-2",
            title: "Count Lines Words Characters",
            desc: "Read a file and output the count of lines, words, and characters.",
            expected: "Lines=X Words=X Chars=X",
          },
        ],
      },
    ],
  },
  "dbms": {
    id: "dbms",
    title: "Database Management Systems Lab",
    objectives: "To introduce basic SQL as a universal language, demonstrate relational algebra configurations, system design using normalization principles, and transaction workflows.",
    weeks: [
      {
        title: "WEEK 1",
        objective: "Understand database characteristics, centralized vs client-server systems and schema environments.",
        tutorial: "Tutorial 1: Database System Concepts & Architectures",
        labTitle: "Lab 1: Baseline Environments",
        experiments: [
          {
            id: "dbms-w1-1",
            title: "Database Architecture Identification",
            desc: "Write an structural script modeling a three-schema architecture layout showing clear boundaries between External, Conceptual, and Internal storage mappings.",
            expected: "Schema environment verified successfully.",
          }
        ]
      },
      {
        title: "WEEK 2",
        objective: "Conceptualization of business logics into Entity Relationship Diagrams including attributes and inheritance structures.",
        tutorial: "Tutorial 2: Conceptual Design via ER Diagrams",
        labTitle: "Lab 2: Conceptual Mapping Structures",
        experiments: [
          {
            id: "dbms-w2-1",
            title: "ER Schema Definitions",
            desc: "Map an e-commerce platform using specialization, generalization, and structural cardinality annotations.",
            expected: "ER model translation constraints validated.",
          }
        ]
      },
      {
        title: "WEEK 3",
        objective: "Learn the foundational constructs of Data Definition Language (DDL), table mappings, data types, and domains.",
        tutorial: "Tutorial 3: Relational Model Foundations & Core DDL",
        labTitle: "Lab 3: Tables and Domain Schema Designs",
        experiments: [
          {
            id: "dbms-w3-1",
            title: "Table Structures",
            desc: "Construct the standard University Database schema schema including custom primary domains using CREATE TABLE instructions.",
            expected: "Table created matching system domain restrictions.",
          }
        ]
      },
      {
        title: "WEEK 4",
        objective: "Implementation of column constraints such as Key Restrictions, integrity validations, and column variations.",
        tutorial: "Tutorial 4: Key Assertions & Structural Mutators",
        labTitle: "Lab 4: Column Modifications & Integrity Configurations",
        experiments: [
          {
            id: "dbms-w4-1",
            title: "Enforcing Key Constraints",
            desc: "Alter existing table properties to inject multi-column Composite Primary Keys and customized operational constraints via ALTER TABLE queries.",
            expected: "Query OK, 0 rows affected. Integrity rules applied.",
          }
        ]
      },
      {
        title: "WEEK 5",
        objective: "Executing core Data Manipulation Language (DML) primitives: records injections, targeted evaluations, and data deletions.",
        tutorial: "Tutorial 5: Mutation Engines (INSERT, UPDATE, DELETE)",
        labTitle: "Lab 5: Data Modifications",
        experiments: [
          {
            id: "dbms-w5-1",
            title: "DML Transaction Population",
            desc: "Populate relational records into tables using INSERT INTO statements, and update fields dynamically utilizing standard WHERE condition checks.",
            expected: "Rows injected: 5, Row fields altered: 2.",
          }
        ]
      },
      {
        title: "WEEK 6",
        objective: "Formulate simple relational projections and arithmetic logical operations via where filters.",
        tutorial: "Tutorial 6: Projections, Selections & Filters",
        labTitle: "Lab 6: Selection Filters & Operations",
        experiments: [
          {
            id: "dbms-w6-1",
            title: "Targeted Row Extraction",
            desc: "Write a SQL query utilizing select, mathematical operations, and explicit string-matching wildcards to surface targeted data values.",
            expected: "Displaying rows matching target pattern configurations.",
          }
        ]
      },
      {
        title: "WEEK 7",
        objective: "Leverage standard SQL analytical operations: temporal mutations, string conversions, and scalar transformations.",
        tutorial: "Tutorial 7: Core Date, Time & Built-in System Functions",
        labTitle: "Lab 7: Scalar and Date Manipulations",
        experiments: [
          {
            id: "dbms-w7-1",
            title: "Temporal & String Transformations",
            desc: "Extract age patterns using structural system Date functions, and format descriptive string text using built-in system keywords.",
            expected: "Tabular conversion outputs mapping strict formats.",
          }
        ]
      },
      {
        title: "WEEK 8",
        objective: "Build grouping metrics, multi-level mathematical aggregates, and ordered conditional selections.",
        tutorial: "Tutorial 8: Data Aggregation & Sequence Control",
        labTitle: "Lab 8: GROUP BY, HAVING, and ORDER BY Operations",
        experiments: [
          {
            id: "dbms-w8-1",
            title: "Hierarchical Aggregate Compilations",
            desc: "Calculate dynamic totals grouped across matching conditions, keeping rows filtered down using HAVING logic structures.",
            expected: "Aggregated sum rows compiled under explicit matching groupings.",
          }
        ]
      },
      {
        title: "WEEK 9",
        objective: "Master core relational joins: Cross, Inner, Left Outer, Right Outer, and Full Multi-Table linkages.",
        tutorial: "Tutorial 9: Cross-Table Relational Join Engines",
        labTitle: "Lab 9: Multi-Table Joins & Operations",
        experiments: [
          {
            id: "dbms-w9-1",
            title: "Relational Set Combinations",
            desc: "Combine related database collections together across shared indexing targets using implicit INNER and OUTER JOIN expressions.",
            expected: "Multi-column projection compiled cleanly without Cartesian generation errors.",
          }
        ]
      },
      {
        title: "WEEK 10",
        objective: "Implement compound nested queries, existential checks, and updatable subview structures.",
        tutorial: "Tutorial 10: Advanced Subqueries & Security Views",
        labTitle: "Lab 10: Subqueries and Virtual Relational Views",
        experiments: [
          {
            id: "dbms-w10-1",
            title: "Correlated Nested Query Configurations",
            desc: "Write complex sub-queries leveraging IN, EXISTS, and ANY directives, and save the code execution pipeline inside a logical CREATE VIEW definition.",
            expected: "Virtual compilation succeeded. View reference established.",
          }
        ]
      },
      {
        title: "WEEK 11",
        objective: "Deconstruct anomalies using functional dependency refinement and core normalization standards (1NF, 2NF, 3NF, BCNF).",
        tutorial: "Tutorial 11: Schema Refinement and Normal Forms",
        labTitle: "Lab 11: Normalization Decomposition Paths",
        experiments: [
          {
            id: "dbms-w11-1",
            title: "Lossless Join Decompositions",
            desc: "Deconstruct anomalous schemas mapping surrogate keys to clear 3NF parameters to guarantee dependency preservation.",
            expected: "Normalization matrix split confirmed matching minimal dependency properties.",
          }
        ]
      },
      {
        title: "WEEK 12",
        objective: "Verify ACID properties, time-stamp isolation behaviors, and rollback configurations under concurrent lock schedules.",
        tutorial: "Tutorial 12: ACID Processing, Recovery & Index Mappings",
        labTitle: "Lab 12: Transactions & Index Controls",
        experiments: [
          {
            id: "dbms-w12-1",
            title: "Transactional Command Blocks",
            desc: "Simulate banking operations by enforcing block safety limits using BEGIN TRANSACTION, SAVEPOINT offsets, and final COMMIT instructions.",
            expected: "Commit successfully completed. Ledger transaction state persistent.",
          }
        ]
      }
    ]
  }
};