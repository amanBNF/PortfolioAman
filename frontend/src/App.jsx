import React, { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Focus from "./components/Focus";
import StatsBlock from "./components/StatsBlock";
import SystemInfoWidget from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleComplete = () => {
    setLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <div>
      {loading ? (
        <Loader onComplete={handleComplete} />
      ) : (
        <div
          className={`transition-all duration-1000 ease-in-out ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Navbar />
          <Focus />
          <StatsBlock />
          <SystemInfoWidget />
        </div>
      )}
    </div>
  );
};

export default App;
