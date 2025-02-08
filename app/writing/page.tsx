import type { Metadata } from "next";
import Link from "next/link";

import Divider from "@/components/ui/divider";

import { getPosts } from "@/mdx/utils/paths";

export const metadata: Metadata = {
	title: "~/writing",
};

export default function WritingPage() {
	const posts = getPosts();

	return (
		<div className="space-y-8">
			<h1 className="text-center font-semibold text-4xl">Writing</h1>
			<Divider />

			<ul>
				{posts.map(post => (
					<li key={post.slug}>
						<Link href={`/writing/${post.slug}`}>{post.metadata.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
