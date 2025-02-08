"use client";

import { useState, useMemo } from "react";

import type { Food } from "@/types/food";
import FoodCard from "./food-card";
import Pagination, { ITEMS_PER_PAGE } from "../pagination";

type Props = {
	food: Food[];
};

export default function Food({ food }: Props) {
	const [page, setPage] = useState(1);

	const paginatedFood = useMemo(() => {
		const startIndex = (page - 1) * ITEMS_PER_PAGE;
		return food.slice(startIndex, startIndex + ITEMS_PER_PAGE);
	}, [food, page]);

	return (
		<div>
			<div className="mb-2 grid grid-cols-1 xs:grid-cols-2 gap-2">
				{paginatedFood.map(food => (
					<FoodCard key={food.id} item={food} />
				))}
			</div>
			<Pagination data={food} page={page} setPage={setPage} />
		</div>
	);
}
