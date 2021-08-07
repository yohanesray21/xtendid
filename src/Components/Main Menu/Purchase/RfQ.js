import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  FormControl,
  Icon,
  IconButton,
  Input,
  Stack,
  Text,
  Heading,
  FormLabel,
  Textarea,
  HStack,
  Select,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Spacer,
  VStack,
  Divider,
} from "@chakra-ui/react";
import TopBar from "../../Navigation/TopBar";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoHome, IoPrintSharp } from "react-icons/io5";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RiBillLine } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";
import MenuIcon from "../../MenuIcon";
import { Link } from "react-router-dom";
import ModalDetail from "./ModalDetail";
function RfQ() {
  return (
    <>
      <TopBar />
      <Box bg="white" w="full" mt={4}>
        <Container maxW="container.xl" pt={2}>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Breadcrumb
                fontWeight="medium"
                fontSize="xl"
                separator={<ChevronRightIcon color="gray.500" fontSize="3xl" />}
                alignItems="center"
              >
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <Icon fontSize="2xl" as={IoHome} />
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Purchase</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">New Request</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>

            <Box>
              <Stack direction="row" spacing={2}>
                <MenuIcon />
                <IconButton
                  size="sm"
                  aria-label="print"
                  icon={<IoPrintSharp />}
                  fontSize="md"
                />
                {/* Menu Icon */}
                <Button leftIcon={<RiBillLine />} size="sm" boxShadow="sm">
                  Create Bill
                </Button>
                <Button
                  leftIcon={<AiOutlineCheckCircle />}
                  size="sm"
                  boxShadow="sm"
                >
                  Confirm Order
                </Button>
                <Button size="sm" colorScheme="teal" boxShadow="sm">
                  Save
                </Button>
                <ModalDetail />
              </Stack>
            </Box>
          </Flex>

          <Box
            boxShadow="lg"
            maxW="container.xl"
            mt={2}
            mb={3}
            border="1px"
            borderColor="gray.200"
            borderRadius="sm"
            px={8}
            pb={8}
          >
            <Heading size="md" fontWeight="semibold" pt={8} pb={2}>
              Request For Quotation
            </Heading>
            <Heading size="xl" fontWeight="semibold" pl={3} pb={2}>
              New
            </Heading>
            <Box pb={2}>
              <hr />
            </Box>
            <Text fontSize="sm">General Information</Text>

            <Flex>
              <Box w="100%">
                <Stack px={16} py={5}>
                  <HStack>
                    <FormControl pr={10}>
                      <FormLabel>
                        <Text fontSize="sm" pt={2}>
                          Supplier Name
                        </Text>
                      </FormLabel>
                      <Select size="sm" bgColor="gray.200">
                        <option value="option1">Service</option>
                        <option value="option2">Product</option>
                      </Select>
                    </FormControl>

                    <FormControl>
                      <FormLabel>
                        <Text fontSize="sm" pt={2}>
                          Order Deadline
                        </Text>
                      </FormLabel>
                      <Input size="sm" bgColor="gray.200" type="date" />
                    </FormControl>
                  </HStack>
                  <HStack>
                    <FormControl pr={10}>
                      <FormLabel>
                        {/* <Text fontSize="sm" pt={2}>
                          Due Date
                        </Text> */}
                      </FormLabel>
                      {/* <Select size="sm" bgColor="gray.200">
                        <option value="option1">Service</option>
                        <option value="option2">Product</option>
                      </Select> */}
                    </FormControl>

                    <FormControl>
                      <FormLabel>
                        <Text fontSize="sm" pt={2}>
                          Receipt Date
                        </Text>
                      </FormLabel>
                      <Input size="sm" bgColor="gray.200" type="date" />
                    </FormControl>
                  </HStack>
                </Stack>

                <Table size="sm" mt={10} variant="simple">
                  <Thead bgColor="gray.200">
                    <Tr>
                      <Th>Item</Th>
                      <Th>Description</Th>
                      <Th isNumeric>Qty</Th>
                      <Th pl={36}>Unit Price</Th>
                      <Th>Taxes</Th>
                      <Th isNumeric>Total</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Wifi Extender</Td>
                      <Td>Product is Wifi Extender</Td>
                      <Td isNumeric>25</Td>
                      <Td isNumeric pr={28}>
                        4.000.000
                      </Td>
                      <Td isNumeric>10%</Td>
                      <Td isNumeric>Rp. 220.000.000</Td>
                      <Td>
                        <BsTrash />
                      </Td>
                    </Tr>
                  </Tbody>
                  <Tbody>
                    <Tr>
                      <Td>Wifi Extender</Td>
                      <Td>Product is Wifi Extender</Td>
                      <Td isNumeric>25</Td>
                      <Td isNumeric pr={28}>
                        4.000.000
                      </Td>
                      <Td isNumeric>10%</Td>
                      <Td isNumeric>Rp. 220.000.000</Td>
                      <Td>
                        <BsTrash />
                      </Td>
                    </Tr>
                  </Tbody>
                  <Tbody>
                    <Tr>
                      <Td>
                        <Link>Add Item</Link>
                      </Td>

                      <Td>
                        <Link>Add Description</Link>
                      </Td>
                      <Td></Td>
                      <Td></Td>
                      <Td></Td>
                      <Td></Td>
                      <Td></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </Flex>
          </Box>
          <Box
            boxShadow="lg"
            maxW="container.xl"
            border="1px"
            borderColor="gray.200"
            borderRadius="sm"
            px={8}
            pt={10}
            pb={20}
          >
            <Flex>
              <Box w="40%">
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Select Account Payment</Text>
                  </FormLabel>
                  <Select size="sm" bgColor="gray.200">
                    <option value="option1">BNI</option>
                    <option value="option2">Mandiri</option>
                  </Select>
                </FormControl>
                <FormControl id="email">
                  <FormLabel>
                    <Text fontSize="sm" pt={2}>
                      Description
                    </Text>
                  </FormLabel>
                  <Textarea
                    placeholder="Here is a sample placeholder"
                    bgColor="gray.200"
                  />
                </FormControl>
              </Box>
              <Spacer />
              <VStack w="40%" spacing={12}>
                <Box>
                  <Table variant="unstyled" size="sm">
                    <Tbody>
                      <Tr>
                        <Th fontSize="md">Untaxed Amount: </Th>
                        <Td fontSize="md">Rp. 12.000.000,-</Td>
                      </Tr>
                      <Tr>
                        <Th fontSize="md">Taxes:</Th>
                        <Td fontSize="md"> Rp. 1.200.000,-</Td>
                      </Tr>
                      <Divider pt={2} />
                      <Tr>
                        <Td fontSize="lg">Total:</Td>
                        <Th fontSize="lg">Rp. 13.200.000,-</Th>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>
                <Box>
                  <Table variant="unstyled" size="sm">
                    <Tbody>
                      <Tr>
                        <Th fontSize="md">Amount: </Th>
                        <Td fontSize="md">
                          <Input
                            size="sm"
                            bgColor="gray.200"
                            value="Rp. 10.000.000,-"
                          />
                        </Td>
                      </Tr>
                      <Divider pt={2} />
                      <Tr>
                        <Td fontSize="lg">Credit:</Td>
                        <Th fontSize="lg">Rp. 1.200.000,-</Th>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>
              </VStack>
              {/* <Box p="4" bgColor="green.50">
                <VStack justifyItems="">
                  <HStack>
                    <Text fontWeight="bold" pl={1} pr={8}>
                      Untaxed Amount:{" "}
                    </Text>
                    <Spacer />
                    <Text>Rp. 12.000.000,-</Text>
                  </HStack>
                  <HStack>
                    <Text fontWeight="bold" pl={14} >
                      Taxes:
                    </Text>
                    <Spacer />
                    <Text>Rp. 12.000.000,-</Text>
                  </HStack>
                  <HStack>
                    <Text fontWeight="bold" pr={8}>
                      Taxes:{" "}
                    </Text>
                    <Text>Rp. 12.000.000,-</Text>
                  </HStack>
                </VStack>
              </Box> */}
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default RfQ;
