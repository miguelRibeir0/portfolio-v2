function Skeleton() {
	return (
		<section className="xl:w-[50%] mt-16 mb-16 w-[80%] p-5 lg:p-10 flex flex-col rounded-lg shadow-md dark:shadow-sm dark:shadow-red-primary/70">
			<div className="w-full flex lg:flex-row flex-col">
				<div className="lg:w-[40%] w-full h-32 lg:h-48 animate-pulse bg-stone-700 rounded-lg opacity-5" />
				<div className="lg:w-1 w-0 bg-gradient-to-b from-red-400 to-red-primary ml-10" />
				<div className="w-full lg:ml-10 h-32 lg:h-48 mt-5 lg:mt-0 animate-pulse bg-stone-700 rounded-lg opacity-5" />
			</div>
		</section>
	);
}

export function ProjectsGridLoading() {
	return (
		<div className="w-full min-h-screen flex flex-col-reverse lg:flex-row lg:flex-wrap items-center justify-center gap-x-32 relative mt-10 sm:mt-0 md:text-left hyphens-auto text-justify break-words tracking-normal">
			{[...Array(3)].map((_, index) => (
				<Skeleton key={`skeleton-${index}`} />
			))}
		</div>
	);
}
