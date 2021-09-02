import React from "react";
import {
  Center,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

function ModalDetail() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <>
        <Button size="sm" colorScheme="teal" onClick={onOpen}>
          Validate
        </Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
          size="2xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontWeight="light" mb={2}>
              <Center>Detail Delivery</Center>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Table size="sm">
                <Thead bgColor="gray.200">
                  <Tr>
                    <Th>Item</Th>
                    <Th>Demand</Th>
                    <Th>Done</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Wifi Extender</Td>
                    <Td>2</Td>
                    <Td w="20%">
                      <NumberInput size="sm">
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Td>
                  </Tr>
                </Tbody>
                <Tbody>
                  <Tr>
                    <Td>Kabel Lan</Td>
                    <Td>2</Td>
                    <Td w="20%">
                      <NumberInput size="sm">
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </ModalBody>
            <ModalFooter justifyContent="end">
              <Button mr={3} colorScheme="teal">
                Confirm
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
}

export default ModalDetail;
