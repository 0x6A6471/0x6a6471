"use client";

import { useState } from "react";

export default function Name() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <p
      className="inline-flex w-[87px] font-medium text-gray-700 text-lg transition-colors duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? "jdq." : "0x6A6471."}
    </p>
  );
}
