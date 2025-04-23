import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Info01 from './components/info01/Info01';
import Info02 from './components/info02/Info02';
import Info03 from './components/info03/Info03';
import Info04 from './components/info04/Info04';

export default function Home() {
  return (
    <div>
      <section className="bg-secondary h-[1080px]">
        <Header />
        <Hero />
      </section>
      <section className="mt-96 mb-32">
        <Info01 />
      </section>
      <section>
        <Info02 />
      </section>
      <section>
        <Info03 />
      </section>
      <section>
        <Info04 />
      </section>
    </div>
  );
}
