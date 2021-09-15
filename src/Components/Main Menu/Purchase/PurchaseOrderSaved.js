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
  Input,
  Stack,
  Text,
  Heading,
  FormLabel,
  HStack,
  Select,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Spacer,
  VStack,
  Divider,
} from "@chakra-ui/react";
import TopBar from "../../Navigation/TopBar";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoHome } from "react-icons/io5";
import { BsTrash } from "react-icons/bs";
import { useHistory, useParams } from "react-router-dom";

// import ModalDetailDelivery from "./ModalDetailDelivery";
import AddPurchaseItem from "./AddPurchaseItem";

import axios from "axios";
import { AiOutlineCheckCircle } from "react-icons/ai";
function PurchaseOrder() {
  const [isEdit, setIsEdit] = useState(false);

  const [suppliers, setSuppliers] = useState([]);
  const [items, setItems] = useState([]);
  const [calculate, setCalculate] = useState({});
  const [supplierId, setSupplierId] = useState({});
  const [supplier, setSupplier] = useState("");
  const [receiptDate, setReceiptDate] = useState("");
  const [isLoadingCreatePO, setIsLoadingCreatePO] = useState(false);

  const history = useHistory();
  const params = useParams();
  const purchaseIdSaved = params.id;

  useEffect(() => {
    const listItem = async () => {
      const { data } = await axios.get(
        `https://xtendid.herokuapp.com/api/item-po-get/${purchaseIdSaved}`
      );
      setItems(data.data);
      setCalculate(data.param);
    };
    listItem();
  }, [purchaseIdSaved]);

  useEffect(() => {
    const listPO = async () => {
      const { data } = await axios.get(
        "https://xtendid.herokuapp.com/api/po-orderby/id"
      );

      const purchaseFound = data.data.find((data) => {
        return data.id + "" === params.id;
      });

      setSupplier(purchaseFound.supplier_id);
      setReceiptDate(purchaseFound.receipt_date.split(" ")[0]);
    };

    listPO();
  }, []);

  useEffect(() => {
    const listSupplier = async () => {
      const { data } = await axios.get(
        "https://xtendid.herokuapp.com/api/suppliers",
        {}
      );
      setSuppliers(data.data);
    };

    listSupplier();
  }, []);

  const handleOnSave = async () => {
    setIsLoadingCreatePO(true);
    await axios.patch(
      `https://xtendid.herokuapp.com/api/po-change/${purchaseIdSaved}`,
      {},
      {
        params: {
          supplier_id: supplierId.id,
          receipt_date: receiptDate,
          total_price_with_tax: calculate.total_price_with_tax,
          total_tax: calculate.total_tax,
          total_price: calculate.total_price,
        },
      }
    );

    setIsLoadingCreatePO(false);
    setIsEdit(false);
    alert("Edit PO Successful");
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
                  `https://xtendid.herokuapp.com/api/item-po-delete/${item.id}`
                );

                const url = `https://xtendid.herokuapp.com/api/item-po-get/${purchaseIdSaved}`;
                const { data: listData } = await axios.get(url, {});
                setItems(listData.data);
                setCalculate(listData.param);
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
                  <BreadcrumbLink href="#">Purchase</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Purchase Orders</BreadcrumbLink>
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
                  boxShadow="sm"
                  colorScheme="blue"
                  onClick={() => {
                    setIsEdit((isEdit) => !isEdit);
                  }}
                >
                  {isEdit ? "Cancel Edit" : "Edit"}
                </Button>
                <Button
                  leftIcon={<AiOutlineCheckCircle />}
                  size="sm"
                  boxShadow="sm"
                  onClick={() => {
                    history.push(
                      `/purchase/purchase-order/${purchaseIdSaved}/receive`
                    );
                  }}
                >
                  Receive Item
                </Button>
                <Button
                  size="sm"
                  colorScheme="teal"
                  boxShadow="sm"
                  onClick={handleOnSave}
                  isLoading={isLoadingCreatePO}
                >
                  Save
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
              Purchase Order
            </Heading>
            <Heading size="xl" fontWeight="semibold" pl={3} pb={2}>
              PO-00{purchaseIdSaved}
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
                          Supplier
                        </Text>
                      </FormLabel>
                      <Select
                        size="sm"
                        bgColor="gray.200"
                        value={supplier}
                        onChange={(evt) => {
                          axios
                            .get(
                              `https://xtendid.herokuapp.com/api/supplier-find/${evt.target.value}`
                            )
                            .then((response) => {
                              setSupplierId(response.data.data);
                            });

                          setSupplier(evt.target.value);
                        }}
                        pointerEvents={isEdit ? "fill" : "none"}
                      >
                        <option value="">Select Supllier</option>
                        {suppliers?.map((supplier) => {
                          return (
                            <option value={supplier.id}>
                              {supplier.supplier_name}
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
                          Receipt Date
                        </Text>
                      </FormLabel>
                      <Input
                        size="sm"
                        bgColor="gray.200"
                        type="date"
                        value={receiptDate}
                        onChange={(evt) => setReceiptDate(evt.target.value)}
                        pointerEvents={isEdit ? "fill" : "none"}
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
                          <AddPurchaseItem
                            purchaseId={purchaseIdSaved}
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

export default PurchaseOrder;
