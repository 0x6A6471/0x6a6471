import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export default function Book({ book, isSelected, onSelect, onClose }) {
	const itemRef = useRef(null);

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
		<li
			ref={itemRef}
			onClick={() => !isSelected && onSelect(book)}
			className="cursor-pointer relative"
		>
			<div
				className={`hover:-translate-y-0.5 transform transition-transform duration-300 ease-in-out rounded-lg ${
					isSelected ? "invisible" : ""
				}`}
			>
				<div className="flex items-center justify-between p-4 bg-gray-950 rounded-lg">
					<div className="flex flex-col justify-between truncate pr-8">
						<p className="truncate text-gray-50">{book.title}</p>
						<p className="text-gray-400 text-sm mt-2">{book.creator}</p>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{isSelected && (
					<>
						<motion.div
							initial={{
								position: "fixed",
								top: getItemPosition().top,
								left: getItemPosition().left,
								x: "-50%",
								y: "-50%",
								scale: 0.5,
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
								scale: 0.5,
								opacity: 0,
							}}
							transition={{
								type: "spring",
								damping: 25,
								stiffness: 300,
							}}
							className="fixed w-[90vw] max-w-lg h-fit max-h-[80vh] rounded-lg bg-gray-950 overflow-hidden z-20"
						>
							<div className="p-8">
								<div className="flex justify-between items-start mb-4">
									<div>
										<h2 className="text-xl text-gray-50">{book.title}</h2>
										<p className="text-gray-400 mt-1">by {book.creator}</p>
									</div>
									<button
										onClick={e => {
											e.stopPropagation();
											onClose();
										}}
										className="text-gray-400 hover:text-gray-200"
									>
										<span className="text-sm">close</span>
									</button>
								</div>
								<div className="text-gray-400 text-sm leading-relaxed">
									{book.description || "No description available."}
								</div>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-10"
							onClick={e => {
								e.stopPropagation();
								onClose();
							}}
						/>
					</>
				)}
			</AnimatePresence>
		</li>
	);
}
