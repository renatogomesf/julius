'use client';

import Image from 'next/image';

export default function Header() {
  const menu = () => {
    const menuBordas = document.querySelector('.menuBordasClose');
    const menuCentro = document.querySelector('.menuCentroClose');

    menuBordas?.classList.toggle('menuBordasOpen');
    menuCentro?.classList.toggle('menuCentroOpen');

    const itensMenu = document.querySelector('.itensClose');

    itensMenu?.classList.toggle('itensOpen');
  };

  return (
    <header className="relative max-w-[1440px] m-auto z-10 shadow-2xs">
      <div className="fixed w-full bg-secondary flex items-center justify-between pt-5 pb-5 pl-14 pr-14 max-sm:pl-5 max-sm:pr-5 text-primary">
        <Image src={'/logojunta02.png'} alt="logo" width={100} height={0} />

        <div className="menuBordasClose" onClick={menu}>
          <div className="menuCentroClose"></div>
        </div>

        {/* max-md:hidden */}
        <div className="itensClose">
          <div className="itens flex items-center justify-between gap-10">
            <nav className="">
              <ul className="flex justify-between gap-5">
                <li>Produto</li>
                <li>Preço</li>
                <li>Sobre</li>
                <li>Dúvidas</li>
              </ul>
            </nav>

            <div className="flex justify-between">
              <div className="buttons flex gap-4">
                <button className=" w-28 h-12 m-auto bg-[#2B59FF] text-primary rounded-full">
                  Cadastrar
                </button>

                <button className="w-24 h-12 m-auto bg-[#2B59FF] text-primary rounded-full">
                  Logar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
