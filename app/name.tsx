"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Name() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="inline-flex w-[87px] overflow-hidden"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<AnimatePresence mode="wait">
				<motion.p
					key={isHovered ? "jdq" : "0x6A6471"}
					className="font-medium text-gray-700 text-lg"
					initial={{ opacity: 1, y: 0 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -0 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
				>
					{isHovered ? "jdq." : "0x6A6471."}
				</motion.p>
			</AnimatePresence>
		</div>
	);
}
