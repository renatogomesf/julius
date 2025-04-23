import Image from 'next/image';

export default function Hero() {
  return (
    <div className="max-w-[1440px] m-auto">
      <div className="">
        <h1 className="text-primary m-auto max-w-[727px] text-[4.3rem] font-space_grotesk font-bold text-center mb-5 mt-16 leading-[4.5rem] tracking-[-1px]">
          Maneira fácil de ter tudo no seu controle
        </h1>

        <p className="text-terciary/70 text-[1.1rem] font-extralight text-center leading-[1.7rem] m-auto max-w-[655px]">
          Providing all customer service within one software. Our landing page
          template works on all devices and we have completely redesigned the
          project management experience.
        </p>

        <div className="flex items-center justify-center w-36 h-12 m-auto bg-[#2B59FF] text-primary rounded-[4.25px] mt-10 text-[0.9rem]">
          Vamos começar
        </div>

        <Image
          className="m-auto mt-18 rounded-[12px] shadow-2xl"
          src={'/dashboard.png'}
          width={932}
          height={595}
          alt="dashboard"
        />
      </div>
    </div>
  );
}
