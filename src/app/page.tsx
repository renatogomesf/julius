import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Info01 from './components/info01/Info01';
import Info02 from './components/info02/Info02';
import Info03 from './components/info03/Info03';
import Info04 from './components/info04/Info04';
import Price from './components/price/Price';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <div>
      <section className="bg-secondary h-[918px]">
        <Header />
        <Hero />
      </section>
      <section className="mt-75 mb-20">
        <Info01 />
      </section>
      <section className="bg-terciary">
        <Info02 />
      </section>
      <section>
        <Info03 />
      </section>
      <section className="bg-secondary">
        <Info04 />
      </section>
      <section>
        <Price />
      </section>
      <section className="mt-[204px] bg-secondary">
        <Footer />
      </section>
    </div>
  );
}
