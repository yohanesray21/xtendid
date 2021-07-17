import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import TopBar from "../Navigation/TopBar";
import Navbar from "../Navigation/Navbar";
import Shorcut from "../Shorcut";
import Chart from "../Chart";
import Reports from "../Reports";

function MasterData() {
  return (
    <>
      <TopBar />

      <Box bg="white" w="full" mt={4}>
        <Container maxW="container.xl" pt={2}>
          <Flex>
            <Navbar />

            <Box pl={2} w="full">
              {/* Shortcut */}
              <Shorcut />
              {/* Chart */}
              <Chart />
              {/* Reports & Masters */}
              {/* <Reports /> */}
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default MasterData;
