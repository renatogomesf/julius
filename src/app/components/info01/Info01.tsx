import Image from 'next/image';

export default function Info01() {
  return (
    <div>
      <div className="flex items-center justify-center max-w-[1000px] m-auto gap-28">
        <div>
          <Image src={'/icon01.png'} alt="icon" width={34} height={34} />
          <h3 className="font-bold text-[1.3rem] leading-7 mt-8 mb-3">
            Multiple Modern Layouts
          </h3>
          <p className="text-[0.85rem] leading-6 text-secondary/70">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page quickly.
          </p>
        </div>

        <div>
          <Image src={'/icon02.png'} alt="icon" width={34} height={34} />
          <h3 className="font-bold text-[1.3rem] leading-7 mt-8 mb-3">
            Multiple Modern Layouts
          </h3>
          <p className="text-[0.85rem] leading-6 text-secondary/70">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page quickly.
          </p>
        </div>

        <div>
          <Image src={'/icon03.png'} alt="icon" width={34} height={34} />
          <h3 className="font-bold text-[1.3rem] leading-7 mt-8 mb-3">
            Multiple Modern Layouts
          </h3>
          <p className="text-[0.85rem] leading-6 text-secondary/70">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page quickly.
          </p>
        </div>
      </div>
    </div>
  );
}
