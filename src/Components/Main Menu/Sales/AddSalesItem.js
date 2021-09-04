import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
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
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { set } from "js-cookie";

const formatNumber = (data) => {
  const dotRemoved = data.split(".").join("");

  return "Rp " + Intl.NumberFormat("id-Id").format(dotRemoved);
};

function AddItemSales({ salesId, setListItemOrder, setTotalItemOrder }) {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  const [description, setDescription] = useState("");
  const [dataItem, setDataItem] = useState({});

  const [taxRate, setTaxRate] = useState("");
  const [qty, setQty] = useState("");
  const [cost, setCost] = useState("");
  const [isLoadingAddItem, setIsLoadingAddItem] = useState(false);

  useEffect(() => {
    const listItems = async () => {
      const { data } = await axios.get(
        "https://xtendid.herokuapp.com/api/items",
        {}
      );
      setItems(data.data);
    };

    listItems();
  }, []);

  const addItem = async () => {
    // const formattedCostToNumber = Number(
    //   dataItem.cost.split("Rp ").join("").split(".").join("")
    // );
    // const formattedTotalToNumber = Number(
    //   total.split("Rp ").join("").split(".").join("")
    // );

    await axios.post(
      "https://xtendid.herokuapp.com/api/item-so-store",
      {},
      {
        params: {
          so_id: salesId,
          item_id: dataItem.id,
          qty: qty,
          description: dataItem.description
            ? dataItem.description
            : description,
        },
      }
    );

    // history.push("/stock/list");

    onClose();

    const url = `https://xtendid.herokuapp.com/api/item-so-get/${salesId}`;
    const { data: listData } = await axios.get(url, {});
    // setItems(listData.data);
    setListItemOrder(listData.data);
    setTotalItemOrder(listData.param);

    // axios
    //   .get("https://xtendid.herokuapp.com/api/item-so-calculate/")
    //   .then((response) => {
    //     setItems(response.data.data.name);
    //   });

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

  //   const renderedItems =

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <>
      <Text onClick={onOpen} cursor="pointer" color="teal">
        Add New Item
      </Text>
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
                      Item
                    </Text>
                  </FormLabel>
                  <Select
                    size="sm"
                    bgColor="gray.200"
                    value={item}
                    onChange={(evt) => {
                      axios
                        .get(
                          `https://xtendid.herokuapp.com/api/item-find/${evt.target.value}`
                        )
                        .then((response) => {
                          setDataItem(response.data.data);
                        });

                      // console.log(evt.target.value);
                      setItem(evt.target.value);
                    }}
                  >
                    <option value="">Select Item</option>

                    {items?.map((item) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Description</Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    value={
                      dataItem.description ? dataItem.description : description
                    }
                    onChange={(evt) => setDescription(evt.target.value)}
                    placeholder="Add Description"
                    // isRequired
                    // readOnly
                  />
                </FormControl>
                <HStack>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Quantity</Text>
                    </FormLabel>
                    <Input
                      size="sm"
                      bgColor="gray.200"
                      type="number"
                      value={qty}
                      onChange={(evt) => setQty(evt.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Tax (%)</Text>
                    </FormLabel>
                    <Input
                      size="sm"
                      bgColor="gray.200"
                      type="number"
                      value={dataItem.tax_rate}
                      onChange={(evt) => {
                        if (evt.target.value > 100) {
                          alert("Tax must be less than or equal 100%");
                        } else setTaxRate(evt.target.value);
                      }}
                      isRequired
                    />
                  </FormControl>
                </HStack>
                <FormControl>
                  <FormLabel>
                    <Text fontSize="sm">Item Price</Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    type="text"
                    value={dataItem.sell_price}
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
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Flex px={2} w="full" justifyContent="right" alignItems="center">
                <Box>
                  <Button
                    colorScheme="teal"
                    type="submit"
                    isLoading={isLoadingAddItem}
                  >
                    Create
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

export default AddItemSales;
