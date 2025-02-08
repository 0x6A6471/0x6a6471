import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CustomMdx from "@/mdx/mdx";
import { getPosts } from "@/mdx/utils/paths";
import Divider from "@/components/ui/divider";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata | undefined> {
	const posts = getPosts();
	const post = posts.find(post => post.slug === params.slug);

	// Debug logs
	console.log({
		requestedSlug: params.slug,
		availablePosts: posts.map(p => ({ slug: p.slug, title: p.metadata.title })),
		foundPost: post,
	});

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
			<p className="text-center text-gray-500">{post.metadata.description}</p>
			<Divider />
			<article>
				<CustomMdx source={post.content} />
			</article>
		</div>
	);
}
