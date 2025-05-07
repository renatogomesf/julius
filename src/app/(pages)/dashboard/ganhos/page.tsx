import { Barchart } from '@/components/barChart/BarChart';

export default function Ganhos() {
  const chartData = [
    { date: '2024-04-01', name: 'venda', value: 150 },
    { date: '2024-04-02', name: 'venda', value: 180 },
    { date: '2024-04-03', name: 'venda', value: 120 },
    { date: '2024-04-04', name: 'venda', value: 260 },
    { date: '2024-04-05', name: 'venda', value: 290 },
    { date: '2024-04-24', name: 'venda', value: 290 },
    { date: '2024-04-25', name: 'venda', value: 250 },
    { date: '2024-04-26', name: 'venda', value: 130 },
    { date: '2024-04-27', name: 'venda', value: 420 },
    { date: '2024-04-28', name: 'venda', value: 180 },
    { date: '2024-04-29', name: 'venda', value: 240 },
    { date: '2024-04-30', name: 'venda', value: 380 },
    { date: '2024-05-01', name: 'venda', value: 220 },
    { date: '2024-05-02', name: 'venda', value: 310 },
    { date: '2024-05-03', name: 'venda', value: 190 },
    { date: '2024-05-04', name: 'venda', value: 420 },
    { date: '2024-05-05', name: 'venda', value: 390 },
    { date: '2024-05-06', name: 'venda', value: 520 },
    { date: '2024-05-07', name: 'venda', value: 300 },
    { date: '2024-05-08', name: 'venda', value: 210 },
    { date: '2024-05-09', name: 'venda', value: 180 },
    { date: '2024-05-10', name: 'venda', value: 330 },
    { date: '2024-05-26', name: 'venda', value: 170 },
    { date: '2024-05-27', name: 'venda', value: 460 },
    { date: '2024-05-28', name: 'venda', value: 190 },
    { date: '2024-05-29', name: 'venda', value: 130 },
    { date: '2024-05-30', name: 'venda', value: 280 },
    { date: '2024-05-31', name: 'venda', value: 230 },
    { date: '2024-06-01', name: 'venda', value: 200 },
    { date: '2024-06-02', name: 'venda', value: 410 },
    { date: '2024-06-03', name: 'venda', value: 160 },
    { date: '2024-06-04', name: 'venda', value: 380 },
    { date: '2024-06-05', name: 'venda', value: 140 },
    { date: '2024-06-06', name: 'venda', value: 250 },
    { date: '2024-06-07', name: 'venda', value: 370 },
    { date: '2024-06-08', name: 'venda', value: 320 },
    { date: '2024-06-24', name: 'venda', value: 180 },
    { date: '2024-06-25', name: 'venda', value: 190 },
    { date: '2024-06-26', name: 'venda', value: 380 },
    { date: '2024-06-27', name: 'venda', value: 490 },
    { date: '2024-06-28', name: 'venda', value: 200 },
    { date: '2024-06-29', name: 'venda', value: 160 },
    { date: '2024-06-30', name: 'venda', value: 400 },
  ];

  const chartConfig = {
    name: {
      label: 'Nome',
    },
    value: {
      label: 'Valor',
    },
  };

  return (
    <div className="w-full">
      <div className="px-2.5">
        <h1 className="mt-8 mb-5 font-semibold text-4xl">Ganhos</h1>
        <div className="w-full mt-5">
          <Barchart chartData={chartData} chartConfig={chartConfig} title={'Gráfico - Ganhos'}/>
        </div>
      </div>
    </div>
  );
}
