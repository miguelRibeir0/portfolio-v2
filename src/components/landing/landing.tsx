import { Hero } from './hero';
import { AboutMe } from './about-me';
import { Tools } from './tools';
import { Goals } from './goals';

export function Landing() {
  return (
    <section className="transition-all duration-300 ease-in-out">
      <Hero />
      <AboutMe />
      <Tools />
      <Goals />
    </section>
  );
}
