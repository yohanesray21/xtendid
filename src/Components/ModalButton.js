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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
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
  const [cost, setCost] = useState("0");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [openingStock, setOpeningStock] = useState(null);
  const [baseUnit, setBaseUnit] = useState("");
  const [status, setStatus] = useState("");
  const [items, setItems] = useState([]);
  const [getId, setGetId] = useState(null);

  useEffect(() => {
    axios
      .get("https://xtendid.herokuapp.com/api/item-get-lastid")
      .then((response) => {
        setGetId(response.data.data.last_id);
      });
  }, []);

  const addItem = async () => {
    const { data } = await axios.post(
      "https://xtendid.herokuapp.com/api/item-store",
      {},
      {
        params: {
          id: id,
          code: code,
          cost: cost,
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

  // Currency
  // const value = (cost, prefix) => {
  //   var valueString = cost.replace(/[^, \d]/g, " ").toString(),
  //   split =
  // }

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
                    value={`ITEM-${getId + 1}`}
                    onChange={(evt) => setCode(evt.target.value)}
                    isRequired
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Item Name</Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    value={name}
                    onChange={(evt) => setName(evt.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Product category</Text>
                  </FormLabel>
                  <Select
                    size="sm"
                    bgColor="gray.200"
                    value={category}
                    onChange={(evt) => setCategory(evt.target.value)}
                  >
                    <option value="option1">Service</option>
                    <option value="option2">Product</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Opening Stock</Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    type="number"
                    value={openingStock}
                    onChange={(evt) => setOpeningStock(evt.target.value)}
                  />
                </FormControl>
                <Flex alignItems="center">
                  <FormControl pr={2} w="30%">
                    <FormLabel>
                      <Text fontSize="sm">Base Unit</Text>
                    </FormLabel>
                    <Select
                      size="sm"
                      bgColor="gray.200"
                      value={baseUnit}
                      onChange={(evt) => setBaseUnit(evt.target.value)}
                    >
                      <option value="option1">Pcs</option>
                      <option value="option1">Pack</option>
                      <option value="option1">Box</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Cost</Text>
                    </FormLabel>
                    {/* <Input
                      size="sm"
                      bgColor="gray.200"
                      type=""
                      min="1"
                      value={format(cost)}
                      onChange={(valueString) => setCost(parse(valueString))}
                    /> */}
                    {/* <NumberInput
                      onChange={(valueString) => setCost(parse(valueString))}
                      value={format(cost)}
                      max={50}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput> */}
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
