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
import { useDispatch, useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { GiPaperPlane } from "react-icons/gi";
import { SiGoogleanalytics } from "react-icons/si";
import { BiMessageDetail } from "react-icons/bi";
import { FiPenTool } from "react-icons/fi";
import { logout } from "../Redux/AuthReducer/action";
import { CgProfile } from "react-icons/cg";

export const Navbar = () => {
  const isAuth = useSelector((state) => state.AuthReduser.isAuth);
  const userdata=JSON.parse(localStorage.getItem("UserData"));
  const dispatch=useDispatch();

  const handleLogout=()=>{
    dispatch(logout())
  }
  // const isAuth=true;
 console.log("userdata",userdata)
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
                  <Link to="/publish">
                    <Flex align={"center"} gap="20px">
                      <GiPaperPlane fontSize={"27px"}></GiPaperPlane>

                      <Flex direction={"column"}>
                        <Text fontWeight={"extrabold"}>Publishing</Text>
                        <Text>
                          Plan, collaborate, and publish thumb-stopping content
                        </Text>
                      </Flex>
                    </Flex>
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link to="/analyze">
                    <Flex align={"center"} gap="20px">
                      <SiGoogleanalytics fontSize={"27px"}></SiGoogleanalytics>
                      <Flex direction={"column"}>
                        <Text fontWeight={"extrabold"}>Analytics</Text>
                        <Text>
                          Analyze social media performance and create reports
                        </Text>
                      </Flex>
                    </Flex>
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link to="/engagepage">
                    <Flex align={"center"} gap="20px">
                      <BiMessageDetail fontSize={"27px"}></BiMessageDetail>
                      <Flex direction={"column"}>
                        <Text fontWeight={"extrabold"}>Engagement</Text>
                        <Text>
                          Quickly navigate your comments and engage with your
                          audience
                        </Text>
                      </Flex>
                    </Flex>
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link to="/startpage">
                    <Flex align={"center"} gap="20px">
                      <FiPenTool fontSize={"27px"}></FiPenTool>
                      <Flex direction={"column"}>
                        <Text fontWeight={"extrabold"}>Start Page</Text>
                        <Text>Build a customized landing page in minutes</Text>
                      </Flex>
                    </Flex>
                  </Link>
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
            <Link to="/AboutUs">
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
            </Link>
          </LinkBox>
          <LinkBox>
            <Link to={"/Customer"}>
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
            </Link>
          </LinkBox>
        </Flex>

        <Flex>
          {isAuth ? (
            <Flex align={"center"}>
              <Flex align={"center"} gap={"15px"}>
                <CgProfile fontSize={"25px"}></CgProfile>
                <Text fontWeight={"bold"}> {userdata.name} </Text>
              </Flex>

             
              <Button fontSize={"30px"} colorScheme={"white"} color={"red"} onClick={handleLogout}>
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
