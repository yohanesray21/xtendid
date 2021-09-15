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
  Textarea,
  HStack,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Badge,
} from "@chakra-ui/react";

import TopBar from "../../Navigation/TopBar";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoHome } from "react-icons/io5";

import { useParams, useHistory } from "react-router-dom";

import axios from "axios";
import { set } from "js-cookie";
import { BsCheckCircle } from "react-icons/bs";

function StockOut() {
  const history = useHistory();

  const [address, setAddress] = useState("");
  const [customer, setCustomer] = useState("");
  const [schedule, setSchedule] = useState("");
  const [deadline, setDeadline] = useState("");
  const [sourceDocument, setSourceDocument] = useState("");
  const [item, setItem] = useState({});
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState("");
  const [validationStatus, setValidationStatus] = useState("");

  const [isLoadingStockOut, setIsLoadingStockOut] = useState(false);

  const params = useParams();
  const stockOutId = params.stock_out_id;
  const SalesOrderId = params.id;

  console.log(item);

  useEffect(() => {
    const listStockOut = async () => {
      const { data } = await axios.get(
        "https://xtendid.herokuapp.com/api/stock-out-get"
      );

      const stockOutFound = data.data.find((stockOut) => {
        return stockOut.id + "" === stockOutId;
      });

      setItem(stockOutFound);
      setSchedule(stockOutFound.schedule);
      setDeadline(stockOutFound.deadline);
      setValidationStatus(stockOutFound.status);
    };
    listStockOut();
  }, []);

  useEffect(() => {
    const StockOutInitiateSaved = async () => {
      const { data } = await axios.get(
        `https://xtendid.herokuapp.com/api/stock-out-initiate/${SalesOrderId}`
      );

      setCustomer(data.data.customer.name);
      setAddress(data.data.customer.address);
      setSourceDocument(data.data.so.id);
      setItems(data.data.item_so);
    };
    StockOutInitiateSaved();
  }, [SalesOrderId]);

  const handleOnValidate = async () => {
    setIsLoadingStockOut(true);
    const confirmation = window.confirm(
      "Are you sure the Item sent is complete?"
    );

    if (confirmation) {
      await axios.get(
        `https://xtendid.herokuapp.com/api/stock-out-validate/${stockOutId}`
      );
    }

    setIsLoadingStockOut(false);
    alert("Sales Order Validated");
    window.location.reload();
    // history.push(`/sales/sales-order/${stockOutId}/validation`);
  };

  return (
    <>
      <TopBar />
      <Box bg="white" w="full" mt={4}>
        <Container maxW="container.xl" pt={2}>
          <Flex justifyContent="space-between" alignItem="center">
            <Box>
              <Breadcrumb
                fontWeight="medium"
                fontSize="xl"
                separator={<ChevronRightIcon color="gray.500" fontSize="3xl" />}
                alignItem="center"
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
                  <BreadcrumbLink href="#">
                    Sales Orders Delivery
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">OUT</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>

            <Box>
              <Stack direction="row" spacing={2}>
                {validationStatus === "Not Validated" ? (
                  <Button
                    size="sm"
                    boxShadow="sm"
                    colorScheme="blue"
                    leftIcon={<BsCheckCircle />}
                    onClick={handleOnValidate}
                    isLoading={isLoadingStockOut}
                  >
                    Validate
                  </Button>
                ) : (
                  " "
                )}
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
              Item Validation
            </Heading>
            <Heading size="xl" fontWeight="semibold" pl={3} pb={2}>
              XTEND/OUT/OUT-00{stockOutId}
              {validationStatus === "Validated" ? (
                <Badge ml="1" fontSize="0.7em" colorScheme="green">
                  Validated
                </Badge>
              ) : (
                <Badge ml="1" fontSize="0.7em" colorScheme="red">
                  Not Validated
                </Badge>
              )}
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
                        value={customer}
                        isReadOnly
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>
                        <Text fontSize="sm" pt={2}>
                          Schedule
                        </Text>
                      </FormLabel>
                      <Input
                        size="sm"
                        bgColor="gray.200"
                        type="date"
                        value={schedule}
                        onChange={(evt) => setSchedule(evt.target.value)}
                        required
                        pointerEvents="none"
                      />
                    </FormControl>
                  </HStack>
                  <HStack>
                    <FormControl pr={10}>
                      <FormLabel>
                        <Text fontSize="sm" pt={2}>
                          Delivery Address
                        </Text>
                      </FormLabel>
                      <Input
                        size="sm"
                        bgColor="gray.200"
                        value={address}
                        isReadOnly
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>
                        <Text fontSize="sm" pt={2}>
                          Deadline
                        </Text>
                      </FormLabel>
                      <Input
                        size="sm"
                        bgColor="gray.200"
                        type="date"
                        value={deadline}
                        onChange={(evt) => setDeadline(evt.target.value)}
                        Required
                        pointerEvents="none"
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
                          Source Document
                        </Text>
                      </FormLabel>
                      <Input
                        size="sm"
                        bgColor="gray.200"
                        value={`SO-00${sourceDocument}`}
                      />
                    </FormControl>
                  </HStack>
                </Stack>

                <Table size="sm" mt={10} variant="simple">
                  <Thead bgColor="gray.200">
                    <Tr>
                      <Th pl={100}>Item</Th>
                      <Th>Demand</Th>
                      <Th>Done</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {items?.map((item) => {
                      return (
                        <Tr>
                          <Td>{item.name}</Td>
                          <Td>{item.demand}</Td>
                          <Td>{item.demand}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
                <Box mt={10}>
                  <FormControl pr={3} w="30%">
                    <FormLabel>
                      <Text fontSize="md">Description</Text>
                    </FormLabel>
                    <Textarea
                      bgColor="gray.200"
                      value={description}
                      onChange={(evt) => setDescription(evt.target.value)}
                    />
                  </FormControl>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default StockOut;
