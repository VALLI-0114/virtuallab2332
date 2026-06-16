import type { Week } from "./course-data";

export const pythonExercise9: Week = {
  title: "EXERCISE 9",
  objective: "Understanding Python file input/output operations, using different access modes (r, w, a), and managing file resources using the 'with' statement.",
  tutorial: "Tutorial 9: File Handling",
  labTitle: "Lab 9: File Handling",
  experiments: [
    {
      id: "py-e9-1",
      title: "File Operations",
      desc: "Write a Python program to create and write data to a file, read its content line by line, and append new text to it.",
      expected: "Line 1: Hello from Python File I/O!\nLine 2: Working with files is easy.\nLine 3: Appended content.",
      content: {
        aim: {
          text: "In this experiment the student will learn to interact with the filesystem. They will perform basic file operations: opening a file, reading data from a file, writing data to a file, appending content to an existing file, and ensuring proper closure of file handlers using context managers.",
          bullets: [
            "Open files using the open() function and differentiate between modes: 'r' (read), 'w' (write), and 'a' (append)",
            "Read file contents using read(), readline(), and readlines() methods",
            "Write text to a file using write() and writelines()",
            "Use the 'with' statement (context manager) to automatically close files and prevent resource leaks",
            "Handle file paths and check file existence"
          ]
        },
        theory: [
          {
            title: "File Input/Output Basics",
            body: [
              "File handling is an important part of any application. Python provides built-in functions and methods to create, read, write, and manipulate text or binary files.",
              "The basic workflow is: Open file -> Perform operations (Read/Write) -> Close file.",
              "Syntax to open: file_object = open(filename, mode)",
              "If the close() method is not called, a file might stay open, leading to memory leaks or locked files."
            ]
          },
          {
            title: "File Access Modes",
            body: [
              "'r' (Read): Default mode. Opens file for reading. Raises FileNotFoundError if file doesn't exist.",
              "'w' (Write): Opens file for writing. Creates file if it doesn't exist. Overwrites existing contents.",
              "'a' (Append): Opens file for writing at the end of the file. Creates file if it doesn't exist. Does not overwrite existing content.",
              "'r+' (Read and Write): Opens the file for both reading and writing."
            ]
          },
          {
            title: "The 'with' Statement (Context Managers)",
            body: [
              "The recommended best practice for file handling is using the with statement. It acts as a context manager and guarantees that the file will be closed automatically once the nested block of code is exited, even if an exception is raised.",
              "Syntax:",
              "with open('test.txt', 'r') as f:",
              "    content = f.read()",
              "No explicit f.close() is needed."
            ]
          },
          {
            title: "Reading Methods",
            body: [
              "f.read(n): Reads n bytes/characters, or the entire file if n is omitted.",
              "f.readline(): Reads a single line from the file.",
              "f.readlines(): Reads all lines and returns them as a list of strings."
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
          "Read the Aim and Theory to understand file operations, access modes, and context managers",
          "Understand the differences between read(), readline(), and readlines()",
          "Note how open('file.txt', 'w') truncates the file if it already exists",
          "Go to Simulation tab and click Start",
          "Step through the file operations using Next",
          "Observe the simulated file creation and updates in the output buffer",
          "Go to Code Test tab and run the script",
          "Verify the outputs match the written file lines",
          "Modify the script to read a file and count the total number of lines inside it",
          "Write a program that copies the contents of one file to another, capitalizing all letters in the process",
          "Try writing a list of strings to a file using writelines()",
          "Proceed to Posttest"
        ],
        simulation: {
          code: "# File Operations Simulation\n# Writing to a file\nwith open('demo.txt', 'w') as f:\n    f.write('Line 1: Hello from Python File I/O!\\n')\n    f.write('Line 2: Working with files is easy.\\n')\n\n# Appending to the file\nwith open('demo.txt', 'a') as f:\n    f.write('Line 3: Appended content.\\n')\n\n# Reading the file\nwith open('demo.txt', 'r') as f:\n    content = f.read()\n\nprint(content)",
          steps: [
            { line: 3, annotation: "with open('demo.txt', 'w') as f: opens demo.txt for writing. File is created.", memory: [{ variable: "f", type: "file", value: "<open file 'demo.txt' in mode 'w'>" }], output: "" },
            { line: 4, annotation: "f.write(...) writes the first line to the buffer", memory: [], output: "" },
            { line: 5, annotation: "f.write(...) writes the second line. Exiting block closes f.", memory: [], output: "" },
            { line: 8, annotation: "with open('demo.txt', 'a') as f: opens demo.txt in append mode.", memory: [{ variable: "f", type: "file", value: "<open file 'demo.txt' in mode 'a'>" }], output: "" },
            { line: 9, annotation: "f.write(...) appends line 3. Exiting block closes f.", memory: [], output: "" },
            { line: 12, annotation: "with open('demo.txt', 'r') as f: opens demo.txt in read-only mode.", memory: [{ variable: "f", type: "file", value: "<open file 'demo.txt' in mode 'r'>" }], output: "" },
            { line: 13, annotation: "content = f.read() reads all contents of the file as a single string", memory: [{ variable: "content", type: "str", value: "'Line 1: Hello...\\nLine 2...\\nLine 3...\\n'" }], output: "" },
            { line: 15, annotation: "print(content) displays the file contents", memory: [], output: "Line 1: Hello from Python File I/O!\nLine 2: Working with files is easy.\nLine 3: Appended content.\n" }
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
          "Python Tutorial — Reading and Writing Files: https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files",
          "W3Schools Python File Handling: https://www.w3schools.com/python/python_file_handling.asp",
          "Sweigart A., Automate the Boring Stuff with Python"
        ]
      }
    }
  ]
};
