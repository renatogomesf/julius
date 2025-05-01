'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  const overview = pathName.endsWith('/dashboard');
  const metas = pathName.endsWith('/metas');
  const ganhos = pathName.endsWith('/ganhos');
  const despesas = pathName.endsWith('/despesas');
  const medevendo = pathName.endsWith('/medevendo');
  const devendopara = pathName.endsWith('/devendopara');
  const moedas = pathName.endsWith('/moedas');

  const [horas, setHoras] = useState<string | number>();
  const [minutos, setMinutos] = useState<string | number>();

  const [dia, setDia] = useState<string | number>();
  const [mes, setMes] = useState<string | number>();
  const [ano, setAno] = useState<number>();

  useEffect(() => {
    setInterval(() => {
      const timer = new Date();

      if (timer.getHours() < 10) {
        setHoras(`0${timer.getHours()}`);
      } else {
        setHoras(timer.getHours());
      }

      if (timer.getMinutes() < 10) {
        setMinutos(`0${timer.getMinutes()}`);
      } else {
        setMinutos(timer.getMinutes());
      }
    }, 1000);

    const data = new Date();

    setAno(data.getFullYear());

    if (data.getDate() < 10) {
      setDia(`0${data.getDate()}`);
    } else {
      setDia(data.getDate());
    }

    if (data.getMonth() < 10) {
      setMes(`0${data.getMonth() + 1}`);
    } else {
      setMes(data.getMonth());
    }
  }, []);

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

        <section className="w-full">
          <div className="flex items-center justify-between h-17 pl-7 pr-7 border-b-1 border-b-black/10">
            <div>
              <p>Meta total</p>
              <div className="w-[200px] h-[10px] rounded-[5px] bg-black/20"></div>
            </div>
            <div className="flex items-center justify-center gap-6">
              <div className="flex gap-3">
                <span>
                  {horas}:{minutos}
                </span>
                <span>
                  {dia}/{mes}/{ano}
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <p>Usuário</p>
                <div className="w-[40px] h-[40px] rounded-full bg-black/50"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-[calc(100%-68px)]">
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}
