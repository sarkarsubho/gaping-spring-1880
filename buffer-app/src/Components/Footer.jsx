import { Box, Button, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInstagram, AiFillApple } from "react-icons/ai";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { FaTiktok, FaLinkedin } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export const Footer = () => {
  return (
    <Flex justifyContent={"space-between"} direction={["column","column","row","row"]} gap={"50px"}>
      <Box margin={["auto","auto","0","0"]}>
        <Heading as="h2" size="2xl" textAlign={[ "center","center","left","left"]} marginBottom={"30px"}>
          Buffer
        </Heading>
        <Flex
          direction={"row"}
          fontSize={"20px"}
          gap="20px"
          marginBottom={"20px"}
        >
          <AiOutlineInstagram></AiOutlineInstagram>
          <RiFacebookFill></RiFacebookFill>
          <RiTwitterFill></RiTwitterFill>
          <FaTiktok></FaTiktok>
          <FaLinkedin></FaLinkedin>
          <IoLogoPinterest></IoLogoPinterest>
        </Flex>
        <Text fontWeight={"bold"} textAlign={[ "center","center","left","left"]}>Download</Text>

        <Stack direction={["column","column","row","row"]} spacing={4} marginBottom="20px" w={["50%","50%","100%","100%"]} align={"center"} margin="auto">
          <Button
            leftIcon={<AiFillApple />}
            colorScheme="blue"
            variant="outline"
            borderRadius={"30px"}
            fontSize={"12px"}
          >
            App Store
          </Button>
          <Button
            leftIcon={<IoLogoGooglePlaystore />}
            borderRadius={"30px"}
            colorScheme="blue"
            variant="outline"
            fontSize={"12px"}
          >
            Google Play
          </Button>
        </Stack>
        <Text textAlign={"left"}>Copyright ©2022</Text>
        <Text textAlign={"left"}>Buffer | Privacy | Terms | Security</Text>
      </Box>

      <Box>
        <Flex direction={"column"} gap="10px" fontSize={"20px"}>
          <Text fontWeight={"bold"}> Tools</Text>
          <Text>Publishing</Text>
          <Text>Analytics</Text>
          <Text>Engagement</Text>
          <Text> Start Page</Text>
          <Text> Extras</Text>
        </Flex>
      </Box>
      <Box>
        <Flex direction={"column"} gap="10px" fontSize={"20px"}>
          <Text fontWeight={"bold"}> Resources</Text>
          <Text>Blog</Text>
          <Text>Content Library</Text>
          <Text>Browser Extention</Text>
          <Text> Free Image Editor</Text>
        </Flex>
      </Box>
      <Box>
        <Flex direction={"column"} gap="10px" fontSize={"20px"}>
          <Text fontWeight={"bold"}> Support</Text>
          <Text>Help Center</Text>
          <Text>Status</Text>
          <Text>Changelog</Text>
          <Text> Product Roadmap</Text>
        
        </Flex>
      </Box>
      <Box>
        <Flex direction={"column"} gap="10px" fontSize={"20px"}>
          <Text fontWeight={"bold"}> Company</Text>
          <Text>About</Text>
          <Text>Transparency</Text>
          <Text>Careers</Text>
          <Text> Accessibility</Text>
          <Text> Press</Text>
          <Text> Sitemap</Text>
        </Flex>
      </Box>
    </Flex>
  );
};
