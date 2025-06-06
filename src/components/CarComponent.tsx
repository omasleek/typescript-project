import React, { useState } from "react";
import { motion } from "framer-motion";

// Define Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implement Car class
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// React Functional Component (RAFCE style)
const CarComponent: React.FC = () => {
  // Create instance with Honda Passport 2026
  const myCar = new Car("Honda", "Passport", 2026);

  const carImageUrl =
    "https://hips.hearstapps.com/hmg-prod/images/2026-honda-passport-trailsport-103-67326b607e70c.jpg?crop=0.837xw:0.707xh;0.00160xw,0.235xh&resize=2048:*";

  // UI state
  const [engineStarted, setEngineStarted] = useState(false);

  const handleStart = () => {
    myCar.start();
    setEngineStarted(true);
    // Reset after 3 seconds
    setTimeout(() => setEngineStarted(false), 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 text-white">
      <motion.h1
        className="text-4xl font-extrabold text-orange-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Vehicle Info
      </motion.h1>

      <motion.div
        className="bg-white text-black p-8 rounded-xl shadow-lg border-2 border-orange-500 w-full max-w-md text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Car Image */}
        <img
          src={carImageUrl}
          alt={`${myCar.make} ${myCar.model}`}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <p className="text-2xl font-bold mb-2">
          {myCar.make} {myCar.model}
        </p>
        <p className="text-gray-600 mb-6 text-lg">Year: {myCar.year}</p>

        <motion.button
          onClick={handleStart}
          className="bg-orange-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          Start Car
        </motion.button>

        {engineStarted && (
          <motion.div
            className="mt-4 text-green-500 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            🚗 Car engine started!
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CarComponent;
