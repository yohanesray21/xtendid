import React, { useState } from "react";
import { Box, Text, Icon, Stack, Heading, HStack } from "@chakra-ui/react";
import { IoList, IoCart, IoCash, IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = [{ title: "Master Data" }, { title: "Purchase" }];

function Navbar() {
  const [nav, setNav] = useState([]);

  return (
    <>
      <div>
        <Box
          border="1px"
          w="270px"
          h="930px"
          mr={2}
          borderColor="gray.200"
          boxShadow="lg"
          borderRadius="lg"
        >
          <Heading fontSize="2xl" pl={3} pt={10}>
            {nav}
          </Heading>
          <Text fontSize="md" pl={3} pt={5} color="gray.500">
            Modul
          </Text>
          <Box p={2}>
            <hr />
          </Box>

          <Stack p={3}>
            <Link to="/">
              <HStack
                p={2}
                borderRadius="md"
                _hover={{ bgColor: "teal", color: "white" }}
                bgColor="white"
                cursor="pointer"
                onClick={() => {
                  setNav(Navigation[0].title);
                }}
              >
                <Icon fontSize="xl" as={MdDashboard} />
                <Text fontSize="md" pl={2}>
                  Master Data
                </Text>
              </HStack>
            </Link>
            <Link to="/purchase">
              <HStack
                p={2}
                borderRadius="md"
                _hover={{ bgColor: "teal", color: "white" }}
                bgColor="white"
                cursor="pointer"
                onClick={() => {
                  setNav(Navigation[1].title);
                }}
              >
                <Icon fontSize="xl" as={IoCart} />
                <Text fontSize="md" pl={2}>
                  Purchase
                </Text>
              </HStack>
            </Link>
            <Link
              Link
              to="/sales"
              onClick={() => {
                setNav("Sales");
              }}
            >
              <HStack
                p={2}
                borderRadius="md"
                _hover={{ bgColor: "teal", color: "white" }}
                bgColor="white"
                cursor="pointer"
              >
                <Icon fontSize="xl" as={IoList} />
                <Text fontSize="md" pl={2}>
                  Sales
                </Text>
              </HStack>
            </Link>
            <Link to="/stock">
              <HStack
                p={2}
                borderRadius="md"
                _hover={{ bgColor: "teal", color: "white" }}
                bgColor="white"
                cursor="pointer"
                onClick={() => {
                  setNav("Stock");
                }}
              >
                <Icon as={FaBox} />
                <Text fontSize="md" pl={2}>
                  Stock
                </Text>
              </HStack>
            </Link>
            <Link to="/accounting">
              <HStack
                p={2}
                borderRadius="md"
                _hover={{ bgColor: "teal", color: "white" }}
                bgColor="white"
                cursor="pointer"
                onClick={() => {
                  setNav("Accounting");
                }}
              >
                <Icon fontSize="xl" as={IoCash} />
                <Text fontSize="md" pl={2}>
                  Accounting
                </Text>
              </HStack>
            </Link>
          </Stack>

          <Text fontSize="md" pl={3} pt={5} color="gray.500">
            Settings
          </Text>
          <Box p={2}>
            <hr />
          </Box>
          <Stack p={3}>
            <Link to="/setting">
              <HStack
                p={2}
                borderRadius="md"
                _hover={{ bgColor: "teal", color: "white" }}
                bgColor="white"
                cursor="pointer"
                onClick={() => {
                  setNav("Setting");
                }}
              >
                <Icon fontSize="xl" as={IoSettingsSharp} />
                <Text fontSize="md" pl={2}>
                  Main setting
                </Text>
              </HStack>
            </Link>
          </Stack>
        </Box>
      </div>
    </>
  );
}

export default Navbar;
