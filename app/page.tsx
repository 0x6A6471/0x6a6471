import Image from "next/image";
import Link from "next/link";

import Name from "./name";
import Time from "./time";

export default function HomePage() {
	return (
		<div className="space-y-16">
			<div className="space-y-4">
				<Image
					className="mx-auto rounded-2xl"
					src="/0x6a6471.jpeg"
					alt="0x6A6471"
					width={100}
					height={100}
				/>
				<Time />
			</div>

			<section className="space-y-2">
				<div className="flex gap-x-1">
					<p>Hi, I&apos;m </p>
					<Name />
				</div>
				<p>
					I like computers & design. I&apos;m also deeply interested in
					technology that improves people&apos;s freedoms and privacy.
				</p>
				<p>
					I&apos;m currently writing code to realize this vision at{" "}
					<Link
						href="https://onrampbitcoin.com"
						className="text-orange-primary underline-offset-2 hover:underline"
					>
						Onramp
					</Link>
					.
				</p>
			</section>
		</div>
	);
}
