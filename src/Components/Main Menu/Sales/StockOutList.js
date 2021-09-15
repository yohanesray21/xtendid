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
  Center,
  VStack,
  Tbody,
  Td,
  DarkMode,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";

import TopBar from "../../Navigation/TopBar";
import { AddIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IoFilter, IoHome } from "react-icons/io5";
import axios from "axios";
import moment from "moment";

function SalesList() {
  const history = useHistory();

  const [stocksOut, setStocksOut] = useState([]);

  useEffect(() => {
    axios
      .get("https://xtendid.herokuapp.com/api/stock-out-get")
      .then((response) => {
        setStocksOut(response.data.data);
      });
  }, []);

  const renderStockOut = stocksOut.map((stock, index) => {
    return (
      <Tbody key={stock.id}>
        <Tr>
          <Td>{index + 1}</Td>
          <Td
            onClick={() => {
              history.push(
                `/sales/sales-order/${stock.source_document}/delivery/${stock.id}/validation`
              );
            }}
            cursor="pointer"
            fontWeight="bold"
          >
            {stock.s_out_id}
          </Td>
          <Td>SO-00{stock.source_document}</Td>
          <Td>{stock.schedule}</Td>
          <Td>{stock.deadline}</Td>
          <Td>Rp.{stock.delivery_address},-</Td>
          <Td color={stock.status === "Not Validated" ? "red" : "teal"}>
            {stock.status}
          </Td>
        </Tr>
      </Tbody>
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
                  <Link to="/">
                    <BreadcrumbLink as="span">
                      <Icon fontSize="2xl" as={IoHome} />
                    </BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <Link to="/sales">
                    <BreadcrumbLink as="span">Sales</BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="/stock-out/list">
                    <BreadcrumbLink as="span">Stock Out</BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink as="span">List</BreadcrumbLink>
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
                  <IconButton boxShadow="md" icon={<AddIcon />} />
                  <Link to="/sales/sales-order">
                    <Button colorScheme="teal" size="sm">
                      Add New Sales
                    </Button>
                  </Link>
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
                <Input size="sm" bgColor="gray.200" placeholder="Customer" />
                <Input size="sm" bgColor="gray.200" placeholder="Created By" />
                <Input size="sm" bgColor="gray.200" placeholder="Status" />
                {/* <Select
                  bgColor="gray.200"
                  color="gray.500"
                  placeholder="Select Category"
                  size="sm"
                >
                  <option value="option2">Service</option>
                  <option value="option3">Product</option>
                </Select> */}
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
                    <Th>Stock Out Code</Th>
                    <Th>Source Document</Th>
                    <Th>Schedule</Th>
                    <Th>Deadline</Th>
                    <Th>Address</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                {renderStockOut}
              </Table>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default SalesList;
