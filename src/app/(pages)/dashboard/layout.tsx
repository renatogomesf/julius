'use client';

import { useEffect, useState } from 'react';

import SideBarMobile from '@/components/sideBarMobile/SideBarMobile';
import SideBarWeb from '@/components/sideBarWeb/SideBarWeb';

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <div className="max-[790px]:hidden">
          <SideBarWeb />
        </div>

        <section className="w-full">
          <div className="flex items-center justify-between h-17 pl-7 pr-7 border-b-1 border-b-black/10">
            <div className="flex items-center justify-center min-[790px]:hidden">
              <SideBarMobile />
            </div>
            <div>
              <p>Meta total</p>
              <div className="w-[150px] h-[10px] rounded-[5px] bg-black/20"></div>
            </div>
            <div className="flex items-center justify-center gap-6">
              <div className="flex gap-3 max-[790px]:hidden">
                <span>
                  {horas}:{minutos}
                </span>
                <span>
                  {dia}/{mes}/{ano}
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <p className="max-sm:hidden">Usuário</p>
                <div className="w-[40px] h-[40px] rounded-full bg-black/50"></div>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-center h-[calc(100%-68px)]">
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}
