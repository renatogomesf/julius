import Image from 'next/image';

export default function Info03() {
  return (
    <div>
      <div className="flex items-center justify-center gap-44 max-w-[895px] m-auto mt-27 mb-27">
        <Image
          className="drop-shadow-xl rounded-2xl"
          src={'/costumers.png'}
          alt="constumers"
          width={388}
          height={331}
        />
        <div>
          <h3 className="font-space_grotesk font-bold text-[2.2rem] leading-10 mb-6">
            Managing & selling digital products is now easier.
          </h3>
          <p className="text-[0.85rem] leading-6 text-secondary/70">
            Digital products are where it’s at! There are so many benefits to
            selling digital products. It’s easy to get started and they can be
            extremely profitable with smart entrepreneurs and creatives.
          </p>
        </div>
      </div>
    </div>
  );
}
