import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsStack } from "react-icons/bs";

  import {Dr} from "./Drawer"

export const Navbar = () => {
    
  return <div>
  <Flex justifyContent={"space-between"} margin="20px">
    <Flex fontSize={"27px"} textAlign={"center"} alignItems={"center"} gap="10px">
        <BsStack></BsStack>
        <Text fontWeight={"bold"} fontFamily="Roboto,sans-serif" >Buffer</Text>

    </Flex>
    <Flex>

    </Flex>
    <Flex gap={"10px"} display={["none","view"]}>
        <Button colorScheme='blue' variant='link'>Log In</Button>
        <Button colorScheme='blue' variant='solid'>Get Started now</Button>
       
        <Dr ></Dr>
    </Flex>
  </Flex>

  </div>;
};
