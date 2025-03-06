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
			className="flex flex-col items-center font-mono text-gray-500 gap-y-2"
		>
			<span className="text-xs">{time} UTC</span>
			<Link
				href="https://bitcoin.org/bitcoin.pdf"
				className="flex gap-x-2 items-center relative [&>svg]:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)] hover:[&>svg]:drop-shadow-[0_0_12px_rgba(249,115,22,0.9)]"
			>
				<p className="text-gray-500 pt-1">Study</p>
				<Icon name="btc" size="24" className="text-orange-primary" />
			</Link>
		</time>
	);
}
