"use client";

import React, { useState } from "react";
import { type Book } from "@/types/book";
import BookItem from "./book";

type Props = {
	reading: Book[];
};

export default function Library({ reading }: Props) {
	const [selected, setSelected] = useState<Book | null>(null);

	return (
		<ul className="space-y-2 relative">
			{reading?.map(book => (
				<BookItem
					key={book.guid}
					book={book}
					isSelected={selected?.guid === book.guid}
					onSelect={setSelected}
					onClose={() => setSelected(null)}
				/>
			))}
		</ul>
	);
}
