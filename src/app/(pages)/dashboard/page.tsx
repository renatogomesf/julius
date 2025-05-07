'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
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

  return (
    <div className="w-full">
      <div className="px-2.5">
        <h1 className="mt-8 mb-5 font-semibold text-4xl">Visão Geral</h1>
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
        <Card>
          <CardHeader>
            <CardTitle>Gráfico - Visão Geral</CardTitle>
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
                <Bar dataKey="ganhos" fill="#236084" radius={4} />
                <Bar dataKey="despesas" fill="#49c7ab" radius={4} />
                <Bar dataKey="meDevem" fill="#1190cb" radius={4} />
                <Bar dataKey="EuDevo" fill="#7dccff" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
        </Card>
      </div>
    </div>
  );
}
