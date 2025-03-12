import { motion } from 'framer-motion';

export function Goals() {
  const goals = [
    {
      image:
        'https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/Astro.svg',
      goal: 'Learn Astro',
      dark: true,
    },
    {
      image:
        'https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/Three.js.svg',
      goal: 'Learn Three.js',
      dark: true,
    },
    {
      image: '/robot.svg',
      goal: 'Go deeper into Machine Learning',
      dark: true,
    },
    {
      image:
        'https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/Rust.svg',
      goal: 'Learn Rust',
      dark: true,
    },
  ];

  return (
    <div className="py-16 mt-[400px] md:mt-[200px] " id="4">
      <div className="w-[80%] mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center"
        >
          MY GOALS
          <p className="text-base font-normal text-center md:mb-32 mb-24 mt-10">
            Everything I wish to acomplish in the nearby future
          </p>
        </motion.h1>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-red-400 to-red-primary" />

          {goals.map((goal, index) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={goal.goal}
              className="mb-12 flex items-center w-full"
            >
              <div className="w-1/2 text-right pr-14 md:pr-20 flex items-end justify-end">
                <div className="flex flex-col items-end p-6 dark:bg-black/10 dark:shadow-red-primary/70 dark:shadow-sm dark:hover:shadow-lg rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-red-primary/20 transition-shadow duration-300">
                  <img
                    src={goal.image}
                    className={`md:w-12 w-10 ${
                      goal.dark ? 'dark:invert' : 'invert-0'
                    } `}
                    alt="One of my goals"
                  />
                </div>
              </div>

              <div className="w-1/2 flex text-sm md:text-base justify-start md:pl-20 pl-10 relative">
                <motion.p whileHover={{ scale: 1.2 }} className="font-semibold">
                  {goal.goal}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
