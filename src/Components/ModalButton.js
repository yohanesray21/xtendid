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

const formatNumber = (data) => {
  const dotRemoved = data.split(".").join("");

  return "Rp " + Intl.NumberFormat("id-Id").format(dotRemoved);
};

function ModalButton({ buttonText, setListItem }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [colorSelect, setColorSelect] = useState("black");
  const [id, setId] = useState("");
  const [code, setCode] = useState("");
  const [cost, setCost] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Service");
  const [openingStock, setOpeningStock] = useState(null);
  const [baseUnit, setBaseUnit] = useState("");
  const [status, setStatus] = useState("");
  const [items, setItems] = useState([]);
  const [getId, setGetId] = useState(null);

  const [isLoadingAddItem, setIsLoadingAddItem] = useState(false);

  useEffect(() => {
    axios
      .get("https://xtendid.herokuapp.com/api/item-get-lastid")
      .then((response) => {
        setGetId(response.data.data.last_id);
      });
  }, []);

  const addItem = async () => {
    const formattedCostToNumber = Number(
      cost.split("Rp ").join("").split(".").join("")
    );

    const { data } = await axios.post(
      "https://xtendid.herokuapp.com/api/item-store",
      {},
      {
        params: {
          id: id,
          code: `ITEM-${getId + 1}`,
          cost: formattedCostToNumber,
          name: name,
          category: category,
          openingStock: openingStock,
          baseUnit: baseUnit,
          status: status,
        },
      }
    );

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
        {buttonText ? buttonText : "Create New Ttem"}
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
          <form onSubmit={handleSubmitItem}>
            <ModalBody pb={4}>
              <Stack p={2}>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm" pt={2}>
                      Item Code
                    </Text>
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
                    isRequired
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
                    isRequired
                  >
                    <option value="Service">Service</option>
                    <option value="Product">Product</option>
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
                      <option value="Pcs">Pcs</option>
                      <option value="Pack">Pack</option>
                      <option value="Box">Box</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Cost</Text>
                    </FormLabel>
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
                  </FormControl>
                </Flex>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Status</Text>
                  </FormLabel>
                  <Select
                    isRequired
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

                      setStatus(evt.target.value);
                    }}
                    value={status}
                  >
                    <option value="" style={{ color: "black" }}>
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
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalButton;
