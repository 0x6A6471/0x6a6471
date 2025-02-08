"use client";

import { useState, useMemo } from "react";

import type { Food } from "@/types/food";
import FoodCard from "./food-card";
import Pagination, { ITEMS_PER_PAGE } from "../pagination";

type Props = {
	food: Food[];
};

export default function FoodContent({ food }: Props) {
	const [page, setPage] = useState(1);

	const paginatedFood = useMemo(() => {
		const startIndex = (page - 1) * ITEMS_PER_PAGE;
		return food.slice(startIndex, startIndex + ITEMS_PER_PAGE);
	}, [food, page]);

	return (
		<div>
			<div className="grid grid-cols-1 gap-2 mb-2 sm:grid-cols-2">
				{paginatedFood.map(food => (
					<FoodCard key={food.id} item={food} />
				))}
			</div>
			<Pagination data={food} page={page} setPage={setPage} />
		</div>
	);
}
