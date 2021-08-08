import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Box } from "@chakra-ui/layout";

function PurchaseCharts() {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 200, pv: 2400, amt: 2400 },
    { name: "Page C", uv: 500, pv: 2400, amt: 2400 },
    { name: "Page D", uv: 200, pv: 2400, amt: 2400 },
    { name: "Page E", uv: 100, pv: 2400, amt: 2400 },
  ];

  return (
    <Box p={10}>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </Box>
  );
}

export default PurchaseCharts;
