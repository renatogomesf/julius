export default function Overview() {
  return (
    <div>
      <div className="">
        <h1 className="mt-8 mb-5 font-semibold">Visão geral</h1>
        <div className="flex max-[790px]:flex-col gap-7">
          <div className="max-w-[300px] p-6 bg-[#E6F1FD] rounded-2xl">
            <p className="text-[0.9rem] mb-3">Ganhos totais</p>
            <div className="flex items-center justify-center gap-5">
              <div>
                <span>R$</span>
                <span className="text-2xl font-semibold">212,00</span>
              </div>
              <div>
                <span className="text-[0.75rem] mr-2">+11.01%</span>
                <span>icon</span>
              </div>
            </div>
          </div>

          <div className="max-w-[300px] p-6 bg-[#EDEEFC] rounded-2xl">
            <p className="text-[0.9rem] mb-3">Despesas totais</p>
            <div className="flex items-center justify-center gap-5">
              <div>
                <span>R$</span>
                <span className="text-2xl font-semibold">111,70</span>
              </div>
              <div>
                <span className="text-[0.75rem] mr-2">+3.39%</span>
                <span>icon</span>
              </div>
            </div>
          </div>

          <div className="max-w-[300px] p-6 bg-[#EDEEFC] rounded-2xl">
            <p className="text-[0.9rem] mb-3">Me devem no total</p>
            <div className="flex items-center justify-center gap-5">
              <div>
                <span>R$</span>
                <span className="text-2xl font-semibold">321,70</span>
              </div>
              <div>
                <span className="text-[0.75rem] mr-2">+3.39%</span>
                <span>icon</span>
              </div>
            </div>
          </div>

          <div className="max-w-[300px] p-6 bg-[#EDEEFC] rounded-2xl">
            <p className="text-[0.9rem] mb-3">Eu devo no total</p>
            <div className="flex items-center justify-center gap-5">
              <div>
                <span>R$</span>
                <span className="text-2xl font-semibold">23,70</span>
              </div>
              <div>
                <span className="text-[0.75rem] mr-2">+3.39%</span>
                <span>icon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
