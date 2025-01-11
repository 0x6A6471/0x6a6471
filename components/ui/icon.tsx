type Props = {
	name: string;
	className?: string;
	variant?: "line" | "filled" | "gesalt";
	size?: string;
};

export default function Icon({
	name,
	className,
	variant = "line",
	size = "16",
}: Props) {
	const n =
		variant === "filled"
			? `${name}-filled`
			: variant === "gesalt"
				? `${name}-gesalt`
				: name;

	return (
		<svg className={className} height={size} width={size}>
			<use href={`/sprite.svg#${n}`} height={size} width={size} />
		</svg>
	);
}
