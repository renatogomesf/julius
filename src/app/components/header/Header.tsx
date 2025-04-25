'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header({
  bg,
  textColor,
}: {
  bg: string;
  textColor: string;
}) {
  const [menuState, setMenuState] = useState(false);

  const pathName = usePathname();

  const isActive = pathName.startsWith('/login');

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
      <div
        className={`fixed w-full flex items-center justify-between pt-3 pb-3 max-sm:pt-2 max-sm:pb-2 pl-14 pr-14 max-sm:pl-5 max-sm:pr-5 ${textColor} ${bg}`}
      >
        <Link href={'/'}>
          {isActive ? (
            <Image src={'/logojunta01.png'} alt="logo" width={80} height={60} />
          ) : (
            <Image src={'/logojunta02.png'} alt="logo" width={80} height={60} />
          )}
        </Link>

        <div className="menuBordas sm:hidden" onClick={menu}>
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
                <button className=" w-28 h-9 m-auto bg-[#2B59FF] text-primary rounded-[4.25px]">
                  Cadastrar
                </button>

                <Link
                  href={'/login'}
                  className={`flex items-center justify-center w-28 h-9 m-auto text-primary rounded-[4.25px] ${
                    isActive ? 'bg-[#18308a]' : 'bg-[#2B59FF]'
                  }`}
                >
                  Logar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
