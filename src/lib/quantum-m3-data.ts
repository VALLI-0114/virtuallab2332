import type { Week } from "./course-data";

export const quantumModule3: Week = {
  title: "Module 3",
  objective: "Quantum Gates and Circuits",
  tutorial: "Lab 3: Applying Logic Gates",
  labTitle: "Lab 3: Quantum Gates and Circuits",
  experiments: [
    {
      id: "qc-m3-1",
      title: "1. Pauli-X Gate",
      desc: "Simulate the quantum equivalent of the classical NOT gate.",
      code: `try:
    from qiskit import QuantumCircuit, transpile
    from qiskit_aer import Aer
    
    # 1 qubit, 1 classical bit
    qc = QuantumCircuit(1, 1)
    
    print("Initial state is |0>.")
    
    # Apply Pauli-X Gate
    qc.x(0)
    print("Applied Pauli-X gate.")
    
    # Measure
    qc.measure(0, 0)
    
    simulator = Aer.get_backend('qasm_simulator')
    compiled_circuit = transpile(qc, simulator)
    job = simulator.run(compiled_circuit, shots=10)
    result = job.result()
    counts = result.get_counts()
    
    print("Measurement Results after X-gate:", counts)
    print("The X-gate flips |0> to |1> (and |1> to |0>), exactly like a classical NOT gate.")
except ImportError:
    print("Qiskit not installed. Simulating...")
    print("Initial state: |0>")
    print("Applied Pauli-X gate.")
    print("Measurement Results after X-gate: {'1': 10}")
    print("The X-gate flips |0> to |1>.")`,
      content: {
        aim: {
          text: "To understand and apply the Pauli-X gate, the quantum analog of the classical NOT gate, to flip a qubit's computational state.",
          bullets: []
        },
        theory: [
          {
            title: "The Pauli-X Gate",
            body: [
              "The Pauli-X gate is one of the fundamental single-qubit quantum logic gates. It is the quantum equivalent of the classical NOT gate.",
              "![Gate transformation animation](/videos/quantum_pauli_x.mp4)",
              "Mathematically, it performs a 180-degree (π radian) rotation of the qubit's state vector around the X-axis of the Bloch sphere.",
              "If the qubit is in state |0⟩ (pointing up at the North Pole), applying the X-gate rotates it to the South Pole, putting it in state |1⟩. Conversely, if applied to |1⟩, it flips the state back to |0⟩."
            ]
          }
        ],
        pretest: [],
        procedure: [
          "1. Execute the quantum simulator code.",
          "2. The code initializes a qubit in the |0⟩ state.",
          "3. An X-gate is applied (`qc.x(0)`).",
          "4. The qubit is measured, yielding '1' with 100% certainty."
        ],
        posttest: []
      }
    },
    {
      id: "qc-m3-2",
      title: "2. Pauli-Y Gate",
      desc: "Simulate rotations around the Y-axis introducing complex phases.",
      code: `try:
    from qiskit import QuantumCircuit, transpile
    from qiskit_aer import Aer
    import numpy as np
    
    qc = QuantumCircuit(1)
    
    print("Initial state is |0>.")
    
    # Apply Pauli-Y Gate
    qc.y(0)
    print("Applied Pauli-Y gate.")
    
    # We will use the statevector simulator to see the exact amplitudes including phase
    simulator = Aer.get_backend('statevector_simulator')
    compiled_circuit = transpile(qc, simulator)
    job = simulator.run(compiled_circuit)
    result = job.result()
    statevector = result.get_statevector()
    
    print("\\nFinal Statevector:")
    print(np.round(statevector.data, 3))
    print("Notice the 'i' (imaginary unit)! The Y-gate flips the bit AND introduces a relative complex phase (i|1>).")
except ImportError:
    print("Qiskit not installed. Simulating...")
    print("Initial state: |0>")
    print("Applied Pauli-Y gate.")
    print("Final Statevector: [0.+0.j 0.+1.j]")
    print("Notice the 'j' (Python's 'i')! The Y-gate maps |0> to i|1>.")`,
      content: {
        aim: {
          text: "To understand the Pauli-Y gate, which performs a bit-flip while simultaneously introducing a complex phase shift.",
          bullets: []
        },
        theory: [
          {
            title: "The Pauli-Y Gate",
            body: [
              "The Pauli-Y gate rotates the qubit's state vector by 180 degrees (π radians) around the Y-axis of the Bloch sphere.",
              "![Phase change visualization](/videos/quantum_pauli_y.mp4)",
              "Because it rotates through the complex Y-axis, it introduces an imaginary phase factor (i).",
              "When applied to |0⟩, it results in i|1⟩. When applied to |1⟩, it results in -i|0⟩.",
              "While the measurement probabilities (the absolute squares of the amplitudes) are identical to the X-gate when starting from |0⟩ or |1⟩, the complex phase is critical for interference effects in multi-gate algorithms."
            ]
          }
        ],
        pretest: [],
        procedure: [
          "1. Run the simulator.",
          "2. The code uses a statevector simulator instead of a measurement simulator to observe the hidden complex amplitudes.",
          "3. Notice the output `[0.+0.j  0.+1.j]`, where `1.j` represents `i|1⟩`."
        ],
        posttest: []
      }
    },
    {
      id: "qc-m3-3",
      title: "3. Pauli-Z Gate",
      desc: "Simulate the phase-flip gate.",
      code: `try:
    from qiskit import QuantumCircuit, transpile
    from qiskit_aer import Aer
    import numpy as np
    
    # 1. Z-gate on |0>
    qc_0 = QuantumCircuit(1)
    qc_0.z(0)
    
    # 2. Z-gate on |1>
    qc_1 = QuantumCircuit(1)
    qc_1.x(0) # First set to |1>
    qc_1.z(0) # Then apply Z
    
    # 3. Z-gate on |+>
    qc_plus = QuantumCircuit(1)
    qc_plus.h(0) # First set to |+>
    qc_plus.z(0) # Then apply Z
    
    simulator = Aer.get_backend('statevector_simulator')
    
    print("Z-gate applied to |0>:", np.round(simulator.run(transpile(qc_0, simulator)).result().get_statevector().data, 3))
    print("  -> Result: |0> (No visible change)")
    
    print("Z-gate applied to |1>:", np.round(simulator.run(transpile(qc_1, simulator)).result().get_statevector().data, 3))
    print("  -> Result: -|1> (Phase flipped)")
    
    print("Z-gate applied to |+>:", np.round(simulator.run(transpile(qc_plus, simulator)).result().get_statevector().data, 3))
    print("  -> Result: |-State> (Phase flipped inside superposition)")
except ImportError:
    print("Qiskit not installed. Simulating...")
    print("Z-gate applied to |0>: [1.+0.j 0.+0.j]")
    print("  -> Result: |0> (No visible change)")
    print("Z-gate applied to |1>: [ 0.+0.j -1.+0.j]")
    print("  -> Result: -|1> (Phase flipped)")
    print("Z-gate applied to |+>: [ 0.707+0.j -0.707+0.j]")
    print("  -> Result: |-State> (Phase flipped inside superposition)")`,
      content: {
        aim: {
          text: "To understand the Pauli-Z gate, which flips the relative phase of a quantum state without changing the measurement probabilities in the standard basis.",
          bullets: []
        },
        theory: [
          {
            title: "The Pauli-Z Gate",
            body: [
              "The Pauli-Z gate rotates the state vector by 180 degrees (π radians) around the Z-axis of the Bloch sphere.",
              "![State inversion animation](/videos/quantum_pauli_z.mp4)",
              "Because the |0⟩ and |1⟩ states lie exactly ON the Z-axis, rotating around the Z-axis does not change the probability of measuring 0 or 1. This is why it's called a phase-flip gate rather than a bit-flip gate.",
              "Specifically, it leaves the |0⟩ state entirely unchanged. However, it multiplies the |1⟩ state by -1, changing it to -|1⟩.",
              "Its most noticeable effect is on superposition states that lie on the equator. If applied to the |+⟩ state (α=1/√2, β=1/√2), it flips the sign of β, resulting in the |-⟩ state (α=1/√2, β=-1/√2)."
            ]
          }
        ],
        pretest: [],
        procedure: [
          "1. Run the simulator code analyzing the Z-gate on three different input states.",
          "2. Observe that applying it to |0⟩ does nothing.",
          "3. Observe that applying it to |1⟩ adds a negative sign.",
          "4. Observe that applying it to |+⟩ changes the sign of the second amplitude, creating |-⟩."
        ],
        posttest: []
      }
    },
    {
      id: "qc-m3-4",
      title: "4. Hadamard Gate",
      desc: "Simulate the creation of quantum superposition.",
      code: `try:
    from qiskit import QuantumCircuit, transpile
    from qiskit_aer import Aer
    from qiskit.visualization import plot_histogram
    import matplotlib.pyplot as plt
    
    # Create a circuit with 1 qubit
    qc = QuantumCircuit(1, 1)
    
    # Apply Hadamard to create superposition
    qc.h(0)
    
    # Measure
    qc.measure(0, 0)
    
    # Run simulation 1024 times
    simulator = Aer.get_backend('qasm_simulator')
    compiled_circuit = transpile(qc, simulator)
    job = simulator.run(compiled_circuit, shots=1024)
    result = job.result()
    counts = result.get_counts()
    
    print("We applied the H-gate to |0> and measured 1024 times.")
    print("Results:", counts)
    
    # Optional: Display a histogram if running locally
    # plot_histogram(counts)
    # plt.show()
except ImportError:
    print("Qiskit not installed. Simulating...")
    print("We applied the H-gate to |0> and measured 1024 times.")
    print("Results: {'0': 518, '1': 506}")
    print("Notice the almost perfect 50/50 distribution characteristic of the |+> state.")`,
      content: {
        aim: {
          text: "To master the Hadamard (H) gate, the fundamental operation used to put a computational basis state into an equal superposition.",
          bullets: []
        },
        theory: [
          {
            title: "The Hadamard Gate",
            body: [
              "The Hadamard (H) gate is arguably the most important gate in quantum algorithms. It is responsible for creating superposition.",
              "![Superposition creation animation](/videos/quantum_hadamard.mp4)",
              "When applied to the |0⟩ state, it creates the |+⟩ state: an equal superposition where the probability of measuring 0 or 1 is exactly 50%. Mathematically: H|0⟩ = 1/√2|0⟩ + 1/√2|1⟩.",
              "When applied to the |1⟩ state, it creates the |-⟩ state: H|1⟩ = 1/√2|0⟩ - 1/√2|1⟩. Note the negative phase on the |1⟩ component.",
              "The H-gate is its own inverse. Applying an H-gate to a state that is already in superposition (like |+⟩) will collapse it deterministically back into its original basis state (|0⟩)."
            ]
          }
        ],
        pretest: [],
        procedure: [
          "1. Execute the simulator code.",
          "2. The code applies a single `qc.h(0)` operation.",
          "3. The measurement over 1024 shots proves the 50/50 probabilistic outcome.",
          "4. Note that if we didn't measure, the state would remain perfectly in superposition."
        ],
        posttest: []
      }
    },
    {
      id: "qc-m3-5",
      title: "5. Quantum Circuit Design",
      desc: "Combine multiple gates to create a cohesive quantum algorithm.",
      code: `try:
    from qiskit import QuantumCircuit
    
    # We will design a small 2-qubit circuit
    qc = QuantumCircuit(2, 2)
    
    # Apply H to qubit 0
    qc.h(0)
    
    # Apply X to qubit 1
    qc.x(1)
    
    # Apply a multi-qubit CNOT gate (Control=0, Target=1)
    # We will learn more about CNOT in Module 4, but it flips Target IF Control is 1.
    qc.cx(0, 1)
    
    # Measure both qubits
    qc.measure([0, 1], [0, 1])
    
    print("Circuit drawn in ASCII:\\n")
    print(qc.draw(output='text'))
    
    print("\\nReading a circuit:")
    print("- Wires (horizontal lines) represent qubits over time (left to right).")
    print("- Boxes (H, X) represent single-qubit gates applied at that moment.")
    print("- Vertical lines with dots and crosses represent multi-qubit gates (like CNOT).")
    print("- Meter symbols represent measurement, writing to classical bits (bottom double line).")
except ImportError:
    print("Qiskit not installed. Simulating text output...")
    print("Circuit drawn in ASCII:\\n")
    print("     ┌───┐          ┌─┐   ")
    print("q_0: ┤ H ├──■───────┤M├───")
    print("     ├───┤┌─┴─┐┌─┐  └╥┘   ")
    print("q_1: ┤ X ├┤ X ├┤M├───╫────")
    print("     └───┘└───┘└╥┘   ║    ")
    print("c: 2/═══════════╩════╩════")
    print("                1    0    ")`,
      content: {
        aim: {
          text: "To understand how to read, design, and interpret a quantum circuit diagram containing multiple sequential gates.",
          bullets: []
        },
        theory: [
          {
            title: "Quantum Circuit Architecture",
            body: [
              "Quantum circuits are the standard visual language for describing quantum algorithms.",
              "![Circuit execution visualization](/videos/quantum_circuit_design.mp4)",
              "Each horizontal line represents a qubit evolving over time, flowing from left to right. The top wire is usually labeled q_0, the next q_1, and so on.",
              "A double line at the bottom represents the classical register, where measurement results are stored as standard bits.",
              "Gates are placed on the wires. Single-qubit gates (like H, X, Y, Z) appear as boxes on a single wire. Multi-qubit gates (like CNOT) span across multiple wires, indicating interaction or entanglement.",
              "The final step in most circuits is a measurement gate, represented by a meter icon, pointing down to the classical register."
            ]
          }
        ],
        pretest: [],
        procedure: [
          "1. Run the simulator code to generate an ASCII representation of a quantum circuit.",
          "2. Analyze the visual output: trace the path of `q_0` and `q_1` from left to right.",
          "3. Identify the H gate, the X gate, the CNOT (dot connected to a plus), and the Measurement blocks."
        ],
        posttest: []
      }
    }
  ]
};
