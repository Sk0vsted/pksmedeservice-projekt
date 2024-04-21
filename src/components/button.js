import React from "react";

export default function Button({ label }) {
  return (
    <button
      className="border-2 border-light text-light text-lg py-2 px-6 rounded-full relative hover:drop-shadow-xl hover:bg-light hover:cursor-pointer hover:text-dark 
      hover:text-transform transition duration-300 font-ubuntu ease-in-out before:"
    >
      {label}
    </button>
  );
}
