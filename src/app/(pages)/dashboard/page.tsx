'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Pie,
  PieChart,
  Tooltip,
} from 'recharts';

import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';

import {
  LuTrendingUp,
  LuTrendingDown,
  LuBanknote,
  LuGoal,
} from 'react-icons/lu';

export default function Overview() {
  const cardsData = [
    {
      title: 'Ganhos totais',
      value: '1212,00',
      icon: <LuTrendingUp />,
      cor: 'text-[#49c7ab]',
    },
    {
      title: 'Despesas totais',
      value: '112,00',
      icon: <LuTrendingDown />,
      cor: 'text-[#c74949]',
    },
    {
      title: 'Progresso total das metas',
      value: '65%',
      icon: <LuGoal />,
      cor: 'text-[#1190cb]',
    },
    {
      title: 'Saldo total das metas',
      value: '12.500,00',
      icon: <LuBanknote />,
      cor: 'text-[#1190cb]',
    },
  ];

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
  } satisfies ChartConfig;

  const chartData2 = [
    { name: 'carro', value: 275, fill: '#ff9900' },
    { name: 'saidas', value: 200, fill: '#91ff00' },
    { name: 'viagem', value: 187, fill: '#00ffea' },
    { name: 'shein', value: 173, fill: '#0084ff' },
    { name: 'outros', value: 90, fill: '#ff00b3' },
  ];

  const chartConfig2 = {
    value: {
      label: 'Valor',
    },
    carro: {
      label: 'Carro',
      color: '#ff9900',
    },
    saidas: {
      label: 'Saidas',
      color: '#91ff00',
    },
    viagem: {
      label: 'Viagem',
      color: '#00ffea',
    },
    shein: {
      label: 'Shein',
      color: '#0084ff',
    },
    outros: {
      label: 'Outros',
      color: '#ff00b3',
    },
  } satisfies ChartConfig;

  return (
    <div className="w-full bg-[#f3f3f3]">
      <div className="px-2.5">
        <h1 className="mt-8 mb-5 font-semibold text-4xl">Visão Geral</h1>
        <div className="flex flex-wrap items-start justify-start gap-7">
          {cardsData.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex-1 min-w-[250px] max-[790px]:m-auto p-6 border-1 border-black/10 bg-white rounded-2xl`}
              >
                <p className="text-[0.9rem] mb-3">{item.title}</p>
                <div
                  className={`flex items-center justify-start gap-5 ${item.cor}`}
                >
                  <div>
                    {item.title === 'Progresso total das metas' ? (
                      ''
                    ) : (
                      <span>R$</span>
                    )}
                    <span className="text-2xl font-semibold">{item.value}</span>
                  </div>
                  <span className="text-[1.5rem] mr-2">{item.icon}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-2.5 w-full mt-5 mb-2 flex gap-2.5 max-[1020px]:flex-col">
        <Card className="w-[60%] max-[1200px]:w-[50%] max-[1020px]:w-full">
          <CardHeader>
            <CardTitle>Gráfico - Ganhos x Despesas</CardTitle>
            {/* <CardDescription>January - June 2024</CardDescription> */}
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="h-[calc(100dvh-420px)] w-full aspect-auto"
            >
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="ganhos" fill="#49c7ab" radius={4} />
                <Bar dataKey="despesas" fill="#c74949" radius={4} />
                {/* <Bar dataKey="meDevem" fill="#1190cb" radius={4} />
                <Bar dataKey="EuDevo" fill="#7dccff" radius={4} /> */}
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
        </Card>

        <Card className="flex flex-col w-[40%] max-[1200px]:w-[50%] max-[1020px]:w-full">
          <CardHeader className="items-center pb-0">
            <CardTitle>Distribuição de despesas</CardTitle>
            {/* <CardDescription>January - June 2024</CardDescription> */}
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig2}
              className="mx-auto w-full aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
            >
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={chartData2}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  nameKey="name"
                />
                <ChartLegend
                  content={<ChartLegendContent nameKey="name" />}
                  className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm"></CardFooter>
        </Card>
      </div>
    </div>
  );
}
