import { Suspense } from "react";

import parseRssFeed from "@/lib/rss";
import Library from "./library";

export const revalidate = 60;

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
			<p className="text-center text-gray-500">
				A collections of books I&apos;ve found over the last few years.
			</p>
			<div className="mx-auto h-[1px] max-w-48 bg-gray-950" />
			<Suspense>
				<Library read={read} reading={reading} toRead={toRead} />
			</Suspense>
		</div>
	);
}
