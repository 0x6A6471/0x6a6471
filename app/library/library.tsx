"use client";

import { type Book } from "@/types/book";
import BookItem from "./book";

type Props = {
	reading: Book[];
};

export default function Library({ reading }: Props) {
	return (
		<ul className="space-y-2 relative">
			{reading?.map(book => (
				<BookItem key={book.guid} book={book} />
			))}
		</ul>
	);
}
