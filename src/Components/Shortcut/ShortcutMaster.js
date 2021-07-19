import {
  Box,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import React from "react";
import { FaBox, FaUserTie } from "react-icons/fa";

function Shorcut() {
  return (
    <div>
      <Box w="full" bg="white">
        <Heading fontSize="xl" pb={3} pt={2}>
          Shortcut
        </Heading>
        <HStack spacing={8} w="full">
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
              <Icon fontSize="3xl" as={FaBox} />
              <Box>
                <Text fontSize="xl">128</Text>
                <Text>Items</Text>
              </Box>
            </VStack>
          </Link>

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
            justifyContent="center"
          >
            <Icon fontSize="3xl" as={FaUserTie} />
            <Box>
              <Text fontSize="xl">32</Text>
              <Text>Supplier</Text>
            </Box>
          </Stack>
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
            <Icon fontSize="3xl" as={FaBox} />
            <Box>
              <Text fontSize="xl">123</Text>
              <Text>Item</Text>
            </Box>
          </VStack>
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
            <Icon fontSize="3xl" as={FaBox} />
            <Box>
              <Text fontSize="xl">123</Text>
              <Text>Item</Text>
            </Box>
          </VStack>
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
            <Icon fontSize="3xl" as={FaBox} />
            <Box>
              <Text fontSize="xl">123</Text>
              <Text>Item</Text>
            </Box>
          </VStack>
        </HStack>
      </Box>
    </div>
  );
}

export default Shorcut;
