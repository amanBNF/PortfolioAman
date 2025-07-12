import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-br from-gray-800 to-black p-4 px-8 m-5 rounded-full border border-gray-700 shadow-md max-w-[700px] mx-auto hover:translate-y-1 transition-transform duration-300">
            <div className="flex justify-center items-center">
                <div className="flex space-x-10 text-lg font-medium">
                    {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                        <div key={item} className="relative group cursor-pointer">
                            <span className="text-gray-300 group-hover:text-white transition hover:text-cyan-400">{item}</span>
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
