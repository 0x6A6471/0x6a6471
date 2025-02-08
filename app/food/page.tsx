import type { Metadata } from "next";

import sql from "@/lib/db";
import Divider from "@/components/ui/divider";

import type { Food as FoodType } from "@/types/food";
import Food from "./food";

export const metadata: Metadata = {
	title: "~/food",
};

async function fetchFood() {
	try {
		const stmt = "select * from food order by created_at desc";
		const food = await sql<FoodType>(stmt);
		return food.rows;
	} catch (error) {
		console.log(error);
		return [];
	}
}

export default async function FoodPage() {
	const food = await fetchFood();

	return (
		<div className="space-y-8">
			<h1 className="text-center font-semibold text-4xl">Food</h1>
			<p className="text-center text-gray-500">
				My wife and I love eating healthy, but we also love enjoying great food.
				Here&apos;s some of our favorite spots, rated and photographed along the
				way.
			</p>
			<Divider />

			<Food food={food} />
		</div>
	);
}
