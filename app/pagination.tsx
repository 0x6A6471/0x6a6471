import Icon from "@/components/ui/icon";

export const ITEMS_PER_PAGE = 10;

type Props<T> = {
	data: T[];
	page: number;
	setPage: (page: number) => void;
};

export default function Pagination<T>({ data, page, setPage }: Props<T>) {
	if (data.length <= ITEMS_PER_PAGE) {
		return null;
	}

	function determineResults() {
		if (
			data.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE).length ===
			ITEMS_PER_PAGE
		) {
			return `${(page - 1) * ITEMS_PER_PAGE + 1} – ${page * ITEMS_PER_PAGE}`;
		}

		if (page === Math.ceil(data.length / ITEMS_PER_PAGE)) {
			return `${(page - 1) * ITEMS_PER_PAGE + 1} – ${data.length}`;
		}

		return `${(page - 1) * ITEMS_PER_PAGE + 1} – ${
			(page - 1) * ITEMS_PER_PAGE +
			data.slice((page - 1) * ITEMS_PER_PAGE).length
		}`;
	}

	const handlePrevious = () => {
		setPage(page - 1);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleNext = () => {
		setPage(page + 1);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="flex items-center justify-between text-sm">
			<p>
				{determineResults()} of {data.length} results
			</p>

			<div className="flex space-x-1">
				<button
					className="group inline-flex items-center justify-center gap-1 rounded-lg px-2 py-1 disabled:cursor-not-allowed disabled:text-gray-500"
					disabled={page === 1}
					onClick={handlePrevious}
				>
					<Icon
						name="arrow-right"
						size="14"
						className="group-hover:-translate-x-0.5 rotate-180 transition-transform group-disabled:translate-x-0"
					/>
					Previous
				</button>
				<button
					className="group inline-flex items-center justify-center gap-1 rounded-lg px-2 py-1 disabled:cursor-not-allowed disabled:text-gray-500"
					disabled={page === Math.ceil(data.length / ITEMS_PER_PAGE)}
					onClick={handleNext}
				>
					Next
					<Icon
						name="arrow-right"
						size="14"
						className="transition-transform group-hover:translate-x-0.5 group-disabled:translate-x-0"
					/>
				</button>
			</div>
		</div>
	);
}
