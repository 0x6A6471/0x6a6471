"use client";

import Image from "next/image";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import type { Food } from "@/types/food";
import Icon from "@/components/ui/icon";

type Props = {
	item: Food;
};

const FOLDER = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME;

export default function FoodCard({ item }: Props) {
	return (
		<Link
			href={item.link}
			className="group relative rounded-lg shadow grayscale hover:cursor-pointer hover:grayscale-0"
		>
			<CldImage
				src={`${FOLDER}/${item.cloudinary_public_id}`}
				className="rounded-lg object-cover shadow-lg brightness-40"
				alt={item.restaurant_name}
				dpr="auto"
				quality="auto"
				width={450}
				height={600}
				crop="fill"
				gravity="auto"
			/>

			<h2 className="absolute top-4 right-4 left-4 text-center font-medium text-gray-100 text-lg group-hover:text-gray-50">
				{item.restaurant_name}
			</h2>

			<Icon
				name="external-link"
				className="invisible absolute top-2.5 right-2.5 text-gray-200 focus:outline-none group-hover:visible"
			/>

			<div className="-translate-y-1/4 absolute top-16 left-6">
				<div className="flex items-center gap-x-2 text-gray-200">
					<Image
						height={30}
						width={30}
						src="/images/0x6a6471.svg"
						alt="0x6A6471 avatar"
						className="rounded-full"
					/>
					<p className="font-medium">
						{Number(item["0x6a6471_rating"]).toFixed(1)}
					</p>
				</div>
			</div>

			<div className="-translate-y-1/4 absolute top-16 right-6">
				<div className="flex items-center gap-x-2 text-gray-200">
					<Image
						height={30}
						width={30}
						src="/images/other.svg"
						alt="Other avatar"
						className="rounded-full"
					/>
					<p className="font-medium">{Number(item.other_rating).toFixed(1)}</p>
				</div>
			</div>
		</Link>
	);
}
