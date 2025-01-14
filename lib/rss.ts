function getTagContent(tag: string, content: string) {
	const regex = new RegExp(`<${tag}[^>]*>(.*?)<\/${tag}>`, "s");
	const match = content.match(regex);

	return match
		? match[1]
				.trim()
				.replace(/&lt;/g, "<")
				.replace(/&gt;/g, ">")
				.replace(/&amp;/g, "&")
		: "";
}

export default async function parseRssFeed(url: string) {
	try {
		const r = await fetch(url);
		const xmlText = await r.text();

		const itemRegex = /<item>([\s\S]*?)<\/item>/g;
		const items = [];
		let match;

		while ((match = itemRegex.exec(xmlText)) !== null) {
			const content = match[1];

			items.push({
				guid: getTagContent("guid", content),
				title: getTagContent("title", content),
				link: getTagContent("link", content),
				description: getTagContent("description", content),
				creator: getTagContent("dc:creator", content),
				pubDate: getTagContent("pubDate", content),
				cover:
					getTagContent("oku:cover", content) ||
					getTagContent("enclosure", content),
			});
		}

		return items;
	} catch (error) {
		console.error("Error fetching RSS feed:", error);
		return [];
	}
}
