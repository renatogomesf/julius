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
    <header
      className={`relative flex justify-center max-w-[1440px] m-auto z-10 shadow-2xs`}
    >
      <div
        className={`fixed w-full flex items-center justify-between sm:pt-3 sm:pb-3 sm:pl-14 sm:pr-14  ${textColor} ${bg}`}
      >
        <div
          className={`flex items-center justify-between w-full z-10 max-sm:pt-2 max-sm:pb-2 max-sm:pl-5 max-sm:pr-5 ${
            isActive ? 'bg-[#F9F9FA]' : `${bg}`
          }`}
        >
          <Link href={'/'}>
            {isActive ? (
              <Image src={'/logopreta.png'} alt="logo" width={80} height={60} />
            ) : (
              <Image
                src={'/logobranca.png'}
                alt="logo"
                width={80}
                height={60}
              />
            )}
          </Link>

          <div
            className={`menuBordas sm:hidden ${
              isActive
                ? 'before:bg-black after:bg-black'
                : 'before:bg-white after:bg-white'
            }`}
            onClick={menu}
          >
            <div
              className={`menuCentro ${isActive ? 'bg-black' : 'bg-white'}`}
            ></div>
          </div>
        </div>

        {/* max-md:hidden */}
        <div className="itens z-9">
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
