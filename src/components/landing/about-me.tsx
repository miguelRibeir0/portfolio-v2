import { Tooltip } from "react-tooltip";

const cdnEndpoint = import.meta.env.VITE_CDN_ENDPOINT;

export function AboutMe() {
	return (
		<div
			className="w-full flex items-center justify-center flex-wrap pt-[50px] md:pt-[200px]"
			id="2"
		>
			<div className="max-w-[75%]">
				<div className="flex justify-between gap-x-10">
					<div className="w-[250px] h-[250px] md:w-[800px] md:h-[500px] rounded-lg overflow-hidden relative md:shadow-[12px_12px_30px_-15px_hsl(var(--red-primary)/_0.2)] hidden lg:block">
						<img
							src="/perfil-2.webp"
							alt="Me in a car!"
							className="w-full h-full object-cover object-right"
						/>
					</div>

					<div className="md:ml-10">
						<h2 className="md:text-5xl text-4xl uppercase font-semibold mb-10 md:mt-0">
							About Me
						</h2>
						<p className="md:text-base leading-relaxed text-sm">
							I'm a former graphic designer who found a new passion in web
							development, and I've been hooked ever since. I love taking on new
							challenges and diving into projects, and I recently completed an
							advanced master's in Full Stack Web Development and Digital
							Marketing.
						</p>
						<p className="mt-5 md:text-base leading-relaxed text-sm">
							I've worked with a variety of technologies, including TypeScript,
							React, Angular, Node.js, and Express, and I'm always looking to
							learn something new that I can add to my stack.
						</p>

						<p className="mt-5 md:text-base leading-relaxed text-sm">
							Balancing design and development has given me a unique
							perspective. Whether it's debugging code or redesigning a
							interface, I try to approach each task with creativity and
							attention to detail. I'm excited to find opportunities where I can
							continue blending these skills and contribute to meaningful
							projects.
						</p>
						<div className="flex items-start justify-start gap-x-4 mt-10">
							<a
								href="https://github.com/miguelRibeir0"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={`${cdnEndpoint}/Portfolio/SVGS/Github.svg`}
									className="w-9 cursor-pointer invert dark:invert-0"
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
									className="w-9 cursor-pointer invert dark:invert-0 ml-2"
									alt="LinkedIn"
								/>
							</a>
							<a
								href={`${cdnEndpoint}/Portfolio/CV-Miguel-Ribeiro.pdf`}
								target="_blank"
								rel="noreferrer"
							>
								<Tooltip id="CV" opacity={1} />
								<p
									className="text-3xl w-fit cursor-pointer"
									data-tooltip-id="CV"
									data-tooltip-content="CV"
								>
									📝
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
