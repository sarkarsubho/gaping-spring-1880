import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  LinkBox,
  Text,
  Divider,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsStack } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight,MdOutlineKeyboardArrowDown } from "react-icons/md";

export const Dr = ({ display }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [ToolsView,setToolView]=useState(false);

  const handleToolShow=()=>{
    setToolView(!ToolsView);
  }
  return (
    <div>
      <Button
        ref={btnRef}
        display={["view", "view", "view", "none"]}
        colorScheme="white"
        variant="ghost"
        onClick={onOpen}
      >
        <GiHamburgerMenu fontSize={"27px"} />
      </Button>
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        size={"full"}
        finalFocusRef={btnRef}
        placement="right"
        
        
      >
        <DrawerOverlay />
        <DrawerContent background={"#2C4BFF"} color="white">
          <DrawerCloseButton fontSize={"27px"} />
          <DrawerHeader>
            <Flex
              align={"center"}
              gap="10px"
              fontSize={"30px"}
              fontWeight={"bold"}
            >
              <BsStack></BsStack>
              <Text fontFamily="Roboto,sans-serif">Buffer</Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex direction={"column"} align={"center"}>
              <LinkBox>
                <Button
                  as="a"
                  variant="ghost"
                  colorScheme={"white"}
                  area-label="Tools"
                  my={3}
                  w="100%"
                  fontSize={"27px"}
                  fontWeight={"bold"}
                  onClick={handleToolShow}
                >Tools
                 {ToolsView ? <MdOutlineKeyboardArrowDown fontSize={"35px"}></MdOutlineKeyboardArrowDown>:<MdOutlineKeyboardArrowRight fontSize={"35px"}></MdOutlineKeyboardArrowRight>}
                  
                </Button>
                {ToolsView && <Flex direction={"column"}>
                  <Button
                  as="a"
                  variant="ghost"
                  colorScheme={"white"}
                  area-label="Tools"
                  my={3}
                  w="100%"
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  publish
                </Button>

                <Button
                  as="a"
                  variant="ghost"
                  colorScheme={"white"}
                  area-label="Tools"
                  my={3}
                  w="100%"
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  AnaLize
                </Button>
                <Button
                  as="a"
                  variant="ghost"
                  colorScheme={"white"}
                  area-label="Tools"
                  my={3}
                  w="100%"
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  Engage
                </Button>
                <Button
                  as="a"
                  variant="ghost"
                  colorScheme={"white"}
                  area-label="Tools"
                  my={3}
                  w="100%"
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  Start Page
                </Button>
                <Divider />
                  
                  </Flex>}
              </LinkBox>
              <LinkBox>
                <Button
                  as="a"
                  variant="ghost"
                  colorScheme={"white"}
                  area-label="Tools"
                  my={5}
                  w="100%"
                  fontSize={"27px"}
                  fontWeight={"bold"}
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
                  fontSize={"27px"}
                  fontWeight={"bold"}
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
                  fontSize={"27px"}
                  fontWeight={"bold"}
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
                  fontSize={"27px"}
                  fontWeight={"bold"}
                >
                  Customer
                </Button>
              </LinkBox>
              <LinkBox>
                <Button
                  as="a"
                  variant="solid"
                  colorScheme={"orange"}
                  bg="#E97284"
                  area-label="Tools"
                  my={5}
                  w="100%"
                  fontSize={"20px"}
                >
                  Get started now
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
                  fontSize={"27px"}
                  fontWeight={"bold"}
                >
                  Log in
                </Button>
              </LinkBox>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
