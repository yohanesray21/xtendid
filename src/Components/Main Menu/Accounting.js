import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import TopBar from "../Navigation/TopBar";
import Navbar from "../Navigation/Navbar";
import ShortcutAccounting from "../Shortcut/ShortcutAccounting";
import Chart from "../Chart";

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
              <ShortcutAccounting />
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
