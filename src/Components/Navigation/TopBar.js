import React from "react";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { IoNotifications, IoSearchOutline } from "react-icons/io5";

import Logo from "../../assets/images/logo.png";
import User from "../../assets/images/user.jpeg";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

function TopBar() {
  const history = useHistory();

  return (
    <>
      <Box
        w="full"
        borderColor="white.100"
        boxShadow="lg"
        bgColor="white
        "
      >
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Link to="/">
              <Image src={Logo} w="2xs" />
            </Link>

            {window.location.pathname === "/login" ||
            window.location.pathname === "/register" ? (
              ""
            ) : (
              <Box>
                <Flex alignItems="center">
                  <FormControl id="search" mx={2}>
                    <InputGroup bgColor="white" borderRadius="lg" w="md">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={IoSearchOutline} />}
                      />
                      <Input placeholder="Search Something" size="md" />
                    </InputGroup>
                  </FormControl>
                  <IconButton
                    fontSize="23px"
                    aria-label="search database"
                    icon={<IoNotifications />}
                    mr={2}
                  />
                  <Menu>
                    <MenuButton bgColor="white" as={Button}>
                      <Center>
                        <Wrap>
                          <WrapItem>
                            <Avatar
                              size="sm"
                              icon={<AiOutlineUser fontSize="1.5rem" />}
                              name="user"
                            >
                              <AvatarBadge boxSize="1.25em" bg="green.500" />
                            </Avatar>
                          </WrapItem>
                        </Wrap>
                      </Center>
                    </MenuButton>
                    <MenuList>
                      <MenuItem
                        onClick={() => {
                          history.push("/profile");
                        }}
                      >
                        My Account
                      </MenuItem>
                      <MenuItem
                        onClick={async () => {
                          await axios.get(
                            "https://xtendid.herokuapp.com/api/logout"
                          );
                          Cookies.remove("authToken");
                          history.push("/login");
                        }}
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  {/* <Wrap>
                    <WrapItem>
                      <Avatar src={User} size="sm" name="user">
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                      </Avatar>
                    </WrapItem>
                  </Wrap> */}
                </Flex>
              </Box>
            )}
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default TopBar;
