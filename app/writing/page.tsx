import type { Metadata } from "next";
import Link from "next/link";

import Divider from "@/components/ui/divider";
import cn from "@/utils/cn";
import { formatDate } from "@/utils/date-fns";

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
								"relative flex flex-col w-full rounded-[20px] bg-gray-950 p-4 text-left focus:outline-none space-y-2",
							)}
						>
							<p className="w-full text-gray-50 truncate">
								{post.metadata.title}
							</p>
							<div className="flex justify-between">
								<p className="text-gray-500 text-sm truncate">
									{post.metadata.description}
								</p>
								<p className="text-gray-500 text-xs">
									{formatDate(post.metadata.publishedAt)}
								</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
