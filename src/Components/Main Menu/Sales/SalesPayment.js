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
  Badge,
} from "@chakra-ui/react";

import TopBar from "../../Navigation/TopBar";
import AddSalesItem from "./AddSalesItem";

import { CheckCircleIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IoDocumentOutline, IoHome } from "react-icons/io5";
import { BsTrash } from "react-icons/bs";
import { FaRegMoneyBillAlt, FaTruck } from "react-icons/fa";

import { useParams, useHistory } from "react-router-dom";

import axios from "axios";
import { BiCheckCircle } from "react-icons/bi";

function SalesInvoice() {
  const [isEdit, setIsEdit] = useState(false);
  const history = useHistory();

  const [customers, setCustomers] = useState([]);
  const [items, setItems] = useState([]);
  const [calculate, setCalculate] = useState({});
  const [customerId, setCustomerId] = useState({});
  const [customer, setCustomer] = useState("");
  const [invoiceLastId, setInvoiceLastId] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taxes, setTaxes] = useState("");
  const [unTaxes, setUnTaxes] = useState("");
  const [sourceDocument, setSourceDocument] = useState("");
  const [total, setTotal] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState(null);
  const [credit, setCredit] = useState("");
  const [description, setDescription] = useState("");

  console.log(sourceDocument);
  const [isLoadingCreateINV, setIsLoadingCreateINV] = useState(false);

  const params = useParams();
  const orderIdSaved = params.id;

  useEffect(() => {
    const invoiceLastId = async () => {
      const { data } = await axios.get(
        "https://xtendid.herokuapp.com/api/invoice-get-lastid"
      );
      setInvoiceLastId(data.data.last_id);
    };
    invoiceLastId();
  }, []);

  useEffect(() => {
    const invoiceInitiate = async () => {
      const { data } = await axios.get(
        `https://xtendid.herokuapp.com/api/invoice-initiate/${orderIdSaved}`
      );
      setCustomerId(data.data.customer_id);
      setItems(data.data.item);
      setTaxes(data.data.taxes);
      setUnTaxes(data.data.untaxed_amount);
      setTotal(data.data.total);
      setCustomer(data.data.customer);
      setAccounts(data.data.account);
      setInvoiceDate(data.data.invoice_date.split("T")[0]);
      setCredit(data.data.credit);
    };
    invoiceInitiate();
  }, [orderIdSaved]);

  console.log(account);

  const createInvoice = async () => {
    setIsLoadingCreateINV(true);
    const confirmation = window.confirm("Are you sure to create invoice?");
    if (confirmation) {
      try {
        await axios.post(
          "https://xtendid.herokuapp.com/api/invoice-store",
          {},
          {
            params: {
              invoice_id: `INV-00${invoiceLastId + 1}`,
              source_document: orderIdSaved,
              account: account,
              paid_amount: amount,
              total_tax: taxes,
              total_untaxed: unTaxes,
              due_date: dueDate,
              credit: credit,
              description: description,
            },
          }
        );
        alert("Create Invoice Success");
        setIsLoadingCreateINV(false);
      } catch (err) {
        alert("Create Invoice Failed");
        setIsLoadingCreateINV(false);
      }
    } else {
      setIsLoadingCreateINV(false);
    }
  };

  const renderedItem = items.map((item) => {
    return (
      <Tr>
        <Td>{item.item_name}</Td>
        <Td isNumeric>{item.qty}</Td>
        <Td pl={36}>{item.price}</Td>

        <Td>{item.taxes ? item.taxes + "%" : "-"}</Td>
        <Td isNumeric>{item.total_without_tax}</Td>
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
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Invoice</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>

            <Box>
              <Stack direction="row" spacing={2}>
                <Button
                  leftIcon={<BiCheckCircle />}
                  size="sm"
                  boxShadow="sm"
                  colorScheme="teal"
                  onClick={createInvoice}
                  isLoading={isLoadingCreateINV}
                >
                  Create invoice
                </Button>

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
              Customer Invoice
            </Heading>
            <Heading size="xl" fontWeight="semibold" pl={3} pb={2}>
              INV/2021/00{invoiceLastId + 1}
              {/* {deliveryStatus === "Stock Out Created" ? (
                <Badge ml="1" fontSize="0.7em" colorScheme="green">
                  Delivered
                </Badge>
              ) : (
                <Badge ml="1" fontSize="0.7em" colorScheme="red">
                  Not Delivered
                </Badge>
              )} */}
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
                      <Input
                        size="sm"
                        bgColor="gray.200"
                        value={customer.name}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>
                        <Text fontSize="sm" pt={2}>
                          Invoice Date
                        </Text>
                      </FormLabel>
                      <Input
                        size="sm"
                        bgColor="gray.200"
                        type="date"
                        value={invoiceDate}
                        pointerEvents="none"
                      />
                    </FormControl>
                  </HStack>
                  <HStack>
                    <FormControl pr={10}>
                      <FormLabel>
                        <Text fontSize="sm" pt={2}>
                          Address
                        </Text>
                      </FormLabel>
                      <Input
                        size="sm"
                        bgColor="gray.200"
                        value={customer.address}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>
                        <Text fontSize="sm" pt={2}>
                          Due Date
                        </Text>
                      </FormLabel>
                      <Input
                        size="sm"
                        bgColor="gray.200"
                        type="date"
                        value={dueDate}
                        onChange={(evt) => setDueDate(evt.target.value)}
                      />
                    </FormControl>
                  </HStack>
                </Stack>

                <Table size="sm" mt={10} variant="simple">
                  <Thead bgColor="gray.200">
                    <Tr>
                      <Th>Item</Th>
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
              <Box w="50%">
                <VStack>
                  <FormControl pr={10}>
                    <FormLabel>
                      <Text fontSize="sm" pt={2}>
                        Select Recipient Account
                      </Text>
                    </FormLabel>
                    <Select
                      size="sm"
                      bgColor="gray.200"
                      value={account}
                      onChange={(evt) => setAccount(evt.target.value)}
                    >
                      <option>Select Status</option>
                      {accounts.map((account) => {
                        return (
                          <option value={account.id}>{account.name}</option>
                        );
                      })}
                    </Select>
                  </FormControl>

                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm" pt={2}>
                        Description
                      </Text>
                    </FormLabel>
                    <Textarea
                      bgColor="gray.200"
                      value={description}
                      onChange={(evt) => setDescription(evt.target.value)}
                    />
                  </FormControl>
                </VStack>
              </Box>
              <Spacer />
              <VStack w="40%" spacing={12}>
                <Box>
                  <Table variant="unstyled" size="sm">
                    <Tbody>
                      <Tr>
                        <Th fontSize="md">Untaxed Amount: </Th>
                        <Td fontSize="md">Rp. {unTaxes}</Td>
                      </Tr>
                      <Tr>
                        <Th fontSize="md">Taxes:</Th>
                        <Td fontSize="md"> Rp. {taxes}</Td>
                      </Tr>
                      <Divider pt={2} />
                      <Tr>
                        <Td fontSize="lg">Total:</Td>
                        <Th fontSize="lg">Rp. {total}</Th>
                      </Tr>
                    </Tbody>
                  </Table>

                  <Table variant="unstyled" size="sm" mt={10}>
                    <Tbody>
                      <Tr>
                        <Th fontSize="md">Amount: </Th>
                        <Td fontSize="md">
                          <Input
                            size="sm"
                            bgColor="gray.200"
                            value={amount}
                            type="number"
                            onChange={(evt) => {
                              setAmount(evt.target.value);
                            }}
                          />
                        </Td>
                      </Tr>
                      <Tr>
                        <Th fontSize="md">Credit:</Th>
                        <Td fontSize="md">
                          Rp. {total >= amount ? total - amount : "-"}{" "}
                        </Td>
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

export default SalesInvoice;
