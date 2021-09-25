import { Box, Center, Icon, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBox } from "react-icons/fa";
import { Link } from "react-router-dom";

function Items({ countItem }) {
  return (
    <>
      <Link to="/stock/item">
        <VStack
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
            <Icon fontSize="3xl" as={FaBox} />
          </Center>
          <Box>
            <Text fontSize="xl">
              <Center>{countItem}</Center>
            </Text>
            <Text>
              <Center>Items</Center>
            </Text>
          </Box>
        </VStack>
      </Link>
    </>
  );
}

export default Items;
