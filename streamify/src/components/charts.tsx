"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartData = [
  { month: "January", ActiveUsers: 186 },
  { month: "February", ActiveUsers: 305 },
  { month: "March", ActiveUsers: 237 },
  { month: "April", ActiveUsers: 73 },
  { month: "May", ActiveUsers: 209 },
  { month: "June", ActiveUsers: 214 },
  { month: "July", ActiveUsers: 400 },
  { month: "August", ActiveUsers: 373 },
]

const chartConfig = {
  ActiveUsers: {
    label: "ActiveUsers",
    color: "hsl(var(--chart-1))",
  },
  
  
} satisfies ChartConfig

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - Sept 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
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
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="ActiveUsers" fill="var(--color-ActiveUsers)" radius={8} />
            
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none flex gap-2 text-muted-foreground">
          Showing total visitors for the last 6 months <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
