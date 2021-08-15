import React from "react";
import {
  Box,
  Center,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FaShoppingBag } from "react-icons/fa";
import { IoBagAddSharp, IoBagRemoveSharp } from "react-icons/io5";

import ShortcutItems from "./ShortcutItems";
import { RiFolderHistoryLine } from "react-icons/ri";

function ShorcutStock() {
  return (
    <div>
      <Box w="full" bg="white">
        <Heading fontSize="xl" pb={3} pt={2}>
          Shortcut
        </Heading>
        <HStack spacing={8} w="full">
          <ShortcutItems />

          <Stack
            w="full"
            border="1px"
            borderColor="gray.200"
            py={6}
            bgColor="white.100"
            boxShadow="xs"
            spacing={4}
            _hover={{ bgColor: "teal", color: "white" }}
            borderRadius="md"
          >
            <Center>
              <Icon fontSize="3xl" as={IoBagAddSharp} />
            </Center>
            <Box>
              <Text fontSize="xl">
                <Center>268</Center>
              </Text>
              <Text>
                <Center w={160}>Stock In</Center>
              </Text>
            </Box>
          </Stack>
          <Stack
            w="full"
            border="1px"
            borderColor="gray.200"
            py={6}
            bgColor="white.100"
            boxShadow="xs"
            spacing={4}
            _hover={{ bgColor: "teal", color: "white" }}
            borderRadius="md"
          >
            <Center>
              <Icon fontSize="3xl" as={IoBagRemoveSharp} />
            </Center>
            <Box>
              <Text fontSize="xl">
                <Center>142</Center>
              </Text>
              <Text>
                <Center w={160}>Purchase History</Center>
              </Text>
            </Box>
          </Stack>
          <Stack
            w="full"
            border="1px"
            borderColor="gray.200"
            py={6}
            bgColor="white.100"
            boxShadow="xs"
            spacing={4}
            _hover={{ bgColor: "teal", color: "white" }}
            borderRadius="md"
          >
            <Center>
              <Icon fontSize="3xl" as={FaShoppingBag} />
            </Center>
            <Box>
              <Text fontSize="xl">
                <Center>32</Center>
              </Text>
              <Text>
                <Center w={160}>Supplier Order</Center>
              </Text>
            </Box>
          </Stack>

          <Stack
            w="full"
            border="1px"
            borderColor="gray.200"
            py={6}
            bgColor="white.100"
            boxShadow="xs"
            spacing={4}
            _hover={{ bgColor: "teal", color: "white" }}
            borderRadius="md"
          >
            <Center>
              <Icon fontSize="3xl" as={RiFolderHistoryLine} />
            </Center>
            <Box>
              <Text fontSize="xl">
                <Center>4</Center>
              </Text>
              <Text>
                <Center w={160}>Sales History</Center>
              </Text>
            </Box>
          </Stack>
        </HStack>
      </Box>
    </div>
  );
}

export default ShorcutStock;
