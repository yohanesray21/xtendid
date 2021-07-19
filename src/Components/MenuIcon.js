import { AddIcon, DeleteIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

function MenuIcon() {
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          size="sm"
          bgColor="gray.100"
        />
        <MenuList>
          <MenuItem icon={<AddIcon />}>New Item</MenuItem>
          {/* <MenuItem icon={<ExternalLinkIcon />}>New Window</MenuItem> */}
          <MenuItem icon={<DeleteIcon />}>Delete</MenuItem>
          <MenuItem icon={<EditIcon />}>Edit</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default MenuIcon;
