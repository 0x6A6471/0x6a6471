"use client";

import { useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import type { Book } from "@/types/book";
import BookItem from "./book";
import cn from "@/utils/cn";
import Pagination, { ITEMS_PER_PAGE } from "../pagination";

type Props = {
	read: Book[];
	reading: Book[];
	toRead: Book[];
};

type Tab = "reading" | "next" | "read";

const tabs: { id: Tab; label: string }[] = [
	{ id: "reading", label: "Reading" },
	{ id: "next", label: "Up next" },
	{ id: "read", label: "Read" },
];

export default function Library({ read, reading, toRead }: Props) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const s = searchParams.get("s") as Tab | null;
	const [page, setPage] = useState(1);

	const selectedBooks = useMemo(() => {
		switch (s) {
			case "read":
				return read;
			case "next":
				return toRead;
			default:
				return reading;
		}
	}, [s, read, toRead, reading]);

	const paginatedBooks = useMemo(() => {
		const startIndex = (page - 1) * ITEMS_PER_PAGE;
		return selectedBooks.slice(startIndex, startIndex + ITEMS_PER_PAGE);
	}, [selectedBooks, page]);

	function handleTabChange(tabId: Tab) {
		const params = new URLSearchParams(searchParams);
		if (tabId === "reading") {
			params.delete("s");
		} else {
			params.set("s", tabId);
		}
		setPage(1);
		router.push(`?${params.toString()}`);
	}

	return (
		<div>
			<div className="my-6 flex justify-center space-x-2">
				{tabs.map(tab => (
					<button
						key={tab.id}
						onClick={() => handleTabChange(tab.id)}
						className={cn(
							s === tab.id || (!s && tab.id === "reading")
								? "bg-gray-950 shadow-xs ring-1 ring-gray-800"
								: "text-gray-500",
							"flex items-center gap-2 rounded-xl px-4 py-1.5 transition-all duration-200 hover:bg-gray-950 hover:text-gray-50 focus:bg-gray-950 focus:text-gray-50",
						)}
					>
						{tab.label}
					</button>
				))}
			</div>
			<ul className="mb-2 space-y-2">
				{paginatedBooks.map(book => (
					<BookItem key={book.guid} book={book} />
				))}
			</ul>
			<Pagination data={selectedBooks} page={page} setPage={setPage} />
		</div>
	);
}
