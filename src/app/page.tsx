import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Info01 from './components/info01/Info01';

export default function Home() {
  return (
    <div>
      <section className="bg-secondary h-[1080px]">
        <Header />
        <Hero />
      </section>
      <section className="mt-80 mb-40">
        <Info01 />
      </section>
    </div>
  );
}
