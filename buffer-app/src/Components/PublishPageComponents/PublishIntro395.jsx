import React from 'react'
import {Box, Button, Container, Heading, Text} from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import vid from "../data/hero-buffer-publish-animation-v2.mp4";
const PublishIntro395 = () => {
  return (
    <Flex margin={"10px"} padding={"20px"}>
      <Container>
        <Flex flexDirection={"column"} gap={"20px"}>
        <Box>
          <Heading as='h1' noOfLines={3} fontSize='48px' align={"left"}>
            Build your audience and grow your brand on social media
          </Heading> 
        </Box>
        <Spacer />
        <Box>
          <Text noOfLines={3} fontSize='22px' align={"left"}>
            Plan and publish your content for Instagram, TikTok, Facebook, Twitter, Pinterest, and LinkedIn, all from one simple dashboard.
          </Text>
        </Box>
        <Spacer />
        <Button colorScheme={"blue"} h={"80px"} w={"240px"} fontSize={"18px"}>Get Started Now</Button>
        </Flex>
      </Container>
      <Container>
        <video autoPlay loop muted>
          <source src={vid} />
        </video>
      </Container>
    </Flex>
  )
}

export default PublishIntro395