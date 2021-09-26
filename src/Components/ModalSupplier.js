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
  Stack,
  Text,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";

function ModalSupplier({ buttonText, setListSuppliers }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [companyName, setcompanyName] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [getSupplierId, setGetSupplierId] = useState(null);

  const [isLoadingAddSupplier, setIsLoadingAddSupplier] = useState(false);

  useEffect(() => {
    axios
      .get("https://xtendid.herokuapp.com/api/supplier-get-lastid")
      .then((response) => {
        setGetSupplierId(response.data.data.last_id);
      });
  }, []);

  const addSupplier = async () => {
    await axios.post(
      "https://xtendid.herokuapp.com/api/supplier-store",
      {},
      {
        params: {
          supplier_id: `SUP-00${getSupplierId + 1}`,
          company_name: companyName,
          supplier_name: supplierName,
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

    const url = "https://xtendid.herokuapp.com/api/suppliers";
    const { data: listData } = await axios.get(url, {});
    console.log(listData);
    setListSuppliers(listData.data);

    axios
      .get("https://xtendid.herokuapp.com/api/supplier-get-lastid")
      .then((response) => {
        setGetSupplierId(response.data.data.last_id);
      });

    onClose();
  };

  const handleSubmitSupplier = async (evt) => {
    evt.preventDefault();
    console.log("berhasil");
    setIsLoadingAddSupplier(true);

    try {
      await addSupplier();
    } catch (err) {
    } finally {
      setIsLoadingAddSupplier(false);
    }
  };

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  return (
    <>
      <Button size="sm" colorScheme="teal" onClick={onOpen}>
        {buttonText ? buttonText : "Create New Item"}
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
            <Center>Add New Supplier</Center>
          </ModalHeader>
          <ModalCloseButton />
          <Box px={5}>
            <hr />
          </Box>
          <form onSubmit={handleSubmitSupplier}>
            <ModalBody pb={4}>
              <Stack p={2}>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm" pt={2}>
                      Supplier ID
                    </Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    value={`SUP-00${getSupplierId + 1}`}
                    type="text"
                    onChange={(evt) => {
                      setSupplierName(evt.target.value);
                    }}
                    isRequired
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm" pt={2}>
                      Supplier Name
                    </Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    value={supplierName}
                    type="text"
                    onChange={(evt) => {
                      setSupplierName(evt.target.value);
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
                {/* <Link to="/supplier/detail">
                  <Button size="sm" mr={3} leftIcon={<BiEdit />}>
                    Edit in Full Page
                  </Button>
                </Link> */}
                <Divider color="white" />
                <Box>
                  <Button
                    colorScheme="teal"
                    type="submit"
                    isLoading={isLoadingAddSupplier}
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

export default ModalSupplier;
