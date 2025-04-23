import Image from 'next/image';

export default function Footer() {
  return (
    <div className="bg-secondary text-primary relative">
      <section className="bg-[#2B59FF] w-[1100px] h-[323px] m-auto rounded-[8.5px] absolute left-[10%] right-[10%] bottom-[403px]">
        <div className="max-w-[515px] m-auto pt-16 pb-16">
          <h1 className="font-space_grotesk font-bold text-[2.5rem] leading-13 text-center mb-5">
            Start learning new things & build your skills today
          </h1>

          <p className="text-center mb-9">
            Build your next landing page fast & easy
          </p>

          <div className="flex items-center justify-center gap-4">
            <button className="w-44 h-13 bg-white text-secondary rounded-[4.25px] font-bold text-[0.85rem]">
              Watch free tutorials
            </button>

            <button className="w-44 h-13 bg-secondary text-white rounded-[4.25px] font-bold text-[0.85rem]">
              Get Started Now &gt;
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-[1100px] m-auto pt-[247px]">
        <div className="max-w-[322px]">
          <Image src={'/logojunta02.png'} alt="logo" width={100} height={0} />

          <p className="leading-[160%] text-[0.9rem] mt-7 mb-5 text-white/80">
            Data analysis software is a type of software tool used for data
            analysis and reporting.
          </p>

          <div className="flex gap-2.5">
            <Image src={'/rede01.png'} alt="icon" width={30} height={30} />
            <Image src={'/rede02.png'} alt="icon" width={30} height={30} />
            <Image src={'/rede03.png'} alt="icon" width={30} height={30} />
            <Image src={'/rede04.png'} alt="icon" width={30} height={30} />
          </div>
        </div>

        <div></div>

        <div className="mt-21">
          <hr className="border-[1px] border-white/70" />
          <p className="text-center pt-7 pb-7 text-[0.75rem]">
            © Copyright 2021, All Rights Reserved by stract
          </p>
        </div>
      </section>
    </div>
  );
}
