'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { useEffect, useState } from "react"

type DataPoint = {
  name: string
  value: number
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

const generateData = (): DataPoint[] => [
  { name: "Desktop", value: Math.floor(Math.random() * 1000) + 500 },
  { name: "Mobile", value: Math.floor(Math.random() * 1000) + 500 },
  { name: "Tablet", value: Math.floor(Math.random() * 1000) + 500 },
]

export default function DonutChartMetric() {
  const [data, setData] = useState<DataPoint[]>([])

  useEffect(() => {
    setData(generateData())
  }, [])

  if (!data.length) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
} 