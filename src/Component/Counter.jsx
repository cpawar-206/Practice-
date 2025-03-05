
import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Counter App</h1>
      <h2
        className={`text-4xl font-bold ${
          count < 0 ? "text-red-500" : count > 10 ? "text-green-500" : ""
        }`}
      >
        {count}
      </h2>
      {count > 10 && <p className="text-green-600 text-lg">Positive Value</p>}
      
      <div className="mt-6 space-x-4">
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
