"use client";

import Link from "next/link";

import Icon from "@/components/ui/icon";
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
      className="flex flex-col items-center gap-y-2 font-mono text-gray-500"
    >
      <span className="text-sm">{time} UTC</span>
      <Link
        href="https://bitcoin.org/bitcoin.pdf"
        className="relative flex items-center [&>svg]:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)] hover:[&>svg]:drop-shadow-[0_0_12px_rgba(249,115,22,0.9)] animate-spin-slow hover:[animation-play-state:paused]"
      >
        <Icon name="btc" size="20" className="text-orange-primary" />
      </Link>
    </time>
  );
}
