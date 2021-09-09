import React from "react";

import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/button";
import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Header from "./components/Header/header.component";
import Profile from "./components/Profile/profile.component";
import Social from "./components/Social/social.component";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const target = "_blank";
  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Portfolio
        </Heading>
        <Spacer></Spacer>
        <a href="https://www.linkedin.com/in/ahmedatif/" target={target}>
          <IconButton icon={<FaLinkedin />} isRound="true"></IconButton>
        </a>
        <a href="https://www.instagram.com/ahmedatif99/" target={target}>
          <IconButton ml={2} icon={<FaInstagram />} isRound="true"></IconButton>
        </a>
        <a href="https://github.com/ahmedatif99" target={target}>
          <IconButton ml={2} icon={<FaGithub />} isRound="true"></IconButton>
        </a>
        <IconButton
          ml={5}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>

      <Header />
      <Profile />
      <Social />
    </VStack>
  );
};

export default App;
