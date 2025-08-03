import React from 'react';
import { Home, User, Folder, Mail } from 'lucide-react';

const navItems = [
  { label: 'Home', icon: <Home size={18} /> },
  { label: 'About', icon: <User size={18} /> },
  { label: 'Projects', icon: <Folder size={18} /> },
  { label: 'Contact', icon: <Mail size={18} /> },
];

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-br from-gray-800 to-black p-4 px-6 sm:px-8 m-5 rounded-full border border-gray-700 shadow-md max-w-[700px] mx-auto hover:translate-y-1 transition-transform duration-300 overflow-x-auto">
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm sm:text-lg font-medium">
          {navItems.map(({ label, icon }) => (
            <div key={label} className="relative group cursor-pointer flex items-center gap-1">
              <span className="text-gray-300 group-hover:text-white transition hover:text-cyan-400 flex items-center gap-1">
                {icon}
                {label}
              </span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;