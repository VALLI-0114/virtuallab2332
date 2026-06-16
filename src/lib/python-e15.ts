import type { Week } from "./course-data";

export const pythonExercise15: Week = {
  title: "EXERCISE 15",
  objective: "Building an application-based mini-project integrating OOP, collections, file handling, input/output operations, and decision-making logic.",
  tutorial: "Tutorial 15: Mini-Project",
  labTitle: "Lab 15: Mini-Project",
  experiments: [
    {
      id: "py-e15-1",
      title: "Student Grade Management System",
      desc: "Develop a complete Python application using OOP, collections, and file handling to record students' scores, calculate averages, write grade reports to a file, and read/display reports.",
      expected: "Report written successfully.\n--- GRADE REPORT ---\nName: Alice, Average: 90.0, Grade: A\nName: Bob, Average: 78.3, Grade: B\n--------------------",
      content: {
        aim: {
          text: "In this consolidation experiment the student will integrate multiple Python concepts—including object-oriented design (classes and objects), container types (dictionaries and lists), exception handling, file I/O operations, and formatting—into a cohesive, fully functioning Student Grade Management System.",
          bullets: [
            "Decompose a problem into an object-oriented design using classes and objects",
            "Store and query student objects inside lists and dictionaries",
            "Read input scores dynamically and compute aggregate results like averages and grades",
            "Persist student records to a text file using write operations",
            "Read and parse data from a text file to reconstruct and display reports safely"
          ]
        },
        theory: [
          {
            title: "Application Architecture and System Integration",
            body: [
              "Developing real-world software involves integrating separate components: data models (objects), data processing (calculations), data storage (files), and interfaces (inputs/outputs).",
              "In this application:",
              "1. Model: The Student class represents an individual student's details (name, marks).",
              "2. Storage: A text file 'grades.txt' serves as a persistent flat-file database.",
              "3. Logic: Methods within a management controller calculate grade letter mappings and read/write files."
            ]
          },
          {
            title: "Data Serialization and De-serialization",
            body: [
              "Serialization is the process of converting complex objects (like Student instances) into a format that can be stored or transmitted (like a comma-separated string in a text file).",
              "De-serialization is the reverse process, parsing text lines (e.g. 'Alice,85,95,90') and reconstructing variables or objects in program memory."
            ]
          },
          {
            title: "Clean Coding Principles",
            body: [
              "When coding a mini-project, strive for readability, encapsulation, and modularity:",
              "Use descriptive variable and method names.",
              "Handle potential exceptions (e.g. file missing, zero division, bad casting) using try-except blocks.",
              "Document methods using docstrings."
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
          "Read the Aim and Theory to understand how class definitions, collection management, and file handling integrate to form a system",
          "Note the structure of student serialization: saving columns as name, average, and grade in text lines",
          "Trace how files are opened for writing reports, then reopened for reading and displaying reports",
          "Go to Simulation tab and click Start",
          "Step through the simulation using Next to follow the creation of student objects, average calculation, report writing, and reading",
          "Check how state changes in the Memory State panel",
          "Go to Code Test tab and run the complete program",
          "Verify that the grades report is written and displayed correctly",
          "Modify the script to accept a new student record dynamically using input()",
          "Add a try-except block to handle ValueError when parsing scores that aren't valid numbers",
          "Implement an search function that looks up a student by name in the grades file and displays only their details",
          "Proceed to Posttest"
        ],
        simulation: {
          code: "# Mini-Project Simulation\nclass Student:\n    def __init__(self, name, marks):\n        self.name = name\n        self.marks = marks\n    \n    def get_avg(self):\n        return sum(self.marks) / len(self.marks) if self.marks else 0\n    \n    def get_grade(self):\n        avg = self.get_avg()\n        if avg >= 90: return 'A'\n        elif avg >= 80: return 'B'\n        else: return 'C'\n\n# Creating students\ns1 = Student('Alice', [90, 85, 95])\ns2 = Student('Bob', [75, 80, 80])\n\n# Serializing and writing reports\nwith open('reports.txt', 'w') as f:\n    f.write(f'{s1.name},{s1.get_avg():.1f},{s1.get_grade()}\\n')\n    f.write(f'{s2.name},{s2.get_avg():.1f},{s2.get_grade()}\\n')\n\n# Reading and displaying reports\nlines = []\nwith open('reports.txt', 'r') as f:\n    lines = f.readlines()",
          steps: [
            { line: 2, annotation: "class Student: registers Student class in memory", memory: [{ variable: "Student", type: "class", value: "<class '__main__.Student'>" }], output: "" },
            { line: 15, annotation: "s1 = Student('Alice', [90, 85, 95]) — creates instance s1", memory: [{ variable: "s1.name", type: "str", value: "'Alice'" }, { variable: "s1.marks", type: "list", value: "[90, 85, 95]" }], output: "" },
            { line: 16, annotation: "s2 = Student('Bob', [75, 80, 80]) — creates instance s2", memory: [{ variable: "s2.name", type: "str", value: "'Bob'" }, { variable: "s2.marks", type: "list", value: "[75, 80, 80]" }], output: "" },
            { line: 19, annotation: "with open('reports.txt', 'w') as f: opens file for writing", memory: [], output: "" },
            { line: 20, annotation: "f.write(s1 data) — calculates avg (90.0), grade ('A'), writes 'Alice,90.0,A'", memory: [], output: "" },
            { line: 21, annotation: "f.write(s2 data) — calculates avg (78.3), grade ('B'), writes 'Bob,78.3,B'", memory: [], output: "" },
            { line: 24, annotation: "lines = [] — initializes list", memory: [{ variable: "lines", type: "list", value: "[]" }], output: "" },
            { line: 25, annotation: "with open('reports.txt', 'r') as f: opens file for reading", memory: [], output: "" },
            { line: 26, annotation: "lines = f.readlines() — reads all lines as a list of strings", memory: [{ variable: "lines", type: "list", value: "['Alice,90.0,A\\n', 'Bob,78.3,B\\n']" }], output: "" }
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
          "Python Tutorial: https://docs.python.org/3/tutorial/",
          "W3Schools Python OOP and File Handling: https://www.w3schools.com/python/",
          "Sweigart A., Automate the Boring Stuff with Python"
        ]
      }
    }
  ]
};
