import { useRef, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";

import type { Book } from "@/types/book";
import cn from "@/utils/classNames";
import Icon from "@/components/ui/icon";

type Props = {
	book: Book;
};

const overlayVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition: { duration: 0.2 },
};

export default function BookItem({ book }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const itemRef = useRef<HTMLButtonElement | null>(null);

	const getItemPosition = () => {
		if (!itemRef.current) return { top: 0, left: 0 };
		const rect = itemRef.current.getBoundingClientRect();
		const scaleY = rect.height / window.innerHeight;
		return {
			top: rect.top + rect.height / 2,
			left: rect.left + rect.width / 2,
			scaleY,
		};
	};

	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<Dialog.Trigger asChild ref={itemRef}>
				<button
					className={cn(
						isOpen ? "invisible" : "",
						"group relative flex w-full flex-col rounded-lg bg-gray-950 p-4 text-left focus:outline-none",
					)}
				>
					<Icon
						name="arrows-expand"
						className="invisible absolute top-2.5 right-2.5 rounded-md text-gray-600 focus:outline-none group-hover:visible"
					/>
					<span className="truncate text-gray-50">{book.title}</span>
					<span className="mt-2 text-gray-500 text-sm">{book.creator}</span>
				</button>
			</Dialog.Trigger>

			<AnimatePresence>
				{isOpen && (
					<Dialog.Portal forceMount>
						<motion.div
							variants={overlayVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
						/>

						<Dialog.Content
							className="fixed inset-0 flex items-center justify-center"
							forceMount
						>
							<motion.div
								initial={{
									position: "fixed",
									top: getItemPosition().top,
									left: getItemPosition().left,
									x: "-50%",
									y: "-50%",
									scale: 0,
									opacity: 0,
								}}
								animate={{
									top: "50%",
									left: "50%",
									scale: 1,
									opacity: 1,
								}}
								exit={{
									top: getItemPosition().top,
									left: getItemPosition().left,
									scale: 0.2,
									opacity: 0,
								}}
								transition={{
									type: "spring",
									damping: 25,
									stiffness: 300,
								}}
								className="z-20 h-fit max-h-[80vh] w-[90vw] max-w-lg overflow-hidden rounded-lg bg-gray-1000 p-8"
							>
								<Image
									className="mx-auto rounded"
									src={book.cover}
									alt="0x6A6471"
									width={100}
									height={100}
								/>
								<Dialog.Title className="mt-8 text-center font-medium text-gray-50 text-lg">
									{book.title}
								</Dialog.Title>
								<Dialog.Description className="mt-4 text-gray-400">
									{book.description}
								</Dialog.Description>
								<Dialog.Close asChild>
									<button
										className="absolute top-2.5 right-2.5 rounded-md p-1 text-gray-600 hover:bg-black focus:outline-none"
										aria-label="Close"
									>
										<Icon name="x" />
									</button>
								</Dialog.Close>
							</motion.div>
						</Dialog.Content>
					</Dialog.Portal>
				)}
			</AnimatePresence>
		</Dialog.Root>
	);
}
