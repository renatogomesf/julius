import Header from './components/header/Header';
import Hero from './components/hero/Hero';

export default function Home() {
  return (
    <div>
      <section className="bg-secondary">
        <Header />
        <Hero />
      </section>
    </div>
  );
}
