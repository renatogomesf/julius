'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export function AreaChartGradient({
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
        <CardTitle>Area Chart - Gradient</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-[200px] w-full aspect-auto"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillGanhos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#236084" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#236084" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillDespesas" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#49c7ab" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#49c7ab" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMeDevem" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1190cb" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1190cb" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillEuDevo" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7dccff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#7dccff" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="ganhos"
              type="natural"
              fill="url(#fillGanhos)"
              fillOpacity={1}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="despesas"
              type="natural"
              fill="url(#fillDespesas)"
              fillOpacity={1}
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <Area
              dataKey="meDevem"
              type="natural"
              fill="url(#fillMeDevem)"
              fillOpacity={1}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="EuDevo"
              type="natural"
              fill="url(#fillEuDevo)"
              fillOpacity={1}
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
