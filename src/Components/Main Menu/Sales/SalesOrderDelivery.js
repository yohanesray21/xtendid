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
} from "@chakra-ui/react";

import TopBar from "../../Navigation/TopBar";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoHome } from "react-icons/io5";

import { useParams, useHistory } from "react-router-dom";

import axios from "axios";
import { BsCheck, BsCheckBox, BsCheckCircle } from "react-icons/bs";

function StockOut() {
  const history = useHistory();

  const [address, setAddress] = useState("");
  const [customer, setCustomer] = useState("");
  const [stockOutId, setStockOutId] = useState("");
  const [schedule, setSchedule] = useState("");
  const [deadline, setDeadline] = useState("");
  const [sourceDocument, setSourceDocument] = useState("");
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState("");

  const [isLoadingStockOut, setIsLoadingStockOut] = useState(false);

  const params = useParams();
  const stockOutIdSaved = params.id;

  useEffect(() => {
    const lastStockId = async () => {
      const { data } = await axios.get(
        "https://xtendid.herokuapp.com/api/stock-out-get-lastid"
      );
      setStockOutId(data.data.last_id);
    };
    lastStockId();
  }, []);

  useEffect(() => {
    const StockOutInitiate = async () => {
      const { data } = await axios.get(
        `https://xtendid.herokuapp.com/api/stock-out-initiate/${stockOutIdSaved}`
      );

      setCustomer(data.data.customer.name);
      setAddress(data.data.customer.address);
      setSourceDocument(data.data.so.id);
      setItems(data.data.item_so);
    };
    StockOutInitiate();
  }, [stockOutIdSaved]);

  const handleOnSave = async () => {
    setIsLoadingStockOut(true);
    try {
      const confirmation = window.confirm(
        "Are you sure to send this Sales Order?"
      );

      if (confirmation) {
        const confirm = window.confirm(
          "Are you sure to send this Sales Order? This process cannot be undone."
        );

        if (confirm) {
          await axios.post(
            "https://xtendid.herokuapp.com/api/stock-out-store",
            {},
            {
              params: {
                s_out_id: `OUT-00${stockOutId + 1}`,
                delivery_address: address,
                schedule: schedule,
                deadline: deadline,
                source_document: sourceDocument,
                description: description,
              },
            }
          );
          setIsLoadingStockOut(false);
          history.push(
            `/sales/sales-order/${stockOutIdSaved}/delivery/${
              stockOutId + 1
            }/validation`
          );
        }

        if (!confirm) {
          history.push(`/sales/sales-order/${stockOutIdSaved}/delivery/`);
          setIsLoadingStockOut(false);
        }
      } else {
        setIsLoadingStockOut(false);
      }
    } catch (err) {
      alert("The schedule and Deadline field is required.");
      history.push(`/sales/sales-order/${stockOutIdSaved}/delivery/`);
      setIsLoadingStockOut(false);
    }
  };

  // const handleOnSave = async () => {
  //   setIsLoadingCreateSO(true);

  //   await axios.patch(
  //     `https://xtendid.herokuapp.com/api/so-change/${stockOutIdSaved}`,
  //     {},
  //     {
  //       params: {
  //         // so_id: `SO-00${stockOutIdSaved + 1}`,
  //       },
  //     }
  //   );

  //   setIsLoadingCreateSO(false);
  //   alert("Edit SO Successful");
  // };

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
                <Button
                  size="sm"
                  boxShadow="sm"
                  colorScheme="teal"
                  onClick={handleOnSave}
                  isLoading={isLoadingStockOut}
                >
                  Save
                </Button>
                <Button
                  size="sm"
                  boxShadow="sm"
                  colorScheme="blue"
                  leftIcon={<BsCheckCircle />}
                  onClick={() => alert("Save the changes first")}
                >
                  Validation
                </Button>
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
              XTEND/OUT/OUT-00{stockOutId + 1}
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
