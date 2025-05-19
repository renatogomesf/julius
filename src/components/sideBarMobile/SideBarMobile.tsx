'use client';

import {
  LuTelescope,
  LuTrendingUp,
  LuTrendingDown,
  LuSquareArrowDown,
  LuSquareArrowUp,
  LuCoins,
  LuBolt,
  LuGoal,
} from 'react-icons/lu';

import { AlignJustify } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideBarMobile() {
  const pathName = usePathname();

  const overview = pathName.endsWith('/dashboard');
  const metas = pathName.endsWith('/metas');
  const ganhos = pathName.endsWith('/ganhos');
  const despesas = pathName.endsWith('/despesas');
  const medevendo = pathName.endsWith('/medevendo');
  const devendopara = pathName.endsWith('/devendopara');
  const moedas = pathName.endsWith('/moedas');

  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="w-[30px] h-[30px]" />
      </SheetTrigger>
      <SheetContent side="left" className="w-fit">
        <section className="flex flex-col justify-between w-53 h-screen p-4">
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
                  <SheetClose asChild>
                    <Link
                      href={'/dashboard'}
                      className={`text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2 ${
                        overview ? 'bg-black/5' : ''
                      }`}
                    >
                      <LuTelescope className="w-[20px] h-[20px]" />
                      Visão geral
                    </Link>
                  </SheetClose>
                </li>

                <li>
                  <SheetClose asChild>
                    <Link
                      href={'/dashboard/metas'}
                      className={`text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2 ${
                        metas ? 'bg-black/5' : ''
                      }`}
                    >
                      <LuGoal className="w-[20px] h-[20px]" />
                      Metas
                    </Link>
                  </SheetClose>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[0.9rem] text-black/50">Pessoal</p>
              <ul className="">
                <li>
                  <SheetClose asChild>
                    <Link
                      href={'/dashboard/ganhos'}
                      className={`text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2 ${
                        ganhos ? 'bg-black/5' : ''
                      }`}
                    >
                      <LuTrendingUp className="w-[20px] h-[20px] " />
                      Ganhos
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link
                      href={'/dashboard/despesas'}
                      className={`text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2 ${
                        despesas ? 'bg-black/5' : ''
                      }`}
                    >
                      <LuTrendingDown className="w-[20px] h-[20px] " />
                      Despesas
                    </Link>
                  </SheetClose>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[0.9rem] text-black/50">Interpessoal</p>
              <ul className="">
                <li>
                  <SheetClose asChild>
                    <Link
                      href={'/dashboard/medevendo'}
                      className={`text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2 ${
                        medevendo ? 'bg-black/5' : ''
                      } `}
                    >
                      <LuSquareArrowUp className="w-[20px] h-[20px] " />
                      Devedores
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link
                      href={'/dashboard/devendopara'}
                      className={`text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2 ${
                        devendopara ? 'bg-black/5' : ''
                      } `}
                    >
                      <LuSquareArrowDown className="w-[20px] h-[20px] " />
                      Dívidas
                    </Link>
                  </SheetClose>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[0.9rem] text-black/50">Cotação de Moedas</p>
              <ul className="">
                <li>
                  <SheetClose asChild>
                    <Link
                      href={'/dashboard/moedas'}
                      className={`text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] pl-6 p-2 ${
                        moedas ? 'bg-black/5' : ''
                      } `}
                    >
                      <LuCoins className="w-[20px] h-[20px] " />
                      Moedas
                    </Link>
                  </SheetClose>
                </li>
              </ul>
            </div>
          </nav>

          <div>
            <SheetClose asChild>
              <Link
                href={''}
                className="text-[0.9rem] flex items-center justify-start gap-2 mt-3 hover:bg-black/5 rounded-[12px] p-2"
              >
                <LuBolt className="w-[20px] h-[20px] " />
                Configurações
              </Link>
            </SheetClose>
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
}
