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
import ModalSupplier from "../ModalSupplier";
function Supplier() {
  const url = "https://xtendid.herokuapp.com/api/supplier-get";

  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const list = async () => {
      const { data } = await axios.get(url, {});
      setSuppliers(data.data);
    };

    list();
  }, []);

  const renderedSupplier = suppliers.map((supplier) => {
    return (
      <Tbody key={supplier.id}>
        <Tr>
          <Td>{supplier.supplier_name}</Td>
          <Td> {supplier.email} </Td>
          <Td> {supplier.phone} </Td>
          <Td> {supplier.city} </Td>
          <Td> {supplier.country} </Td>
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
                  <BreadcrumbLink href="#">Supplier</BreadcrumbLink>
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
                    <ModalSupplier
                      buttonText="Add Supplier"
                      setListSuppliers={setSuppliers}
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
                  placeholder="Supplier Name"
                />
                <Input
                  size="sm"
                  bgColor="gray.200"
                  placeholder="Supllier Status"
                />
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
                    <Th>Supplier Name</Th>
                    <Th>Email</Th>
                    <Th>Contact</Th>
                    <Th>City</Th>
                    <Th>Country</Th>
                  </Tr>
                </Thead>
                {renderedSupplier}
              </Table>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Supplier;
