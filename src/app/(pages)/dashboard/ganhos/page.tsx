import { Barchart } from '@/components/barChart/BarChart';

import { DataTable } from '@/components/table/DataTable';

import { columnsGanhos } from './columnsGanhos';

export default function Ganhos() {
  const chartData = [
    {
      id: 'a6s8d4a6sd',
      date: '2024-04-01',
      name: 'venda',
      value: 150,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-04-02',
      name: 'troca',
      value: 180,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-04-03',
      name: 'venda',
      value: 120,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-04-04',
      name: 'achei no chão',
      value: 260,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-04-05',
      name: 'venda',
      value: 290,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-04-24',
      name: 'venda',
      value: 290,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-04-25',
      name: 'venda',
      value: 250,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-04-26',
      name: 'venda',
      value: 130,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-04-27',
      name: 'venda',
      value: 420,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-04-28',
      name: 'venda',
      value: 180,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-04-29',
      name: 'venda',
      value: 240,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-04-30',
      name: 'venda',
      value: 380,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-01',
      name: 'venda',
      value: 220,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-02',
      name: 'venda',
      value: 310,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-03',
      name: 'venda',
      value: 190,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-04',
      name: 'venda',
      value: 420,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-05',
      name: 'venda',
      value: 390,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-06',
      name: 'venda',
      value: 520,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-07',
      name: 'venda',
      value: 300,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-08',
      name: 'venda',
      value: 210,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-09',
      name: 'venda',
      value: 180,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-10',
      name: 'venda',
      value: 330,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-26',
      name: 'venda',
      value: 170,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-27',
      name: 'venda',
      value: 460,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-28',
      name: 'venda',
      value: 190,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-29',
      name: 'venda',
      value: 130,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-30',
      name: 'venda',
      value: 280,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-05-31',
      name: 'venda',
      value: 230,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-06-01',
      name: 'venda',
      value: 200,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-06-02',
      name: 'venda',
      value: 410,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-06-03',
      name: 'venda',
      value: 160,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-06-04',
      name: 'venda',
      value: 380,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-06-05',
      name: 'venda',
      value: 140,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-06-06',
      name: 'venda',
      value: 250,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-06-07',
      name: 'venda',
      value: 370,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-06-08',
      name: 'venda',
      value: 320,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-06-24',
      name: 'venda',
      value: 180,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-06-25',
      name: 'venda',
      value: 190,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-06-26',
      name: 'venda',
      value: 380,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-06-27',
      name: 'venda',
      value: 490,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-06-28',
      name: 'venda',
      value: 200,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-06-29',
      name: 'venda',
      value: 160,
      category: 'pessoal',
    },
    {
      id: 'a6s8d4a6sd',
      date: '2024-06-30',
      name: 'venda',
      value: 400,
      category: 'pessoal',
    },
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
    <div className="w-full bg-[#f3f3f3]">
      <div className="px-2.5">
        <h1 className="mt-8 mb-5 font-semibold text-4xl">Ganhos</h1>
        <div className="w-full mt-5">
          <Barchart
            chartData={chartData}
            chartConfig={chartConfig}
            title={'Gráfico - Ganhos'}
          />
        </div>

        <div className="">
          <h1 className="mt-10 mb-2 font-semibold text-2xl">Tabela - Ganhos</h1>

          <DataTable
            columns={columnsGanhos}
            data={chartData}
            filterTable={'name'}
            title="nome"
          />
        </div>
      </div>
    </div>
  );
}
