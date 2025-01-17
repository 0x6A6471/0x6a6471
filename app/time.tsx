"use client";

import { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().slice(11, 19));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <time
      dateTime={time}
      className="flex flex-col items-center gap-y-2 font-mono text-gray-700"
    >
      <span className="text-xs">{time} UTC</span>
      <span className="text-xl">
        🇺🇸
      </span>
    </time>
  );
}
