import parseRssFeed from "@/lib/rss";

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
			<p className="text-center">
				A collections of books I&apos;ve found over the last few years.
			</p>
			<div className="mx-auto my-16 h-[1px] max-w-64 bg-gray-900" />

			<ul className="space-y-2">
				{reading?.map(book => (
					<li
						key={book.guid}
						className="hover:-translate-y-0.5 transform transition-transform duration-300 ease-in-out"
					>
						<div className="flex items-center justify-between rounded-lg bg-gray-950 p-4">
							<div className="flex flex-col justify-between truncate pr-8">
								<p className="truncate text-gray-50">{book.title}</p>

								<p className="pt-2 font-light text-gray-300 text-sm">
									{book.creator}
								</p>
							</div>

							{/*<div>
									<ArrowRight className="text-gray-500" />
								</div>*/}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
