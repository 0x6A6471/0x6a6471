"use client";

import type { Book } from "@/types/book";
import BookItem from "./book";

type Props = {
	reading: Book[];
};

export default function Library({ reading }: Props) {
	return (
		<ul className="relative space-y-2">
			{reading?.map(book => (
				<BookItem key={book.guid} book={book} />
			))}
		</ul>
	);
}
