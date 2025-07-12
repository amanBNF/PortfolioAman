import React, { useState, useEffect } from "react";

const codeLines = [
  "import { QuantumBoot } from '@shivam/os';",
  "import { SpaceTime } from '@universe/core';",
  "",
  "export default function SystemLoader() {",
  "  const quantumModules = [",
  '    "NeuralCore", "QuantumDB", "AI Engine",',
  '    "CryptoVault", "BioAuth", "SpaceTime",',
  '    "HyperCache", "ZeroLatency"',
  "  ];",
  "",
  "  const systemConfig = {",
  "    speed: 'warp 9.9',",
  "    encryption: 'quantum-locked',",
  "    telemetry: 'full',",
  "    retry: true",
  "  };",
  "}"
];

const Loader = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [progressDone, setProgressDone] = useState(false);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, codeLines[index]]);
      index++;
      if (index >= codeLines.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Progress simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setProgressDone(true);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Notify parent on complete
  useEffect(() => {
    if (typingDone && progressDone && onComplete) {
      const delay = setTimeout(() => onComplete(), 500);
      return () => clearTimeout(delay);
    }
  }, [typingDone, progressDone, onComplete]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0f1117] text-[#c0cbf2] font-mono">
      {/* Loader Box */}
      <div className="bg-[#1b1d26] rounded-xl shadow-2xl p-6 w-[90%] max-w-4xl">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Terminal */}
          <div className="lg:w-2/3 bg-[#1a1c24] rounded-lg p-4">
            <div className="bg-[#101218] p-2 font-bold text-[#a0a0a0] rounded-t-md text-sm">
              🔒 Amantrix.v4.2.0.dmg
            </div>
            <div className="p-4 whitespace-pre-wrap text-xs min-h-[180px]">
              {visibleLines.map((line, idx) => (
                <div className="text-green-400" key={idx}>{line}</div>
              ))}
            </div>
            <div className="text-pink-400 px-4 pt-1 text-xs">
              Finalizing entanglement...
            </div>
            <div className="h-2 mt-2 bg-[#222] rounded mx-4 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-pulse transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="px-4 text-[10px] text-right text-[#aaaaaa] mt-1">
              {progress}%
            </div>
          </div>

          {/* Telemetry */}
          <div className="lg:w-1/3 bg-[#1c1e29] rounded-lg text-[#68b7ff] p-4 text-xs">
            <h4 className="text-blue-400 font-semibold mb-2 text-sm">
              AMANTRIX TELEMETRY
            </h4>
            <ul className="space-y-1">
              <li>🧠 MEMORY: 8GB DDR4</li>
              <li>🔋 POWER: {44 + Math.floor(progress / 10)}%</li>
              <li>🖥 DISPLAY: 1536×864 Desktop</li>
              <li>⚙ PROCESSOR: 16 cores</li>
              <li>🌐 BROWSER: Chrome on Windows</li>
              <li>📶 NETWORK: 4G ({10 + Math.floor(progress / 10)} Mbps)</li>
              <li>📍 LOCATION: Locating...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
