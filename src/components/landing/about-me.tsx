const cdnEndpoint = import.meta.env.VITE_CDN_ENDPOINT;

export function AboutMe() {
	return (
		<div
			className="w-full flex items-center justify-center flex-wrap pt-[50px] md:pt-[150px]"
			id="2"
		>
			<div className="max-w-[75%] md:max-w-[60%] md:text-left hyphens-auto text-justify break-words tracking-normal">
				<div className="flex justify-between gap-x-10">
					<div className="w-[250px] h-[250px] md:w-[800px] md:h-[500px] rounded-lg overflow-hidden relative md:shadow-[12px_12px_30px_-15px_hsl(var(--red-primary)/_0.2)] hidden lg:block">
						<img
							src={`${cdnEndpoint}/Portfolio/profile-3.webp`}
							alt="Me in a car!"
							className="w-full h-full md:object-cover object-[70%_center]"
						/>
					</div>

					<div className="md:ml-10">
						<h2 className="md:text-5xl text-4xl uppercase font-semibold mb-10 md:mt-0">
							About Me
						</h2>
						<p className="md:text-base leading-relaxed">
							I'm a former graphic designer who found a new passion in web
							development, and I've been hooked ever since. I love taking on new
							challenges and diving into projects, and I recently completed an
							advanced master's in Full Stack Web Development and Digital
							Marketing.
						</p>
						<p className="mt-5 md:text-base leading-relaxed">
							I've worked with a variety of technologies, including TypeScript,
							React, Angular, Node.js, and Express, and I'm always looking to
							learn something new that I can add to my stack. Besides my
							fascination for everything code related I also love to explore
							other facets of web development such as AI/ Machine Learning, the
							Cloud and DevOps.
						</p>

						<p className="mt-5 md:text-base leading-relaxed">
							I love to apply everything from my previous UI/UX experience to
							all my projects, ensuring that every application I build is not
							only functional but also delivers a great user experience.
						</p>
						<div className="flex items-center justify-start gap-x-4 mt-10">
							<a
								href="https://github.com/miguelRibeir0"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={`${cdnEndpoint}/Portfolio/SVGS/Github.svg`}
									className="w-7 cursor-pointer invert dark:invert-0 opacity-75 dark:opacity-90"
									alt="Github"
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/miguelribeir0/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={"/linkedin.svg"}
									className="w-7 cursor-pointer invert dark:invert-0 opacity-75 dark:opacity-90"
									alt="LinkedIn"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
