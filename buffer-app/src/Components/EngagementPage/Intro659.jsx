import { Box, Button, Flex ,Text } from '@chakra-ui/react';
import React from 'react'
import intro from "../data/intro.mp4"
import { Heading,Image } from "@chakra-ui/react";
import ss from "../data/Screenshot.png"



const Intro659 = () => {
  return (
    <Box>
      <Flex
        width="100%"
        direction={["column", "column", "row", "row"]}
        justify="space-around"
        alignItems="center"
      >
        <Flex
          width={["100%", "100%", "34%", "34%"]}
          direction="column"
          gap="40px"
          padding={["10px", "10px", "0px", "0px"]}
        >
          <Heading
            textAlign={["center", "center", "start", "start"]}
            size="2xl"
          >
            Build a loyal and engaged audience on social media
          </Heading>
          <Text align={["center", "center", "start", "start"]}>
            See all of your comments, stay on top of important interactions, and
            turn followers into fans using Buffer.
          </Text>
          <Button
            width={["100%", "100%", "55%", "55%"]}
            colorScheme="blue"
            padding="40px"
            fontSize={["md", "md", "sm", "sm"]}
          >
            Start a free 14-day trial
          </Button>
        </Flex>
        <Box width={["100%", "100%", "40%", "40%"]}>
          <video autoPlay loop muted>
            <source src={intro} type="video/mp4" />
          </video>
        </Box>
      </Flex>
      <Box mt="80px">
      <Image src={ss}></Image>
      </Box>
    </Box>
  );
}

export default Intro659