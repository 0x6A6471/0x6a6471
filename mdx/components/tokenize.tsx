import lackluster from "./theme";

export default function tokenize(line: string) {
	return line
		.split(
			/(\bfunction\s+\w+|["'`].*?["'`]|\/\/.*$|[{}()[\].]|\b(?:const|let|var|function|return|import|export|from|default|type|interface|struct|enum|union)\b|\b\w+(?=\s*\())/g,
		)
		.filter(Boolean)
		.map((token, index) => {
			let tokenStyle = { color: lackluster.text }; // default color

			// function declarations
			if (token.startsWith("function ")) {
				const [keyword, ...rest] = token.split(" ");
				return (
					<span key={index}>
						<span style={{ color: lackluster.keywords }}>{keyword}</span>
						<span> </span>
						<span style={{ color: lackluster.functions }}>
							{rest.join(" ")}
						</span>
					</span>
				);
			}
			// other
			else if (token.match(/^["'`].*["'`]$/)) {
				tokenStyle = { color: lackluster.strings }; // strings
			} else if (token.match(/^\/\//)) {
				tokenStyle = { color: lackluster.comments }; // comments
			} else if (token.match(/[{}()[\]]/)) {
				tokenStyle = { color: lackluster.keywords }; // brackets
			} else if (
				token.match(
					/\b(?:const|let|var|function|return|import|export|from|default|struct|enum|union)\b/,
				)
			) {
				tokenStyle = { color: lackluster.keywords }; // keywords
			} else if (token.match(/\b(?:type|interface)\b/)) {
				tokenStyle = { color: lackluster.types }; // type-related keywords
			} else if (token.match(/\b\w+(?=\s*\()/)) {
				tokenStyle = { color: lackluster.functions }; // function calls
			}

			return (
				<span key={index} style={tokenStyle}>
					{token}
				</span>
			);
		});
}
