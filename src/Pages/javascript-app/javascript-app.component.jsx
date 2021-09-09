import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";

import { Image } from "@chakra-ui/image";
import { Stack, Box, Text } from "@chakra-ui/layout";

const JavaScriptApp = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");
  return (
    <React.Fragment>
      <Text
        color="red.400"
        p="5"
        textAlign="center"
        w="100%"
        h="100%"
        fontSize="4xl"
      >
        JavaScript Work
      </Text>
      <Stack direction={["column", "row"]} spacing="24px" mb={20}>
        <Box
          rounded="xl"
          bg="gray.500"
          h="30vh"
          w="30vh"
          _hover={{ bg: "red.400" }}
          mb={isNotSmallerScreen ? 0 : 10}
        >
          <Image color="white" p="4" w="100%" h="100%" />
          <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
            1st Work
          </Text>
        </Box>

        <Box
          rounded="xl"
          bg="gray.500"
          h="30vh"
          w="30vh"
          _hover={{ bg: "red.400" }}
          mb={isNotSmallerScreen ? 0 : 10}
          mt={isNotSmallerScreen ? 0 : 10}
        >
          <Image color="white" p="4" w="100%" h="100%" />
          <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
            2nd Work
          </Text>
        </Box>

        <Box
          rounded="xl"
          bg="gray.500"
          h="30vh"
          w="30vh"
          _hover={{ bg: "red.400" }}
          mt={isNotSmallerScreen ? 0 : 10}
        >
          <Image color="white" p="4" w="100%" h="100%" />
          <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
            3th Work
          </Text>
        </Box>
      </Stack>
    </React.Fragment>
  );
};

export default JavaScriptApp;
