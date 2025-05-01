import Image from 'next/image';

export default function Info01() {
  return (
    <section className="pl-4 pr-4 mt-75 mb-20">
      <div className="grid grid-cols-[265px_265px_265px] justify-between max-w-[1000px] m-auto max-[821px]:grid max-[821px]:grid-cols-[265px_265px] max-[821px]:justify-around max-[821px]:gap-y-14 max-sm:grid-cols-[265px]">
        <div>
          <Image src={'/icon01.png'} alt="icon" width={34} height={34} />
          <h3 className="font-bold text-[1.3rem] leading-7 mt-8 mb-3">
            Multiple Modern Layouts
          </h3>
          <p className="text-[0.85rem] leading-6 text-secondary">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page quickly.
          </p>
        </div>

        <div>
          <Image src={'/icon02.png'} alt="icon" width={34} height={34} />
          <h3 className="font-bold text-[1.3rem] leading-7 mt-8 mb-3">
            Multiple Modern Layouts
          </h3>
          <p className="text-[0.85rem] leading-6 text-secondary">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page quickly.
          </p>
        </div>

        <div>
          <Image src={'/icon03.png'} alt="icon" width={34} height={34} />
          <h3 className="font-bold text-[1.3rem] leading-7 mt-8 mb-3">
            Multiple Modern Layouts
          </h3>
          <p className="text-[0.85rem] leading-6 text-secondary">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page quickly.
          </p>
        </div>
      </div>
    </section>
  );
}
