import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Chart() {
  return (
    <div>
      <Box
        w="full"
        h="300px"
        display="grid"
        placeItems="center"
        mt={10}
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        bgColor="white"
        boxShadow="lg"
      >
        <Text>Sales Chart - Purchase Chart</Text>
      </Box>
    </div>
  );
}

export default Chart;
