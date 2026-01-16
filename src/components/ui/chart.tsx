import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", students: 30 },
  { name: "Feb", students: 45 },
  { name: "Mar", students: 60 },
];

const chartConfig = {
  students: {
    label: "Student Signups",
    color: "#8B5CF6", // purple-500
  },
};

export default function ExampleChart() {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          type="monotone"
          dataKey="students"
          stroke="var(--color-students)"
          strokeWidth={3}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ChartContainer>
  );
}
