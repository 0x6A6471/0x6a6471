import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CustomMdx from "@/mdx/mdx";
import { getPosts } from "@/mdx/utils";
import Divider from "@/components/ui/divider";

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
			title: "Post Not Found",
		};
	}

	return {
		title: post.metadata.title,
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
	const post = getPosts().find(post => post.slug === slug);

	if (!post) {
		notFound();
	}

	return (
		<div className="space-y-8">
			<h1 className="text-center font-semibold text-4xl">
				{post.metadata.title}
			</h1>
			<p className="text-center mx-auto max-w-md text-gray-500">
				{post.metadata.description}
			</p>
			<Divider />
			<article>
				<CustomMdx source={post.content} />
			</article>
		</div>
	);
}
