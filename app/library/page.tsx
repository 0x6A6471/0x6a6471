import { Suspense } from "react";
import type { Metadata } from "next";

import Divider from "@/components/ui/divider";
import parseRssFeed from "@/lib/rss";
import Library from "./library";

export const revalidate = 86_400; // 24 hours
export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "~/library",
};

async function getOkuContent() {
	const [read, reading, toRead] = await Promise.all([
		parseRssFeed(process.env.OKU_READ_URL!),
		parseRssFeed(process.env.OKU_READING_URL!),
		parseRssFeed(process.env.OKU_TO_READ_URL!),
	]);

	return { toRead, read, reading };
}

export default async function LibraryPage() {
	const { read, reading, toRead } = await getOkuContent();

	return (
		<div className="space-y-8">
			<h1 className="text-center font-semibold text-4xl">Library</h1>
			<p className="mx-auto max-w-md text-center text-gray-500">
				A collections of books I&apos;ve found over the last few years.
			</p>
			<Divider />
			<Suspense>
				<Library read={read} reading={reading} toRead={toRead} />
			</Suspense>
		</div>
	);
}
