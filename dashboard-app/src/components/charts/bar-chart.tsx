'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts"
import { useEffect, useState } from "react"

type DataPoint = {
  name: string
  total: number
}

const COLORS = [
  '#6366f1', // Monday - indigo-500
  '#22d3ee', // Tuesday - cyan-400
  '#f59e42', // Wednesday - orange-400
  '#10b981', // Thursday - emerald-500
  '#f43f5e', // Friday - rose-500
  '#eab308', // Saturday - yellow-400
  '#8b5cf6', // Sunday - violet-500
]

const generateData = (): DataPoint[] => [
  { name: "Mon", total: Math.floor(Math.random() * 1000) + 500 },
  { name: "Tue", total: Math.floor(Math.random() * 1000) + 500 },
  { name: "Wed", total: Math.floor(Math.random() * 1000) + 500 },
  { name: "Thu", total: Math.floor(Math.random() * 1000) + 500 },
  { name: "Fri", total: Math.floor(Math.random() * 1000) + 500 },
  { name: "Sat", total: Math.floor(Math.random() * 1000) + 500 },
  { name: "Sun", total: Math.floor(Math.random() * 1000) + 500 },
]

export default function BarChartMetric() {
  const [data, setData] = useState<DataPoint[]>([])

  useEffect(() => {
    setData(generateData())
  }, [])

  if (!data.length) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" radius={[4, 4, 0, 0]}>
                {data.map((_, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
} 