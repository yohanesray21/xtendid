import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";

function ModalButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  return (
    <>
      <Button size="sm" colorScheme="teal" onClick={onOpen}>
        Create A New Item
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>Add New Item</Center>
          </ModalHeader>
          <ModalCloseButton />
          <Box px={5}>
            <hr />
          </Box>
          <ModalBody pb={4}>
            <Stack p={2}>
              <FormControl>
                <FormLabel>
                  <Text fontSize="sm" pt={2}>
                    Item Code
                  </Text>
                </FormLabel>
                <Input size="sm" bgColor="gray.200" isRequired />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <Text fontSize="sm">Item Name</Text>
                </FormLabel>
                <Input size="sm" bgColor="gray.200" />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <Text fontSize="sm">Product category</Text>
                </FormLabel>
                <Select size="sm" bgColor="gray.200">
                  <option value="option1">Service</option>
                  <option value="option2">Product</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>
                  <Text fontSize="sm">Opening Stock</Text>
                </FormLabel>
                <Input size="sm" bgColor="gray.200" type="number" />
              </FormControl>
              <Flex alignItems="center">
                <FormControl pr={2} w="30%">
                  <FormLabel>
                    <Text fontSize="sm">Base Unit</Text>
                  </FormLabel>
                  <Select size="sm" bgColor="gray.200">
                    <option value="option1">Pcs</option>
                    <option value="option1">Pack</option>
                    <option value="option1">Box</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Cost</Text>
                  </FormLabel>
                  <Input size="sm" bgColor="gray.200" type="number" min="1" />
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel>
                  <Text fontSize="sm">Status</Text>
                </FormLabel>
                <Select size="sm" bgColor="gray.200">
                  <option value="option">Select Status</option>
                  <option value="available" style={{ color: "green" }}>
                    Available
                  </option>
                  <option value="notAvailable" style={{ color: "red" }}>
                    Not Available
                  </option>
                </Select>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Flex
              px={2}
              w="full"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button size="sm" mr={3} leftIcon={<BiEdit />}>
                Edit in Full Page
              </Button>
              <Box>
                <Button colorScheme="teal">Save</Button>
              </Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalButton;
