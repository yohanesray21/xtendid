import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  Select,
  Stack,
  Table,
  Text,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import TopBar from "../Navigation/TopBar";
import { AddIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IoFilter, IoHome } from "react-icons/io5";
import axios from "axios";
import ModalCustomer from "../ModalCustomer";
import ModalEditCustomer from "../ModalEditCustomer";
import { BsTrash } from "react-icons/bs";
import { useHistory } from "react-router";

function Customer() {
  const [customers, setCustomers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const list = async () => {
      try {
        const { data } = await axios.get(
          "https://xtendid.herokuapp.com/api/customers",
          {}
        );
        setCustomers(data.data);
      } catch (err) {
        if (err.response.data.message === "No Customer in database") {
          history.push("/customer");
        }
      }
    };

    list();
  }, [history]);

  const removeData = (id) => {
    const url = "https://xtendid.herokuapp.com/api/customer-delete";

    const confirmation = window.confirm("Are you sure to delete customer?");
    if (confirmation) {
      axios.delete(`${url}/${id}`).then((response) => {
        const del = customers.filter((customer) => id !== customer.id);
        setCustomers(del);
        console.log("response", response);
      });
    }
  };

  const renderedCustomer = customers.map((customer, index) => {
    return (
      <Tbody key={customer.id}>
        <Tr>
          <Td>{`${index + 1}`}</Td>
          <Td>{customer.customer_name}</Td>
          <Td>{customer.email}</Td>
          <Td>{customer.phone}</Td>
          <Td> {customer.city} </Td>
          <Td> {customer.country} </Td>
          <Td> {customer.company_name} </Td>
          <Td>
            <Flex>
              <Button
                mr={2}
                colorScheme="red"
                size="sm"
                type="submit"
                onClick={() => {
                  removeData(customer.id);
                }}
              >
                <BsTrash />
              </Button>
              <ModalEditCustomer
                updateIdCustomer={customer.id}
                customer={customer}
              />
            </Flex>
          </Td>
        </Tr>
      </Tbody>
    );
  });

  return (
    <div>
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
                  <BreadcrumbLink href="#">Customer</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>

            <Box>
              <Stack direction="row" spacing={5}>
                <Button
                  leftIcon={<IoFilter />}
                  variant="solid"
                  size="sm"
                  boxShadow="md"
                  p={4}
                >
                  Filters
                </Button>

                <ButtonGroup colorScheme="teal" size="sm" isAttached>
                  <IconButton
                    boxShadow="md"
                    aria-label="Add to friends"
                    icon={<AddIcon />}
                  />
                  <Button boxShadow="md" mr="px">
                    <ModalCustomer
                      buttonText="Add Customer"
                      setListCustomers={setCustomers}
                    />
                  </Button>
                </ButtonGroup>
              </Stack>
            </Box>
          </Flex>

          <Box
            boxShadow="lg"
            maxW="container.xl"
            mt={2}
            border="1px"
            borderColor="gray.200"
            borderRadius="sm"
          >
            <Flex justifyContent="space-between" justifyItems="center">
              <HStack spacing="10px" px={8}>
                <Input
                  size="sm"
                  bgColor="gray.200"
                  placeholder="Customer Name"
                />
                <Input size="sm" bgColor="gray.200" placeholder="Company" />
                <Input size="sm" bgColor="gray.200" placeholder="City" />
              </HStack>
              <Box px={8} py={6}>
                <HStack spacing="5px" alignItems="center">
                  <Text>Show&nbsp;: </Text>
                  <Select size="xs" bgColor="gray.200" placeholder="10">
                    <option value="option2">25</option>
                    <option value="option3">50</option>
                    <option value="option3">All</option>
                  </Select>
                </HStack>
              </Box>
            </Flex>
            <Box px={8}>
              <hr />
            </Box>
            <Box px={8} pb={8}>
              <Table size="md">
                <Thead>
                  <Tr>
                    <Th>No</Th>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Contact</Th>
                    <Th>City</Th>
                    <Th>Country</Th>
                    <Th>Company</Th>
                  </Tr>
                </Thead>
                {renderedCustomer}
              </Table>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Customer;
