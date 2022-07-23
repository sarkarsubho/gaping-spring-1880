import { Button, Flex, Text, LinkBox, Box } from "@chakra-ui/react";
import React from "react";
import { BsStack } from "react-icons/bs";
import { Link } from "react-router-dom";

import { Dr } from "./Drawer";
import { useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";

export const Navbar = () => {
  const isAuth = useSelector((state) => state.AuthReduser.isAuth);
  console.log(isAuth);
  // const isAuth=true;

  return (
    <div>
      <Flex justifyContent={"space-between"} margin="10px" align={"center"}>
        <Flex
          fontSize={"27px"}
          textAlign={"center"}
          align={"center"}
          gap="10px"
        >
          <BsStack></BsStack>
          <Text fontWeight={"bold"} fontFamily="Roboto,sans-serif">
            Buffer
          </Text>

          <Flex
            direction={"column"}
            w={"20px"}
            h={"16px"}
            alignContent="center"
            border={"1px solid blue.800"}
          >
            <Box bg={"#3A75C4"} h="8px"></Box>
            <Box bg={"#F9DD16"} h="8px"></Box>
          </Flex>
        </Flex>

        <Flex display={["none", "none", "none", "view"]}>
          <LinkBox>
            <Button
              as="a"
              variant="ghost"
              colorScheme={"white"}
              area-label="Tools"
              my={5}
              w="100%"
            >
              Tools
            </Button>
          </LinkBox>
          <LinkBox>
            <Button
              as="a"
              variant="ghost"
              colorScheme={"white"}
              area-label="Tools"
              my={5}
              w="100%"
            >
              Pricing
            </Button>
          </LinkBox>
          <LinkBox>
            <Button
              as="a"
              variant="ghost"
              colorScheme={"white"}
              area-label="Tools"
              my={5}
              w="100%"
            >
              Blog
            </Button>
          </LinkBox>
          <LinkBox>
            <Button
              as="a"
              variant="ghost"
              colorScheme={"white"}
              area-label="Tools"
              my={5}
              w="100%"
            >
              About
            </Button>
          </LinkBox>
          <LinkBox>
            <Button
              as="a"
              variant="ghost"
              colorScheme={"white"}
              area-label="Tools"
              my={5}
              w="100%"
            >
              Customer
            </Button>
          </LinkBox>
        </Flex>

        <Flex>
          {isAuth ? (
            <Flex align={"center"}>
              "subhankar"
              <Button fontSize={"30px"} colorScheme={"white"} color={"red"}><BiLogOut></BiLogOut></Button>
            </Flex>
          ) : (
            <Flex align={"center"}>
              <Link to="/login">
                <Button
                  colorScheme="blue"
                  variant="link"
                  marginRight={"10px"}
                  fontSize={"20px"}
                  display={["none", "none", "view", "view"]}
                >
                  Log In
                </Button>
              </Link>

              <Link to="/signup">
                <Button
                  colorScheme="blue"
                  variant="solid"
                  h={"50px"}
                  bg="#2C4BFF"
                  marginLeft={"10px"}
                  fontSize={"18px"}
                >
                  Get Started now
                </Button>
              </Link>
            </Flex>
          )}

          <Dr></Dr>
        </Flex>
      </Flex>
    </div>
  );
};
