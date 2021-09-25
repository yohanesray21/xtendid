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

function ModalCustomer({ buttonText, setListCustomers }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [id, setId] = useState("");
  const [category, setCategory] = useState("Individual");
  const [companyName, setcompanyName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [getCustomerId, setGetCustomerId] = useState(null);

  const [isLoadingCustomer, setIsLoadingCustomer] = useState(false);

  useEffect(() => {
    axios
      .get("https://xtendid.herokuapp.com/api/customer-get-lastid")
      .then((response) => {
        setGetCustomerId(response.data.data.last_id);
      });
  }, []);

  const addCustomer = async () => {
    const { data } = await axios.post(
      "https://xtendid.herokuapp.com/api/customer-store",
      {},
      {
        params: {
          id: id,
          customer_id: `CUS-00${getCustomerId + 1}`,
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
    const url = "https://xtendid.herokuapp.com/api/customers";
    const { data: listData } = await axios.get(url, {});
    setListCustomers(listData.data);

    axios
      .get("https://xtendid.herokuapp.com/api/customer-get-lastid")
      .then((response) => {
        setGetCustomerId(response.data.data.last_id);
      });

    alert("Add New Customer Successfull");

    onClose();
  };

  const handleSubmitCustomer = async (evt) => {
    evt.preventDefault();
    console.log("berhasil");
    setIsLoadingCustomer(true);

    try {
      await addCustomer();
    } catch (err) {
    } finally {
      setIsLoadingCustomer(false);
    }
  };

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  return (
    <>
      <Button size="sm" colorScheme="teal" onClick={onOpen}>
        {buttonText ? buttonText : "Add New Customer"}
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
            <Center>Add New Customer</Center>
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
                    value={`CUS-00${getCustomerId + 1}`}
                    type="text"
                    onChange={(evt) => {
                      setGetCustomerId(evt.target.value);
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
                {/* <Link to="/customer/detail">
                  <Button size="sm" mr={3} leftIcon={<BiEdit />}>
                    Edit in Full Page
                  </Button>
                </Link> */}
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

export default ModalCustomer;
