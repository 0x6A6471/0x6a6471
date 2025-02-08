import { type ReactElement } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { JetBrains_Mono } from "next/font/google";
import cn from "@/utils/cn";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

type Props = {
	children: ReactElement & {
		props: {
			children: string;
		};
	};
	className?: string;
};

export default function pre({ children, className }: Props) {
	const language = className ? className.replace(/language-/, "") : "tsx";
	const code =
		typeof children === "string" ? children : children?.props?.children || "";

	return (
		<Highlight
			theme={themes.gruvboxMaterialDark}
			code={code.trim()}
			language={language}
		>
			{({ style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={cn(
						jetbrainsMono.className,
						"overflow-auto rounded-md p-4 my-4",
					)}
					style={style}
				>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line })} className="table-row">
							<span className="table-cell pr-4 text-gray-500 select-none">
								{i + 1}
							</span>
							<span className="table-cell">
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token })} />
								))}
							</span>
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
}
