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
  Button,
  Heading,
  HStack,
  Select,
} from "@chakra-ui/react";
import { IoLogInOutline } from "react-icons/io5";

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
              <Stack spacing={4} mt={8}>
                <HStack>
                  <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input placeholder="Username" bgColor="gray.100" />
                  </FormControl>
                  <FormControl id="username">
                    <FormLabel>Middle Name</FormLabel>
                    <Input placeholder="Middle Name" bgColor="gray.100" />
                  </FormControl>
                  <FormControl id="username">
                    <FormLabel>Last Name</FormLabel>
                    <Input placeholder="Last Name" bgColor="gray.100" />
                  </FormControl>
                </HStack>

                <FormControl id="position" isRequired>
                  <FormLabel>Position</FormLabel>
                  <Select placeholder="Select Position" bgColor="gray.100">
                    <option>CEO</option>
                    <option>General Manager</option>
                    <option>Admin</option>
                  </Select>
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email Address</FormLabel>
                  <Input type="email" placeholder="Email" bgColor="gray.100" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputPassword />
                </FormControl>

                <Flex justifyContent="space-between" alignItems="center" pt={2}>
                  <Text>
                    Already Have Account?{" "}
                    <a href="/Login" style={{ color: "blue" }}>
                      Log in
                    </a>
                  </Text>
                  <Button rightIcon={<IoLogInOutline />} colorScheme="blue">
                    Register
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
