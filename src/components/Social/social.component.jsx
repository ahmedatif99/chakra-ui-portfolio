import React from "react";

import { useMediaQuery } from "@chakra-ui/media-query";
import { HStack } from "@chakra-ui/layout";
import { FaFacebookF, FaGoogle, FaSpotify } from "react-icons/fa";
import Icon from "@chakra-ui/icon";

const Social = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");
  const target = "_blank";
  return (
    <HStack spacing={isNotSmallerScreen ? "20" : "10"}>
      <a href="https://www.facebook.com/ahmedatif99" target={target}>
        <Icon
          as={FaFacebookF}
          boxSize="50"
          transition={"0.1s all ease-in-out"}
          _hover={{ color: "blue.500" }}
        />
      </a>
      <a href="mailto:ahmedahmed1919a@gmail.com" target={target}>
        <Icon
          as={FaGoogle}
          boxSize="50"
          transition={"0.1s all ease-in-out"}
          _hover={{ color: "red.600" }}
        />
      </a>
      <a href="https://www.facebook.com/ahmedatif99" target={target}>
        <Icon
          as={FaSpotify}
          boxSize="50"
          transition={"0.1s all ease-in-out"}
          _hover={{ color: "green.300" }}
        />
      </a>
    </HStack>
  );
};

export default Social;
