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
import AddSalesItem from "./AddSalesItem";

import { ChevronRightIcon, ViewIcon } from "@chakra-ui/icons";
import { IoDocumentOutline, IoHome } from "react-icons/io5";
import { BsTrash } from "react-icons/bs";
import { FaOpenid, FaRegMoneyBillAlt, FaTruck } from "react-icons/fa";

import { useParams, useHistory } from "react-router-dom";

import axios from "axios";
import { set } from "js-cookie";

function SalesOrderSaved() {
  const [isEdit, setIsEdit] = useState(false);
  const history = useHistory();

  const [customers, setCustomers] = useState([]);
  const [items, setItems] = useState([]);
  const [calculate, setCalculate] = useState({});
  const [customerId, setCustomerId] = useState({});
  const [customer, setCustomer] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState("");
  const [deliveryDocument, setDeliveryDocument] = useState("");
  const [isLoadingCreateSO, setIsLoadingCreateSO] = useState(false);

  const params = useParams();
  const orderIdSaved = params.id;

  useEffect(() => {
    const listItem = async () => {
      const { data } = await axios.get(
        `https://xtendid.herokuapp.com/api/item-so-get/${orderIdSaved}`
      );

      setItems(data.data);
      setCalculate(data.param);
    };

    listItem();
  }, [orderIdSaved]);

  useEffect(() => {
    const listSO = async () => {
      const { data } = await axios.get(
        "https://xtendid.herokuapp.com/api/so-orderby/id"
      );
      const orderFound = data.data.find((data) => {
        return data.id + "" === params.id;
      });

      setCustomer(orderFound.customer_id);
      setExpirationDate(orderFound.expiration_date.split(" ")[0]);
      setPaymentTerm(orderFound.due_date);
      setDeliveryStatus(orderFound.delivery_status);
      setDeliveryDocument(orderFound.delivery_document);
    };
    listSO();
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

  const handleOnSave = async () => {
    if (isEdit) {
      const confirm = window.confirm("Are you sure you saved the changes ?");
      if (confirm) {
        setIsEdit(false);
        setIsLoadingCreateSO(true);

        await axios.patch(
          `https://xtendid.herokuapp.com/api/so-change/${orderIdSaved}`,
          {},
          {
            params: {
              // so_id: `SO-00${orderIdSaved + 1}`,
              customer_id: customerId.id,
              expiration_date: expirationDate,
              due_date: paymentTerm,
              total_price_with_tax: calculate.total_price_with_tax,
              total_tax: calculate.total_tax,
              total_price: calculate.total_price,
            },
          }
        );
        alert("Edit SO Successful");
        setIsEdit(false);
      }
    } else {
      setIsLoadingCreateSO(true);

      await axios.patch(
        `https://xtendid.herokuapp.com/api/so-change/${orderIdSaved}`,
        {},
        {
          params: {
            // so_id: `SO-00${orderIdSaved + 1}`,
            customer_id: customerId.id,
            expiration_date: expirationDate,
            due_date: paymentTerm,
            total_price_with_tax: calculate.total_price_with_tax,
            total_tax: calculate.total_tax,
            total_price: calculate.total_price,
          },
        }
      );
      alert("Edit SO Successful");
      setIsEdit(false);
    }
    setIsLoadingCreateSO(false);
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
                if (isEdit) {
                  await axios.delete(
                    `https://xtendid.herokuapp.com/api/item-so-delete/${item.id}`
                  );

                  const url = `https://xtendid.herokuapp.com/api/item-so-get/${orderIdSaved}`;
                  const { data: listData } = await axios.get(url, {});
                  setItems(listData.data);
                  setCalculate(listData.param);
                } else {
                  alert("Item can not be deleted, please click edit");
                }
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
                  <BreadcrumbLink href="#">Sales Orders</BreadcrumbLink>
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
                */}
                {/* <Button
                  leftIcon={<AiOutlineCheckCircle />}
                  size="sm"
                  boxShadow="sm"
                >
                  Confirm Order
                </Button>  */}

                {deliveryStatus === "Not Delivered Yet" ? (
                  <>
                    <Button
                      size="sm"
                      boxShadow="sm"
                      colorScheme="blue"
                      onClick={() => {
                        setIsEdit((isEdit) => !isEdit);
                      }}
                    >
                      {isEdit ? "Cancel Edit" : "Edit"}
                    </Button>
                    <Button
                      leftIcon={<FaTruck />}
                      size="sm"
                      boxShadow="sm"
                      onClick={() => {
                        if (!isEdit) {
                          history.push(
                            `/sales/sales-order/${orderIdSaved}/delivery`
                          );
                        } else {
                          alert("Edit Sales Order is On, Please Save");
                        }
                      }}
                    >
                      Delivery
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="teal"
                      boxShadow="sm"
                      onClick={handleOnSave}
                      isLoading={isLoadingCreateSO}
                    >
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      leftIcon={<IoDocumentOutline />}
                      size="sm"
                      boxShadow="sm"
                      onClick={() => {
                        history.push(
                          `/sales/sales-order/${orderIdSaved}/delivery/${deliveryDocument}/validation`
                        );
                      }}
                    >
                      View Delivery
                    </Button>
                    <Button
                      leftIcon={<FaRegMoneyBillAlt />}
                      size="sm"
                      boxShadow="sm"
                      colorScheme="teal"
                    >
                      Create Bill
                    </Button>
                  </>
                )}

                {/* <ModalDetailDelivery /> */}
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
              SO-00{orderIdSaved}
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
                        pointerEvents={isEdit ? "fill" : "none"}
                      >
                        <option value="">Select Customer</option>
                        {customers?.map((customer) => {
                          return (
                            <option value={customer.id}>
                              {customer.customer_name}
                            </option>
                          );
                        })}
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
                        pointerEvents={isEdit ? "fill" : "none"}
                      />
                    </FormControl>
                  </HStack>
                  <HStack>
                    <FormControl pr={10}>
                      <FormLabel></FormLabel>
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
                        pointerEvents={isEdit ? "fill" : "none"}
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
                        {isEdit ? (
                          <AddSalesItem
                            salesId={orderIdSaved}
                            setListItemOrder={setItems}
                            setTotalItemOrder={setCalculate}
                          />
                        ) : (
                          " "
                        )}
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
              <Box w="40%"></Box>
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
              </VStack>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default SalesOrderSaved;
