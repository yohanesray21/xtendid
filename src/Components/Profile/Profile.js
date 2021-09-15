import React, { useState } from "react";
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
} from "@chakra-ui/react";

import TopBar from "../Navigation/TopBar";
import Navbar from "../Navigation/Navbar";

import Logo from "../../assets/images/logo.png";
import axios from "axios";
import InputPassword from "../InputPassword";
import { IoLogInOutline } from "react-icons/io5";

function Profile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [firstname, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [surName, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitRegister = async (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    await register();
    setIsLoading(false);

    // toast({
    //   title: "Account is Created",
    //   description: "We've created account for you",
    //   status: "success",
    //   duration: 9000,
    //   isClosable: true,
    // });
  };

  const register = async () => {
    const { data } = await axios.post(
      "https://xtendid.herokuapp.com/api/register",
      {},
      {
        params: {
          username: username,
          password: password,
          password_confirmation: password_confirmation,
          firstname: firstname,
          middlename: middleName,
          surname: surName,
          email: email,
          position: position,
        },
      }
    );
    setResult(data);
    console.log(data);
  };

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
                      src="https://bit.ly/sage-adebayo"
                      alt="Segun Adebayo"
                    />
                    <Text fontSize={30} fontWeight="bold">
                      Yohanes Ray Febriyanto Silitonga
                    </Text>
                  </VStack>
                </Box>
              </Center>
              <Box p={10}>
                <form onSubmit={handleSubmitRegister}>
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
                      <FormControl id="firstname">
                        <FormLabel>First Name</FormLabel>
                        <Input
                          placeholder="Firstname"
                          bgColor="gray.100"
                          value={firstname}
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
                      <Select
                        placeholder="Select Position"
                        bgColor="gray.100"
                        value={position}
                        onChange={(evt) => setPosition(evt.target.value)}
                      >
                        <option>CEO</option>
                        <option>General Manager</option>
                        <option>Admin</option>
                      </Select>
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
                    <FormControl id="password">
                      <FormLabel>Password</FormLabel>
                      <InputPassword
                        value={password}
                        onChange={(evt) => setPassword(evt.target.value)}
                      />
                      {password.length === 0 || password.length >= 6 ? (
                        " "
                      ) : (
                        <Text mt={2} color="red">
                          Password must have at least 6 characters
                        </Text>
                      )}
                    </FormControl>
                    <FormControl id="password_confirmation">
                      <FormLabel>Password Confirmation</FormLabel>
                      <InputPassword
                        value={password_confirmation}
                        onChange={(evt) =>
                          setPassword_confirmation(evt.target.value)
                        }
                      />
                      {password_confirmation === password ||
                      password_confirmation.length === 0 ? (
                        " "
                      ) : (
                        <Text mt={2} color="red">
                          Password does not match
                        </Text>
                      )}
                    </FormControl>
                    {result.status === "success" ? (
                      <Alert status="success">
                        <AlertIcon />
                        <Text> {result.message}</Text>
                      </Alert>
                    ) : (
                      " "
                    )}
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      pt={2}
                    >
                      <Text>
                        Already Have Account?{" "}
                        <a href="/Login" style={{ color: "blue" }}>
                          Log in
                        </a>
                      </Text>
                      <Button
                        rightIcon={<IoLogInOutline />}
                        colorScheme="blue"
                        type="submit"
                        isLoading={isLoading}
                      >
                        Register
                      </Button>
                    </Flex>
                  </Stack>
                </form>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Profile;
