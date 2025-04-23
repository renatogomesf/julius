import Image from 'next/image';

export default function Info01() {
  return (
    <div>
      <div className="flex items-center justify-center max-w-[1100px] m-auto gap-28">
        <div>
          <Image src={'/icon01.png'} alt="icon" width={40} height={40} />
          <h3 className="font-bold text-2xl leading-8 mt-10 mb-3.5">
            Multiple Modern Layouts
          </h3>
          <p className="font-light text-[1rem] leading-7 text-secondary/70">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page quickly.
          </p>
        </div>

        <div>
          <Image src={'/icon02.png'} alt="icon" width={40} height={40} />
          <h3 className="font-bold text-2xl leading-8 mt-10 mb-3.5">
            Multiple Modern Layouts
          </h3>
          <p className="font-light text-[1rem] leading-7 text-secondary/70">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page quickly.
          </p>
        </div>

        <div>
          <Image src={'/icon03.png'} alt="icon" width={40} height={40} />
          <h3 className="font-bold text-2xl leading-8 mt-10 mb-3.5">
            Multiple Modern Layouts
          </h3>
          <p className="font-light text-[1rem] leading-7 text-secondary/70">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page quickly.
          </p>
        </div>
      </div>
    </div>
  );
}
