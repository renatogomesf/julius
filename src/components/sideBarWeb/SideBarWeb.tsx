import {
  LuTelescope,
  LuTrendingUp,
  LuTrendingDown,
  LuSquareArrowDown,
  LuSquareArrowUp,
  // LuBanknote,
  LuCoins,
  LuBolt,
  LuGoal,
} from 'react-icons/lu';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideBarWeb() {
  const pathName = usePathname();

  const overview = pathName.endsWith('/dashboard');
  const metas = pathName.endsWith('/metas');
  const ganhos = pathName.endsWith('/ganhos');
  const despesas = pathName.endsWith('/despesas');
  const medevendo = pathName.endsWith('/medevendo');
  const devendopara = pathName.endsWith('/devendopara');
  const moedas = pathName.endsWith('/moedas');

  return (
    <div>
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
            <ul>
              <li>
                <Link
                  href={'/dashboard'}
                  className={`text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2 ${
                    overview ? 'bg-black/5' : ''
                  }`}
                >
                  <LuTelescope className="w-[20px] h-[20px]" />
                  Visão geral
                </Link>
              </li>

              <li>
                <Link
                  href={'/dashboard/metas'}
                  className={`text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2 ${
                    metas ? 'bg-black/5' : ''
                  }`}
                >
                  <LuGoal className="w-[20px] h-[20px]" />
                  Metas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[0.9rem] text-black/50">Pessoal</p>
            <ul className="">
              <li>
                <Link
                  href={'/dashboard/ganhos'}
                  className={`text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2 ${
                    ganhos ? 'bg-black/5' : ''
                  }`}
                >
                  <LuTrendingUp className="w-[20px] h-[20px] " />
                  Ganhos
                </Link>
              </li>
              <li>
                <Link
                  href={'/dashboard/despesas'}
                  className={`text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2 ${
                    despesas ? 'bg-black/5' : ''
                  }`}
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
                  className={`text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2 ${
                    medevendo ? 'bg-black/5' : ''
                  } `}
                >
                  <LuSquareArrowUp className="w-[20px] h-[20px] " />
                  Me devem
                </Link>
              </li>
              <li>
                <Link
                  href={'/dashboard/devendopara'}
                  className={`text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2 ${
                    devendopara ? 'bg-black/5' : ''
                  } `}
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
                  className={`text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2 ${
                    moedas ? 'bg-black/5' : ''
                  } `}
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
    </div>
  );
}
