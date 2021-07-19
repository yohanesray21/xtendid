import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Redirect } from "react-router";
import TopBar from "../Navigation/TopBar";
import Navbar from "../Navigation/Navbar";
import ShortcutMaster from "../Shortcut/ShortcutMaster";
import Chart from "../Chart";
import Reports from "../Reports";

function MasterData() {
  if (!localStorage.getItem("authToken")) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <TopBar />

      <Box bg="white" w="full" mt={4}>
        <Container maxW="container.xl" pt={2}>
          <Flex>
            <Navbar />

            {/* <Button
              onClick={() => {
                localStorage.removeItem("authToken");
                history.push("/login");
              }}
            >
              Logout
            </Button> */}

            <Box pl={2} w="full">
              {/* Shortcut */}
              <ShortcutMaster />
              {/* Chart */}
              <Chart />

              {/* Reports & Masters */}
              <Reports />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default MasterData;
