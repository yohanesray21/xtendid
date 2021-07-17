import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Container,
  Flex,
  FormControl,
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
  Td,
  Th,
  Tbody,
  Tfoot,
  Center,
  VStack,
} from "@chakra-ui/react";
import TopBar from "../Navigation/TopBar";
import {
  AddIcon,
  ArrowForwardIcon,
  ChevronRightIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { VscNewFile } from "react-icons/vsc";
import { IoFilter, IoHome } from "react-icons/io5";
import ModalButton from "../ModalButton";

function StockItem() {
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
                  <BreadcrumbLink href="#">Stock</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Item</BreadcrumbLink>
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
                    Add Item
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
                    <Th>Item Code</Th>
                    <Th>Item Name</Th>
                    <Th>Status</Th>
                    <Th>Product Category</Th>
                    <Th>Cost</Th>
                    <Th>Sales Price</Th>
                    <Th isNumeric>Qty</Th>
                  </Tr>
                </Thead>
              </Table>
              <Center my={150}>
                <VStack p={2}>
                  <Icon fontSize="80" as={VscNewFile} />
                  <Text>No Item Found</Text>
                  {/* Button */}
                  <ModalButton />
                </VStack>
              </Center>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default StockItem;
