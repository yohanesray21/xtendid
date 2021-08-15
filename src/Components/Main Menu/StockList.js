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
import { Link } from "react-router-dom";

import TopBar from "../Navigation/TopBar";
import { AddIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IoFilter, IoHome } from "react-icons/io5";
import axios from "axios";
import ModalButton from "../ModalButton";
import { BsTrash } from "react-icons/bs";
import ModalEditItem from "../ModalEditItem";

function StockList() {
  const url = "https://xtendid.herokuapp.com/api/items";

  const [results, setResults] = useState([]);

  useEffect(() => {
    const list = async () => {
      const { data } = await axios.get(url, {});
      setResults(data.data);
      console.log(results);
    };

    list();
  }, []);

  const removeData = (id) => {
    const url = "https://xtendid.herokuapp.com/api/item-delete";

    axios.delete(`${url}/${id}`).then((response) => {
      const del = results.filter((result) => id !== result.id);
      setResults(del);
      console.log("response", response);
    });
  };

  // const updateData = (id) => {
  //   const url = "https://xtendid.herokuapp.com/api/item-update";

  //   axios.update(`${url}/${id}`).then((response) => {});
  // };

  const renderedResults = results.map((result, index) => {
    return (
      <Tbody key={result.id}>
        <Tr>
          <Td>{`${index + 1}`}</Td>
          <Td>{result.item_id}</Td>
          <Td>{result.name}</Td>
          <Td>{result.status}</Td>
          <Td> {result.category} </Td>
          <Td> {result.cost} </Td>
          <Td> {result.sell_price} </Td>
          <Td isNumeric> {result.stock} </Td>
          <Td>
            <Flex>
              <Button
                mr={2}
                colorScheme="red"
                size="sm"
                type="submit"
                onClick={() => {
                  removeData(result.id);
                }}
              >
                <BsTrash />
              </Button>
              <ModalEditItem updateIdItem={result.id} item={result} />
            </Flex>
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

                <BreadcrumbItem isCurrentPage>
                  <Link to="/stock">
                    <BreadcrumbLink as="span">Stock</BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink as="span">Item</BreadcrumbLink>
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
                  <ModalButton buttonText="Add Item" setListItem={setResults} />
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
                <Input size="sm" bgColor="gray.200" placeholder="Item Name" />
                <Input size="sm" bgColor="gray.200" placeholder="Item Code" />
                <Select
                  bgColor="gray.200"
                  color="gray.500"
                  placeholder="Select Category"
                  size="sm"
                >
                  <option value="option2">Service</option>
                  <option value="option3">Product</option>
                </Select>
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
                    <Th>Item Code</Th>
                    <Th>Item Name</Th>
                    <Th>Status</Th>
                    <Th>Product Category</Th>
                    <Th>Cost</Th>
                    <Th>Sales Price</Th>
                    <Th isNumeric>Qty</Th>
                  </Tr>
                </Thead>
                {renderedResults}
              </Table>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default StockList;
