import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdDashboard } from "react-icons/md";

function ReportsStock() {
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
            Stock
          </Heading>
        </Box>
        <Box p={2}>
          <hr />
        </Box>

        <Stack p={3}>
          {window.location.pathname === "/" ||
          window.location.pathname === "/stock" ? (
            <>
              <HStack
                p={2}
                borderRadius="md"
                _hover={{ bgColor: "teal", color: "white" }}
                bgColor="white"
                cursor="pointer"
              >
                <Icon as={MdDashboard} />
                <Text fontSize="md" pl={2}>
                  Stock In
                </Text>
              </HStack>
              <HStack
                p={2}
                borderRadius="md"
                _hover={{ bgColor: "teal", color: "white" }}
                bgColor="white"
                cursor="pointer"
              >
                <Icon as={MdDashboard} />
                <Text fontSize="md" pl={2}>
                  Stock Out
                </Text>
              </HStack>
            </>
          ) : (
            " "
          )}
          <HStack
            p={2}
            borderRadius="md"
            _hover={{ bgColor: "teal", color: "white" }}
            bgColor="white"
            cursor="pointer"
          >
            <Icon as={MdDashboard} />
            <Text fontSize="md" pl={2}>
              Item
            </Text>
          </HStack>
          <HStack
            p={2}
            borderRadius="md"
            _hover={{ bgColor: "teal", color: "white" }}
            bgColor="white"
            cursor="pointer"
          >
            <Icon as={MdDashboard} />
            <Text fontSize="md" pl={2}>
              Item Price
            </Text>
          </HStack>
        </Stack>
      </Box>
    </>
  );
}

export default ReportsStock;
