import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-indigo-900 text-white py-4 px-6 flex justify-between">
      <h1 className="text-lg font-bold">DASHBOARD180</h1>
      <div className="flex items-center gap-4">
        <button className="text-sm">Night Mode</button>
        <div className="h-8 w-8 rounded-full bg-gray-300"></div>
      </div>
    </nav>
  );
};

export default Navbar;
