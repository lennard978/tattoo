export const Gallery = () => {
	return (
		<div>
			<div className="flex items-center justify-center py-4 md:py-8 flex-wrap bg-zinc-900">
				<button
					type="button"
					className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
				>
					All
				</button>
				<button
					type="button"
					className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
				>
					Arm
				</button>
				<button
					type="button"
					className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
				>
					Leg
				</button>
				<button
					type="button"
					className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
				>
					Shoulder
				</button>
				<button
					type="button"
					className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
				>
					Calf
				</button>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-3 bg-zinc-950">
				<div>
					<img className="h-auto max-w-full" src="/src/images/1.jpg" alt="" />
				</div>
				<div>
					<img className="h-auto max-w-full" src="/src/images/2.jpg" alt="" />
				</div>
				<div>
					<img className="h-auto max-w-full" src="/src/images/3.jpg" alt="" />
				</div>
				<div>
					<img className="h-auto max-w-full" src="/src/images/4.jpg" alt="" />
				</div>
				<div>
					<img className="h-auto max-w-full" src="/src/images/1.jpg" alt="" />
				</div>
				<div>
					<img className="h-auto max-w-full" src="/src/images/2.jpg" alt="" />
				</div>
				<div>
					<img className="h-auto max-w-full" src="/src/images/3.jpg" alt="" />
				</div>
				<div>
					<img className="h-auto max-w-full" src="/src/images/4.jpg" alt="" />
				</div>
			</div>
		</div>
	);
};
