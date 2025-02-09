export function formatDate(dateString: string) {
	const date = new Date(dateString + "T00:00:00");
	const month = date.toLocaleString("en-US", { month: "short" });
	const day = date.getDate();
	const year = date.getFullYear();

	return `${month} ${day}, ${year}`;
}
