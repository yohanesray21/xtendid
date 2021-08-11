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

function Customer() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const list = async () => {
      const { data } = await axios.get(
        "https://xtendid.herokuapp.com/api/customer-get",
        {}
      );
      setCustomers(data.data);
    };
    console.log(customers);
    list();
  }, []);

  const renderedCustomer = customers.map((customer) => {
    return (
      <Tbody key={customer.id}>
        <Tr>
          <Td>{customer.customer_name}</Td>
          <Td>{customer.email}</Td>
          <Td>{customer.phone}</Td>
          <Td> {customer.city} </Td>
          <Td> {customer.country} </Td>
          <Td> {customer.company_name} </Td>
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
                    Add Customer
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
