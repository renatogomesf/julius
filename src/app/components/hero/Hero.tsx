import Image from 'next/image';

export default function Hero() {
  return (
    <div className="max-w-[1440px] m-auto">
      <div className="">
        <h1 className="text-primary m-auto max-w-[856px] text-[5rem] font-space_grotesk font-bold text-center mb-6 mt-20 leading-[5.3rem] tracking-[-1px]">
          Maneira fácil de ter tudo no seu controle
        </h1>

        <p className="text-terciary/70 text-[1.3rem] font-extralight text-center leading-[2rem] m-auto max-w-[770px]">
          Providing all customer service within one software. Our landing page
          template works on all devices and we have completely redesigned the
          project management experience.
        </p>

        <div className="flex items-center justify-center w-44 h-12 m-auto bg-[#2B59FF] text-primary rounded-full mt-10">
          Vamos começar
        </div>

        <Image
          className="m-auto mt-20 rounded-[12px] shadow-2xl"
          src={'/dashboard.png'}
          width={1050}
          height={500}
          alt="dashboard"
        />
      </div>
    </div>
  );
}
