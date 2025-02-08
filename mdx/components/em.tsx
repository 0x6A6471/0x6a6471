export default function em({ ...props }) {
	return (
		<code
			className="rounded bg-gray-950 text-gray-400 text-xs p-0.5"
			{...props}
		/>
	);
}
