import React from 'react';
import aman from '../assets/aman.png'; // Adjust if path is different
import { Typewriter } from 'react-simple-typewriter';
import { Binary } from 'lucide-react';

const Focus = () => {
  return (
    <div className="py-12 bg-[#111111] text-white px-6 flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side */}
        <div className="flex flex-col gap-4">
          <p className="text-green-400 font-mono">$ amantrix</p>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-300 leading-tight">
            Aman Shukla<br />
            Front-End Developer &<br />
            <span>
                <Typewriter
                    words={["ML Engineer"]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </span>
          </h1>

          <p className="text-gray-400 text-lg">
            Engineering reliable systems from <span className="text-blue-400">code</span> to <span className="text-blue-400">cloud</span>.
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="mailto:aman29shukla@gmail.com"
              className="bg-[#1a1f2e] px-4 py-2 rounded border border-black text-white hover:bg-[#2a3148] transition"
            >
              📧 aman29shukla@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/aman-shukla-a779a5332"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1f2e] px-4 py-2 rounded border border-black text-white hover:bg-[#2a3148] transition"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://github.com/amanBNF"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1f2e] px-4 py-2 rounded border border-black text-white hover:bg-[#2a3148] transition"
            >
              💻 GitHub
            </a>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="flex flex-row px-5 py-2 rounded-md border border-black text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:brightness-160 transition duration-300 hover:text-black">
              <span className='mr-2'><Binary size={29} color='black' /></span> View Projects
            </button>
            <button className="px-5 py-2 rounded-md border border-black text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:brightness-160 transition duration-300 hover:text-black">
              📄 Download CV
            </button>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="relative">
          <img
            src={aman}
            alt="Aman Shukla"
            className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#1a1f2e] text-green-400 px-3 py-2 rounded text-sm font-mono shadow-lg">
            $open_terminal
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;
