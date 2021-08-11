import React, { useState } from "react";
import {
  Box,
  Image,
  Container,
  Flex,
  Text,
  Center,
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
} from "@chakra-ui/react";
import { IoLogInOutline } from "react-icons/io5";

import Logo from "../assets/images/logo.png";
import InputPassword from "./InputPassword";
import TopBar from "./Navigation/TopBar";
import axios from "axios";
import { Redirect } from "react-router-dom";

function Register(props) {
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
      "http://xtendid.herokuapp.com/api/register",
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

  if (result.status === " success") {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <TopBar />

      <Box bg="grey.100" pt={32}>
        <Container maxW="container.xl">
          <Center>
            <Box
              maxW="xl"
              border="1px"
              w="full"
              p={8}
              borderColor="gray.100"
              boxShadow="lg"
              borderRadius="xl"
              mb={10}
            >
              <Center>
                <Image src={Logo} w="2xs" />
              </Center>
              <Box pt={4}>
                <hr />
              </Box>

              <Center>
                <Heading fontSize="3xl" pt={5}>
                  Register
                </Heading>
              </Center>
              <form onSubmit={handleSubmitRegister}>
                <Stack spacing={4} mt={8}>
                  <FormControl id="username" isRequired>
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
                    <FormControl id="firstname" isRequired>
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
                  <FormControl id="position" isRequired>
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
                  <FormControl id="email" isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      type="email"
                      placeholder="Email"
                      bgColor="gray.100"
                      value={email}
                      onChange={(evt) => setEmail(evt.target.value)}
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
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
                  <FormControl id="password_confirmation" isRequired>
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
          </Center>
        </Container>
      </Box>
    </>
  );
}

export default Register;
