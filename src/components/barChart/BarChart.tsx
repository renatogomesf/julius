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

// const chartConfig = {
//   ganhos: {
//     label: 'Ganhos',
//   },
//   despesas: {
//     label: 'Despesas',
//   },
//   meDevem: {
//     label: 'Me devem',
//   },
//   EuDevo: {
//     label: 'Eu devo',
//   },
// } satisfies ChartConfig;

export function Barchart({
  chartData,
  chartConfig,
}: {
  chartData: object[];
  chartConfig: ChartConfig;
}) {
  chartConfig satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-[calc(100dvh-480px)] w-full aspect-auto"
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
