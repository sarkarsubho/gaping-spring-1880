import { Heading, Flex, Box, Text, Button, Center } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const priceTag = ({substype}) => {
  return (
   
        <Flex gap={"40px"} zIndex={1} wrap={"wrap"}  justifyContent={"center"} 
        >
          <Box
            textAlign={"left"}
            border={"1px solid"}
            rounded="5px"
            padding={"40px 10px 10px 10px"}
            bg={"white"}
            maxW={"300px"}
          >
            <Heading as="h3" size="lg" marginBottom={"25px"}>
              Free
            </Heading>
            <Text color={"gray"} fontSize={"17px"}>
              For individuals and businesses getting started with social media.
            </Text>
            <Heading as="h2" size="4xl" margin={"30px 0"}>
              $0
            </Heading>
            <Text>Manage up to three channels</Text>
            <Flex>
              <Text> Billed at </Text> <Text fontWeight={"bold"}>{substype==="month" ? " monthly" :" $0/year"}</Text>
            </Flex>

            <Button
              variant={"solid"}
              bg={"#2C4BFF"}
              w={"100%"}
              margin={"20px 0"}
              color={"white"}
              _hover={{ bg: "#0e239e" }}
            >
              {" "}
              Get started
            </Button>
            <Flex direction={"column"} gap={"15px"} margin="20px 0">
              <Flex align={"center"}>
                <AiOutlineCheck></AiOutlineCheck>
                <Text> Basic publishing tools</Text>
              </Flex>
              <Flex align={"center"}>
                <AiOutlineCheck></AiOutlineCheck>
                <Text>Landing page builder</Text>
              </Flex>
            </Flex>
            <Button variant={"link"} alignSelf={"left"}>
              See all features
            </Button>
          </Box>
          <Box
            textAlign={"left"}
            border={"1px solid"}
            rounded="5px"
            padding={"40px 10px 10px 10px"}
            bg={"white"}
            maxW={"300px"}
          >
            <Heading as="h3" size="lg" marginBottom={"25px"}>
              Essentials
            </Heading>
            <Text color={"gray"} fontSize={"17px"}>
              For professionals who use publishing, analytics & engagement
              tools.
            </Text>

            <Flex align={"center"} gap={"10px"}>
              <Heading as="h2" size="4xl" margin={"30px 0"}>
                ${substype==="month" ? "6" :"5"}
              </Heading>
              <Flex direction={"column"}>
                <Text fontWeight={"bold"}>/month</Text>
                <Text fontWeight={"bold"}>per channel</Text>
              </Flex>
            </Flex>

            <Text>Add additional channels for ${substype==="month" ? "6" :"5"}/month</Text>
            <Flex>
              <Text> Billed at </Text> <Text fontWeight={"bold"}> {substype==="month" ? "Monthly" :"$60/year"}</Text>
            </Flex>

            <Button
              variant={"solid"}
              bg={"#2C4BFF"}
              w={"100%"}
              margin={"20px 0"}
              color={"white"}
              _hover={{ bg: "#0e239e" }}
            >
              {" "}
              Try free for 14-days
            </Button>
            <Flex direction={"column"} gap={"15px"} margin="20px 0">
              <Flex align={"center"}>
                <AiOutlineCheck></AiOutlineCheck>
                <Text> Planning & publishing tools</Text>
              </Flex>
              <Flex align={"center"}>
                <AiOutlineCheck></AiOutlineCheck>
                <Text>Analytics tools</Text>
              </Flex>
              <Flex align={"center"}>
                <AiOutlineCheck></AiOutlineCheck>
                <Text>Engagement tools</Text>
              </Flex>
              <Flex align={"center"}>
                <AiOutlineCheck></AiOutlineCheck>
                <Text>Landing page builder</Text>
              </Flex>
            </Flex>
            <Button variant={"link"} alignSelf={"left"}>
              See all features
            </Button>
          </Box>
          <Box
            textAlign={"left"}
            border={"1px solid"}
            rounded="5px"
            padding={"40px 10px 10px 10px"}
            bg={"white"}
            maxW={"300px"}
          >
            <Heading as="h3" size="lg" marginBottom={"25px"}>
              Team
            </Heading>
            <Text color={"gray"} fontSize={"17px"}>
              For teams who want unlimited user seating, collaboration, and
              reporting.
            </Text>
            <Flex align={"center"} gap={"10px"}>
              <Heading as="h2" size="4xl" margin={"30px 0"}>
                ${substype==="month" ? "12" :"10"}
              </Heading>
              <Flex direction={"column"}>
                <Text fontWeight={"bold"}>/month</Text>
                <Text fontWeight={"bold"}>per channel</Text>
              </Flex>
            </Flex>
            <Text>Add additional channels for ${substype==="month" ? "12" :"10"}/month</Text>
            <Flex>
              <Text> Billed at </Text>{" "}
              <Text fontWeight={"bold"}> {substype==="month" ? "Monthly" :"$120/year"}</Text>
            </Flex>

            <Button
              variant={"solid"}
              bg={"#2C4BFF"}
              w={"100%"}
              margin={"20px 0"}
              color={"white"}
              _hover={{ bg: "#0e239e" }}
            >
              {" "}
              Try free for 14-Days
            </Button>

            <Flex direction={"column"} gap={"15px"} margin="20px 0">
              <Flex align={"center"}>
                <AiOutlineCheck></AiOutlineCheck>
                <Text> Essentials features, plus:</Text>
              </Flex>

              <Flex align={"center"}>
                <AiOutlineCheck></AiOutlineCheck>
                <Text>Unlimited team members & clients</Text>
              </Flex>

              <Flex align={"center"}>
                <AiOutlineCheck></AiOutlineCheck>
                <Text>Draft collaboration tools</Text>
              </Flex>

              <Flex align={"center"}>
                <AiOutlineCheck></AiOutlineCheck>
                <Text>Easy, clear exportable reports</Text>
              </Flex>
            </Flex>

            <Button variant={"link"} alignSelf={"left"}>
              See all features
            </Button>
          </Box>
          <Box
            textAlign={"left"}
            border={"1px solid"}
            rounded="5px"
            padding={"40px 10px 10px 10px"}
            bg={"white"}
            maxW={"300px"}
          >
            <Heading as="h3" size="lg" marginBottom={"25px"}>
              Agency
            </Heading>
            <Text color={"gray"} fontSize={"17px"}>
              For marketing agencies with 10 or more social channels.
            </Text>
            <Flex align={"center"} gap={"10px"}>
              <Heading as="h2" size="4xl" margin={"30px 0"}>
                ${substype==="month" ? "120" :"100"}
              </Heading>
              <Flex direction={"column"}>
                <Text fontWeight={"bold"}>/month</Text>
                <Text fontWeight={"bold"}>per channel</Text>
              </Flex>
            </Flex>
            <Text>Add additional channels for ${substype==="month" ? "6" :"5"}/month</Text>
            <Flex>
              <Text> Billed at </Text>{" "}
              <Text fontWeight={"bold"}> {substype==="month" ? "Monthly" :"$1200/year"}</Text>
            </Flex>

            <Button
              variant={"solid"}
              bg={"#2C4BFF"}
              w={"100%"}
              margin={"20px 0"}
              color={"white"}
              _hover={{ bg: "#0e239e" }}
            >
              {" "}
              Try Free for 14-days
            </Button>

            <Flex direction={"column"} gap={"15px"} margin="20px 0">
              <Flex align={"center"}>
                <AiOutlineCheck></AiOutlineCheck>
                <Text> Team features, plus:</Text>
              </Flex>

              <Flex align={"center"}>
                <AiOutlineCheck></AiOutlineCheck>
                <Text>Custom access & permissions</Text>
              </Flex>
              <Flex align={"center"}>
                <AiOutlineCheck></AiOutlineCheck>
                <Text>Agency-friendly pricing</Text>
              </Flex>
            </Flex>
            <Button variant={"link"} alignSelf={"left"}>
              See all features
            </Button>
          </Box>
        </Flex>
    
  );
};

export default priceTag;
