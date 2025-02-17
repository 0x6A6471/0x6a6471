import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "~/404",
};

export default function NotFound() {
	return (
		<div
			className="flex flex-col items-center justify-center space-y-2"
			style={{ minHeight: "calc(100vh - 176px)" }}
		>
			<h1 className="font-semibold text-gray-700 mb-8">Not found</h1>
			<Image
				src="/images/not-found.png"
				alt="Buy Bitcoin Sign"
				height={288}
				width={512}
			/>
		</div>
	);
}
