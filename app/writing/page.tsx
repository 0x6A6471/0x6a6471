import type { Metadata } from "next";
import Link from "next/link";

import Divider from "@/components/ui/divider";
import cn from "@/utils/cn";

import { getPosts } from "@/mdx/utils";

export const metadata: Metadata = {
	title: "~/writing",
};

export default function WritingPage() {
	const posts = getPosts();

	return (
		<div className="space-y-8">
			<h1 className="text-center font-semibold text-4xl">Writing</h1>
			<Divider />

			<ul className="space-y-2">
				{posts.map(post => (
					<li key={post.slug}>
						<Link
							href={`/writing/${post.slug}`}
							className={cn(
								"relative flex w-full flex-col rounded-[20px] bg-gray-950 p-4 text-left focus:outline-none",
							)}
						>
							<span className="w-full text-gray-50 truncate">
								{post.metadata.title}
							</span>
							<span className="mt-2 text-gray-400 text-sm truncate">
								{post.metadata.description}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
