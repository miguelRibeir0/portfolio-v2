import { useQuery } from "@tanstack/react-query";
import { getProjects } from "./dbfetch";
import { Tooltip } from "react-tooltip";
import { ProjectsGridLoading } from "./projects-grid-loading";

export function ProjectsGrid() {
	const { data: projects, isLoading } = useQuery({
		queryKey: ["projects"],
		queryFn: getProjects,
	});

	if (isLoading) {
		return <ProjectsGridLoading />;
	}

	return (
		<div className="w-full min-h-screen flex flex-col-reverse lg:flex-row lg:flex-wrap items-center justify-center gap-x-32 relative mt-10 sm:mt-0 md:text-left hyphens-auto text-justify break-words tracking-normal">
			{projects?.map((project) => (
				<section
					className="2xl:w-[60%] w-[80%] lg:w-[90%] p-5 lg:p-10 flex flex-col mt-16 mb-16 rounded-lg shadow-md dark:shadow-sm dark:shadow-red-primary/70"
					key={project.Title}
					id={project.Title}
				>
					<div className="w-full flex lg:flex-row flex-col">
						<img
							src={project.BackgroundImage}
							alt="Project Snapshot"
							className="2xl:w-[400px] lg:w-[300px] w-full text- rounded-lg"
						/>
						<div className="lg:w-1 w-0 bg-gradient-to-b from-red-400 to-red-primary ml-10" />
						<div className="lg:ml-10 lg:mt-0 mt-10 w-full flex flex-col justify-between">
							<div className="lg:text-base text-sm">
								<h2 className="lg:text-2xl text-xl uppercase font-bold mb-3">
									{project.Title}
								</h2>
								<a
									href={project.WebsiteLink}
									className="text-red-primary/60 hover:text-red-primary transition-all duration-300 ease-in-out"
									target="_blank"
									rel="noreferrer"
								>
									{project.WebsiteLink}
								</a>
								<p className="w-[90%] mt-5">{project.Description}</p>
							</div>
							<div className="flex justify-between items-center lg:mt-5 mt-10">
								<div className="flex lg:gap-x-4 gap-x-2 ">
									{project.MainLanguage && (
										<img src={project.MainLanguage} alt="" className="w-5" />
									)}
									{project.SecondaryLanguages.map((tech) => (
										<img src={tech} alt="" className="w-5" key={`${tech}`} />
									))}
								</div>
								<Tooltip id="CODE" opacity={1} />
								<a href={project.CodeLink} target="_blank" rel="noreferrer">
									<img
										src="https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/Code.svg"
										alt="code icon"
										className="w-5"
										data-tooltip-id="CODE"
										data-tooltip-content="Source Code"
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
