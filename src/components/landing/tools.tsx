export function Tools() {
	const technologies = [
		{
			name: "React",
			logo: "https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/React.svg",
		},
		{
			name: "TypeScript",
			logo: "https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/TypeScript.svg",
		},
		{
			name: "Node.js",
			logo: "https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/NodeJS.svg",
		},
		{
			name: "Tailwind CSS",
			logo: "https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/TailwindCSS.svg",
		},
		{
			name: "MongoDB",
			logo: "https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/MongoDB.svg",
		},
		{
			name: "ExpressJS",
			logo: "https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/ExpressJS.svg",
			invertD: true,
		},
		{
			name: "PostgreSQL",
			logo: "https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/PostgresSQL.svg",
		},
		{
			name: "ShadCN",
			logo: "https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/shadcn-ui.svg",
			invert: true,
		},
		{
			name: "Angular",
			logo: "https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/Angular.svg",
		},
		{
			name: "JavaScript",
			logo: "https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/Js.svg",
		},
	];

	return (
		<div className="w-full h-screen flex items-center justify-center ">
			<div className="md:max-w-[60%]">
				<h2
					className="md:text-5xl text-center text-3xl uppercase font-semibold mb-20 md:mt-0 md:mb-32 pt-[350px] md:pt-[200px]"
					id="3"
				>
					My Current Tools
				</h2>
				<div className="grid grid-cols-2 m-auto md:grid-cols-3 lg:grid-cols-4 gap-8">
					{technologies.map((tech) => (
						<div
							key={tech.name}
							className="group flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
						>
							<img
								src={tech.logo}
								alt={tech.name}
								className={`w-32 h-16 mb-4 ${tech.invert ? "dark:invert invert-0" : ""} ${tech.invertD ? "invert dark:invert-0" : ""}`}
							/>
							<span className="dark:text-lg text-base font-medium transition-all duration-300 dark:group-hover:font-black">
								{tech.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
