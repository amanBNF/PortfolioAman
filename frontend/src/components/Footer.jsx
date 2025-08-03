import React, { useState, useEffect } from 'react';

const SystemInfoWidget = () => {
  const [info, setInfo] = useState({
    platform: '',
    userAgent: '',
    language: '',
    online: false,
    memory: '',
    battery: '',
  });

  const updateInfo = async () => {
    const platform = navigator.platform;
    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const online = navigator.onLine;
    const memory = navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'N/A';

    let batteryInfo = 'Battery info not supported';
    if ('getBattery' in navigator) {
      const battery = await navigator.getBattery();
      batteryInfo = `${(battery.level * 100).toFixed(0)}% (${battery.charging ? 'Charging 🔌' : 'Not Charging'})`;
    }

    setInfo({
      platform,
      userAgent,
      language,
      online,
      memory,
      battery: batteryInfo,
    });
  };

  useEffect(() => {
    updateInfo(); // initial fetch
    const interval = setInterval(updateInfo, 1000); // update every second
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className='flex flex-col md:flex-row p-6 items-center justify-between gap-6 md:gap-0 h-max border-t text-white bg-gradient-to-r from-gray-900 to-black shadow-xl overflow-x-auto'>
      <div className='flex flex-col items-center px-6 md:px-40'>
        <h1>Aman Shukla</h1>
      </div>
      <div className='flex flex-col items-center px-6 md:px-40'>
        <h2 className='text-green-500 text-xl mb-2 font-mono'>System Information</h2>
        <div className='text-sm text-center md:text-left'>
          <p><strong className='text-blue-600 font-bold'>Platform:</strong> {info.platform}</p>
          <p><strong className='text-blue-600 font-bold'>Language:</strong> {info.language}</p>
          <p><strong className='text-blue-600 font-bold'>Online Status:</strong> {info.online ? 'Online 🌐' : 'Offline 🌑'}</p>
          <p><strong className='text-blue-600 font-bold'>Memory:</strong> {info.memory}</p>
          <p><strong className='text-blue-600 font-bold'>Battery:</strong> {info.battery}</p>
        </div>
      </div>
    </div>
  );
};

export default SystemInfoWidget;
