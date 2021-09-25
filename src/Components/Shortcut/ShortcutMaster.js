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
import React, { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { HiChartBar } from "react-icons/hi";

import ShortcutCustomer from "./ShortcutCustomer";
import ShortcutItems from "./ShortcutItems";
import { IoCart } from "react-icons/io5";
import axios from "axios";

function ShortcutMaster() {
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
                  <Center>{count.supplier}</Center>
                </Text>
                <Text>
                  <Center>Supplier</Center>
                </Text>
              </Box>
            </Stack>
          </Link>

          <ShortcutCustomer countCustomer={count.customer} />

          <Link to="/purchase/list">
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
                <Icon fontSize="3xl" as={IoCart} />
              </Center>
              <Box>
                <Text fontSize="xl">
                  <Center>{count.purchase_order}</Center>
                </Text>
                <Text>
                  <Center>Purchase</Center>
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
                  <Center>{count.sales_order}</Center>
                </Text>
                <Text>
                  <Center>Sales</Center>
                </Text>
              </Box>
            </Stack>
          </Link>
        </HStack>
      </Box>
    </div>
  );
}

export default ShortcutMaster;
