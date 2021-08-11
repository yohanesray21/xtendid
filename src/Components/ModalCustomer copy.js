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
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";

function ModalCustomer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  return (
    <>
      <Button size="sm" colorScheme="teal" onClick={onOpen}>
        Create A New Customer
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
            <Center>Add New Customer</Center>
          </ModalHeader>
          <ModalCloseButton />
          <Box px={5}>
            <hr />
          </Box>
          <ModalBody pb={4}>
            <Stack p={2}>
              <RadioGroup defaultValue="company">
                <Stack spacing={5} direction="row">
                  <Radio colorScheme="green" value="company">
                    Company
                  </Radio>
                  <Radio colorScheme="green" value="individual">
                    Individual
                  </Radio>
                </Stack>
              </RadioGroup>
              <FormControl>
                <FormLabel>
                  <Text fontSize="sm" pt={2}>
                    Customer Name
                  </Text>
                </FormLabel>
                <Input size="sm" bgColor="gray.200" isRequired />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <Text fontSize="sm">Address</Text>
                </FormLabel>
                <Input size="sm" bgColor="gray.200" />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <Text fontSize="sm">Email</Text>
                </FormLabel>
                <Input size="sm" bgColor="gray.200" type="email" />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <Text fontSize="sm">Contact</Text>
                </FormLabel>
                <Input size="sm" bgColor="gray.200" type="number" />
              </FormControl>
              <Flex alignItems="center">
                <FormControl pr={3} w="50%">
                  <FormLabel>
                    <Text fontSize="sm">City</Text>
                  </FormLabel>
                  <Input size="sm" bgColor="gray.200" type="number" />
                </FormControl>
                <FormControl w="50%">
                  <FormLabel>
                    <Text fontSize="sm">State</Text>
                  </FormLabel>
                  <Input size="sm" bgColor="gray.200" type="number" min="1" />
                </FormControl>
              </Flex>
              <Flex alignItems="center">
                <FormControl pr={3} w="40%">
                  <FormLabel>
                    <Text fontSize="sm">Zip</Text>
                  </FormLabel>
                  <Input size="sm" bgColor="gray.200" type="number" />
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Country</Text>
                  </FormLabel>
                  <Input size="sm" bgColor="gray.200" type="number" min="1" />
                </FormControl>
              </Flex>
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

export default ModalCustomer;
