import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";
import { EditIcon } from "@chakra-ui/icons";

function ModalEditCustomer({ customer, updateIdCustomer }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [id, setId] = useState(updateIdCustomer);
  console.log(id);
  const [category, setCategory] = useState("Individual");
  const [companyName, setcompanyName] = useState(customer.company_name);
  const [customerName, setCustomerName] = useState(customer.customer_name);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);
  const [address, setAddress] = useState(customer.address);
  const [country, setCountry] = useState(customer.country);
  const [province, setProvince] = useState(customer.province);
  const [city, setCity] = useState(customer.city);
  const [zip, setZip] = useState(customer.zip_code);
  const [getCustomerId, setGetCustomerId] = useState(null);

  const [isLoadingCustomer, setIsLoadingCustomer] = useState(false);

  const updateCustomer = async () => {
    const { data } = await axios.put(
      `https://xtendid.herokuapp.com/api/customer-update/${id}`,
      {},
      {
        params: {
          id: id,
          customer_id: `CUS-00${id}`,
          category: category,
          company_name: companyName,
          customer_name: customerName,
          email: email,
          phone: phone,
          address: address,
          country: country,
          province: province,
          city: city,
          zip_code: zip,
        },
      }
    );

    onClose();
  };

  const handleSubmitCustomer = async (evt) => {
    evt.preventDefault();
    console.log("berhasil");
    setIsLoadingCustomer(true);

    try {
      await updateCustomer();
    } catch (err) {
    } finally {
      setIsLoadingCustomer(false);
      window.location.reload();
    }
  };

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  return (
    <>
      <Button size="sm" colorScheme="teal" onClick={onOpen}>
        <EditIcon />
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>Edit Customer</Center>
          </ModalHeader>
          <ModalCloseButton />
          <Box px={5}>
            <hr />
          </Box>
          <form onSubmit={handleSubmitCustomer}>
            <ModalBody pb={4}>
              <Stack p={2}>
                <RadioGroup defaultValue="company">
                  <Stack spacing={5} direction="row">
                    <Radio
                      colorScheme="green"
                      value="company"
                      onChange={(evt) => {
                        setCategory(evt.target.value);
                      }}
                    >
                      Company
                    </Radio>
                    <Radio
                      colorScheme="green"
                      value="individual"
                      onChange={(evt) => {
                        setCategory(evt.target.value);
                      }}
                    >
                      Individual
                    </Radio>
                  </Stack>
                </RadioGroup>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm" pt={2}>
                      Customer ID
                    </Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    value={`CUS-00${id}`}
                    type="text"
                    onChange={(evt) => {
                      setId(evt.target.value);
                    }}
                    isRequired
                    readOnly
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm" pt={2}>
                      Customer Name
                    </Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    value={customerName}
                    type="text"
                    onChange={(evt) => {
                      setCustomerName(evt.target.value);
                    }}
                    isRequired
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm" pt={2}>
                      Company Name
                    </Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    value={companyName}
                    type="text"
                    onChange={(evt) => {
                      setcompanyName(evt.target.value);
                    }}
                    isRequired
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Address</Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    value={address}
                    type="text"
                    onChange={(evt) => {
                      setAddress(evt.target.value);
                    }}
                    isRequired
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Email</Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    type="email"
                    value={email}
                    onChange={(evt) => {
                      setEmail(evt.target.value);
                    }}
                    isRequired
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Contact</Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    type="number"
                    value={phone}
                    onChange={(evt) => {
                      setPhone(evt.target.value);
                    }}
                    isRequired
                  />
                </FormControl>
                <Flex alignItems="center">
                  <FormControl pr={3} w="50%">
                    <FormLabel>
                      <Text fontSize="sm">City</Text>
                    </FormLabel>
                    <Input
                      size="sm"
                      bgColor="gray.200"
                      value={city}
                      onChange={(evt) => {
                        setCity(evt.target.value);
                      }}
                    />
                  </FormControl>
                  <FormControl w="50%">
                    <FormLabel>
                      <Text fontSize="sm">Province</Text>
                    </FormLabel>
                    <Input
                      size="sm"
                      bgColor="gray.200"
                      value={province}
                      onChange={(evt) => {
                        setProvince(evt.target.value);
                      }}
                    />
                  </FormControl>
                </Flex>
                <Flex alignItems="center">
                  <FormControl pr={3} w="40%">
                    <FormLabel>
                      <Text fontSize="sm">Zip</Text>
                    </FormLabel>
                    <Input
                      size="sm"
                      bgColor="gray.200"
                      type="number"
                      value={zip}
                      onChange={(evt) => {
                        setZip(evt.target.value);
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Country</Text>
                    </FormLabel>
                    <Input
                      size="sm"
                      bgColor="gray.200"
                      value={country}
                      onChange={(evt) => {
                        setCountry(evt.target.value);
                      }}
                    />
                  </FormControl>
                </Flex>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Flex
                px={2}
                w="full"
                justifyContent="space-between"
                alignItems="center"
              >
                <Link to="/customer/detail">
                  <Button size="sm" mr={3} leftIcon={<BiEdit />}>
                    Edit in Full Page
                  </Button>
                </Link>
                <Box>
                  <Button
                    colorScheme="teal"
                    type="submit"
                    isLoading={isLoadingCustomer}
                  >
                    Save
                  </Button>
                </Box>
              </Flex>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalEditCustomer;
