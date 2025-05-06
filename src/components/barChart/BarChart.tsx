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
} from '@/components/ui/chart';
const chartData = [
  { month: 'January', ganhos: 186, gastos: 80, meDevem: 100, EuDevo: 100 },
  { month: 'February', ganhos: 305, gastos: 200, meDevem: 200, EuDevo: 500 },
  { month: 'March', ganhos: 237, gastos: 120, meDevem: 150, EuDevo: 50 },
  { month: 'April', ganhos: 73, gastos: 190, meDevem: 300, EuDevo: 130 },
  { month: 'May', ganhos: 209, gastos: 130, meDevem: 500, EuDevo: 400 },
  { month: 'June', ganhos: 214, gastos: 140, meDevem: 100, EuDevo: 300 },
  { month: 'Julho', ganhos: 514, gastos: 340, meDevem: 600, EuDevo: 130 },
  { month: 'Agosto', ganhos: 614, gastos: 440, meDevem: 100, EuDevo: 90 },
  { month: 'Setembro', ganhos: 114, gastos: 140, meDevem: 300, EuDevo: 100 },
  { month: 'Dezembro', ganhos: 14, gastos: 140, meDevem: 100, EuDevo: 100 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function Barchart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-[calc(100dvh-470px)] w-full aspect-auto"
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
            <Bar dataKey="ganhos" fill="#236084" radius={4} />
            <Bar dataKey="gastos" fill="#49c7ab" radius={4} />
            <Bar dataKey="meDevem" fill="#1190cb" radius={4} />
            <Bar dataKey="EuDevo" fill="#7dccff" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
