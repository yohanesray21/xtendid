import React from "react";
import {
  Avatar,
  AvatarBadge,
  Box,
  Container,
  Flex,
  FormControl,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { IoNotifications, IoSearchOutline } from "react-icons/io5";

import Logo from "../../assets/images/logo.png";
import User from "../../assets/images/user.jpeg";

function TopBar() {
  return (
    <div>
      <Box w="full" borderColor="white.100" boxShadow="lg">
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center" py={2}>
            <Image src={Logo} w="2xs" />

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
                  <Wrap>
                    <WrapItem>
                      <Avatar src={User} size="sm" name="user">
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                      </Avatar>
                    </WrapItem>
                  </Wrap>
                </Flex>
              </Box>
            )}
          </Flex>
        </Container>
      </Box>
    </div>
  );
}

export default TopBar;
