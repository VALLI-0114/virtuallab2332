import type { Week } from "./course-data";

export const pythonExercise5: Week = {
  title: "EXERCISE 5",
  objective: "Understanding looping constructs (for, while), using range(), and loop control statements (break, continue, pass) in Python.",
  tutorial: "Tutorial 5: Loops and Iteration",
  labTitle: "Lab 5: Loops and Iteration",
  experiments: [
    {
      id: "py-e5-1",
      title: "Iterative execution using Loops",
      desc: "Write a Python program to calculate the sum of the first N natural numbers using a while loop, and print even numbers using a for loop with range().",
      expected: "Sum of first 5 numbers: 15\nEven numbers: 2, 4, 6, 8",
      content: {
        aim: {
          text: "In this experiment the student will learn to use iterative control structures (for loop, while loop) to execute a block of code multiple times, control iteration using break and continue, and generate ranges of numbers using range().",
          bullets: [
            "Implement while loops for condition-controlled iteration",
            "Implement for loops for sequence-controlled iteration (iterating over lists, strings, and ranges)",
            "Generate sequences of integers using the range() function with start, stop, and step arguments",
            "Alter flow inside loops using break (premature exit) and continue (skipping current iteration)",
            "Understand loop-else structures which execute if a loop completes without encountering a break"
          ]
        },
        theory: [
          {
            title: "The while Loop",
            body: [
              "A while loop repeatedly executes a target statement or block of code as long as a given condition remains True.",
              "Syntax:",
              "while condition:",
              "    # code block",
              "It is essential to modify the loop control variable inside the block, otherwise the condition remains True indefinitely, causing an infinite loop."
            ]
          },
          {
            title: "The for Loop and range() Function",
            body: [
              "In Python, the for loop is used to iterate over a sequence (such as a list, tuple, dictionary, set, or string) or a range of numbers.",
              "The range() function returns a sequence of numbers, starting from 0 by default, increments by 1 by default, and stops before a specified number.",
              "Syntax of range(): range(start, stop[, step])",
              "range(5) generates: 0, 1, 2, 3, 4",
              "range(1, 10, 2) generates odd numbers: 1, 3, 5, 7, 9"
            ]
          },
          {
            title: "Loop Control: break and continue",
            body: [
              "break: Terminates the loop statement and transfers execution to the statement immediately following the loop.",
              "continue: Causes the loop to skip the remainder of its body and immediately retest its condition prior to reiterating.",
              "pass: Used when a statement is required syntactically but you do not want any command or code to execute."
            ]
          },
          {
            title: "Loops with else Block",
            body: [
              "Python loops can have an optional else clause. The else block is executed when the loop terminates naturally (i.e. the loop condition becomes False for while, or the sequence is exhausted for for).",
              "If the loop is terminated prematurely by a break statement, the else block is skipped."
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
          "Read the Aim and Theory to understand looping structures and control statements",
          "Note the start, stop, and step arguments of the range() function",
          "Observe how loop variables are initialized, updated, and compared in conditions",
          "Go to Simulation tab and click Start",
          "Step through the loop execution using Next",
          "Observe how the loop control variable changes value in the Memory State panel on each iteration",
          "Watch the stdout buffer grow as print statements execute in the loop",
          "Go to Code Test tab and review the default code",
          "Click Run Code to execute and verify the sum and even numbers output",
          "Modify the script to count and print the number of vowels in a string using a for loop",
          "Write a program to check if a number is prime using a for-else loop: break the loop if a factor is found; print 'Prime' in the else block",
          "Use a continue statement to print numbers from 1 to 10 except for 5",
          "Proceed to Posttest"
        ],
        simulation: {
          code: "# Loop Simulation\nn = 5\nsum_val = 0\ni = 1\n\nwhile i <= n:\n    sum_val += i\n    i += 1\n\nprint('Sum:', sum_val)",
          steps: [
            { line: 2, annotation: "n = 5 — sets upper limit", memory: [{ variable: "n", type: "int", value: "5" }], output: "" },
            { line: 3, annotation: "sum_val = 0 — initializes sum variable", memory: [{ variable: "n", type: "int", value: "5" }, { variable: "sum_val", type: "int", value: "0" }], output: "" },
            { line: 4, annotation: "i = 1 — loop counter starting value", memory: [{ variable: "n", type: "int", value: "5" }, { variable: "sum_val", type: "int", value: "0" }, { variable: "i", type: "int", value: "1" }], output: "" },
            { line: 6, annotation: "while i <= n: checks if 1 <= 5 (True). Enters loop.", memory: [], output: "" },
            { line: 7, annotation: "sum_val += i: sum_val becomes 0 + 1 = 1", memory: [{ variable: "sum_val", type: "int", value: "1" }], output: "" },
            { line: 8, annotation: "i += 1: i becomes 2", memory: [{ variable: "i", type: "int", value: "2" }], output: "" },
            { line: 6, annotation: "while i <= n: checks if 2 <= 5 (True). Re-enters loop.", memory: [], output: "" },
            { line: 7, annotation: "sum_val += i: sum_val becomes 1 + 2 = 3", memory: [{ variable: "sum_val", type: "int", value: "3" }], output: "" },
            { line: 8, annotation: "i += 1: i becomes 3", memory: [{ variable: "i", type: "int", value: "3" }], output: "" },
            { line: 6, annotation: "while i <= n: checks if 3 <= 5 (True). Loop continues.", memory: [], output: "" },
            { line: 7, annotation: "sum_val += i: sum_val becomes 3 + 3 = 6", memory: [{ variable: "sum_val", type: "int", value: "6" }], output: "" },
            { line: 8, annotation: "i += 1: i becomes 4", memory: [{ variable: "i", type: "int", value: "4" }], output: "" },
            { line: 6, annotation: "while i <= n: checks if 4 <= 5 (True). Loop continues.", memory: [], output: "" },
            { line: 7, annotation: "sum_val += i: sum_val becomes 6 + 4 = 10", memory: [{ variable: "sum_val", type: "int", value: "10" }], output: "" },
            { line: 8, annotation: "i += 1: i becomes 5", memory: [{ variable: "i", type: "int", value: "5" }], output: "" },
            { line: 6, annotation: "while i <= n: checks if 5 <= 5 (True). Final iteration.", memory: [], output: "" },
            { line: 7, annotation: "sum_val += i: sum_val becomes 10 + 5 = 15", memory: [{ variable: "sum_val", type: "int", value: "15" }], output: "" },
            { line: 8, annotation: "i += 1: i becomes 6", memory: [{ variable: "i", type: "int", value: "6" }], output: "" },
            { line: 6, annotation: "while i <= n: checks if 6 <= 5 (False). Exits loop.", memory: [], output: "" },
            { line: 10, annotation: "print('Sum:', sum_val) displays the final sum", memory: [], output: "Sum: 15\n" }
          ]
        },
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
          "Python Tutorial — More Control Flow Tools: https://docs.python.org/3/tutorial/controlflow.html",
          "W3Schools Python Loops: https://www.w3schools.com/python/python_for_loops.asp",
          "Matthes E., Python Crash Course, 2nd Edition"
        ]
      }
    }
  ]
};
