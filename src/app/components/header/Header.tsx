import Image from 'next/image';

import Logo from '@/app/image/logojuntabranca.png';

export default function Header() {
  return (
    <section className="max-w-[1440px] m-auto">
      <div className="flex justify-between pt-5 pl-14 pr-14 text-primary">
        <Image src={Logo} alt="logo" width={100} height={0} />

        <nav>
          <ul className="flex justify-between gap-5">
            <li>Produto</li>
            <li>Preço</li>
            <li>Sobre</li>
            <li>Dúvidas</li>
          </ul>
        </nav>

        <div className="flex gap-5">
          <button>Cadastrar</button>
          <button>Logar</button>
        </div>
      </div>
    </section>
  );
}
