"use client";

import Link from "next/link";

import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import useBtc from "@/hooks/useBtc";
import { formatUsd } from "@/utils/number-fns";

export default function Time() {
	const { btc, error } = useBtc();
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
			className="flex flex-col items-center font-mono text-gray-400 gap-y-2"
		>
			<span className="text-sm">{time} UTC</span>
			<Link
				href="https://bitcoin.org/bitcoin.pdf"
				className="flex items-center relative [&>svg]:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)] hover:[&>svg]:drop-shadow-[0_0_12px_rgba(249,115,22,0.9)]"
			>
				<Icon name="btc" size="20" className="text-orange-primary" />
				{!error ? (
					<div className="w-24 flex justify-end">
						{btc?.amount ? (
							<p className="pt-1 text-sm">{formatUsd(Number(btc?.amount))}</p>
						) : (
							<div className="h-6 w-20 animate-pulse rounded-xl bg-gray-950" />
						)}
					</div>
				) : null}
			</Link>
		</time>
	);
}
