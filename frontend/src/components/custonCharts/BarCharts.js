import { red } from "@mui/material/colors";
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

export const BarCharts = ({ data }) => {
  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="weight" fill="#6b48ff" />
          <Bar dataKey="age" fill="#1ee3cf" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
