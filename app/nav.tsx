"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import ContactDropdown from "./contact-dropdown";

export default function Nav() {
	return (
		<motion.nav
			initial={{ y: 100 }}
			animate={{ y: 0, transition: { duration: 0.5 } }}
			className="fixed right-2 bottom-8 left-2 z-10 mx-auto max-w-sm rounded-[20px] bg-gray-900 p-1.5 backdrop-blur-xl"
		>
			<ul className="flex items-center justify-between">
				<li>
					<Link href="/">
						<Image
							className="rounded-[14px]"
							src="/0x6a6471.jpeg"
							alt="Jake"
							width={40}
							height={40}
						/>
					</Link>
				</li>
				<li className="text-gray-100 hover:text-gray-50">
					<Link href="/library">Library</Link>
				</li>
				<li className="text-gray-100 hover:text-gray-50">
					<Link href="/food">Food</Link>
				</li>
				<li className="text-gray-100 hover:text-gray-50">
					<Link href="/blog">Blog</Link>
				</li>
				<ContactDropdown />
			</ul>
		</motion.nav>
	);
}
