import type { ReactElement } from "react";
import { JetBrains_Mono } from "next/font/google";
import cn from "@/utils/cn";

import lackluster from "./theme";
import tokenize from "./tokenize";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

type Props = {
	children: ReactElement & {
		props: {
			children: string;
		};
	};
};

export default function Pre({ children }: Props) {
	const code =
		typeof children === "string" ? children : children?.props?.children || "";
	const lines = code.trim().split("\n");

	return (
		<pre
			className={cn(
				jetbrainsMono.className,
				"my-4 overflow-auto rounded-md p-4 text-xs",
			)}
			style={{ backgroundColor: lackluster.background, color: lackluster.text }}
		>
			{lines.map((line, i) => (
				<div key={i} className="table-row">
					<span
						className="table-cell select-none pr-1"
						style={{ color: lackluster.lineNumbers }}
					>
						{i + 1}
					</span>
					<span className="table-cell">{tokenize(line)}</span>
				</div>
			))}
		</pre>
	);
}
