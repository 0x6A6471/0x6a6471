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
			<h1 className="text-4xl text-center font-semibold mb-8">Library</h1>
			<p className="text-center">
				A collections of books I&apos;ve found over the last few years.
			</p>
			<div className="h-[1px] my-16 max-w-64 mx-auto bg-gray-900"></div>

			<ul className="space-y-2">
				{reading?.map(book => (
					<li
						key={book.guid}
						className="transform transition-transform duration-300 ease-in-out hover:-translate-y-0.5"
					>
						<div className="flex items-center justify-between rounded-lg bg-gray-950 p-4">
							<div className="flex flex-col justify-between truncate pr-8">
								<p className="truncate text-gray-50">{book.title}</p>

								<p className="pt-2 text-sm font-light text-gray-300">
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
