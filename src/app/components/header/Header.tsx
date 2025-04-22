import Image from 'next/image';

export default function Header() {
  return (
    <section className="max-w-[1440px] m-auto">
      <div className="flex items-center justify-between pt-5 pl-14 pr-14 text-primary">
        <Image src={'/logojunta02.png'} alt="logo" width={100} height={0} />

        <nav>
          <ul className="flex justify-between gap-5">
            <li>Produto</li>
            <li>Preço</li>
            <li>Sobre</li>
            <li>Dúvidas</li>
          </ul>
        </nav>

        <div className="flex gap-4">
          <button className=" w-28 h-12 m-auto bg-[#2B59FF] text-primary rounded-full">
            Cadastrar
          </button>
          <button className="w-24 h-12 m-auto bg-[#2B59FF] text-primary rounded-full">
            Logar
          </button>
        </div>
      </div>
    </section>
  );
}
