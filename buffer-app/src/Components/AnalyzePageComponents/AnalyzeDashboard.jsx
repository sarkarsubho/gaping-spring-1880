import React from 'react'
import { Box,Center,Container,Flex,Heading,Image, Text } from '@chakra-ui/react'
import client from "../data/client-image-logos.PNG"
import calendar from "../data/Calendar.jpg"
const AnalyzeDashboard = () => {
  return (
    <Flex flexDirection={'column'} alignItems={"center"} textAlign="center">
        <Box h={"200px"} margin={'auto'} marginTop={"50px"} justifyContent={'center'}>
            <Center>
                <img src={client} filter="grayscale" alt='shopify'/>
            </Center>
        </Box>
        <Box w={"600px"} padding={"10px"}> 
          <Heading as='h1' noOfLines={2} fontWeight="700" fontSize={"32px"}>
                One dashboard for your
                social media analytics and reporting
          </Heading>
        </Box>
        <Box w={"800px"} padding={"10px"} margin={"5px"}>
          <Text fontSize={"24px"} noOfLines={2}>
          Track performance and create reports for Instagram, Facebook, Twitter, and LinkedIn — all from one intuitive analytics dashboard.          </Text>
        </Box>
        <Box margin={'auto'} justifyContent={'center'}>
          <Center>
              <img src={calendar} alt='shopify'/>
          </Center>
        </Box>
    </Flex>
  )
}

export default AnalyzeDashboard