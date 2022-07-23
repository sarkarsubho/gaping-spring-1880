import {
  Button,
  Flex,
  Text,
  LinkBox,
  Box,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BsStack } from "react-icons/bs";
import { Link } from "react-router-dom";

import { Dr } from "./Drawer";
import { useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { GiPaperPlane } from "react-icons/gi";
import { SiGoogleanalytics } from "react-icons/si";
import { BiMessageDetail } from "react-icons/bi";
import { FiPenTool } from "react-icons/fi";

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
          <Link to="/">
            <BsStack></BsStack>
          </Link>

          <Link to="/">
            <Text fontWeight={"bold"} fontFamily="Roboto,sans-serif">
              Buffer
            </Text>
          </Link>

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

        <Flex display={["none", "none", "none", "view"]} align={"center"}>
          <LinkBox>
            <Menu>
              <MenuButton
                as={Button}
                bgColor={"white"}
                _hover={{ bgColor: "white" }}
                rightIcon={<ChevronDownIcon />}
              >
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/publish"></Link>
                  <Flex>
                    <SiGoogleanalytics></SiGoogleanalytics>
                    <Flex direction={"column"}>
                      <Text fontWeight={"extrabold"}>Publishing</Text>
                      <Text>
                        Plan, collaborate, and publish thumb-stopping content
                      </Text>
                    </Flex>
                  </Flex>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link to="/publish"></Link>
                  <Flex>
                    <GiPaperPlane></GiPaperPlane>
                    <Flex direction={"column"}>
                      <Text fontWeight={"extrabold"}>Analytics</Text>
                      <Text>
                        Analyze social media performance and create reports
                      </Text>
                    </Flex>
                  </Flex>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link to="/publish"></Link>
                  <Flex>
                    <BiMessageDetail></BiMessageDetail>
                    <Flex direction={"column"}>
                      <Text fontWeight={"extrabold"}>Engagement</Text>
                      <Text>
                        Quickly navigate your comments and engage with your
                        audience
                      </Text>
                    </Flex>
                  </Flex>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link to="/publish"></Link>
                  <Flex>
                    <FiPenTool></FiPenTool>
                    <Flex direction={"column"}>
                      <Text fontWeight={"extrabold"}>Start Page</Text>
                      <Text>Build a customized landing page in minutes</Text>
                    </Flex>
                  </Flex>
                </MenuItem>
              </MenuList>
            </Menu>
          </LinkBox>
          <LinkBox>
            <Link to={"/pricing"}>
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
            </Link>
          </LinkBox>
          {/* <LinkBox>
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
          </LinkBox> */}
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
              <Button fontSize={"30px"} colorScheme={"white"} color={"red"}>
                <BiLogOut></BiLogOut>
              </Button>
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
                  display={["none", "none", "view", "view"]}
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
