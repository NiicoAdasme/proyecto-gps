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

const BarCharts = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" aspect={2.5}>
      <BarChart
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
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
