import React, { useEffect, useState } from "react";
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
import axios from "axios";

function ShorcutSales() {
  const [count, setCount] = useState({});

  useEffect(() => {
    const countItem = async () => {
      const { data } = await axios.get(
        "https://xtendid.herokuapp.com/api/master-count"
      );
      setCount(data.data);
    };

    countItem();
  }, []);

  return (
    <div>
      <Box w="full" bg="white">
        <Heading fontSize="xl" pb={3} pt={2}>
          Shortcut
        </Heading>
        <HStack spacing={8} w="full">
          <ShortcutItems countItem={count.item} />
          <ShortcutCustomer countCustomer={count.customer} />

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
                  <Center>{count.sales_order}</Center>
                </Text>
                <Text>
                  <Center w={160}>Sales List</Center>
                </Text>
              </Box>
            </Stack>
          </Link>
          <Link to="/sales/invoice/list">
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
                  <Center>{count.invoice}</Center>
                </Text>
                <Text>
                  <Center w={160}>Invoice List</Center>
                </Text>
              </Box>
            </Stack>
          </Link>
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
                  <Center>{count.stock_out}</Center>
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
