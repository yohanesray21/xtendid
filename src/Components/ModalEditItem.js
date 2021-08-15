import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import { EditIcon } from "@chakra-ui/icons";

const formatNumber = (data) => {
  const dotRemoved = data.split(".").join("");

  return "Rp " + Intl.NumberFormat("id-Id").format(dotRemoved);
};

function ModalEditItem({ item, updateIdItem }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [colorSelect, setColorSelect] = useState("black");
  const [id, setId] = useState(updateIdItem);
  // console.log(id);
  const [code, setCode] = useState("");
  const [cost, setCost] = useState(`${item.cost}`);
  const [sellPrice, setSellPrice] = useState(`${item.sell_price}`);
  const [name, setName] = useState(item.name);
  const [category, setCategory] = useState(item.category);
  const [stock, setStock] = useState(item.stock);
  const [baseUnit, setBaseUnit] = useState(item.baseUnit);
  const [status, setStatus] = useState(item.status);

  const [isLoadingAddItem, setIsLoadingAddItem] = useState(false);

  const updateItem = async () => {
    const formattedCostToNumber = Number(
      cost.split("Rp ").join("").split(".").join("")
    );
    const formattedSellPriceToNumber = Number(
      sellPrice.split("Rp ").join("").split(".").join("")
    );

    const { data } = await axios.put(
      `https://xtendid.herokuapp.com/api/item-update/${id}`,
      {},
      {
        params: {
          id: id,
          item_id: `ITM-0${id}`,
          cost: formattedCostToNumber,
          sell_price: formattedSellPriceToNumber,
          name: name,
          category: category,
          stock: stock,
          baseUnit: baseUnit,
          status: status,
        },
      }
    );

    onClose();
    // setItems(data);
    // console.log(data);
  };

  const handleSubmitItem = async (evt) => {
    evt.preventDefault();
    setIsLoadingAddItem(true);

    try {
      await updateItem();
    } catch (err) {
    } finally {
      setIsLoadingAddItem(false);
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
                    value={`ITM-0${id}`}
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
                    <Text fontSize="sm">Quantity</Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    type="number"
                    value={stock}
                    onChange={(evt) => setStock(evt.target.value)}
                  />
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
                      <Text fontSize="sm">Sales Price</Text>
                    </FormLabel>
                    <Input
                      size="sm"
                      bgColor="gray.200"
                      type="text"
                      value={sellPrice}
                      onBlur={() => {
                        const formatted = formatNumber(sellPrice);
                        setSellPrice(formatted);
                      }}
                      onFocus={() => {
                        const removedRp = sellPrice.split("Rp ").join("");
                        setSellPrice(removedRp);
                      }}
                      onChange={(evt) => {
                        setSellPrice(evt.target.value);
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
                      if (evt.target.value === "Available") {
                        setColorSelect("green");
                      }
                      if (evt.target.value === "Not Available") {
                        setColorSelect("red");
                      }

                      setStatus(evt.target.value);
                    }}
                    value={status}
                  >
                    <option value="" style={{ color: "black" }}>
                      Select Status
                    </option>
                    <option value="Available" style={{ color: "green" }}>
                      Available
                    </option>
                    <option value="Not Available" style={{ color: "red" }}>
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
                <Link to="/stock/item/:id">
                  <Button
                    size="sm"
                    mr={3}
                    leftIcon={<BiEdit />}
                    detailIdItem="hello"
                    item={item}
                  >
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
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalEditItem;
