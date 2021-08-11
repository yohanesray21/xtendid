import {
  Box,
  Center,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import React from "react";
import { FaUserTie } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { HiChartBar } from "react-icons/hi";

import ShortcutCustomer from "./ShortcutCustomer";
import ShortcutItems from "./ShortcutItems";

function ShortcutMaster() {
  return (
    <div>
      <Box w="full" bg="white">
        <Heading fontSize="xl" pb={3} pt={2}>
          Shortcut
        </Heading>
        <HStack spacing={8} w="full">
          <ShortcutItems />

          <Link to="supplier">
            <Stack
              w="full"
              border="1px"
              borderColor="gray.200"
              py={6}
              px={14}
              bgColor="white.100"
              boxShadow="xs"
              spacing={4}
              _hover={{ bgColor: "teal", color: "white" }}
              borderRadius="md"
            >
              <Center>
                <Icon fontSize="3xl" as={FaUserTie} />
              </Center>
              <Box>
                <Text fontSize="xl">
                  <Center>32</Center>
                </Text>
                <Text>
                  <Center>Supplier</Center>
                </Text>
              </Box>
            </Stack>
          </Link>

          <ShortcutCustomer />

          <Stack
            w="full"
            border="1px"
            borderColor="gray.200"
            py={6}
            px={14}
            bgColor="white.100"
            boxShadow="xs"
            spacing={4}
            _hover={{ bgColor: "teal", color: "white" }}
            borderRadius="md"
          >
            <Center>
              <Icon fontSize="3xl" as={RiBankFill} />
            </Center>
            <Box>
              <Text fontSize="xl">
                <Center>3</Center>
              </Text>
              <Text>
                <Center>Banks</Center>
              </Text>
            </Box>
          </Stack>
          <Stack
            w="full"
            border="1px"
            borderColor="gray.200"
            py={6}
            px={14}
            bgColor="white.100"
            boxShadow="xs"
            spacing={4}
            _hover={{ bgColor: "teal", color: "white" }}
            borderRadius="md"
          >
            <Center>
              <Icon fontSize="3xl" as={HiChartBar} />
            </Center>
            <Box>
              <Text fontSize="xl">
                <Center>32</Center>
              </Text>
              <Text>
                <Center>Sales</Center>
              </Text>
            </Box>
          </Stack>
        </HStack>
      </Box>
    </div>
  );
}

export default ShortcutMaster;
