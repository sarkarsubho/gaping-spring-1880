import { Box, Button, Flex ,Text } from '@chakra-ui/react';
import React from 'react'
import intro from "../data/intro.mp4"
import { Heading } from "@chakra-ui/react";



const Intro659 = () => {
  return (
    <Flex
      width="100%"
      direction="row"
      justify="space-around"
      alignItems="center"
    >
      <Flex width="34%" direction="column" gap="40px">
        <Heading align="start" size="2xl" >
          Build a loyal and engaged audience on social media
        </Heading>
        <Text align="start">
          See all of your comments, stay on top of important interactions, and
          turn followers into fans using Buffer.
        </Text>
        <Button width="55%" colorScheme="blue" padding="40px">Start a free 14-day trial</Button>
      </Flex>
      <Box width="40%">
        <video autoPlay loop muted >
          <source src={intro} type="video/mp4" />
        </video>
      </Box>
    </Flex>
  );
}

export default Intro659