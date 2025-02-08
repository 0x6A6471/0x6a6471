import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";

import a from "./components/custom-link";
import p from "./components/paragraph";
import { h1, h2, h3 } from "./components/headings";
import em from "./components/em";
import { ul, li } from "./components/list";
import pre from "./components/pre";

export default function CustomMdx(props: MDXRemoteProps) {
	const components = {
		a,
		h1,
		h2,
		h3,
		p,
		ul,
		li,
		em,
		pre,
	};

	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
		/>
	);
}
