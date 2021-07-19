import React from "react";
<<<<<<< HEAD
import { Box, Container, Flex } from "@chakra-ui/react";
import { Redirect } from "react-router";
=======
import { Box, Container, Flex, Button } from "@chakra-ui/react";
import { Redirect, useHistory } from "react-router-dom";

>>>>>>> f443be7f405064a8bb9f97f61230242c6a2c72f1
import TopBar from "../Navigation/TopBar";
import Navbar from "../Navigation/Navbar";
import ShortcutMaster from "../Shortcut/ShortcutMaster";
import Chart from "../Chart";
import Reports from "../Reports";

function MasterData() {
<<<<<<< HEAD
  if (!localStorage.getItem("authToken")) {
    return <Redirect to="/login" />;
  }
=======
  const history = useHistory();

  if (!localStorage.getItem("authToken")) {
    return <Redirect to="/login" />;
  }

>>>>>>> f443be7f405064a8bb9f97f61230242c6a2c72f1
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
