import Hero from '~/components/home/hero';
import Intro from '~/components/home/intro';

export default function Index() {
  return (
    <div className="w-screen max-h-full">
      <Hero />
      <Intro />
    </div>
  );
}
