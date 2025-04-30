import Image from 'next/image';
import Link from 'next/link';

import {
  LuTelescope,
  LuTrendingUp,
  LuTrendingDown,
  LuSquareArrowDown,
  LuSquareArrowUp,
  // LuBanknote,
  LuCoins,
  LuBolt,
} from 'react-icons/lu';

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="flex">
        <section className="flex flex-col justify-between w-53 border-r-1 border-black/10 h-screen p-4">
          <nav className="flex flex-col gap-5">
            <Image
              className="mb-5 mt-2 m-auto"
              src={'/logopreta.png'}
              alt="logo"
              width={80}
              height={60}
            />

            <div>
              <p className="text-[0.9rem] text-black/50">Dashboard</p>
              <Link
                href={'/dashboard'}
                className="text-[0.9rem] flex items-center justify-center gap-2 mt-3 hover:hover:bg-black/5 rounded-[12px] p-2"
              >
                <LuTelescope className="w-[20px] h-[20px]" />
                Visão geral
              </Link>
            </div>

            <div>
              <p className="text-[0.9rem] text-black/50">Pessoal</p>
              <ul className="">
                <li>
                  <Link
                    href={'/dashboard/ganhos'}
                    className="text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2"
                  >
                    <LuTrendingUp className="w-[20px] h-[20px] " />
                    Ganhos
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/dashboard/despesas'}
                    className="text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2"
                  >
                    <LuTrendingDown className="w-[20px] h-[20px] " />
                    Despesas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[0.9rem] text-black/50">Interpessoal</p>
              <ul className="">
                <li>
                  <Link
                    href={'/dashboard/medevendo'}
                    className="text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2"
                  >
                    <LuSquareArrowUp className="w-[20px] h-[20px] " />
                    Me devem
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/dashboard/devendopara'}
                    className="text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2"
                  >
                    <LuSquareArrowDown className="w-[20px] h-[20px] " />
                    Devendo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[0.9rem] text-black/50">Cotação de Moedas</p>
              <ul className="">
                <li>
                  <Link
                    href={'/dashboard/moedas'}
                    className="text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2"
                  >
                    <LuCoins className="w-[20px] h-[20px] " />
                    Moedas
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div>
            <Link
              href={''}
              className="text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] p-2"
            >
              <LuBolt className="w-[20px] h-[20px] " />
              Configurações
            </Link>
          </div>
        </section>

        <section className="w-full">
          <div className="flex items-center justify-end h-17 pl-7 pr-7 border-b-1 border-b-black/10">
            <div className="flex items-center justify-center gap-3">
              <p>Usuário</p>
              <div className="w-[40px] h-[40px] rounded-full bg-black/50"></div>
            </div>
            {/* <div>
              <div className="w-[30px] h-[30px] bg-black"></div>
              <p></p>
            </div> */}
          </div>
          <div className="flex items-center justify-center h-[calc(100%-68px)]">
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}
