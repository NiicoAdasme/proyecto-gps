import React, { memo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarCharts = ({data}) => {
  console.log(data);
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="fecha" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar name="Incidencias" dataKey="incidencias" fill="#194669" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
