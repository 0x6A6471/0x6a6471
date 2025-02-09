import Link from "next/link";

export default function a({
	href,
	children,
	...props
}: React.LinkHTMLAttributes<HTMLAnchorElement>) {
	return (
		<Link
			href={href ?? "#"}
			className="text-orange-primary hover:underline hover:underline-offset-2"
			{...props}
		>
			{children}
		</Link>
	);
}
