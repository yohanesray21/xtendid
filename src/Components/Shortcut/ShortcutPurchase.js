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

import { Link } from "react-router-dom";

import {
  FaFileInvoiceDollar,
  FaHistory,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";

import ShortcutItems from "./ShortcutItems";
import { ImBoxAdd } from "react-icons/im";
import axios from "axios";

function ShorcutPurchase() {
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

          <Link to="/supplier">
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
                <Icon fontSize="3xl" as={FaUser} />
              </Center>
              <Box>
                <Text fontSize="xl">
                  <Center>{count.supplier}</Center>
                </Text>
                <Text>
                  <Center w={160}>Supplier</Center>
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
                <Icon fontSize="3xl" as={FaShoppingBag} />
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
          <Link to="/bill/list">
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
                  <Center>{count.bill}</Center>
                </Text>
                <Text>
                  <Center w={160}>Bill List</Center>
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
              <Icon fontSize="3xl" as={ImBoxAdd} />
            </Center>
            <Box>
              <Text fontSize="xl">
                <Center>4</Center>
              </Text>
              <Text>
                <Center w={160}>Stock In</Center>
              </Text>
            </Box>
          </Stack>
        </HStack>
      </Box>
    </div>
  );
}

export default ShorcutPurchase;
