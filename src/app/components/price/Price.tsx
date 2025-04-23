export default function Price() {
  return (
    <div>
      <div className="max-w-[926px] m-auto mt-21 mb-21">
        <h2 className="font-space_grotesk font-bold text-[2.5rem] text-center leading-13">
          Pricing & Plans
        </h2>

        <p className="text-secondary leading-6 max-w-[423px] text-center m-auto mt-4 mb-13">
          Both a free trial and a free set of features for anyone who wants to
          use them. The more orders your company
        </p>

        <div className="flex gap-4 items-end">
          <div className="text-center bg-gray-100 w-75 p-6 rounded-[8.5px]">
            <h3 className="font-bold text-[0.8rem] tracking-[1.3px]">BASIC</h3>

            <p className="font-space_grotesk font-bold text-[3.1rem] mt-6 mb-11">
              <span className="text-2xl">$</span>29
            </p>

            <ul className="text-secondary flex flex-col gap-3 text-[0.85rem]">
              <li>1 Graphic Design Module</li>
              <li>1 Front-end Module</li>
            </ul>

            <button className="bg-white w-59 h-13 rounded-[4.3px] mt-13 font-bold text-[0.85rem]">
              Start 14 Days Free Trial
            </button>
          </div>

          <div className="text-center bg-secondary text-primary w-75 p-6 rounded-[8.5px]">
            <h3 className="font-bold text-[0.8rem] tracking-[1.3px]">
              STANDARD
            </h3>

            <p className="font-space_grotesk font-bold text-[3.1rem] mt-6 mb-11">
              <span className="text-2xl">$</span>69
            </p>

            <ul className=" flex flex-col gap-3 text-[0.85rem]">
              <li>1 Graphic Design Module</li>
              <li>1 Front-end Module</li>
              <li>2 Marketing Module</li>
              <li>30 Minutes Mentor Class</li>
            </ul>

            <button className="bg-blue-600 text-white w-59 h-13 rounded-[4.3px] mt-13 font-bold text-[0.85rem]">
              Start 14 Days Free Trial
            </button>
          </div>

          <div className="text-center bg-gray-100 w-75 p-6 rounded-[8.5px]">
            <h3 className="font-bold text-[0.8rem] tracking-[1.3px]">
              PREMIUM
            </h3>

            <p className="font-space_grotesk font-bold text-[3.1rem] mt-6 mb-11">
              <span className="text-2xl">$</span>99
            </p>

            <ul className="text-secondary flex flex-col gap-3 text-[0.85rem]">
              <li>All Modules</li>
              <li>1 Hour Mentor Class</li>
            </ul>

            <button className="bg-white w-59 h-13 rounded-[4.3px] mt-13 font-bold text-[0.85rem]">
              Start 14 Days Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
