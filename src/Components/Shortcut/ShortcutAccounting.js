import { Box, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaBox } from "react-icons/fa";

function Shorcut() {
  return (
    <div>
      <Box w="full" bg="white">
        <Heading fontSize="xl" pb={3} pt={2}>
          Shortcut
        </Heading>
        <HStack spacing={8} w="full">
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
