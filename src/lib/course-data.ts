export type Experiment = {
  id: string;
  title: string;
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
        objective: "Getting familiar with the programming environment on the computer and writing the first program.",
        tutorial: "Tutorial 1: Problem-solving using Computers.",
        labTitle: "Lab1: Familiarization with the programming environment",
        experiments: [
          { id: "c-w1-1", title: "Basic Linux environment and its editors like Vi, Vim & Emacs etc." },
          { id: "c-w1-2", title: "Exposure to Turbo C, gcc" },
          { id: "c-w1-3", title: "Writing simple programs using printf(), scanf()" },
        ],
      },
      {
        title: "WEEK 2",
        objective: "Getting familiar with how to formally describe a solution to a problem in a series of finite steps using textual and graphic notation.",
        tutorial: "Tutorial 2: Problem-solving using Algorithms and Flow charts.",
        labTitle: "Lab 2: Converting algorithms/flow charts into C Source code. Developing the algorithms/flowcharts for the following sample programs",
        experiments: [
          { id: "c-w2-1", title: "Sum and average of 3 numbers" },
          { id: "c-w2-2", title: "Conversion of Fahrenheit to Celsius and vice versa" },
          { id: "c-w2-3", title: "Simple interest calculation" },
        ],
      },
      {
        title: "WEEK 3",
        objective: "Learn how to define variables with the desired data-type, initialize them with appropriate values and how arithmetic operators can be used with variables and constants.",
        tutorial: "Tutorial 3: Variable types and type conversions.",
        labTitle: "Lab 3: Simple computational problems using arithmetic expressions.",
        experiments: [
          { id: "c-w3-1", title: "Finding the square root of a given number" },
          { id: "c-w3-2", title: "Finding compound interest" },
          { id: "c-w3-3", title: "Area of a triangle using Heron's formulae" },
          { id: "c-w3-4", title: "Distance traveled by an object" },
        ],
      },
      {
        title: "WEEK 4",
        objective: "Explore the full scope of expressions, type-compatibility of variables & constants and operators used in the expression, and how operator precedence works.",
        tutorial: "Tutorial 4: Operators and the precedence and as associativity.",
        labTitle: "Lab 4: Simple computational problems using the operator's precedence and associativity",
        experiments: [
          { id: "c-w4-1", title: "Evaluate the following expressions: A+B*C+(D*E) + F*G" },
          { id: "c-w4-2", title: "Evaluate the following expressions: A/B*C-B+A*D/3" },
          { id: "c-w4-3", title: "Evaluate the following expressions: A+++B---A" },
          { id: "c-w4-4", title: "Evaluate the following expressions: J= (i++) + (++i)" },
          { id: "c-w4-5", title: "Find the maximum of three numbers using the conditional operator" },
          { id: "c-w4-6", title: "Take marks of 5 subjects in integers, and find the total, average in float" },
        ],
      },
      {
        title: "WEEK 5",
        objective: "Explore the full scope of different variants of 'if construct', namely if-else, null-else, if-else if-else, switch, and nested-if. Explore all relational and logical operators.",
        tutorial: "Tutorial 5: Branching and logical expressions.",
        labTitle: "Lab 5: Problems involving if-then-else structures.",
        experiments: [
          { id: "c-w5-1", title: "Write a C program to find the max and min of four numbers using if-else." },
          { id: "c-w5-2", title: "Write a C program to generate electricity bill." },
          { id: "c-w5-3", title: "Find the roots of the quadratic equation." },
          { id: "c-w5-4", title: "Write a C program to simulate a calculator using a switch case." },
          { id: "c-w5-5", title: "Write a C program to find whether the given year is a leap year." },
        ],
      },
      {
        title: "WEEK 6",
        objective: "Explore the full scope of iterative constructs, namely while loop, do-while loop, and for loop in addition to structured jump constructs like break and continue.",
        tutorial: "Tutorial 6: Loops, while and for loops",
        labTitle: "Lab 6: Iterative problems, e.g., the sum of series",
        experiments: [
          { id: "c-w6-1", title: "Find the factorial of a given number using any loop." },
          { id: "c-w6-2", title: "Find whether the given number is a prime or not." },
          { id: "c-w6-3", title: "Compute sine and cos series" },
          { id: "c-w6-4", title: "Checking whether a number is palindrome" },
          { id: "c-w6-5", title: "Construct a pyramid of numbers." },
        ],
      },
      {
        title: "WEEK 7",
        objective: "Explore the full scope of the Arrays construct, namely defining and initializing 1-D and 2-D and, more generically, n-D arrays and referencing individual array elements.",
        tutorial: "Tutorial 7: 1 D Arrays: searching.",
        labTitle: "Lab 7: 1D Array manipulation, linear search",
        experiments: [
          { id: "c-w7-1", title: "Find the min and max of a 1-D integer array." },
          { id: "c-w7-2", title: "Perform linear search on the 1D array." },
          { id: "c-w7-3", title: "The reverse of a 1D integer array" },
          { id: "c-w7-4", title: "Find 2's complement of the given binary number." },
          { id: "c-w7-5", title: "Eliminate duplicate elements in an array." },
        ],
      },
      {
        title: "WEEK 8",
        objective: "Explore the difference between other arrays and character arrays that can be used as Strings by using null characters. Explore sorting solution bubble sort using integer arrays.",
        tutorial: "Tutorial 8: 2 D arrays, sorting and Strings.",
        labTitle: "Lab 8: Matrix problems, String operations, Bubble sort",
        experiments: [
          { id: "c-w8-1", title: "Addition of two matrices" },
          { id: "c-w8-2", title: "Multiplication two matrices" },
          { id: "c-w8-3", title: "Sort array elements using bubble sort" },
          { id: "c-w8-4", title: "Concatenate two strings without built-in functions" },
          { id: "c-w8-5", title: "Reverse a string using built-in and without built-in string functions" },
        ],
      },
      {
        title: "WEEK 9",
        objective: "Explore pointers to manage a dynamic array of integers, including memory allocation value initialization, resizing, changing, and reordering the contents of an array, and memory de-allocation.",
        tutorial: "Tutorial 9: Pointers, structures, and dynamic memory allocation",
        labTitle: "Lab 9: Pointers and structures, memory dereference.",
        experiments: [
          { id: "c-w9-1", title: "Write a C program to find the sum of a 1D array using malloc()" },
          { id: "c-w9-2", title: "Write a C program to find the total average of n students using structures" },
          { id: "c-w9-3", title: "Enter n students data using calloc() and display failed students list" },
          { id: "c-w9-4", title: "Read student name and marks from the command line and display the student details along with the total." },
          { id: "c-w9-5", title: "Write a C program to implement realloc()" },
        ],
      },
      {
        title: "WEEK 10",
        objective: "Experiment with C Structures, Unions, bit fields self-referential structures (Singly-linked lists), and nested structures.",
        tutorial: "Tutorial 10: Bitfields, Self-Referential Structures, Linked lists",
        labTitle: "Lab 10: Bitfields, linked lists",
        experiments: [
          { id: "c-w10-1", title: "Read and print a date using dd/mm/yyyy format using bit-fields and differentiate the same without using bitfields" },
          { id: "c-w10-2", title: "Create and display a singly linked list using self-referential structure." },
          { id: "c-w10-3", title: "Demonstrate the differences between structures and unions using a C program." },
          { id: "c-w10-4", title: "Write a C program to shift/rotate using bitfields." },
          { id: "c-w10-5", title: "Write a C program to copy one structure variable to another structure of the same type." },
        ],
      },
      {
        title: "WEEK 11",
        objective: "Explore the Functions, sub-routines, scope and extent of variables, doing some experiments by parameter passing using call by value. Basic methods of numerical integration.",
        tutorial: "Tutorial 11: Functions, call by value, scope and extent",
        labTitle: "Lab 11: Simple functions using call by value, solving differential equations using Eulers theorem.",
        experiments: [
          { id: "c-w11-1", title: "Write a C function to calculate NCR value." },
          { id: "c-w11-2", title: "Write a C function to find the length of a string." },
          { id: "c-w11-3", title: "Write a C function to transpose of a matrix." },
          { id: "c-w11-4", title: "Write a C function to demonstrate numerical integration of differential equations using Euler's method" },
        ],
      },
      {
        title: "WEEK 12",
        objective: "Explore how recursive solutions can be programmed by writing recursive functions that can be invoked from the main by programming at-least five distinct problems that have naturally recursive solutions.",
        tutorial: "Tutorial 12: Recursion, the structure of recursive calls",
        labTitle: "Lab 12: Recursive functions",
        experiments: [
          { id: "c-w12-1", title: "Write a recursive function to generate Fibonacci series." },
          { id: "c-w12-2", title: "Write a recursive function to find the lcm of two numbers." },
          { id: "c-w12-3", title: "Write a recursive function to find the factorial of a number." },
          { id: "c-w12-4", title: "Write a C Program to implement Ackermann function using recursion." },
          { id: "c-w12-5", title: "Write a recursive function to find the sum of series." },
        ],
      },
      {
        title: "WEEK 13",
        objective: "Explore the basic difference between normal and pointer variables, Arithmetic operations using pointers and passing variables to functions using pointers.",
        tutorial: "Tutorial 13: Call by reference, dangling pointers",
        labTitle: "Lab 13: Simple functions using Call by reference, Dangling pointers.",
        experiments: [
          { id: "c-w13-1", title: "Write a C program to swap two numbers using call by reference." },
          { id: "c-w13-2", title: "Demonstrate Dangling pointer problem using a C program." },
          { id: "c-w13-3", title: "Write a C program to copy one string into another using pointer." },
          { id: "c-w13-4", title: "Write a C program to find no of lowercase, uppercase, digits and other characters using pointers." },
        ],
      },
      {
        title: "WEEK 14",
        objective: "To understand data files and file handling with various file I/O functions. Explore the differences between text and binary files.",
        tutorial: "Tutorial 14: File handling",
        labTitle: "Lab 14: File operations",
        experiments: [
          { id: "c-w14-1", title: "Write a C program to write and read text into a file." },
          { id: "c-w14-2", title: "Write a C program to write and read text into a binary file using fread() and fwrite()" },
          { id: "c-w14-3", title: "Copy the contents of one file to another file." },
          { id: "c-w14-4", title: "Write a C program to merge two files into the third file using command-line arguments." },
          { id: "c-w14-5", title: "Find no. of lines, words and characters in a file" },
          { id: "c-w14-6", title: "Write a C program to print last n characters of a given file." },
        ],
      },
    ]
  }
};
