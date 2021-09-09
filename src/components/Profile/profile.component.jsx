import React from "react";

import { useDisclosure } from "@chakra-ui/hooks";
import { Collapse } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";

import { DiWebplatform, DiPython, DiJavascript } from "react-icons/di";

import WebApp from "../../Pages/web-app/web-app.component";
import PythonApp from "../../Pages/python-app/python-app.component";
import JavaScriptApp from "../../Pages/javascript-app/javascript-app.component";

const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px");
  const { isOpen, onToggle } = useDisclosure();
  return (
    <React.Fragment>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        w="100%"
        maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
      >
        <Box alignSelf="center" px="32" py="16">
          <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
            +3
          </Heading>
          <Text fontSize="2xl" color="gray.400">
            Years of Experience
          </Text>
        </Box>
        <Box alignSelf="center" px="32" py="16">
          <Text fontWeight="bold" fontSize="2xl">
            Front-End Designer and Developer, Specialised in React development
          </Text>
          <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="blue.400"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "red.600" }}
              onClick={onToggle}
            >
              <Icon color="white" p="4" w="24" h="24" as={DiWebplatform} />
              <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                Web App
              </Text>
            </Flex>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="blue.400"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "blue.700" }}
              onClick={onToggle}
            >
              <Icon color="white" p="4" w="24" h="24" as={DiPython} />
              <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                Pyhton
              </Text>
            </Flex>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="blue.400"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "yellow.500" }}
              onClick={onToggle}
            >
              <Icon color="white" p="4" w="24" h="24" as={DiJavascript} />
              <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                JavaScript
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex direction="column" alignContent="center">
        <Button
          mb={10}
          p="6"
          colorScheme="blue"
          fontSize={18}
          textTransform="uppercase"
          onClick={onToggle}
        >
          Show Work
        </Button>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <WebApp />
        <JavaScriptApp />
        <PythonApp />
      </Collapse>
    </React.Fragment>
  );
};

export default Profile;
