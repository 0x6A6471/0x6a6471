"use client";

import { useState } from "react";

import type { Food } from "@/types/food";
import FoodCard from "./food-card";
// import Pagination from '../bookshelf/Pagination';

type Props = {
	data: Food[];
};

export default function FoodContent({ data }: Props) {
	// const [page, setPage] = useState(1);

	// const determineResults = () => {
	//   if (page === 1) {
	//     return data.slice(0, 10);
	//   }
	//
	//   return data.slice((page - 1) * 10, page * 10);
	// };

	return (
		<>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{data && data.map(food => <FoodCard key={food.id} item={food} />)}
			</div>
			{/*<Pagination data={data} page={page} setPage={setPage} />*/}
		</>
	);
}
