import { Box, Center, Icon, Text, VStack } from "@chakra-ui/react";
<<<<<<< HEAD
import axios from "axios";
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
import { FaBox } from "react-icons/fa";
import { Link } from "react-router-dom";

function Items() {
<<<<<<< HEAD
  const url = "https://xtendid.herokuapp.com/api/item-count";

  const [results, setResults] = useState([]);

  useEffect(() => {
    const list = async () => {
      const { data } = await axios.get(url, {});
      setResults(data.data);
      console.log(results);
    };

    list();
  }, []);
=======
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
  return (
    <>
      <Link to="/stock/item">
        <VStack
          w="full"
          border="1px"
          borderColor="gray.200"
          py={6}
          px={14}
          bgColor="white.100"
          boxShadow="xs"
          spacing={4}
          _hover={{ bgColor: "teal", color: "white" }}
          borderRadius="md"
        >
          <Center>
            <Icon fontSize="3xl" as={FaBox} />
          </Center>
          <Box>
            <Text fontSize="xl">
<<<<<<< HEAD
              <Center>{results.total_item}</Center>
=======
              <Center>128</Center>
>>>>>>> b822c2930093ee1100292c2e8a5a4b6e55322807
            </Text>
            <Text>
              <Center>Items</Center>
            </Text>
          </Box>
        </VStack>
      </Link>
    </>
  );
}

export default Items;
