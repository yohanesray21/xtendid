import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Center,
  Image,
  Text,
  FormControl,
  FormLabel,
  Stack,
  Input,
  Button,
  Heading,
  HStack,
  Select,
  Alert,
  AlertIcon,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { IoLogInOutline } from "react-icons/io5";
import Cookies, { set } from "js-cookie";

import TopBar from "../Navigation/TopBar";
import Navbar from "../Navigation/Navbar";

import Logo from "../../assets/images/logo.png";
import axios from "axios";
import InputPassword from "../InputPassword";

function Profile() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [surName, setSurname] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = "https://xtendid.herokuapp.com/api/get-user";
    axios.get(url).then((response) => {
      setFirstName(response.data.data.firstname);
      setMiddleName(response.data.data.middlename);
      setSurname(response.data.data.surname);
      setUsername(response.data.data.username);
      setPosition(response.data.data.position);
      setEmail(response.data.data.email);
      setFullName(
        firstName +
          " " +
          `${middleName === null ? "" : middleName}` +
          " " +
          `${surName === null ? "" : surName}`
      );
    });
  }, []);

  return (
    <>
      <TopBar />

      <Box bg="white" w="full" my={4}>
        <Container maxW="container.xl" pt={2}>
          <Flex>
            <Navbar />
            <Box
              pl={2}
              w="full"
              boxShadow="md"
              border="gray"
              rounded="lg"
              bg="white"
              borderColor="gray.500"
            >
              <Box mt={10} ml={10}>
                <Text fontSize={30} fontWeight="bold" as="u">
                  My Profile
                </Text>
              </Box>
              <Center>
                <Box>
                  <VStack>
                    <Image
                      borderRadius="full"
                      borderColor="gray.200"
                      boxSize="150px"
                      border="indigo"
                      src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                      alt="Profile Picture"
                    />
                    <Text fontSize={30} fontWeight="bold">
                      {fullName}
                    </Text>
                  </VStack>
                </Box>
              </Center>
              <Box p={10}>
                <Stack spacing={4} mt={8}>
                  <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <Input
                      type="Text"
                      placeholder="Username"
                      bgColor="gray.100"
                      value={username}
                      onChange={(evt) => setUsername(evt.target.value)}
                    />
                  </FormControl>
                  <HStack>
                    <FormControl id="firstName">
                      <FormLabel>First Name</FormLabel>
                      <Input
                        placeholder="FirstName"
                        bgColor="gray.100"
                        value={firstName}
                        onChange={(evt) => setFirstName(evt.target.value)}
                      />
                    </FormControl>
                    <FormControl id="middlename">
                      <FormLabel>Middle Name</FormLabel>
                      <Input
                        placeholder="Middle Name"
                        bgColor="gray.100"
                        value={middleName}
                        onChange={(evt) => setMiddleName(evt.target.value)}
                      />
                    </FormControl>
                    <FormControl id="surname">
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        placeholder="Last Name"
                        bgColor="gray.100"
                        value={surName}
                        onChange={(evt) => setSurname(evt.target.value)}
                      />
                    </FormControl>
                  </HStack>
                  <FormControl id="position">
                    <FormLabel>Position</FormLabel>
                    <Input value={position} bgColor="gray.100" />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      type="email"
                      placeholder="Email"
                      bgColor="gray.100"
                      value={email}
                      onChange={(evt) => setEmail(evt.target.value)}
                    />
                  </FormControl>

                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    pt={2}
                  >
                    <Spacer />
                    <Button
                      rightIcon={<IoLogInOutline />}
                      colorScheme="blue"
                      type="submit"
                      isLoading={isLoading}
                    >
                      Save
                    </Button>
                  </Flex>
                </Stack>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Profile;
