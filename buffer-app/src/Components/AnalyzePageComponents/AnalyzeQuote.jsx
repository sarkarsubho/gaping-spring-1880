import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import image1 from '../data/ben_terry-access-ventures@2x.png'
import image2 from '../data/aa.PNG'
const AnalyzeQuote = () => {
  return (
    <Flex margin={"auto"} justifyContent={"center"} alignItems={"center"} gap={"20"}>
        <Box w={"400px"} height={"342px"}>
            <Image src={image1}/>
        </Box>
        <Box>
            <Heading as={"h1"} fontSize={"52px"}>
                {`"`} <br /> Analyze helps us work smarter, <br /> not harder. We get insight into <br /> what is working on social.
            </Heading>
            <Image src={image2}/>
            <p align="left"><b>BEN TERRY</b>, Director of Marketing</p>
        </Box>
    </Flex>
  )
}

export default AnalyzeQuote