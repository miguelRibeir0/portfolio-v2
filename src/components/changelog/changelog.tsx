export function ChangeLog() {
  return (
    <section className="transition-all duration-300 ease-in-out mt-20 w-[80%] lg:w-[60%] mx-auto">
      <div className="flex flex-col items-center justify-center lg:mt-10 text-center">
        <h2 className="text-2xl font-bold lg:text-3xl">Changelog</h2>
        <ol className="mt-36 text-lg flex flex-col gap-y-6">
          <li>
            <strong>2.0.2</strong>
            <span className="italic opacity-80"> (07/01/2025)</span> - Added a
            new project (Slowd-NextJS) and updated the goals section (Removed
            Nextjs and added Astro).
          </li>
          <li>
            <strong>2.0.1</strong>
            <span className="italic opacity-80"> (13/12/2024)</span> - Added CV
            and Changelog to the sidebar.
          </li>
        </ol>
        <div className="mt-36 text-lg">
          <h3 className="font-bold text-xl">Planned Changes</h3>
          <ul className="mt-5">
            <li>• Rewrite the entire website in either NextJS or Astro.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
