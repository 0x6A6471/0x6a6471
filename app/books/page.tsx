import Link from "next/link";

import parseRssFeed from "@/lib/rss";

async function getOkuContent() {
	const [read, reading, toRead] = await Promise.all([
		parseRssFeed(process.env.OKU_READ_URL!),
		parseRssFeed(process.env.OKU_READING_URL!),
		parseRssFeed(process.env.OKU_TO_READ_URL!),
	]);

	return { toRead, read, reading };
}

export default async function BooksPage() {
	const { read, reading, toRead } = await getOkuContent();

	return (
		<div>
			<h1 className="text-4xl text-center font-semibold">Books</h1>
			<div className="h-[1px] my-8 max-w-64 mx-auto bg-gray-900"></div>

			<ul className="space-y-4">
				{reading?.map(book => (
					<li key={book.guid}>
						<Link href={book.link} passHref>
							<div
								className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md hover:cursor-pointer"
								// whileHover={{ scale: 1.01 }}
								// transition={{ type: "spring", stiffness: 100 }}
							>
								<div className="flex flex-col justify-between truncate pr-8">
									<p className="truncate font-medium text-gray-900">
										{book.title}
									</p>

									<p className="pt-4 text-sm font-light text-gray-500">
										{book.creator}
									</p>
								</div>

								{/*<div>
									<ArrowRight className="text-gray-500" />
								</div>*/}
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
