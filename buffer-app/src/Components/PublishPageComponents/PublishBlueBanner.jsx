import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import blue from "../data/IMG_1645.jpg";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

const PublishBlueBanner = () => {
  return (
    <Link to="/signup">
      <Flex direction="column" align="center" mt="8rem">
        <Image src={blue} alt="" position="relative" />
        <Heading
          width="44%"
          position="absolute"
          mt={["2rem", "2rem", "5rem", "5rem"]}
          color="white"
          fontSize={["xx-small", "md", "xl", "4xl"]}
        >
          140,000+ people like you use Buffer to build their brand on social
          media every month
        </Heading>
        <br></br>
        <br></br>
        <Button
          bgColor="pink.300"
          padding={["10px", "10px", "20px", "40px"]}
          position="absolute"
          mt={["5rem", "7rem", "11rem", "16rem"]}
          color="white"
        >
          Get started now
        </Button>
        <Text
          align={"center"}
          position="absolute"
          mt={["5rem", "7rem", "11rem", "24rem"]}
          color={"white"}
          fontSize={"13px"}
        >
          <Flex align={"center"}>
            {" "}
            <TiTick /> No Credit card &nbsp; <TiTick /> 14-day free trial &nbsp;{" "}
            <TiTick /> Cancel anytime{" "}
          </Flex>
        </Text>
      </Flex>
    </Link>
  );
};

export default PublishBlueBanner;
