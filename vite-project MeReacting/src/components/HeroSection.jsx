import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const HeroSection = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`transition-all duration-500 ease-in-out min-h-screen flex flex-col items-center justify-center ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-3xl md:text-5xl text-center font-bold mb-4">Welcome to the Themed Site</h1>
      <button
        className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500  text-white rounded shadow-lg border-2 border-transparent transition-all duration-300 transform hover:bg-indigo-600 hover:scale-105 hover:animate-pulse"
        onClick={toggleTheme}
      >
        Switch to {isDark ? "🌞 Light" : "🌙 Dark"} Mode
      </button>
    </div>
  );
};

export default HeroSection;
