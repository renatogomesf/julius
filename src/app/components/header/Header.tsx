'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuState, setMenuState] = useState(false);

  const menu = () => {
    if (menuState) {
      const itensMenu = document.querySelector('.itens');
      itensMenu?.classList.add('itensClose');
      itensMenu?.classList.remove('itensOpen');

      const menuBordas = document.querySelector('.menuBordas');
      menuBordas?.classList.add('menuBordasClose');
      menuBordas?.classList.remove('menuBordasOpen');

      const menuCentro = document.querySelector('.menuCentro');
      menuCentro?.classList.add('menuCentroClose');
      menuCentro?.classList.remove('menuCentroOpen');

      setMenuState(false);
    } else {
      const itensMenu = document.querySelector('.itens');
      itensMenu?.classList.add('itensOpen');
      itensMenu?.classList.remove('itensClose');

      const menuBordas = document.querySelector('.menuBordas');
      menuBordas?.classList.add('menuBordasOpen');
      menuBordas?.classList.remove('menuBordasClose');

      const menuCentro = document.querySelector('.menuCentro');
      menuCentro?.classList.add('menuCentroOpen');
      menuCentro?.classList.remove('menuCentroClose');

      setMenuState(true);
    }
  };

  return (
    <header className="relative max-w-[1440px] m-auto z-10 shadow-2xs">
      <div className="fixed w-full bg-secondary flex items-center justify-between pt-3 pb-3 max-sm:pt-2 max-sm:pb-2 pl-14 pr-14 max-sm:pl-5 max-sm:pr-5 text-primary">
        <Image src={'/logojunta02.png'} alt="logo" width={100} height={0} />

        <div className="menuBordas" onClick={menu}>
          <div className="menuCentro"></div>
        </div>

        {/* max-md:hidden */}
        <div className="itens">
          <div className="flex items-center justify-between gap-10">
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
