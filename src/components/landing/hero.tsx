import { useEffect, useState } from "react";

const titles = ["Frontend", "Backend", "Full-Stack"];

export function Hero() {
	const [titleIndex, setTitleIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsVisible(false);
			setTimeout(() => {
				setTitleIndex((prev) => (prev + 1) % titles.length);
				setIsVisible(true);
			}, 500);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="w-full h-screen flex flex-col-reverse lg:flex-row lg:flex-wrap items-center justify-center gap-x-32 relative mt-10 sm:mt-0">
			<div className="w-[250px] md:w-[400px]">
				<div className="self-start mt-14">
					<h3
						className={`transition-all duration-1000 text-center md:text-left ease-in-out text-[2.7rem] leading-10 md:text-7xl font-semibold uppercase ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
					>
						{titles[titleIndex]}
					</h3>
				</div>
				<h3 className="text-[2.7rem] leading-10 mt-2 md:mt-0 md:text-7xl text-center md:text-left font-semibold uppercase">
					Developer
				</h3>
				<div className="mt-10 md:mt-20 flex flex-col gap-y-3 leading-relaxed">
					<p>Hello there!</p>
					<p>
						I'm a full-stack developer from Portugal with a deep passion for web
						development and its ever changing environment. Over the years, I've
						honed my skills across a wide range of technologies, consistently
						seeking out opportunities to learn and innovate!
					</p>
				</div>
			</div>
			<div className="relative">
				<div className="max-w-[300px] h-[250px] md:w-[500px] md:h-[500px] rounded-lg overflow-hidden md:shadow-[12px_12px_30px_-15px_hsl(var(--red-primary)/_0.2)] relative">
					<img
						src="/perfil.webp"
						alt="How I look!"
						className="w-full h-full object-cover"
					/>
				</div>
				<img
					src="/memoji.png"
					alt="A memoji of me!"
					className="head-bop absolute top-[68%] -left-14  md:top-[73%] md:-left-20 w-28 md:w-40"
				/>
			</div>
		</div>
	);
}
