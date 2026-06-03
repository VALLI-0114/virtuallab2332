export type Experiment = {
  id: string;
  title: string;
  desc: string;
  expected: string;
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
  objectives: string;
  weeks: Week[];
};

export const courses: Record<string, Course> = {
  "c-programming": {
    id: "c-programming",
    title: "C Programming",
    objectives: "The course aims to give students hands-on experience and train them on the concepts of the C programming language.",
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
            desc: "Write a C program using printf() to print Hello World.",
            expected: "Hello World",
          },
          {
            id: "c-w1-2",
            title: "Basic Input Output",
            desc: "Read name and age using scanf() and print them.",
            expected: "Name: [input] Age: [input]",
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
            title: "Sum and Average",
            desc: "Find sum and average of 3 numbers.",
            expected: "Sum=X.XX Avg=X.XX",
          },
          {
            id: "c-w2-2",
            title: "Fahrenheit to Celsius",
            desc: "Convert temperature from Fahrenheit to Celsius.",
            expected: "Celsius=X.XX",
          },
          {
            id: "c-w2-3",
            title: "Simple Interest",
            desc: "Calculate Simple Interest given P, R, T.",
            expected: "SI=X.XX",
          },
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
            expected: "Sqrt=X.XX",
          },
          {
            id: "c-w3-2",
            title: "Compound Interest",
            desc: "Calculate Compound Interest given P, R, T.",
            expected: "CI=X.XX",
          },
          {
            id: "c-w3-3",
            title: "Heron's Formula",
            desc: "Calculate the area of a triangle using sides a, b, c.",
            expected: "Area=X.XX",
          },
          {
            id: "c-w3-4",
            title: "Distance Traveled",
            desc: "Calculate distance using s = ut + 0.5*a*t^2.",
            expected: "Distance=X.XX",
          },
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
            expected: "Result=X",
          },
          {
            id: "c-w4-2",
            title: "Max of Three",
            desc: "Find maximum among three numbers using conditional operator.",
            expected: "Max=X",
          },
          {
            id: "c-w4-3",
            title: "Marks Average",
            desc: "Calculate total and average of 5 subjects.",
            expected: "Total=X Avg=X.XX",
          },
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
            expected: "Max=X Min=X",
          },
          {
            id: "c-w5-2",
            title: "Electricity Bill Generator",
            desc: "Generate electricity bill based on units consumed.",
            expected: "Bill=X.XX",
          },
          {
            id: "c-w5-3",
            title: "Quadratic Roots",
            desc: "Find roots of the quadratic equation ax2+bx+c=0.",
            expected: "Roots or Complex",
          },
          {
            id: "c-w5-4",
            title: "Calculator using Switch",
            desc: "Simulate a basic calculator for +, -, *, /.",
            expected: "Result of operation",
          },
          {
            id: "c-w5-5",
            title: "Leap Year Check",
            desc: "Determine if a given year is a leap year.",
            expected: "Leap Year / Not Leap Year",
          },
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
};
