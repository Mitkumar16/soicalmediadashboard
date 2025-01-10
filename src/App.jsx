import React from "react";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import BestPosts from "./components/BestPosts";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="px-4 md:px-8 lg:px-16 py-8">
        <Stats />
        <BestPosts />
      </main>
    </div>
  );
}

export default App;
