import { Box, Flex, Heading,Button,Image, Center  } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import blue from "../data/IMG_1645.jpg";

const BlueBox659 = () => {
  return (
    <Flex direction="column" align="center" mt="8rem">
      <Image src={blue} alt="" position="relative" />
      <Heading
        width="44%"
        position="absolute"
        mt={["2rem", "2rem", "5rem", "5rem"]}
        color="white"
        fontSize={["xx-small", "md", "xl", "4xl"]}
      >
        140,000+ people like you use Buffer to build their brand on social media
        every month
      </Heading>
      <br></br>
      <br></br>
     
        <Button
          size={["sm", "sm", "xl", "xl"]}
          bgColor="pink.300"
          padding={["10px", "10px", "20px", "30px"]}
          position="absolute"
          mt={["5rem", "7rem", "11rem", "16rem"]}
          color="white"
        >
           <Link to="/pricing">
          Get started now
          </Link>
        </Button>
      
    </Flex>
  );
}

export default BlueBox659