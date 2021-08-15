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
} from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";
import { EditIcon } from "@chakra-ui/icons";

function ModalSupplier({ supplier, updateIdSupplier }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(supplier);

  const [id, setId] = useState(updateIdSupplier);
  const [companyName, setCompanyName] = useState(supplier.company_name);
  const [supplierName, setSupplierName] = useState(supplier.supplier_name);
  const [email, setEmail] = useState(supplier.email);
  const [phone, setPhone] = useState(supplier.phone);
  const [address, setAddress] = useState(supplier.address);
  const [country, setCountry] = useState(supplier.country);
  const [province, setProvince] = useState(supplier.province);
  const [city, setCity] = useState(supplier.city);
  const [zip, setZip] = useState(supplier.zip_code);
  const [getSupplierId, setGetSupplierId] = useState(null);

  const [isLoadingAddSuppplier, setIsLoadingAddSupplier] = useState(false);

  const updateSupplier = async () => {
    const { data } = await axios.put(
      `https://xtendid.herokuapp.com/api/supplier-update/${id}`,
      {},
      {
        params: {
          id: id,
          supplier_id: `SUP-00${id}`,
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

    onClose();
  };

  const handleSubmitSupplier = async (evt) => {
    evt.preventDefault();
    console.log("berhasil");
    setIsLoadingAddSupplier(true);

    try {
      await updateSupplier();
    } catch (err) {
    } finally {
      setIsLoadingAddSupplier(false);
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
                    value={`SUP-00${id}`}
                    type="text"
                    onChange={(evt) => {
                      setGetSupplierId(evt.target.value);
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
                      setCompanyName(evt.target.value);
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
                <Link to="/supplier/detail">
                  <Button size="sm" mr={3} leftIcon={<BiEdit />}>
                    Edit in Full Page
                  </Button>
                </Link>
                <Box>
                  <Button
                    colorScheme="teal"
                    type="submit"
                    isLoading={isLoadingAddSuppplier}
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
