import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
  return (
    <header className="bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-soft">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">🌞 Chitti & Sana Learn Sentiment</Link>
        <nav className="space-x-4 text-sm md:text-base">
          <NavLink to="/learn" className={({isActive})=>isActive?"font-semibold underline":"opacity-90 hover:opacity-100"}>Learn</NavLink>
          <NavLink to="/play" className={({isActive})=>isActive?"font-semibold underline":"opacity-90 hover:opacity-100"}>Play</NavLink>
          <NavLink to="/quiz" className={({isActive})=>isActive?"font-semibold underline":"opacity-90 hover:opacity-100"}>Quiz</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive?"font-semibold underline":"opacity-90 hover:opacity-100"}>About</NavLink>
        </nav>
      </div>
    </header>
  );
}
