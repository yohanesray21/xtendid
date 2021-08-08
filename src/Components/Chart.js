import React from "react";
import { Box, Text } from "@chakra-ui/react";
import PurchaseCharts from "./Charts/PurchaseCharts";

function Chart() {
  return (
    <div>
      <Box
        w="full"
        display="grid"
        placeItems="center"
        mt={10}
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        boxShadow="lg"
      >
        <Text pt={10}>Sales Chart - Purchase Chart</Text>
        <PurchaseCharts />
      </Box>
    </div>
  );
}

export default Chart;
