import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

function ReportsPurchase() {
  return (
    <>
      <Box
        border="1px"
        w="full"
        mr={2}
        borderColor="gray.200"
        boxShadow="lg"
        borderRadius="lg"
        pl={5}
      >
        <Box>
          <Heading fontSize="xl" pl={3} pt={10}>
            <Icon mr={2} as={MdDashboard} />
            Purchase
          </Heading>
        </Box>
        <Box p={2}>
          <hr />
        </Box>

        <Stack p={3}>
          <Link to="/purchase">
            <HStack
              p={2}
              borderRadius="md"
              _hover={{ bgColor: "teal", color: "white" }}
              bgColor="white"
              cursor="pointer"
            >
              <Icon as={MdDashboard} />
              <Text fontSize="md" pl={2}>
                Purchase Order
              </Text>
            </HStack>
          </Link>
          <Link to="/purchase/list">
            <HStack
              p={2}
              borderRadius="md"
              _hover={{ bgColor: "teal", color: "white" }}
              bgColor="white"
              cursor="pointer"
            >
              <Icon as={MdDashboard} />
              <Text fontSize="md" pl={2}>
                Purchase List
              </Text>
            </HStack>
          </Link>
          <Link to="/supplier">
            <HStack
              p={2}
              borderRadius="md"
              _hover={{ bgColor: "teal", color: "white" }}
              bgColor="white"
              cursor="pointer"
            >
              <Icon as={MdDashboard} />
              <Text fontSize="md" pl={2}>
                Supplier list
              </Text>
            </HStack>
          </Link>
          <HStack
            p={2}
            borderRadius="md"
            _hover={{ bgColor: "teal", color: "white" }}
            bgColor="white"
            cursor="pointer"
          >
            <Icon as={MdDashboard} />
            <Text fontSize="md" pl={2}>
              Bill List
            </Text>
          </HStack>
        </Stack>
      </Box>
    </>
  );
}

export default ReportsPurchase;
