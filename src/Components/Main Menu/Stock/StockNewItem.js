import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  Select,
  Stack,
  Text,
  Center,
  Heading,
  Checkbox,
  FormLabel,
  Textarea,
  Image,
} from "@chakra-ui/react";
import TopBar from "../../Navigation/TopBar";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoHome, IoPrintSharp } from "react-icons/io5";
import MenuIcon from "../../MenuIcon";
import { useHistory, useParams } from "react-router";
import axios from "axios";

const formatNumber = (data) => {
  const dotRemoved = data.split(".").join("");

  return "Rp " + Intl.NumberFormat("id-Id").format(dotRemoved);
};

function StockNewItem() {
  const history = useHistory();
  // const [colorSelect, setColorSelect] = useState("black");
  const [id, setId] = useState("");
  const [cost, setCost] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [baseUnit, setBaseUnit] = useState("");
  const [status, setStatus] = useState("");
  const [openingStock, setOpeningStock] = useState("");
  const [minimumStock, setMinimumStock] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [barcode, setBarcode] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [percentage, setPercentage] = useState("");
  const [suppliers, setSuppliers] = useState([]);
  const [supplier, setSupplier] = useState([]);

  const [isLoadingUpdateItem, setIsLoadingUpdateItem] = useState(false);

  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://xtendid.herokuapp.com/api/item-find/${params.id}`)
      .then((response) => {
        setId(response.data.data.item_id);
        setCost(response.data.data.cost);
        setSellPrice(response.data.data.sell_price);
        setName(response.data.data.name);
        setCategory(response.data.data.category);
        setStock(response.data.data.stock);
        setStatus(response.data.data.status);
        setBaseUnit(response.data.data.base_unit);
        setOpeningStock(response.data.data.opening_stock);
        setMinimumStock(response.data.data.minimum_stock);
        setTaxRate(response.data.data.taxRate);
        setBarcode(response.data.data.barcode);
        setPercentage(response.data.data.profit_percentage || "");
      });
  }, [params.id]);

  useEffect(() => {
    axios
      .get("https://xtendid.herokuapp.com/api/suppliers")
      .then((response) => {
        setSuppliers(response.data.data);
      });
  }, []);

  const handleOnSave = async () => {
    setIsLoadingUpdateItem(true);
    await axios.put(
      `https://xtendid.herokuapp.com/api/item-update/${params.id}`,
      {},
      {
        params: {
          item_id: id,
          name: name,
          barcode: barcode,
          category: category,
          brand: brand,
          stock: stock,
          minimum_stock: minimumStock,
          base_unit: baseUnit,
          cost: cost,
          sell_price: sellPrice,
          tax_rate: taxRate,
          status: status,
          supplier: supplier,
          opening_stock: openingStock,
          profit_percentage: percentage,
          description: description,
        },
      }
    );
    setIsLoadingUpdateItem(false);
    alert("Update Successful");
    history.push("/stock/list");
  };

  return (
    <>
      <TopBar />
      <Box bg="white" w="full" mt={4}>
        <Container maxW="container.xl" pt={2}>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Breadcrumb
                fontWeight="medium"
                fontSize="xl"
                separator={<ChevronRightIcon color="gray.500" fontSize="3xl" />}
                alignItems="center"
              >
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <Icon fontSize="2xl" as={IoHome} />
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Stock</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Item</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">New Item</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>

            <Box>
              <Stack direction="row" spacing={2}>
                <MenuIcon />
                <IconButton
                  size="sm"
                  aria-label="print"
                  icon={<IoPrintSharp />}
                  fontSize="md"
                />
                {/* Menu Icon */}
                <Button
                  size="sm"
                  colorScheme="teal"
                  boxShadow="sm"
                  onClick={handleOnSave}
                  isLoading={isLoadingUpdateItem}
                >
                  Save
                </Button>
              </Stack>
            </Box>
          </Flex>

          <Box
            boxShadow="lg"
            maxW="container.xl"
            mt={2}
            mb={3}
            border="1px"
            borderColor="gray.200"
            borderRadius="sm"
            px={8}
            pb={8}
          >
            <Heading size="md" fontWeight="semibold" pt={8} pb={2}>
              {name}
            </Heading>
            <Box pb={2}>
              <hr />
            </Box>
            <Text fontSize="sm">General Information</Text>

            <Flex>
              <Box w="60%">
                <Stack p={2}>
                  <Checkbox colorScheme="teal" value="1" defaultIsChecked>
                    Flexible
                  </Checkbox>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm" pt={2}>
                        Item Code
                      </Text>
                    </FormLabel>
                    <Input
                      size="sm"
                      bgColor="gray.200"
                      value={id}
                      isRequired
                      ReadOnly
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
                  <Flex>
                    <FormControl pr={3}>
                      <FormLabel>
                        <Text fontSize="sm">Product category</Text>
                      </FormLabel>
                      <Select
                        size="sm"
                        bgColor="gray.200"
                        value={category}
                        onChange={(evt) => setCategory(evt.target.value)}
                      >
                        <option value="option1">Select Product</option>
                        <option value="Service">Service</option>
                        <option value="Product">Product</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>
                        <Text fontSize="sm">Supplier</Text>
                      </FormLabel>
                      <Select
                        size="sm"
                        bgColor="gray.200"
                        value={supplier}
                        onChange={(evt) => setSupplier(evt.target.value)}
                      >
                        <option>Select Supplier</option>
                        {suppliers.map((supplier) => {
                          return (
                            <option value={supplier.company_name}>
                              {supplier.company_name}
                            </option>
                          );
                        })}
                        {/* <option value="option2">Select Supplier</option>
                        <option value="option1">PT.Karya Maju</option>
                        <option value="option2">PT. Bersama</option> */}
                      </Select>
                    </FormControl>
                  </Flex>
                </Stack>
              </Box>
              <Box w="40%" h="20px">
                <Center>
                  <Box boxSize="3xs">
                    <Image
                      src="https://bit.ly/sage-adebayo"
                      alt="Segun Adebayo"
                    />
                  </Box>
                </Center>
              </Box>
            </Flex>
            <Stack px={2}>
              <Flex alignItems="center">
                <HStack w="60%">
                  <FormControl pr={3}>
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
                  <FormControl pr={3}>
                    <FormLabel>
                      <Text fontSize="sm">Minimum Stock</Text>
                    </FormLabel>
                    <Input
                      size="sm"
                      bgColor="gray.200"
                      type="number"
                      value={minimumStock}
                      onChange={(evt) => setMinimumStock(evt.target.value)}
                    />
                  </FormControl>
                </HStack>
                <FormControl w="40%">
                  <FormLabel>
                    <Text fontSize="sm">Tax</Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    type="number"
                    min="1"
                    value={taxRate}
                    onChange={(evt) => setTaxRate(evt.target.value)}
                  />
                </FormControl>
              </Flex>
              <Flex alignItems="center">
                <HStack w="60%">
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
                  <FormControl pr={3}>
                    <FormLabel>
                      <Text fontSize="sm">Cost</Text>
                    </FormLabel>
                    <Input
                      size="sm"
                      bgColor="gray.200"
                      type="number"
                      value={cost}
                      onChange={(evt) => setCost(evt.target.value)}
                    />
                  </FormControl>
                  <FormControl w="20%">
                    <FormLabel>
                      <Text fontSize="sm">Percentage</Text>
                    </FormLabel>
                    <Input
                      size="sm"
                      bgColor="gray.200"
                      type="number"
                      min="1"
                      max="100"
                      placeholder="%"
                      value={percentage}
                      onChange={(evt) => {
                        if (evt.target.value > 100) {
                          alert("Tax must be less than or equal 100%");
                        } else setPercentage(evt.target.value);
                      }}
                    />
                  </FormControl>
                  <Text fontSize="xl" pr={2} pt={7}>
                    =
                  </Text>
                </HStack>
                <FormControl w="40%">
                  <FormLabel>
                    <Text fontSize="sm">Sales Price</Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    type="number"
                    min="1"
                    value={sellPrice}
                    onChange={(evt) => setSellPrice(evt.target.value)}
                  />
                </FormControl>
              </Flex>
              <Flex alignItems="center">
                <HStack w="60%" pr={3}>
                  <FormControl>
                    <FormLabel>
                      <Text fontSize="sm">Status</Text>
                    </FormLabel>
                    <Select
                      size="sm"
                      bgColor="gray.200"
                      value={status}
                      onChange={(evt) => setStatus(evt.target.value)}
                    >
                      <option value="option">Select Status</option>
                      <option value="Available" style={{ color: "green" }}>
                        Available
                      </option>
                      <option value="Not Available" style={{ color: "red" }}>
                        Not Available
                      </option>
                    </Select>
                  </FormControl>
                </HStack>
                <FormControl w="40%">
                  <FormLabel>
                    <Text fontSize="sm">barcode</Text>
                  </FormLabel>
                  <Input
                    size="sm"
                    bgColor="gray.200"
                    type="number"
                    min="1"
                    value={barcode}
                    onChange={(evt) => setBarcode(evt.target.value)}
                  />
                </FormControl>
              </Flex>
            </Stack>
          </Box>
          <Box
            boxShadow="lg"
            maxW="container.xl"
            mb={8}
            border="1px"
            borderColor="gray.200"
            borderRadius="sm"
            px={8}
            pb={8}
          >
            <Text fontSize="sm" pt={5}>
              Description
            </Text>

            <Stack p={2}>
              <FormControl pr={3} w="60%">
                <FormLabel>
                  <Text fontSize="sm">Brand</Text>
                </FormLabel>
                <Select
                  size="sm"
                  bgColor="gray.200"
                  value={brand}
                  onChange={(evt) => setBrand(evt.target.value)}
                >
                  <option value="option1">Select Brand</option>
                  <option value="Adidas">Adidas</option>
                  <option value="Nike">Nike</option>
                  <option value="Puma">Puma</option>
                </Select>
              </FormControl>
              <FormControl pr={3}>
                <FormLabel>
                  <Text fontSize="sm">Description</Text>
                </FormLabel>
                <Textarea
                  bgColor="gray.200"
                  value={description}
                  onChange={(evt) => setDescription(evt.target.value)}
                />
              </FormControl>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default StockNewItem;
