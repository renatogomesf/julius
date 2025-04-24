import Image from 'next/image';

export default function Info02() {
  return (
    <div className="pl-4 pr-4">
      <div className="max-w-[1440px] m-auto pb-28">
        <h1 className="font-space_grotesk text-[2.5rem] font-bold leading-13 text-center max-w-[450px] m-auto pt-28 pb-20 ">
          Mixland helps you build beautiful website
        </h1>

        <div className="flex justify-center items-center gap-24 max-w-[1200px] m-auto max-[821px]:flex-col">
          <article className="flex flex-col gap-9 max-[821px]:grid max-[821px]:grid-cols-[265px_265px] max-[821px]:justify-around max-[821px]:gap-y-14 max-sm:grid-cols-[265px]">
            <div className="flex items-start justify-center max-w-[316px] gap-3">
              <Image src={'/icon001.png'} alt="icon" width={42} height={42} />
              <div>
                <h3 className="font-bold text-[1.1rem] mb-3">
                  Simply Copy & Paste
                </h3>
                <p className="text-[0.85rem] leading-[1.4rem] text-secondary/70">
                  Many desktop publishing packages and web page editors now use
                  for them.
                </p>
              </div>
            </div>

            <div className="flex items-start justify-center max-w-[316px] gap-4">
              <Image src={'/icon002.png'} alt="icon" width={42} height={42} />
              <div>
                <h3 className="font-bold text-[1.1rem] mb-3">
                  Easy to Customize
                </h3>
                <p className="text-[0.85rem] leading-[1.4rem] text-secondary/70">
                  Many desktop publishing packages and web page editors now use
                  for them.
                </p>
              </div>
            </div>

            <div className="flex items-start justify-center max-w-[316px] gap-4">
              <Image src={'/icon003.png'} alt="icon" width={42} height={42} />
              <div>
                <h3 className="font-bold text-[1.1rem] mb-3">
                  Made with TailwindCSS
                </h3>
                <p className="text-[0.85rem] leading-[1.4rem] text-secondary/70">
                  Many desktop publishing packages and web page editors now use
                  for them.
                </p>
              </div>
            </div>
          </article>

          <aside>
            <Image
              className="shadow rounded-[15px]"
              src={'/dashboard02.png'}
              alt="dashboard"
              width={650}
              height={383}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
