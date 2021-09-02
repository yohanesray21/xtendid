import React, { useEffect, useState } from "react";
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

import ModalDetailDelivery from "./ModalDetailDelivery";
import AddSalesItem from "./AddSalesItem";

import axios from "axios";
function SalesOrder() {
  const [customers, setCustomers] = useState([]);
  const [lastId, setLastId] = useState("");
  const [items, setItems] = useState([]);
  const [calculate, setCalculate] = useState({});
  const [customerId, setCustomerId] = useState({});
  const [customer, setCustomer] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [isLoadingCreateSO, setisLoadingCreateSO] = useState(false);

  console.log(expirationDate);

  useEffect(() => {
    const lastId = async () => {
      const { data } = await axios.get(
        "https://xtendid.herokuapp.com/api/so-get-lastid"
      );

      setLastId(data.data.last_id);
    };

    lastId();
  }, []);

  useEffect(() => {
    const listCustomer = async () => {
      const { data } = await axios.get(
        "https://xtendid.herokuapp.com/api/customers",
        {}
      );
      setCustomers(data.data);
    };

    listCustomer();
  }, []);

  useEffect(() => {
    const listItem = async () => {
      const { data } = await axios.get(
        `https://xtendid.herokuapp.com/api/item-so-get/${lastId + 1}`
      );

      setItems(data.data);
      setCalculate(data.param);
    };

    if (lastId) {
      listItem();
    }
  }, [lastId]);

  const handleOnSave = async () => {
    setisLoadingCreateSO(true);
    await axios.post(
      "https://xtendid.herokuapp.com/api/so-store",
      {},
      {
        params: {
          so_id: `SO-00${lastId + 1}`,
          customer_id: customerId.id,
          expiration_date: expirationDate,
          // description: Instalasi CCTV Asus RC MDN,
          due_date: paymentTerm,
          total_price_with_tax: calculate.total_price_with_tax,
          total_tax: calculate.total_tax,
          total_price: calculate.total_price,
          // created_by: admin,
          // payment_status: Not Paid Yet,
          // status: Sales Order,
          // customer: customerId.customer_name,
        },
      }
    );

    setisLoadingCreateSO(false);
    alert("Create SO Successful");
  };

  const renderedItem = items.map((item) => {
    return (
      <Tr>
        <Td>{item.item_name}</Td>
        <Td>{item.description ? item.description : "No Item Description"}</Td>
        <Td isNumeric>{item.qty}</Td>
        <Td isNumeric pr={28}>
          {item.item_price}
        </Td>
        <Td>{item.item_tax_rate ? item.item_tax_rate + "%" : "-"}</Td>
        <Td>{item.total}</Td>
        <Td>
          <BsTrash
            onClick={async () => {
              const confirmation = window.confirm(
                "Are you sure to remove this item ?"
              );

              if (confirmation) {
                await axios.delete(
                  `https://xtendid.herokuapp.com/api/item-so-delete/${item.id}`
                );

                const url = `https://xtendid.herokuapp.com/api/item-so-get/${
                  lastId + 1
                }`;
                const { data: listData } = await axios.get(url, {});
                window.location.reload();
                setItems(listData.data);
                window.location.reload();
              }
            }}
          />
        </Td>
      </Tr>
    );
  });

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
                  <BreadcrumbLink href="#">Sales</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">New Sales Orders</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>

            <Box>
              <Stack direction="row" spacing={2}>
                {/* <MenuIcon />
                <IconButton
                  size="sm"
                  aria-label="print"
                  icon={<IoPrintSharp />}
                  fontSize="md"
                /> */}
                {/* Menu Icon */}
                {/* <Button leftIcon={<RiBillLine />} size="sm" boxShadow="sm">
                  Create Bill
                </Button>
                <Button
                  leftIcon={<AiOutlineCheckCircle />}
                  size="sm"
                  boxShadow="sm"
                >
                  Confirm Order
                </Button> */}
                <Button
                  size="sm"
                  colorScheme="teal"
                  boxShadow="sm"
                  onClick={handleOnSave}
                  isLoading={isLoadingCreateSO}
                >
                  Save
                </Button>
                <ModalDetailDelivery />
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
              Sales Order
            </Heading>
            <Heading size="xl" fontWeight="semibold" pl={3} pb={2}>
              SO-00{lastId + 1}
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
                          Customer
                        </Text>
                      </FormLabel>
                      <Select
                        size="sm"
                        bgColor="gray.200"
                        value={customer}
                        onChange={(evt) => {
                          axios
                            .get(
                              `https://xtendid.herokuapp.com/api/customer-find/${evt.target.value}`
                            )
                            .then((response) => {
                              setCustomerId(response.data.data);
                            });

                          setCustomer(evt.target.value);
                        }}
                      >
                        <option value="">Select Customer</option>
                        {customers?.map((customer) => {
                          return (
                            <option value={customer.id}>
                              {customer.customer_name}
                            </option>
                          );
                        })}
                        {/* const renderedCustomer = customers.map((customer) => {
                          return (
                            <option
                              value={customer.customer_id}
                              onChange={(evt) =>{
                                axios
                                  .get(
                                    `https://xtendid.herokuapp.com/api/customer-find/${evt.target.value}`
                                  )
                                  .then((response) => {
                                    setCustomers(response.data.data);
                                  })
                                  setCustomersId(evt.target.value)
                              }}
                            >
                              {customer.customer_name}
                            </option>
                          );
                        }); */}
                      </Select>
                    </FormControl>

                    <FormControl>
                      <FormLabel>
                        <Text fontSize="sm" pt={2}>
                          Expiration Date
                        </Text>
                      </FormLabel>
                      <Input
                        size="sm"
                        bgColor="gray.200"
                        type="date"
                        value={expirationDate}
                        onChange={(evt) => setExpirationDate(evt.target.value)}
                      />
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
                          Payment Term
                        </Text>
                      </FormLabel>
                      <Input
                        size="sm"
                        bgColor="gray.200"
                        type="date"
                        value={paymentTerm}
                        onChange={(evt) => setPaymentTerm(evt.target.value)}
                      />
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
                    {renderedItem}

                    <Tr>
                      <Td>
                        <AddSalesItem
                          salesId={lastId + 1}
                          setListItemOrder={setItems}
                          setTotalItemOrder={setCalculate}
                        />
                      </Td>

                      <Td></Td>
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
                {/* <FormControl>
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
                </FormControl> */}
              </Box>
              <Spacer />
              <VStack w="40%" spacing={12}>
                <Box>
                  <Table variant="unstyled" size="sm">
                    <Tbody>
                      <Tr>
                        <Th fontSize="md">Untaxed Amount: </Th>
                        <Td fontSize="md">Rp. {calculate.total_price}</Td>
                      </Tr>
                      <Tr>
                        <Th fontSize="md">Taxes:</Th>
                        <Td fontSize="md"> Rp. {calculate.total_tax}</Td>
                      </Tr>
                      <Divider pt={2} />
                      <Tr>
                        <Td fontSize="lg">Total:</Td>
                        <Th fontSize="lg">
                          Rp. {calculate.total_price_with_tax}
                        </Th>
                      </Tr>
                    </Tbody>
                  </Table>
                </Box>
                {/* <Box>
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
                </Box> */}
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

export default SalesOrder;
