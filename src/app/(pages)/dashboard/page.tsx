// import { AreaChartGradient } from '@/components/areaChart/AreaChartGradient';

import { Barchart } from '@/components/barChart/BarChart';

export default function Overview() {
  const cardsData = [
    {
      title: 'Ganhos totais',
      value: '1212,00',
      porcentagem: '+11.01%',
      cor: 'bg-[#236084]/30',
    },
    {
      title: 'Despesas totais',
      value: '112,00',
      porcentagem: '+11.01%',
      cor: 'bg-[#49c7ab]/30',
    },
    {
      title: 'Me devem no total',
      value: '321,00',
      porcentagem: '+11.01%',
      cor: 'bg-[#1190cb]/30',
    },
    {
      title: 'Eu devo no total',
      value: '12,00',
      porcentagem: '+11.01%',
      cor: 'bg-[#7dccff]/30',
    },
  ];

  return (
    <div className="w-full">
      <div className="px-2.5">
        <h1 className="mt-8 mb-5 font-semibold">Visão geral</h1>
        <div className="flex flex-wrap items-start justify-start gap-7">
          {cardsData.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex-1 min-w-[250px] max-[790px]:m-auto p-6 ${item.cor} rounded-2xl`}
              >
                <p className="text-[0.9rem] mb-3">{item.title}</p>
                <div className="flex items-center justify-start gap-5">
                  <div>
                    <span>R$</span>
                    <span className="text-2xl font-semibold">{item.value}</span>
                  </div>
                  <div>
                    <span className="text-[0.75rem] mr-2">
                      {item.porcentagem}
                    </span>
                    <span>icon</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-2.5 w-full mt-5">
        {/* <AreaChartGradient /> */}
        <Barchart />
      </div>
    </div>
  );
}
