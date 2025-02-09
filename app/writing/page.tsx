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
								"relative flex w-full flex-col space-y-2 rounded-[20px] bg-gray-950 p-4 text-left focus:outline-hidden",
							)}
						>
							<p className="w-full truncate text-gray-50">
								{post.metadata.title}
							</p>
							<div className="flex xs:flex-row flex-col items-baseline justify-between">
								<p className="truncate whitespace-normal text-gray-500 text-sm">
									{post.metadata.description}
								</p>
								<p className="xs:block hidden text-gray-500 text-xs">
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
