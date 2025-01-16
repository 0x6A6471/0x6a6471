import parseRssFeed from "@/lib/rss";
import Library from "./library";

async function getOkuContent() {
	const [read, reading, toRead] = await Promise.all([
		parseRssFeed(process.env.OKU_READ_URL!),
		parseRssFeed(process.env.OKU_READING_URL!),
		parseRssFeed(process.env.OKU_TO_READ_URL!),
	]);

	return { toRead, read, reading };
}

export default async function LibraryPage() {
	const { reading } = await getOkuContent();

	return (
		<div>
			<h1 className="mb-8 text-center font-semibold text-4xl">Library</h1>
			<p className="text-center text-gray-500">
				A collections of books I&apos;ve found over the last few years.
			</p>
			<div className="mx-auto my-16 h-[1px] max-w-64 bg-gray-900" />

			<Library reading={reading} />
		</div>
	);
}
