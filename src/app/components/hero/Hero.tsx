import Image from 'next/image';

import Dashboard from '@/app/images/dashboard.png';

export default function Hero() {
  return (
    <section className="max-w-[1440px] m-auto">
      <div className="">
        <h1 className="text-primary m-auto max-w-[856px] text-[5rem] font-space_grotesk font-bold text-center mb-6 mt-20 leading-[5.3rem] tracking-[-1px]">
          Easy way to achieve customer satisfaction
        </h1>

        <p className="text-terciary text-[1.3rem] font-extralight text-center leading-[2rem] m-auto max-w-[770px]">
          Providing all customer service within one software. Our landing page
          template works on all devices and we have completely redesigned the
          project management experience.
        </p>

        <div className="flex items-center justify-center w-44 h-12 m-auto bg-[#2B59FF] text-primary rounded-[3px] mt-10">
          Vamos começar
        </div>

        <Image
          className="m-auto mt-20 rounded-t-[10px]"
          src={Dashboard}
          width={760}
          height={500}
          alt="dashboard"
        />
      </div>
    </section>
  );
}
