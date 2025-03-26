import type { Metadata } from "next";

import CustomMdx from "@/mdx/mdx";
import { type Post, getPost, getPosts } from "@/mdx/utils";
import Divider from "@/components/ui/divider";

export const dynamic = "force-static";
export const dynamicParams = false;

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
	params,
}: {
	params: Params;
}): Promise<Metadata | undefined> {
	const { slug } = await params;
	const posts = getPosts();
	const post = posts.find(post => post.slug === slug);

	if (!post) {
		return {
			title: "~/writing/404",
		};
	}

	return {
		title: `~/writing/${post.metadata.slug}`,
		description: post.metadata.description,
	};
}

export function generateStaticParams() {
	const posts = getPosts();

	return posts.map(post => ({
		slug: post.slug,
	}));
}

export default async function Blog({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const slug = (await params).slug;
	const post = getPost(slug) as Post;

	return (
		<div className="space-y-8">
			<h1 className="text-center font-semibold text-4xl">
				{post.metadata.title}
			</h1>
			<p className="mx-auto max-w-md text-center text-gray-500">
				{post.metadata.description}
			</p>
			<Divider />
			<article>
				<CustomMdx source={post.content} />
			</article>
		</div>
	);
}
