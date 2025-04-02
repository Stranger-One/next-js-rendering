"use client";

import { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");
  console.log("Dashboard client component");
  
  return (
    <div
      className="flex items-center justify-center flex-col
    h-screen w-screen"
    >
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border "
      />

      <p>: {name}</p>
    </div>
  );
}
