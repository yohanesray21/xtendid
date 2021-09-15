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

import { FaClipboardList, FaFileInvoiceDollar } from "react-icons/fa";
import {
  RiFileList2Line,
  RiFolderHistoryLine,
  RiInboxUnarchiveLine,
  RiPlayListAddFill,
} from "react-icons/ri";

import ShortcutItems from "./ShortcutItems";
import ShortcutCustomer from "./ShortcutCustomer";
import { Link } from "react-router-dom";
import { ImBoxRemove } from "react-icons/im";

function ShorcutSales() {
  return (
    <div>
      <Box w="full" bg="white">
        <Heading fontSize="xl" pb={3} pt={2}>
          Shortcut
        </Heading>
        <HStack spacing={8} w="full">
          <ShortcutItems />
          <ShortcutCustomer />

          <Link to="/sales/list">
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
                <Icon fontSize="3xl" as={FaClipboardList} />
              </Center>
              <Box>
                <Text fontSize="xl">
                  <Center>2</Center>
                </Text>
                <Text>
                  <Center w={160}>Sales List</Center>
                </Text>
              </Box>
            </Stack>
          </Link>
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
              <Icon fontSize="3xl" as={FaFileInvoiceDollar} />
            </Center>
            <Box>
              <Text fontSize="xl">
                <Center>2</Center>
              </Text>
              <Text>
                <Center w={160}>Invoice List</Center>
              </Text>
            </Box>
          </Stack>
          <Link to="/sales/stock-out/list">
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
                <Icon fontSize="3xl" as={ImBoxRemove} />
              </Center>
              <Box>
                <Text fontSize="xl">
                  <Center>4</Center>
                </Text>
                <Text>
                  <Center w={160}>Stock Out</Center>
                </Text>
              </Box>
            </Stack>
          </Link>
        </HStack>
      </Box>
    </div>
  );
}

export default ShorcutSales;
