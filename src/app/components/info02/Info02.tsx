import Image from 'next/image';

export default function Info02() {
  return (
    <div className="bg-terciary">
      <div className="max-w-[1440px] m-auto pb-32">
        <h1 className="font-space_grotesk text-5xl font-bold leading-16 text-center max-w-[636px] m-auto pt-28 pb-20 ">
          Mixland helps you build beautiful website
        </h1>
        <div className="flex justify-center items-center gap-28 max-w-[1200px] m-auto">
          <article className="flex flex-col gap-10">
            <div className="flex items-start justify-center max-w-[416px] gap-4">
              <Image src={'/icon001.png'} alt="icon" width={50} height={50} />
              <div>
                <h3 className="font-bold text-2xl mb-3.5">
                  Simply Copy & Paste
                </h3>
                <p className="font-light text-secondary/70">
                  Many desktop publishing packages and web page editors now use
                  for them.
                </p>
              </div>
            </div>

            <div className="flex items-start justify-center max-w-[416px] gap-4">
              <Image src={'/icon002.png'} alt="icon" width={50} height={50} />
              <div>
                <h3 className="font-bold text-2xl mb-3.5">Easy to Customize</h3>
                <p className="font-light text-secondary/70">
                  Many desktop publishing packages and web page editors now use
                  for them.
                </p>
              </div>
            </div>

            <div className="flex items-start justify-center max-w-[416px] gap-4">
              <Image src={'/icon003.png'} alt="icon" width={50} height={50} />
              <div>
                <h3 className="font-bold text-2xl mb-3.5">
                  Made with TailwindCSS
                </h3>
                <p className="font-light text-secondary/70">
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
              width={760}
              height={500}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
