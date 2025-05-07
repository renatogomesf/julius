import { Barchart } from '@/components/barChart/BarChart';

export default function Ganhos() {
  const chartData = [
    { month: 'January', ganhos: 186, despesas: 80, meDevem: 100, EuDevo: 100 },
    {
      month: 'February',
      ganhos: 305,
      despesas: 200,
      meDevem: 200,
      EuDevo: 500,
    },
    { month: 'March', ganhos: 237, despesas: 120, meDevem: 150, EuDevo: 50 },
    { month: 'April', ganhos: 73, despesas: 190, meDevem: 300, EuDevo: 130 },
    { month: 'May', ganhos: 209, despesas: 130, meDevem: 500, EuDevo: 400 },
    { month: 'June', ganhos: 214, despesas: 140, meDevem: 100, EuDevo: 300 },
    { month: 'Julho', ganhos: 514, despesas: 340, meDevem: 600, EuDevo: 130 },
    { month: 'Agosto', ganhos: 614, despesas: 440, meDevem: 100, EuDevo: 90 },
    {
      month: 'Setembro',
      ganhos: 114,
      despesas: 140,
      meDevem: 300,
      EuDevo: 100,
    },
    { month: 'Dezembro', ganhos: 14, despesas: 140, meDevem: 100, EuDevo: 100 },
  ];

  const chartConfig = {
    ganhos: {
      label: 'Ganhos',
    },
    despesas: {
      label: 'Despesas',
    },
    meDevem: {
      label: 'Me devem',
    },
    EuDevo: {
      label: 'Eu devo',
    },
  }

  return (
    <div className="w-full">
      <div className="px-2.5">
        <h1>Ganhos</h1>
        <div className="w-full mt-5">
          <Barchart chartData={chartData} chartConfig={chartConfig} />
        </div>
      </div>
    </div>
  );
}
