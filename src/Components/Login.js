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
  InputGroup,
  InputLeftElement,
  Icon,
  Button,
} from "@chakra-ui/react";
import { Link, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import { IoPerson, IoLogInOutline } from "react-icons/io5";

import Logo from "../assets/images/logo.png";
import InputPassword from "./InputPassword";
import TopBar from "./Navigation/TopBar";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleSubmitLogin = async (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    await login();
    setIsLoading(false);

    // Real API

    // axios
    //   .post(url, {
    //     username: username,
    //     password: password,
    //   })
    //   .then((response) => {
    //     const token = response.data.token;
    //     localStorage.setItem("authToken", token);
    //     localStorage.getItem("authToken");
    //   });

    // axios.post(url).then((response) => {
    //   const token = response.data.token;
    //   localStorage.setItem("authToken", token);

    //   if (Boolean(token)) {
    //     history.push("/");
    //   }
    // }
    // );
  };

  const login = async () => {
    const { data } = await axios.post(
      "https://xtendid.herokuapp.com/api/login",
      {},
      {
        params: {
          username: username,
          password: password,
        },
      }
    );

    const expiredToken = data.data.token_expired_at;
    const parsedDate = new Date(expiredToken);

    const token = data.data.token;

    Cookies.set("authToken", token, { expires: parsedDate });
    // localStorage.setItem("authToken", token);

    if (Boolean(token)) {
      history.push("/");
    }
  };

  if (Cookies.get("authToken")) {
    return <Redirect to="/" />;
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
            >
              <Center>
                <Image src={Logo} w="xs" />
              </Center>
              <Box pt={4}>
                <hr />
              </Box>
              <form onSubmit={handleSubmitLogin}>
                <Stack spacing={4} mt={8}>
                  <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        fontSize="1.2em"
                        children={<Icon as={IoPerson} />}
                      />
                      <Input
                        placeholder="Username"
                        value={username}
                        onChange={(evt) => setUsername(evt.target.value)}
                        bgColor="gray.100"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputPassword
                      value={password}
                      onChange={(evt) => setPassword(evt.target.value)}
                    />
                  </FormControl>

                  <Text textAlign="right">
                    <Link>Forgot Password ?</Link>
                  </Text>

                  <Flex justifyContent="space-between" alignItems="center">
                    <Link to="/register">
                      <Button type="button">Register</Button>
                    </Link>

                    <Button
                      type="submit"
                      rightIcon={<IoLogInOutline />}
                      colorScheme="teal"
                      isLoading={isLoading}
                    >
                      Login
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

export default Login;
