export function Tools() {
  const cdnEndpoint = import.meta.env.VITE_CDN_ENDPOINT;

  const technologies = [
    {
      name: 'React',
      logo: `${cdnEndpoint}/Portfolio/SVGS/React.svg`,
    },
    {
      name: 'TypeScript',
      logo: `${cdnEndpoint}/Portfolio/SVGS/TypeScript.svg`,
    },
    {
      name: 'Node.js',
      logo: `${cdnEndpoint}/Portfolio/SVGS/NodeJS.svg`,
    },
    {
      name: 'Tailwind CSS',
      logo: `${cdnEndpoint}/Portfolio/SVGS/TailwindCSS.svg`,
    },
    {
      name: 'MongoDB',
      logo: `${cdnEndpoint}/Portfolio/SVGS/MongoDB.svg`,
    },
    {
      name: 'ExpressJS',
      logo: `${cdnEndpoint}/Portfolio/SVGS/ExpressJS.svg`,
      invertD: true,
    },
    {
      name: 'PostgreSQL',
      logo: `${cdnEndpoint}/Portfolio/SVGS/PostgresSQL.svg`,
    },
    {
      name: 'ShadCN',
      logo: `${cdnEndpoint}/Portfolio/SVGS/shadcn-ui.svg`,
      invert: true,
    },
    {
      name: 'Angular',
      logo: `${cdnEndpoint}/Portfolio/SVGS/Angular.svg`,
    },
    {
      name: 'JavaScript',
      logo: `${cdnEndpoint}/Portfolio/SVGS/Js.svg`,
    },
    {
      name: 'NextJS',
      logo: `${cdnEndpoint}/Portfolio/SVGS/NextJS(2).svg`,
      invert: true,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center mt-10">
      <div className="md:max-w-[60%]">
        <h2
          className="md:text-5xl text-center text-3xl uppercase font-semibold mb-20 md:mt-0 md:mb-32 pt-[400px] md:pt-[200px]"
          id="3"
        >
          My Current Tools
        </h2>
        <div className="grid grid-cols-2 m-auto md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center p-4 rounded-lg shadow-md dark:shadow-sm dark:bg-black/10 dark:shadow-red-primary/60 dark:hover:shadow-red-primary/20 dark:hover:shadow-lg hover:shadow-lg transition-all duration-300"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className={`md:w-32 w-24 h-16 mb-4 ${
                  tech.invert ? 'dark:invert invert-0' : ''
                } ${tech.invertD ? 'invert dark:invert-0' : ''}`}
              />
              <span className="dark:md:text-lg text-sm md:text-base font-medium transition-all duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
