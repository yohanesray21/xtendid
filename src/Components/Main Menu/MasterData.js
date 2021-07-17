import React from "react";
import { Box, Container, Flex, Button } from "@chakra-ui/react";
import { Redirect, useHistory } from "react-router-dom";

import TopBar from "../Navigation/TopBar";
import Navbar from "../Navigation/Navbar";
import Shorcut from "../Shorcut";
import Chart from "../Chart";
import Reports from "../Reports";

function MasterData() {
  const history = useHistory();

  if (!localStorage.getItem("authToken")) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <TopBar />

      <Button
        onClick={() => {
          localStorage.removeItem("authToken");
          history.push("/login");
        }}
      >
        Logout
      </Button>

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
              <Reports />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default MasterData;
