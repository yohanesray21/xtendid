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

import { FaShoppingBag } from "react-icons/fa";
import { IoBagAddSharp, IoBagRemoveSharp } from "react-icons/io5";

import ShortcutItems from "./ShortcutItems";
import { RiFolderHistoryLine } from "react-icons/ri";
import axios from "axios";
import { Link } from "react-router-dom";

function ShortcutStock() {
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

          <Link to="sales/stock-in/list">
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
                  <Center>{count.stock_in}</Center>
                </Text>
                <Text>
                  <Center w={160}>Stock In</Center>
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
                <Icon fontSize="3xl" as={IoBagRemoveSharp} />
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
                <Icon fontSize="3xl" as={FaShoppingBag} />
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

          <Link to="/purchase/list">
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
                  <Center>{count.purchase_order}</Center>
                </Text>
                <Text>
                  <Center w={160}>Purchase List</Center>
                </Text>
              </Box>
            </Stack>
          </Link>
        </HStack>
      </Box>
    </div>
  );
}

export default ShortcutStock;
