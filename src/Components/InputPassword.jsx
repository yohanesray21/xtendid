import React, { useState } from "react";

import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Icon,
} from "@chakra-ui/react";
import { IoKey, IoEye } from "react-icons/io5";

function InputPassword(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children={<Icon as={IoKey} />}
        />
        <Input
          placeholder="Password"
          bgColor="gray.100"
          type={showPassword ? "text" : "password"}
          {...props}
        />
        <InputRightElement
          color="black"
          fontSize="1.2em"
          children={<Icon as={IoEye} />}
          onClick={() => setShowPassword((showPassword) => !showPassword)}
        />
      </InputGroup>
    </div>
  );
}

export default InputPassword;
