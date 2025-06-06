// App.tsx
import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 space-y-10">
      {/* Greeting Component */}
      <div className="text-center">
        <Greeting name="Chioma" />
      </div>

      {/* Counter Component */}
      <Counter />
    </div>
  );
};

export default App;
