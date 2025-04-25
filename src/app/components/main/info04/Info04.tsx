import Image from 'next/image';

export default function Info04() {
  return (
    <section className="text-primary pl-4 pr-4 bg-secondary">
      <div className="flex items-center justify-center gap-36 max-w-[1070px] m-auto pt-24 pb-24 max-[1025px]:gap-2 max-[821px]:flex-col max-[821px]:items-center">
        <div className="max-[821px]:max-w-[500px] max-[821px]:pb-5">
          <h3 className="font-space_grotesk font-bold text-[2.2rem] leading-10 max-sm:pl-4 max-sm:pr-4">
            Effectively track real-time and updates from team management
          </h3>

          <p className="text-[0.85rem] leading-6 text-terciary mt-6 mb-12 max-sm:pl-4 max-sm:pr-4">
            Designed with a simple, user-friendly interface, nTask is a 7-in-1
            project management tool that is ideal for both small and large
            teams. You can create multiple workspaces.
          </p>

          <div className="flex items-center justify-start gap-9 max-sm:flex-col">
            <div className="flex items-center justify-center gap-5">
              <span className="font-space_grotesk font-bold text-[2.2rem] leading-10">
                12K+
              </span>

              <p className=" text-[0.8rem] leading-5">
                Project <br /> Created
              </p>
            </div>

            <div className="flex items-center justify-center gap-5">
              <span className="font-space_grotesk font-bold text-[2.2rem] leading-10">
                1947
              </span>

              <p className=" text-[0.8rem] leading-5">
                Agencies <br /> Joined
              </p>
            </div>
          </div>
        </div>

        <Image
          className="drop-shadow-xl"
          src={'/info04.png'}
          alt="info"
          width={532}
          height={391}
        />
      </div>
    </section>
  );
}
