
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

export const description = "A linear line chart"

const chartData = [
  { song: "Kesariya", streams: 186 },
  { song: "My Dil Goes..", streams: 305 },
  { song: "Apna Bana Le", streams: 237 },
  { song: "Banjara", streams: 73 },
  { song: "Dus Bahane", streams: 209 },
]

const chartConfig = {
  streams: {
    label: "streams",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Linecomponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 5 Streamed Songs</CardTitle>
        <CardDescription>January - Sept 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="song"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Line
              dataKey="streams"
              type="linear"
              stroke="var(--color-streams)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this song <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 5 songs
        </div>
      </CardFooter>
    </Card>
  )
}
