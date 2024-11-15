import { useQuery } from "@tanstack/react-query";
import { getProjects } from "./dbfetch";

export function ProjectsGrid() {
	const { data: projects, isLoading } = useQuery({
		queryKey: ["projects"],
		queryFn: getProjects,
	});
	return (
		<div className="w-full min-h-screen flex flex-col-reverse lg:flex-row lg:flex-wrap items-center justify-center gap-x-32 relative mt-10 sm:mt-0 md:text-left hyphens-auto text-justify break-words tracking-normal">
			{projects?.map((project, index) => (
				<section
					className="xl:w-[70%] w-[80%] p-10 flex flex-col mt-16 mb-16 rounded-lg shadow-md dark:shadow-sm dark:shadow-red-primary/60"
					key={index}
				>
					<div className="w-full flex">
						<img
							src={project.BackgroundImage}
							alt="sdsd"
							className="2xl:w-96 md:w-56 w-10 text- rounded-lg"
						/>
						<div className="w-1 bg-red-primary/30 ml-10" />
						<div className="ml-10 w-full flex flex-col justify-between">
							<div className="flex items-center justify-between">
								<h2 className="text-2xl uppercase font-bold mb-5">
									{project.Title}
								</h2>
								<p>{project.url}</p>
							</div>
							<p className="w-[90%]">{project.Description}</p>
							<div className="flex justify-between mt-5">
								<div className="flex gap-x-4">
									{project.MainLanguage && (
										<img src={project.MainLanguage} alt="" className="w-5" />
									)}
									{project.SecondaryLanguages.map((tech) => (
										<img
											src={tech}
											alt=""
											className="w-5"
											key={`${tech}-${index}`}
										/>
									))}
								</div>
								<a href={project.WebsiteLink} target="_blank" rel="noreferrer">
									<img
										src="https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/Code.svg"
										alt=""
										className="w-5"
									/>
								</a>
							</div>
						</div>
					</div>
				</section>
			))}
		</div>
	);
}
