import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  Select,
  Stack,
  Text,
  Center,
  Heading,
  Checkbox,
  FormLabel,
  Textarea,
  Image,
} from "@chakra-ui/react";
import TopBar from "../Navigation/TopBar";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoHome, IoPrintSharp } from "react-icons/io5";
import MenuIcon from "../MenuIcon";

function StockNewItem() {
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
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Item</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">New Item</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>

            <Box>
              <Stack direction="row" spacing={2}>
                <MenuIcon />
                <IconButton
                  size="sm"
                  aria-label="print"
                  icon={<IoPrintSharp />}
                  fontSize="md"
                />
                {/* Menu Icon */}
                <Button size="sm" colorScheme="teal" boxShadow="sm">
                  Save
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
              New Item
            </Heading>
            <Box pb={2}>
              <hr />
            </Box>
            <Text fontSize="sm">General Information</Text>

            <Flex>
              <Box w="60%">
                <Stack p={2}>
                  <Checkbox colorScheme="teal" defaultIsChecked>
                    Flexible
                  </Checkbox>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm" pt={2}>
                        Item Code
                      </Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" isRequired />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Item Name</Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" />
                  </FormControl>
                  <Flex>
                    <FormControl pr={3}>
                      <FormLabel>
                        <Text fontSize="sm">Product category</Text>
                      </FormLabel>
                      <Select size="sm" bgColor="gray.200">
                        <option value="option1">Select Product</option>
                        <option value="option1">Service</option>
                        <option value="option2">Product</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>
                        <Text fontSize="sm">Supplier</Text>
                      </FormLabel>
                      <Select size="sm" bgColor="gray.200">
                        <option value="option2">Select Supplier</option>
                        <option value="option1">PT.Karya Maju</option>
                        <option value="option2">PT. Bersama</option>
                      </Select>
                    </FormControl>
                  </Flex>
                </Stack>
              </Box>
              <Box w="40%" h="20px">
                <Center>
                  <Box boxSize="3xs">
                    <Image
                      src="https://bit.ly/sage-adebayo"
                      alt="Segun Adebayo"
                    />
                  </Box>
                </Center>
              </Box>
            </Flex>
            <Stack px={2}>
              <Flex alignItems="center">
                <HStack w="60%">
                  <FormControl pr={3}>
                    <FormLabel>
                      <Text fontSize="sm">Opening Stock</Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" type="number" min="1" />
                  </FormControl>
                  <FormControl pr={3}>
                    <FormLabel>
                      <Text fontSize="sm">Minimum Stock</Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" type="number" min="1" />
                  </FormControl>
                </HStack>
                <FormControl w="40%">
                  <FormLabel>
                    <Text fontSize="sm">Tax</Text>
                  </FormLabel>
                  <Input size="sm" bgColor="gray.200" type="number" min="1" />
                </FormControl>
              </Flex>
              <Flex alignItems="center">
                <HStack w="60%">
                  <FormControl pr={2} w="30%">
                    <FormLabel>
                      <Text fontSize="sm">Base Unit</Text>
                    </FormLabel>
                    <Select size="sm" bgColor="gray.200">
                      <option value="option1">Pcs</option>
                      <option value="option1">Pack</option>
                      <option value="option1">Box</option>
                    </Select>
                  </FormControl>
                  <FormControl pr={3}>
                    <FormLabel>
                      <Text fontSize="sm">Cost</Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" type="number" min="1" />
                  </FormControl>
                  <FormControl w="20%">
                    <FormLabel>
                      <Text fontSize="sm">Percentage</Text>
                    </FormLabel>
                    <Input
                      size="sm"
                      bgColor="gray.200"
                      type="number"
                      min="1"
                      placeholder="%"
                    />
                  </FormControl>
                  <Text fontSize="xl" pr={2} pt={7}>
                    =
                  </Text>
                </HStack>
                <FormControl w="40%">
                  <FormLabel>
                    <Text fontSize="sm">Sales Price</Text>
                  </FormLabel>
                  <Input size="sm" bgColor="gray.200" type="number" min="1" />
                </FormControl>
              </Flex>
              <Flex alignItems="center">
                <HStack w="60%" pr={3}>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Status</Text>
                    </FormLabel>
                    <Select size="sm" bgColor="gray.200">
                      <option value="option">Select Status</option>
                      <option value="available" style={{ color: "green" }}>
                        Available
                      </option>
                      <option value="notAvailable" style={{ color: "red" }}>
                        Not Available
                      </option>
                    </Select>
                  </FormControl>
                </HStack>
                <FormControl w="40%">
                  <FormLabel>
                    <Text fontSize="sm">Sales Price</Text>
                  </FormLabel>
                  <Input size="sm" bgColor="gray.200" type="number" min="1" />
                </FormControl>
              </Flex>
            </Stack>
          </Box>
          <Box
            boxShadow="lg"
            maxW="container.xl"
            mb={8}
            border="1px"
            borderColor="gray.200"
            borderRadius="sm"
            px={8}
            pb={8}
          >
            <Text fontSize="sm" pt={5}>
              Description
            </Text>

            <Stack p={2}>
              <FormControl pr={3} w="60%">
                <FormLabel>
                  <Text fontSize="sm">Brand</Text>
                </FormLabel>
                <Select size="sm" bgColor="gray.200">
                  <option value="option1">Select Brand</option>
                  <option value="option1">Adidas</option>
                  <option value="option1">Nike</option>
                  <option value="option2">Puma</option>
                </Select>
              </FormControl>
              <FormControl pr={3}>
                <FormLabel>
                  <Text fontSize="sm">Brand</Text>
                </FormLabel>
                <Textarea bgColor="gray.200" />
              </FormControl>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default StockNewItem;
