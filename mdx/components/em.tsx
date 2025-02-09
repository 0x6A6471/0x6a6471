export default function em({ ...props }) {
	return (
		<code
			className="rounded bg-gray-950 p-0.5 text-gray-400 text-xs"
			{...props}
		/>
	);
}
