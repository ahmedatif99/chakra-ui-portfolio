import React from "react";

import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg={isDark ? "blue.300" : "gray.600"}
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Ahmed Atif
          </Text>
          <Text color={isDark ? "gray.200" : "gray.600"}>
            Front-end React-Redux Developer - Python - NodeJs
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() =>
              window.open("https://www.freelancer.com/u/ahmedatif1999")
            }
          >
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          ml={7}
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          zIndex="1"
          src="https://media-exp1.licdn.com/dms/image/C4D35AQFjquuBaLJxJg/profile-framedphoto-shrink_200_200/0/1607868887012?e=1631116800&v=beta&t=7zJYof55kyu0jCkQ9Unp28vqVRe52-a_QQ0MC-xNdj0"
        />
      </Flex>
    </Stack>
  );
};

export default Header;
