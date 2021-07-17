import React from "react";
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
import { Link } from "react-router-dom";

import { IoPerson, IoLogInOutline } from "react-icons/io5";

import Logo from "../assets/images/logo.png";
import InputPassword from "./InputPassword";
import TopBar from "./Navigation/TopBar";

function Login() {
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
                    <Input placeholder="Username" bgColor="gray.100" />
                  </InputGroup>
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputPassword />
                </FormControl>

                <Text textAlign="right">
                  <Link>Forgot Password ?</Link>
                </Text>

                <Flex justifyContent="space-between" alignItems="center">
                  <Button type="submit">Register</Button>
                  <Button
                    type="submit"
                    rightIcon={<IoLogInOutline />}
                    colorScheme="teal"
                  >
                    Login
                  </Button>
                </Flex>
              </Stack>
            </Box>
          </Center>
        </Container>
      </Box>
    </>
  );
}

export default Login;
