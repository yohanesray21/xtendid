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
  Heading,
  Checkbox,
  FormLabel,
  Textarea,
  Image,
} from "@chakra-ui/react";
import TopBar from "../Navigation/TopBar";
import {
  AddIcon,
  ArrowForwardIcon,
  ChevronRightIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { VscNewFile } from "react-icons/vsc";
import { IoFilter, IoHome, IoPrintSharp } from "react-icons/io5";
import ModalButton from "../ModalButton";
import MenuIcon from "../MenuIcon";
function SupplierDetail() {
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
                  <BreadcrumbLink href="#">Suppier</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Detail Supplier</BreadcrumbLink>
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
              New Supplier
            </Heading>
            <Box pb={2}>
              <hr />
            </Box>
            <Text fontSize="sm">General Information</Text>

            <Flex>
              <Box w="60%">
                <Stack p={2}>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm" pt={2}>
                        Supplier Name
                      </Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" isRequired />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Address</Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Email</Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" type="email" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Contact</Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" />
                  </FormControl>
                  <Flex>
                    <FormControl pr={3}>
                      <FormLabel>
                        <Text fontSize="sm">City</Text>
                      </FormLabel>
                      <Input size="sm" bgColor="gray.200" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>
                        <Text fontSize="sm">State</Text>
                      </FormLabel>
                      <Input size="sm" bgColor="gray.200" />
                    </FormControl>
                  </Flex>
                  <Flex>
                    <FormControl w="30%" pr={3}>
                      <FormLabel>
                        <Text fontSize="sm">Zip</Text>
                      </FormLabel>
                      <Input size="sm" bgColor="gray.200" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>
                        <Text fontSize="sm">Country</Text>
                      </FormLabel>
                      <Input size="sm" bgColor="gray.200" />
                    </FormControl>
                  </Flex>
                </Stack>
              </Box>
              <Box w="40%">
                <Stack p={2}>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm" pt={2}>
                        Supplier ID
                      </Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" isRequired />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Tax</Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" isRequired />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Description</Text>
                    </FormLabel>
                    <Textarea bgColor="gray.200" />
                  </FormControl>
                </Stack>
              </Box>
            </Flex>
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
              More Information
            </Text>

            <FormControl px={2}>
              <FormLabel>
                <Text fontSize="sm" pt={2}>
                  Website
                </Text>
              </FormLabel>
              <Input size="sm" bgColor="gray.200" isRequired />
            </FormControl>
            <Flex>
              <Box w="60%">
                <Stack p={2}>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Bank Account Number</Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Account Holder Name</Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">National Identity Number (NIK)</Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" />
                  </FormControl>
                </Stack>
              </Box>
              <Box w="40%">
                <Stack p={2}>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Bank</Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" isRequired />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Supplier Details</Text>
                    </FormLabel>
                    <Textarea bgColor="gray.200" />
                  </FormControl>
                </Stack>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default SupplierDetail;
