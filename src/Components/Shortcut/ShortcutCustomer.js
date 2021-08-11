import React from "react";
import { Box, Center, Icon, Stack, Text } from "@chakra-ui/react";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

function ShortcutCustomer() {
  return (
    <>
      <Link to="customer">
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
            <Icon fontSize="4xl" as={FaUserFriends} />
          </Center>
          <Box>
            <Text fontSize="xl">
              <Center>5</Center>
            </Text>
            <Text>
              <Center>Customer</Center>
            </Text>
          </Box>
        </Stack>
      </Link>
    </>
  );
}

export default ShortcutCustomer;
