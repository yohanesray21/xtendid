import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

function ReportsSales() {
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
            Supplier
          </Heading>
        </Box>
        <Box p={2}>
          <hr />
        </Box>

        <Stack p={3}>
          <Link to="supplier">
            <HStack
              p={2}
              borderRadius="md"
              _hover={{ bgColor: "teal", color: "white" }}
              bgColor="white"
              cursor="pointer"
            >
              <Icon as={MdDashboard} />
              <Text fontSize="md" pl={2}>
                Supplier
              </Text>
            </HStack>
          </Link>
        </Stack>
      </Box>
    </>
  );
}

export default ReportsSales;
