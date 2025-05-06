import { MetasType, columnsMeta } from './columnsMeta';

import { DataTable } from '@/components/table/DataTable';

async function getData(): Promise<MetasType[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      meta: 'camprar um carro',
      valorAtual: 13000,
      valorTotal: 50000,
      category: 'pessoal',
    },
    {
      id: '728ed52f',
      meta: 'casar daqui a 2 meses',
      valorAtual: 5000,
      valorTotal: 10000,
      category: 'pessoal',
    },
    {
      id: '728ed52f',
      meta: 'viajar',
      valorAtual: 2000,
      valorTotal: 10000,
      category: 'pessoal',
    },
    {
      id: '728ed52f',
      meta: 'moto',
      valorAtual: 5000,
      valorTotal: 20000,
      category: 'pessoal',
    },
    {
      id: '728ed52f',
      meta: 'terreno',
      valorAtual: 5000,
      valorTotal: 100000,
      category: 'pessoal',
    },
    {
      id: '728ed52f',
      meta: 'terreno',
      valorAtual: 5000,
      valorTotal: 100000,
      category: 'pessoal',
    },
    {
      id: '728ed52f',
      meta: 'terreno',
      valorAtual: 5000,
      valorTotal: 100000,
      category: 'pessoal',
    },
    {
      id: '728ed52f',
      meta: 'terreno',
      valorAtual: 5000,
      valorTotal: 100000,
      category: 'pessoal',
    },
    {
      id: '728ed52f',
      meta: 'terreno',
      valorAtual: 5000,
      valorTotal: 100000,
      category: 'pessoal',
    },
    {
      id: '728ed52f',
      meta: 'terreno',
      valorAtual: 5000,
      valorTotal: 100000,
      category: 'empresa',
    },
    {
      id: '728ed52f',
      meta: 'terreno',
      valorAtual: 5000,
      valorTotal: 100000,
      category: 'pessoal',
    },
    {
      id: '728ed52f',
      meta: 'terreno',
      valorAtual: 5000,
      valorTotal: 100000,
      category: 'pessoal',
    },
    {
      id: '728ed52f',
      meta: 'terreno',
      valorAtual: 5000,
      valorTotal: 100000,
      category: 'empresa',
    },
    {
      id: '728ed52f',
      meta: 'terreno',
      valorAtual: 5000,
      valorTotal: 100000,
      category: 'pessoal',
    },
    {
      id: '728ed52f',
      meta: 'terreno',
      valorAtual: 5000,
      valorTotal: 100000,
      category: 'pessoal',
    },
    {
      id: '728ed52f',
      meta: 'terreno',
      valorAtual: 5000,
      valorTotal: 100000,
      category: 'pessoal',
    },
    // ...
  ];
}

export default async function Metas() {
  const data = await getData();

  return (
    <div className="w-full px-2.5">
      <h1 className="mt-8 mb-5 font-semibold">Metas</h1>
      <div className="container mx-auto">
        <DataTable columns={columnsMeta} data={data} />
      </div>
    </div>
  );
}
