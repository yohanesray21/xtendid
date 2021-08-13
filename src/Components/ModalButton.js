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
<<<<<<< HEAD
=======
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";
import axios from "axios";
<<<<<<< HEAD
import { Link } from "react-router-dom";

const formatNumber = (data) => {
  const dotRemoved = data.split(".").join("");

  return "Rp " + Intl.NumberFormat("id-Id").format(dotRemoved);
};

function ModalButton({ buttonText, setListItem }) {
=======

function ModalButton() {
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [colorSelect, setColorSelect] = useState("black");
  const [id, setId] = useState("");
  const [code, setCode] = useState("");
<<<<<<< HEAD
  const [cost, setCost] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Service");
=======
  const [cost, setCost] = useState("0");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
  const [openingStock, setOpeningStock] = useState(null);
  const [baseUnit, setBaseUnit] = useState("");
  const [status, setStatus] = useState("");
  const [items, setItems] = useState([]);
  const [getId, setGetId] = useState(null);

<<<<<<< HEAD
  const [isLoadingAddItem, setIsLoadingAddItem] = useState(false);

=======
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
  useEffect(() => {
    axios
      .get("https://xtendid.herokuapp.com/api/item-get-lastid")
      .then((response) => {
        setGetId(response.data.data.last_id);
      });
  }, []);

  const addItem = async () => {
<<<<<<< HEAD
    const formattedCostToNumber = Number(
      cost.split("Rp ").join("").split(".").join("")
    );

=======
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
    const { data } = await axios.post(
      "https://xtendid.herokuapp.com/api/item-store",
      {},
      {
        params: {
          id: id,
<<<<<<< HEAD
          code: `ITEM-${getId + 1}`,
          cost: formattedCostToNumber,
=======
          code: code,
          cost: cost,
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
          name: name,
          category: category,
          openingStock: openingStock,
          baseUnit: baseUnit,
          status: status,
        },
      }
    );
<<<<<<< HEAD

    const url = "https://xtendid.herokuapp.com/api/item-get";
    const { data: listData } = await axios.get(url, {});
    setListItem(listData.data);

    axios
      .get("https://xtendid.herokuapp.com/api/item-get-lastid")
      .then((response) => {
        setGetId(response.data.data.last_id);
      });

    onClose();
    // setItems(data);
    // console.log(data);
  };

  const handleSubmitItem = async (evt) => {
    evt.preventDefault();
    setIsLoadingAddItem(true);

    try {
      await addItem();
    } catch (err) {
    } finally {
      setIsLoadingAddItem(false);
    }
=======
    setItems(data);
    console.log(data);
  };

  const handleSubmitItem = () => {
    console.log("Hello");
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
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
<<<<<<< HEAD
        {buttonText ? buttonText : "Create New Ttem"}
=======
        Create A New Item
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
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
<<<<<<< HEAD
          <form onSubmit={handleSubmitItem}>
            <ModalBody pb={4}>
              <Stack p={2}>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm" pt={2}>
                      Item Code
                    </Text>
=======
          <ModalBody pb={4}>
            <forms onSubmit={handleSubmitItem}>
              <Stack p={2}>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm" pt={2}></Text>
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
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
<<<<<<< HEAD
                    isRequired
=======
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
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
<<<<<<< HEAD
                    isRequired
                  >
                    <option value="Service">Service</option>
                    <option value="Product">Product</option>
=======
                  >
                    <option value="option1">Service</option>
                    <option value="option2">Product</option>
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
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
<<<<<<< HEAD
                      <option value="Pcs">Pcs</option>
                      <option value="Pack">Pack</option>
                      <option value="Box">Box</option>
=======
                      <option value="option1">Pcs</option>
                      <option value="option1">Pack</option>
                      <option value="option1">Box</option>
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Cost</Text>
                    </FormLabel>
<<<<<<< HEAD
                    <Input
                      size="sm"
                      bgColor="gray.200"
                      type="text"
                      value={cost}
                      onBlur={() => {
                        const formatted = formatNumber(cost);
                        setCost(formatted);
                      }}
                      onFocus={() => {
                        const removedRp = cost.split("Rp ").join("");
                        setCost(removedRp);
                      }}
                      onChange={(evt) => {
                        setCost(evt.target.value);
                      }}
                    />
=======
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
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
                  </FormControl>
                </Flex>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Status</Text>
                  </FormLabel>
                  <Select
<<<<<<< HEAD
                    isRequired
=======
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
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

<<<<<<< HEAD
                      setStatus(evt.target.value);
                    }}
                    value={status}
                  >
                    <option value="" style={{ color: "black" }}>
=======
                      if (evt.target.value === "option") {
                        setColorSelect("black");
                      }
                    }}
                  >
                    <option value="option" style={{ color: "black" }}>
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
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
<<<<<<< HEAD
            </ModalBody>
            <ModalFooter>
              <Flex
                px={2}
                w="full"
                justifyContent="space-between"
                alignItems="center"
              >
                <Link to="/stock/item/new">
                  <Button size="sm" mr={3} leftIcon={<BiEdit />}>
                    Edit in Full Page
                  </Button>
                </Link>
                <Box>
                  <Button
                    colorScheme="teal"
                    type="submit"
                    isLoading={isLoadingAddItem}
                  >
                    Save
                  </Button>
                </Box>
              </Flex>
            </ModalFooter>
          </form>
=======
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
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalButton;
