import Image from "next/image";
import Link from "next/link";

import Name from "./name";
import Time from "./time";

export default function HomePage() {
	return (
		<div className="space-y-16">
			<div className="flex flex-col items-center space-y-4">
				<Image
					className="rounded-2xl"
					src="/0x6a6471.svg"
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
					I like computers & design. My passion lies in creating technology that
					protects individual privacy and digital freedom.
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
