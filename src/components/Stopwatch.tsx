import React, { useState, useEffect } from 'react';

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: number;

    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <div className="text-6xl font-mono mb-8">{formatTime(time)}</div>
        <div className="space-x-4">
          {!isRunning ? (
            <button
              onClick={startStopwatch}
              className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition-colors"
            >
              Start
            </button>
          ) : (
            <button
              onClick={stopStopwatch}
              className="px-6 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
            >
              Stop
            </button>
          )}
          <button
            onClick={resetStopwatch}
            className="px-6 py-2 text-white bg-gray-500 rounded hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch; 