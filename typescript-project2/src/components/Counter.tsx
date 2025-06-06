// Counter.tsx
import { Component } from "react";

// STEP 1️⃣: Define types for Props and State
// If no props, use an empty object {}
interface CounterProps {}

interface CounterState {
  count: number; // count is a number
}

// STEP 2️⃣: Type the Component with Props and State
class Counter extends Component<CounterProps, CounterState> {
  // STEP 3️⃣: Initialize state with correct type
  state: CounterState = {
    count: 0,
  };

  // STEP 4️⃣: Event handler with arrow function
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // STEP 5️⃣: Render UI
  render() {
    return (
      <div className="p-4 bg-gray-700 rounded shadow-md text-center">
        <p className="text-xl mb-4">Count: {this.state.count}</p>
        <button
          onClick={this.increment}
          className="bg-pink-600 hover:bg-blue-400 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
