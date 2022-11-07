import React from 'react'
import { Box,Center,Container,Flex,Heading,Image, Text } from '@chakra-ui/react'
import shopify from "../data/shopify.png"
import client from "../data/client-image-logos.PNG"
import calendar from "../data/Calendar.jpg"
const PublishPageClients395 = () => {
  return (
    <Flex flexDirection={'column'} alignItems={"center"} textAlign="center">
        <Box h={"20%"} margin={'auto'} marginTop={"50px"} justifyContent={'center'}>
            <Center>
                <img src={client} filter="grayscale" alt='shopify'/>
            </Center>
        </Box>
        <Box w={"80%"} padding={"10px"}> 
          <Heading as='h1' noOfLines={2} fontWeight="700" fontSize={["32px"]}>
            Craft the perfect post for each social network,
             all in one place
          </Heading>
        </Box>
        <Box w={"800px"} padding={"10px"} margin={"5px"}>
          <Text fontSize={"28px"} noOfLines={2}>
            Plan and publish your content for Instagram, Facebook, Twitter, Pinterest, and LinkedIn, all from one simple dashboard.
          </Text>
        </Box>
        <Box margin={'auto'} justifyContent={'center'}>
          <Center>
              <img src={calendar} alt='shopify'/>
          </Center>
        </Box>
    </Flex>
  )
}

export default PublishPageClients395