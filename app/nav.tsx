"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import cn from "@/utils/cn";

import ContactDropdown from "./contact-dropdown";

export default function Nav() {
	return (
		<motion.nav
			initial={{ y: 100 }}
			animate={{ y: 0, transition: { duration: 0.5 } }}
			className="fixed right-2 bottom-8 left-2 z-10 mx-auto max-w-sm rounded-[20px] bg-gray-800/80 p-1.5 backdrop-blur-sm"
		>
			<ul className="flex items-center justify-between">
				<li>
					<Link href="/">
						<Image
							className="rounded-[14px]"
							src="/0x6a6471.svg"
							alt="Jake"
							width={40}
							height={40}
						/>
					</Link>
				</li>
				<NavLink href="/library" label="Library" />
				<NavLink href="/food" label="Food" />
				<NavLink href="/blog" label="Blog" />
				<ContactDropdown />
			</ul>
		</motion.nav>
	);
}

function NavLink({ href, label }: { href: string; label: string }) {
	const pathname = usePathname();

	return (
		<li
			className={cn(
				pathname === href ? "text-gray-50" : "text-gray-100",
				"relative hover:text-gray-50",
			)}
		>
			<Link href={href}>{label}</Link>
		</li>
	);
}
