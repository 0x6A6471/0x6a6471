import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "~/writing",
};

export default function WritingPage() {
	return (
		<div
			className="flex flex-col items-center justify-center"
			style={{ minHeight: "calc(100vh - 176px)" }}
		>
			<h1 className="font-bold text-xl">Coming soon</h1>
		</div>
	);
}
