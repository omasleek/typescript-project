// Greeting.tsx
import React from "react";

// STEP 1️⃣: Define the type for props
interface GreetingProps {
  name: string; // name should be a string
}

// STEP 2️⃣: Use RAFCE style with type annotations
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div className="text-lg text-blue-600">Hello, {name}!</div>;
};

export default Greeting;
