import Link from "next/link";

export default function NotFound() {
	return (
		<div
			className="flex flex-col items-center justify-center space-y-2"
			style={{ minHeight: "calc(100vh - 176px)" }}
		>
			<h1 className="font-semibold text-gray-700">404</h1>
			<Link
				href="https://fuckthebears.org"
				className="relative text-orange-primary"
			>
				Don&apos;t click me
			</Link>
		</div>
	);
}
