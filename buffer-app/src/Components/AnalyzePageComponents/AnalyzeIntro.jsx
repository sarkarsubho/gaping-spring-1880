import React from 'react'
import {Box, Button, Container, Heading, Text} from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import vid from "../data/hero-buffer-analyze-animation.mp4";
import { Link } from 'react-router-dom';

const AnalyzeIntro = () => {
  return (
    <Flex margin={"10px"} padding={"20px"}>
        <Container>
        <Flex flexDirection={"column"} gap={"20px"}>
        <Box>
            <Heading as='h1' noOfLines={3} fontSize='48px' align={"left"}>
            Get in-depth insights to grow your brand on social media
            </Heading> 
        </Box>
        <Spacer />
        <Box>
            <Text noOfLines={3} fontSize='22px' align={"left"}>
            Measure social media performance, create gorgeous reports, and get recommendations to grow reach, engagement {`&`} sales.
            </Text>
        </Box>
        <Spacer />
        <Link to="/signup">
           <Button colorScheme={"blue"} h={"80px"} w={"240px"} fontSize={"18px"}>Get Started Now</Button>
        </Link>
       
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

export default AnalyzeIntro