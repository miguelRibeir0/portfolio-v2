const server = import.meta.env.VITE_SERVER;

const getProjects = async () => {
	const ans = await fetch(`${server}/portfolio/projects`);
	const data = await ans.json();

	return data;
};

export { getProjects };
