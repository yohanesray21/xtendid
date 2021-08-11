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
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";
import axios from "axios";

function ModalButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [colorSelect, setColorSelect] = useState("black");
  const [id, setId] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [openingStock, setOpeningStock] = useState(0);
  const [baseUnit, setBaseUnit] = useState("");
  const [status, setStatus] = useState("");
  const [items, setItems] = useState([]);
  const [getId, setGetId] = useState(null);

  useEffect(() => {
    axios
      .get("http://xtendid.herokuapp.com/api/item-get-lastid")
      .then((response) => {
        setGetId(response.data.data.last_id);
      });
  }, []);

  const addItem = async () => {
    const { data } = await axios.post(
      "http://xtendid.herokuapp.com/api/item-store",
      {},
      {
        params: {
          id: id,
          code: code,
          name: name,
          category: category,
          openingStock: openingStock,
          baseUnit: baseUnit,
          status: status,
        },
      }
    );
    setItems(data);
    console.log(data);
  };

  const handleSubmitItem = () => {
    console.log("Hello");
  };

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <>
      <Button size="sm" colorScheme="teal" onClick={onOpen}>
        Create A New Item
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
            <Center>Add New Item</Center>
          </ModalHeader>
          <ModalCloseButton />
          <Box px={5}>
            <hr />
          </Box>
          <ModalBody pb={4}>
            <forms onSubmit={handleSubmitItem}>
              <Stack p={2}>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm" pt={2}></Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    value={getId}
                    isRequired
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Item Name</Text>
                  </FormLabel>
                  <Input size="sm" bgColor="gray.200" />
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Product category</Text>
                  </FormLabel>
                  <Select size="sm" bgColor="gray.200">
                    <option value="option1">Service</option>
                    <option value="option2">Product</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Opening Stock</Text>
                  </FormLabel>
                  <Input size="sm" bgColor="gray.200" type="number" />
                </FormControl>
                <Flex alignItems="center">
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
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Cost</Text>
                    </FormLabel>
                    <Input size="sm" bgColor="gray.200" type="number" min="1" />
                  </FormControl>
                </Flex>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Status</Text>
                  </FormLabel>
                  <Select
                    size="sm"
                    bgColor="gray.200"
                    color={colorSelect}
                    onChange={(evt) => {
                      if (evt.target.value === "available") {
                        setColorSelect("green");
                      }
                      if (evt.target.value === "notAvailable") {
                        setColorSelect("red");
                      }

                      if (evt.target.value === "option") {
                        setColorSelect("black");
                      }
                    }}
                  >
                    <option value="option" style={{ color: "black" }}>
                      Select Status
                    </option>
                    <option value="available" style={{ color: "green" }}>
                      Available
                    </option>
                    <option value="notAvailable" style={{ color: "red" }}>
                      Not Available
                    </option>
                  </Select>
                </FormControl>
              </Stack>
            </forms>
          </ModalBody>

          <ModalFooter>
            <Flex
              px={2}
              w="full"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button size="sm" mr={3} leftIcon={<BiEdit />}>
                Edit in Full Page
              </Button>
              <Box>
                <Button colorScheme="teal">Save</Button>
              </Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalButton;
